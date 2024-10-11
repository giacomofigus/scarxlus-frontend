<script>
    import axios from 'axios';
    
    export default{
        name: "AppHomeTestimonials",
        data(){
            return{
                testimonials: [],
                activeIndex: 0,
            }
        },
        methods: {
            setActive(index){
                this.activeIndex = index;
                console.log(this.activeIndex);
            }
        }, 
        mounted(){
            axios.get('http://127.0.0.1:8000/api/testimonials').then(response => {
                this.testimonials = response.data.testimonials
                // console.log(this.testimonials);
                
            })
        }
    }

</script>

<template>
    <section class="testimonials">
        <div class="container">
            <div class="left-container">
                <img 
                v-for="(testimonial, index) in testimonials"
                :src="`http://127.0.0.1:8000//${testimonial['profile-pic']}`" 
                alt="testimonial-propic"
                @click="setActive(index)"
                :class="{ 'img-active' : activeIndex === index}"
                >
            </div>

            <div class="right-container">
                <h2>I miei allievi</h2>

                <div v-if="testimonials[activeIndex]" class="testimonial">
                    <div class="left-testimonial">
                        <h4>
                            {{ testimonials[activeIndex].name }}
                        </h4>
                        <h5>{{ testimonials[activeIndex].plan }}</h5>
                        
                        <blockquote>
                            "{{ testimonials[activeIndex].review }}""
                        </blockquote>
                    </div>
                    <div class="right-testimonial">
                        immagine allievo
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .testimonials{
        border: 1px solid red;
        margin-top: 100px;
        .container{
            // border: 1px solid blue;
            padding: 10px;
            display: flex;
            justify-content: center;
            gap: 60px;
            width: 70%;
            margin: 0 auto;

            .left-container{
                // border: 1px solid green;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 20px;
                gap: 30px;

                img{
                    opacity: 0.4;
                    transition: 0.2s;

                    &:hover{
                        cursor: pointer;
                    }
                }

                .img-active{
                    opacity: 1;
                }
            }

            .right-container{
                // border: 1px solid green;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 40px;
                

                h2{
                    font-size: 3rem;
                    color: white;
                }

                .testimonial{
                    display: flex;
                    justify-content: space-between;
                    background-color: $bg-plans;
                    border-radius: 25px;

                    .left-testimonial{
                        padding: 40px;
                        flex: 0 0 70%;
                        // border: 1px solid red;
                        h4,h5,blockquote{
                            font-family: 'Inter', sans-serif;
                            letter-spacing: normal;
                        }
    
                        h4{
                            color: #D9D9D9;
                            font-size: 28px;
                            font-weight: 900;
                        }
    
                        h5{
                            color: #878787;
                            font-weight: 500;
                            font-size: 18px;
                            margin-top: 5px;
                            margin-bottom: 20px;
                        }
    
                        blockquote{
                            color: #D9D9D9;
                            font-style: italic;
                            font-weight: 300;
                            font-size: 20px;
                        }
                    }

                    .right-testimonial{
                        // border: 1px solid red;
                        flex: 0 0 30%;

                    }
                }
            }
        }
    }

    @media screen and (max-width:1024px) {
        .testimonials{
            .container{
                width: 90%;
            }
        }
    }

    @media screen and (max-width:768px) {
        .testimonials{
            .container{
                flex-direction: column-reverse;
                justify-content: center;
                gap: 0;

                .left-container{
                    flex-direction: row;
                    justify-content: center;
                }

                .right-container{
                    gap: 0;
                    h2{
                        text-align: center;
                        font-size: 2.8rem
                    }

                    .testimonial{
                        margin-top: 40px;
                        margin-bottom: 40px;
                        flex-direction: column;

                        .left-testimonial, .right-testimonial{
                            flex: 0 0 100%;
                        }
                    }
                }
            }
        }
    }
</style>
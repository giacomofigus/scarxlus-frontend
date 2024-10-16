<script>
    import axios from 'axios';

    export default{
        name: "AppHomeEbooks",

        data(){
            return{
                ebooks: [],
                
            }
        },
        methods: {
            formatPrice(price){
                return price === "0.00" ? "Free" : `€${Math.floor(price)}`;
            },
            colorLevel(level){
                if(level === "Advanced"){
                    return 'level-advanced'
                } else if(level === "Basic"){
                    return 'level-basic'
                } else if(level === "Intermediate"){
                    return 'level-intermediate'
                }
            },

        },
        mounted(){
            axios.get('http://127.0.0.1:8000/api/ebooks').then(response => {
                this.ebooks = response.data.ebooks

                

                
            });
        }
    }

</script>

<template>
    <section class="ebooks">
        <div class="container">
            <h2>E-books per te</h2>

            <div class="ebooks-list">
                <div 
                class="ebook"
                v-for="(ebook, index) in ebooks.slice(0, 3)"
                :key="index"
                :style="{
                    backgroundImage: `url('http://127.0.0.1:8000${ebook.images[0]?.file_path}')`
                }"> >

                    <div class="overlay"></div>
                    <div class="price"> 
                        <p>{{ formatPrice(ebook.product.price) }}</p>
                    </div>

                    <h4>{{ ebook.product.name }}</h4>

                    <div class="level">
                        <div class="squares">
                            <div 
                            v-for="(square, squareIndex) in 3"
                            :key="squareIndex"
                            class="square"
                            :class="{
                                'square-light-green': ebook.level === 'Basic' && squareIndex === 0,
                                'square-dark-green': ebook.level === 'Basic' && squareIndex !== 0,
                                'square-red': ebook.level === 'Advanced',
                                'square-yellow': ebook.level === 'Intermediate'
                            }">
                            </div>

                        </div>
                        <h5
                        :class="colorLevel(ebook.level)"
                        > {{ ebook.level }}</h5>
                    </div>
                </div>
                
            </div>

            
        </div>
        <div class="button">
            <a href="">Scoprine altri</a>
            <fa class="icon arrow" :icon="['fas', 'arrow-right']"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;    

    .ebooks{
        border: 1px solid red;
        margin-top: 100px;
        
        .button{
            display: flex;
            justify-content: center;
            margin-top: 50px;
            gap: 20px;
            a{
                background-color: $button-black;
                padding: 10px 20px;
                font-family: 'Milker', sans-serif;
                font-size: 20px;
                border-radius: 5px;
            }

            .arrow{
                color: $text-primary;
                border-radius: 5px;
                padding: 12px 20px;
                font-size: 20px;
                background-color: $button-black;

            }
        }

        .container{
            // border: 1px solid blue;
            padding-inline: 50px;
            h2{
                color: $text-primary;
                font-size: 3rem;
            }

            .ebooks-list{
                // border: 1px solid green;
                margin-top: 30px;
                display: flex;
                justify-content: space-between;

                .ebook{
                    position: relative;
                    background-color: black;
                    flex: 0 0 27%;
                    border-radius: 25px;
                    padding-block: 50px;
                    height: 60vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;

                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.5); 
                        z-index: 1; 
                    }

                    .price{
                        background-color: rgba(30, 30, 30, 0.7);
                        padding: 20px;
                        padding-block: 21px;
                        border-radius: 50%;
                        z-index: 2; 
                        p{
                            color: $text-primary;
                            font-family: $font-bebas;
                            font-size: 25px;
                            
                        }
                    }

                    h4,h5{   
                        font-family: $font-bebas;
                        font-weight: normal;
                        z-index: 2; 
                    }

                    h4{
                        color: $text-primary;
                        font-size: 30px;
                        margin-block: 10px;
                    }

                    .level{
                        background-color: #1E1E1E;
                        padding: 4px 10px;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        border-radius: 10px;
                        z-index: 2; 
                        
                        h5{
                            font-size: 20px;
                        }

                        .level-basic{
                            color: #177C5B;
                        }

                        .level-advanced{
                            color: #C92424;
                        }

                        .squares{
                            display: flex;
                            gap: 4px;
                            .square{
                                background-color: white;
                                width: 10px;
                                height: 10px;
                            }

                            .square-red{
                                background-color: #C92424;
                            }
                            
                            .square-light-green{
                                background-color: #177C5B;
                            }

                            .square-dark-green{
                                background-color: #013927;
                            }
                        }
                    }


                }
            }
        }

    }

    @media screen and (max-width: 1024px) {
        .ebooks{
            .container{
                padding-inline: 30px;
                .ebooks-list{
                    gap: 20px;
                    .ebook{
                        flex: 1;
                        // height: 450px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .ebooks{
            overflow: hidden;
            .container{
                padding-inline: 30px;
                h2{
                    font-size: 2.8rem;
                }
                .ebooks-list{
                    gap: 20px;
                    overflow: auto;
                    
                    .ebook{
                        flex: 0 0 90%;
                        height: 75vh;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 425px) {
        .ebooks{
            .button{
                gap: 5px;
                a,.arrow{
                    font-size: 17px;
                }
            }
            .container{
                h2{
                    text-align: center;
                }
                .ebooks-list{
                    gap: 20px;
                    .ebook{
                        height: 50vh;
                    }
                }
            }
        }
    }
</style>
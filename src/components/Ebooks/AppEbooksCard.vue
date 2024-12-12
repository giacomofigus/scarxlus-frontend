<script>
    export default{
        name: "AppEbooksCard",
        props:{
            ebook:{
                type: Object,
                required: true,
            },
        },
        methods:{
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
    }

</script>

<template>
    <div class="card" 
    :style="{ backgroundImage: `url('http://127.0.0.1:8000${ebook.images[0]?.file_path}')` }">
        <!-- insert cart -->

        <div class="overlay-black"></div>
        <img src="../../assets/img/grain-texture.jpg" alt="texture" class="texture">

        <div class="center-card">
            <div class="circle">
                <p class="price">{{ formatPrice(ebook.product.price) }}</p>
            </div>
            <p class="name">{{ ebook.product.name }}</p>


                
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
                        <span
                        :class="colorLevel(ebook.level)"
                        > {{ ebook.level }}</span>
                </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
    
    .card{
        border-radius: 10px;
        flex: 0 0 calc(100% / 3 - 50px);
        height: 450px;
        color: white;
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 0;

        .overlay-black{
            width: 100%;
            height: 100%;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 1;
        }

        img{
            position: absolute;
            top: 0%;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            opacity: 20%;
        }
        
        .center-card{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font-family: $font-bebas;
            .circle{
                background-color: $bg-plans;
                border-radius: 50%;
                padding-block: 20px;
                width: 65px;
                font-size: 1.3rem;
                margin: 0 auto;
                margin-bottom: 8px;
            }
            .name{
                font-size: 1.7rem;
            }
            .level{
                background-color: #1E1E1E;
                padding: 4px 10px;
                display: flex;
                align-items: center;
                gap: 10px;
                border-radius: 10px;
                z-index: 2; 
                        
                span{
                    font-size: 18px;
                    font-family: $font-bebas;
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
                        width: 8px;
                        height: 8px;
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

    @media screen and (max-width: 1024px){
        .card{
            height: 350px;
        }
    }
</style>
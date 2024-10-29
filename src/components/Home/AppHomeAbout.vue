<script>
    export default{
        name: 'AppHomeAbout',
    }
</script>

<template>
    <div class="about">
        <!-- LEFT -->
        <div class="box left">
            <h2>Allenati con scarxlus</h2>
            <blockquote>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ad at? Ipsam maiores, totam quidem, ex sit quis necessitatibus perspiciatis beatae officiis accusamus odio eveniet quae facilis? Odio, quod facere?"
                <footer>- Carlo Figus</footer>
            </blockquote>
            <router-link to="chi-sono">Scopri di più</router-link>
        </div>

        <img 
        class="bg-carlo" 
        src="../../assets/img/Carlo-who.png" 
        alt="carlo"     
        srcset="../../assets/img/Carlo-who-tablet.webp 768w">

        <figure class="forms">
            <img src="../../assets/img/Forms.webp" alt="scarxlus">
        </figure>
        
        <!-- RIGHT -->
        <div class="box right">
            <div class="container-propics">
                <figure>
                    <img src="../../assets/img/propics.webp" alt="propics">
                </figure>
                <p><span>200+</span>Allievi</p>
            </div>
        </div>

        <div class="layer">

        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .about{
        position: relative;
        color: white;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        margin-top: 100px;
        height: 100vh;
        border: 1px solid red;

        figure{
            img{
                display: block;
            }
        }
        .left{
            padding-left: 50px;
            width: 40%;
            h2{
                font-size: 3rem;
                margin-top: 40px;
            }
            blockquote{
                font-size: 1.5rem;
                color: $text-secondary;
                font-family: 'Inter', sans-serif;
                font-style: italic;
                padding-block: 60px;

                footer{
                    font-style: normal;
                    color: $text-primary;
                    font-weight: bold;
                    margin-top: 20px;
                }
            }
            a{
                @include button-black;
                font-size: 20px;
            }
        }
        
        .bg-carlo{
            position: absolute;
            left: 50%;
            right: 50%;
            transform: translate(-50%);
            bottom: 0;
            height: 100%;
        }

        .forms{
            position: absolute;
            right: -50px;
        }

        .right{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 60%;


            .container-propics{
                gap: 5px; 
                position: absolute;
                right: 20%;
                top: 40%;
                bottom: 50%;
                p{
                    margin-top: 15px; 
                    font-size: 1.3rem;
                    color: white;
                    text-align: center;
                    font-family: 'Inter', sans-serif;
                    font-weight: 900;

                    span{
                        color: $button-yellow;
                        margin-right: 5px;
                    }
                }
            }
        }

        .left, .right{
            z-index: 1;
        }

        .layer{
            // border: 1px solid red;
            width: 100%;
            position: absolute;
            bottom: 0;
            height: 500px;
            background: rgb(11,11,11);
            background: linear-gradient(0deg, rgba(11,11,11,1) 0%, rgba(0,0,0,0) 100%);
        }
    }

    // LAPTOP
    @media screen and (max-width: 1024px){
        .about{
            .right{
                .container-propics{
                    right: 6%;
                }
            }
        }
    }

    // TABLET
    @media screen and (max-width: 768px){
        .about{
            flex-direction: column;
            justify-content: start;
            overflow: hidden;

            .bg-carlo{
                width: 350px;
                height: auto;
                right: -50px;
                left: auto;
                transform: translate(0);
            }

            .left{
                width: 70%;
                padding-left: 0px;
                padding-inline: 30px;
                // border: 1px solid red;
                h2{
                    font-size: 2.5rem;
                }

                blockquote{
                    font-size: 1.2rem;
                    padding-block: 30px;

                    footer{
                        font-size: 1.1rem;
                        margin-block: 30px;
                    }
                }

                a{
                    font-size: 16px;
                }
            }

            .right{
                width: 100%;
                .container-propics{
                   left: 30px;
                   top: 80px;
                   right: auto;
                   bottom: auto;

                   figure{
                    img{
                        width: 180px;
                    }
                   }
                }
            }
        }
    }

    // MOBILE L
    @media screen and (max-width: 425px){
        .about{
            .left{
                width: 100%;
            }

            .forms{
                right: -150px;
            }

            .right{
                .container-propics{
                    top: 50px;
                    figure{
                        img{
                            width: 130px;
                        }   
                    }

                    p{
                        font-size: 1.2rem;
                    }
                }
            }

        }
    }
</style>
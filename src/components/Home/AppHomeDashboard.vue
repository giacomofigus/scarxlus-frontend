<script>
    export default{
        name: "AppHomeDashboard",
    }
</script>

<template>
    <section class="dashboard">
        <div class="left-dash">
            <h2>Dashboard personalizzabile</h2>
            <p>Una volta registrato avrai la possibilità di accedere alla <span class="bold-yellow">dashboard</span>, dove potrai <span>tracciare</span> il tuo progresso, <span>gestire</span> i tuoi allenamenti e <span>programmare</span> o trascrivere la tua scheda.</p>
            <a href="">Registrati</a>
        </div>

        <div class="right-dash">
            <div class="img-container">
                <img src="../../assets/img/Phone-Container.webp" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .dashboard{
        margin-top: 100px;
        padding-inline: 50px;
        display: flex;
        align-items: center;
        gap: 30px;

        .left-dash, .right-dash{
            flex: 1;
            // border: 1px solid green;
        }

        .left-dash{
            color: $text-primary;

            h2{
                font-size: 3rem;
            }

            p{
                font-size: 25px;
                font-family: 'Inter', sans-serif;
                margin-block: 50px;
                color: #D9D9D9;

                span{
                    font-weight: bold;
                }

                .bold-yellow{
                    color: $button-yellow;
                }
            }

            a{
                @include button-black;
                font-size: 22px;
                padding: 12px 25px;
                border-radius: 25px;
                display: inline-block;

            }
        }

        .right-dash{
            display: flex;
            justify-content: end;

            .img-container{
                display: flex;
                justify-content: end;
                
                img{
                    width: 100%;
                    // border: 1px solid red;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .dashboard{
            overflow: hidden;
            gap: 50px;

            // .left-dash, .right-dash{
            //     border: 1px solid green;
            // }

            .left-dash{
                h2{
                    font-size: 2.8rem;
                }

                p{
                    font-size: 22px;
                }

                a{
                    font-size: 18px;
                }
            }

            .right-dash{
                .img-container{
                    img{
                        width: 90%;
                        min-width: 350px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .dashboard{
            // overflow: visible;
            gap: 40px;
            flex-direction: column;
            padding-inline: 30px;

            .left-dash, .right-dash{
                // border: 1px solid green;
                flex: 0;
                width: 100%;
            }

            .left-dash{
                text-align: center;
                h2{
                    font-size: 2.8rem;
                    overflow-wrap: break-word;

                }

                p{
                    font-size: 22px;
                }

                a{
                    font-size: 18px;
                }
            }

            .right-dash{
                justify-content: center;
                .img-container{
                    justify-content: center;
                    img{
                        width: 100%;
                        min-width: auto;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 425px) {
        .dashboard{
            .left-dash{
                text-align: center;
                h2{
                    font-size: 2.2rem;
                }

                p{
                    font-size: 20px;
                }

                a{
                    font-size: 18px;
                }
            }
        }
    }
</style>
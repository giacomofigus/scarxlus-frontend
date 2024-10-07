<script>
    export default{
        name: 'AppHomePlans',
    }
</script>

<template>
    <section class="plans">
        <div class="upper">
            <div class="progression-bar">
                <div class="white-bar"></div>
            </div>
            <div class="right-upper">
                <h2>I miei piani <span class="d-block">di allenamento</span></h2>
                <div class="arrows">
                    <fa class="icon arrow" :icon="['fas', 'arrow-left']"/>
                    <fa class="icon arrow" :icon="['fas', 'arrow-right']"/>
                </div>
            </div>
        </div>

        <figure>
            <img src="../../assets/img/Forms.png" alt="forms">
        </figure>

        <div class="cards-container">
            <div class="card">
                CARD 1
            </div>
            <div class="card">
                CARD 2
            </div>
            <div class="card">
                CARD 3
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .plans{
        border: 1px solid red;
        position: relative;
        color: white;
        padding-block: 30px;
        padding-inline: 50px;
        overflow: hidden;
        
        .upper{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1;
            border: 1px solid yellow;

            .right-upper{
                border: 1px solid red;
                h2{
                    font-size: 3rem;
                }
    
                .arrows{
                    padding-block: 20px;
                    font-size: 1.3rem;
                    display: flex;
                    gap: 10px;

                    .arrow{
                        background-color: $text-primary;
                        padding: 10px;
                        padding-inline: 11px;
                        border-radius: 50%;
                        color: black;
                    }

                    :nth-child(2){
                        color: white;
                        background-color: $button-black;
                        border: 1px solid white
                    }
                }
            }

            .progression-bar{
                background-color: $bg-plans;
                width: 30%;
                height: 12px;

                .white-bar{
                    background-color: $text-primary;
                    width: 20%;
                    height: 100%;
                }
            }
        }

        .cards-container{
            border: 1px solid green;
            display: flex;
            justify-content: space-between;
            gap: 60px;
            padding-block: 5px;
            margin-top: 30px;
            overflow: hidden;
            

            .card{
                border: 1px solid blue;
                flex: 0 0 40%;
                height: 300px;
                border-radius: 20px;
            }
        }

        .d-block{
            display: block;
        }

        figure{
            position: absolute;
            top: 0;
            right: -50px;

            img{
                display: block;
            }
        }
    }

    // LAPTOP
    @media screen and (max-width: 1024px) {
        .plans{
            padding-inline: 0px;

            .upper{
                padding-inline: 30px;
                .right-upper{
                    .arrows{
                        font-size: 1rem;
                    }
                }
            }

            .cards-container{
                padding-left: 30px;
                gap: 30px;
                

                .card{
                    flex: 0 0 50%;
                }
            }
        }
    }

    // TABLET
    @media screen and (max-width: 768px) {
        .plans{
            .upper{
                .right-upper{
                    h2{
                        font-size: 2.5rem;
                    }
                }

                .progression-bar{
                    margin-right: 20px;
                }
            }
        }
    }

    // MOBILE
    @media screen and (max-width: 425px) {
        .plans{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-block: 80px;
            .upper{
                flex-direction: column-reverse;
                padding-inline: 20px;
                .right-upper{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    h2{
                        font-size: 2.3rem;
                        text-align: center;
                    }

                    .arrows{
                        display: none;
                    }
                }

                .progression-bar{
                    width: 60%;
                    margin-block: 50px;
                }
            }

            .cards-container{
                padding-block:0;
                padding-left: 20px;
                gap: 20px;
                .card{
                    flex: 0 0 90%;
                }
            }
        }
    }
</style>
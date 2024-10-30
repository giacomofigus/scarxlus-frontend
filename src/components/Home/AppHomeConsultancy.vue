<script>
    export default{
        name: "AppHomeConsultancy",
    }

</script>

<template>
    <section class="consultancy">
        <figure>
            <img src="../../assets/img/Consulenza.png" alt="carlo-in-posa">
        </figure>

        <div class="info">
            <h2>Consulenza 1 to 1</h2>
            <p>Una <span>sessione privata</span> di domande e risposte di <span>30 minuti</span> su tutti i tuoi dubbi nel calisthenics</p>

            <p><span>Come funziona?</span> Acquisti online la consulenza, ti mando le istruzioni per la prenotazione e 5 minuti prima dell'appuntamento ti manderò il link per connetterci.</p>

            <div class="price">
                <span class="full-price">69€</span>
                <span class="discount-price">49€</span>
            </div>

            <a href="">Acquista Ora!</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;
    .consultancy{
        margin-top: 100px;
        padding-inline: 50px;
        display: flex;
        gap: 10px;

        figure, .info{
            flex: 1;
            margin: auto;
            // width: 50%;
        }

        figure{
            img{
                // width: 100%;
            }
        }

        .info{
            color: $text-primary;
            h2{
                font-size: 3rem;
                margin-bottom: 10px;
            }
            p{
                font-family: 'Inter', sans-serif;
                font-size: 25px;
                padding-block: 20px;
                span{
                    font-weight: 700;
                }
            }

            .price{
                margin-top: 10px;
                font-family: 'Milker';
                display: flex;
                .full-price{
                    font-size: 25px;
                    text-decoration: line-through red;
                    margin-right: 5px;
                }

                .discount-price{
                    font-size: 35px;
                }
            }

            a{
                font-family: 'Milker', sans-serif;
                color: $button-yellow;
                border: 1px solid $button-yellow;
                padding: 10px;
                padding-inline: 20px;
                display: block;
                margin-top: 20px;
                font-size: 20px;
                border-radius: 25px;
                width: fit-content;
            }
        }
    }

    @media screen and (max-width: 1024px){
        .consultancy{
            .info, figure{
                width: 50%;
            }

            figure{
                img{
                    width: 100%;
                }
            }

            .info{
                h2{
                    font-size: 2.8rem;
                }
                
                p{
                    font-size: 22px;
                }
            }
        }
    }

    @media screen and (max-width: 768px){
        .consultancy{
            flex-direction: column-reverse;
            gap: 0;
            padding-inline: 80px;
            .info, figure{
                width: auto;
            }

            figure{
                img{
                    width: 100%;
                }
            }

            .info{
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                h2{
                    word-break: break-all;
                    margin-bottom: 20px;
                }
                
                .price{
                    margin-top: 20px;
                    .discount-price{
                        color: $button-yellow;
                    }
                }
                
                a{
                    margin-top: 30px;
                }
            }
        }
    }

    @media screen and (max-width: 425px){
        .consultancy{
            padding-inline: 30px;
        }
    }
</style>
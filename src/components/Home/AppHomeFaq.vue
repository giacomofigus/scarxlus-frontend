<script>
    export default{
        name: "AppHomeFaq",
        data(){
            return{
                questions: [
                    {question:"Come funziona il servizio?", answer: "Subito dopo aver acquistato e compilato il modulo di contatto, ti contatterò per avvisarti che la tua scheda sarà in sviluppo"},
                    {question:"Posso scriverti anche direttamente su Whatsapp?", answer: "Per potermi contattare senza avere acquistato una scheda puoi contattarmi tramite via mail o con il modulo di contatto nella apposita sezione"},
                    {question:"Come posso prenotare una scheda?", answer:"Facile! Entra nella sezione servizi, scegli il piano che più fa per te e successivamente al pagamento verrai inserito all'interno della lista di attesa."},
                    {question:"Posso anche avere più tempo nel 1 to 1 della consulenza?", answer: "Assolutamente si! All'interno del campo della prenotazione avrai una bottone per poter selezionare il tempo da te preferito e il prezzo di riferimento"},
                ],
                activeIndex: null,
            }
        },
        methods: {
            toggleFaq(index){
                if (this.activeIndex === index) {
                    this.activeIndex = null;
                } else{
                    this.activeIndex = index;
                }
            }
        }
    }

</script>

<template>
    <section class="faq">
        <h2>Faq</h2>

        <div class="grid">
            <div
            class="question"
            :class="{ open: activeIndex === index }"
            v-for="(quest, index) in questions "
            :key="index"
            @click="toggleFaq(index)"
            >
                <div class="box">
                    <h5>{{ quest.question }}</h5>
                    <!-- <img src="../../assets/img/icons/plus-solid.svg" alt="plus-button"> -->
                </div>
                
                <p>
                    {{ quest.answer }}
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .faq{
        margin-block: 100px;
        color: $text-primary;
        h2{
            font-size: 3rem;
            text-align: center;
            margin-bottom: 80px;
        }
        .grid{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            width: 85%;
            margin: 0 auto;
            .question{
                background-color: #171717;
                border-radius: 10px;
                padding-inline: 20px;
                padding-block: 20px;
                height: 90px;
                transition: height 0.4s ease;
                overflow: hidden;
                cursor: pointer;

                .box{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    h5{
                        font-size: 20px;
                        letter-spacing: 0;
                        margin-bottom: 20px;
                    }
                    img{
                        width: 20px;
                    }
                }

                &.open{
                    height: 160px;
                }

                h5, 
                p{
                    font-family: 'Inter', sans-serif;
                }

                p{
                    font-size: 18px;
                    color: $text-secondary;
                    display: none;
                }

                &.open p{
                    display: block;
                }

                

            }

        }
    }


    
    @media screen and (max-width:1024px) {
        .faq{
            .grid{
                width: 90%;
                gap: 30px;
                flex-wrap: wrap;

                .question{
                    height: 100px;
                    &.open{
                        height: 200px;
                    }
                }
            }
        }
    }

    @media screen and (max-width:768px) {
        .faq{
            h2{
                margin-bottom: 40px;
                font-size: 2.8rem;
            }

            .grid{
                grid-template-columns: 1fr;
                .question{
                    h5{
                        font-size: 20px;
                    }
                }
            }
        }
    }

    @media screen and (max-width:425px) {
        .faq{
            .grid{
                .question{
                    height: 150px;
                    &.open{
                        height: 260px;
                    }
                }
            }
        }
    }
</style>
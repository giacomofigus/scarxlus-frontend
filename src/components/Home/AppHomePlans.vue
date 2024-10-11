<script>
    import axios from 'axios';
    import AppHomePlansCard from './AppHomePlansCard.vue';

    export default{
        name: 'AppHomePlans',
        components:{
            AppHomePlansCard
        },
        data(){
            return{
                plans : [],
                activeIndex: 0,
            }
        },
        methods: {
            setActive(index){
                this.activeIndex = index;
                this.progressionBar(index);
                this.scrollTo(index);
            },
            progressionBar(index){
                const percentage = ((index + 1) / this.plans.length)*100;
                const whiteBar = document.querySelector('.white-bar');
                if(whiteBar){
                    whiteBar.style.width = `${percentage}%`;
                }
            },
            nextCard(){
                this.activeIndex = (this.activeIndex + 1) % this.plans.length
                this.progressionBar(this.activeIndex)
                this.scrollTo(this.activeIndex);
            },
            previousCard(){
                this.activeIndex = (this.activeIndex - 1 + this.plans.length) % this.plans.length
                this.progressionBar(this.activeIndex)
                this.scrollTo(this.activeIndex);
            },
            scrollTo(index){
                const container = this.$refs.cardsContainer
                const card = container.children[index]
                const offsetLeft = card.offsetLeft;
                
                container.scrollTo({
                    left: offsetLeft,
                    behavior: 'smooth',
                }) 
            }
            
        },
        mounted(){
            axios.get('http://127.0.0.1:8000/api/plans').then(response => {
                this.plans = response.data.plans;
            })
        }
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
                    <fa 
                    class="icon arrow" 
                    :icon="['fas', 'arrow-left']"
                    @click="previousCard()"/>
                    
                    <fa 
                    class="icon arrow" 
                    :icon="['fas', 'arrow-right']"
                    @click="nextCard()"/>
                </div>
            </div>
        </div>

        <div class="cards-container" ref="cardsContainer">
            <AppHomePlansCard 
            v-for="(plan, index) in plans" 
            :key="index"
            :name="plan.type"
            :price="Math.floor(plan.product.price)" 
            :description="plan.product.description"
            :personalized="plan.personalized"
            :test_videocall="plan.test_videocall"
            :send_photos="plan.send_photos"
            :workout_videocall="plan.workout_videocall"
            :isActive="activeIndex === index"
            @click="setActive(index)"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .plans{
        border: 1px solid red;
        // height: 100vh;
        position: relative;
        color: white;
        margin-top: 100px;
        padding-inline: 50px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .upper{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1;
            // border: 1px solid yellow;

            .right-upper{
                // border: 1px solid red;
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
                        cursor: pointer;
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
                    width: 33%;
                    height: 100%;
                    transition: width 0.3s ease;
                }
            }
        }

        .cards-container{
            // border: 1px solid green;
            display: flex;
            justify-content: space-between;
            gap: 60px;
            padding-block: 5px;
            margin-top: 30px;
            overflow-x: auto;
            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
           
            

            // Nascondere scrollbar  su WebKit (Chrome, Safari)
            &::-webkit-scrollbar {
                display: none; 
            }

            -ms-overflow-style: none; // Nasconde la scrollbar su IE e Edge
            scrollbar-width: none; // Nasconde la scrollbar su Firefox

        }

        .d-block{
            display: block;
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
                margin-inline: 20px;
                gap: 20px;
                .card{
                    flex: 0 0 50%;
                }
            }
        }
    }

    // TABLET
    @media screen and (max-width: 768px) {
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
                        font-size: 22px;
                    }

                }

                .progression-bar{
                    width: 60%;
                    margin-block: 50px;
                }
            }

            .cards-container{
                padding-block:0;
                margin-inline: 20px;
                padding-inline: 0;
                gap: 20px;
                .card{
                    flex: 0 0 80%;
                }
            }
        }
    }

    @media screen and (max-width:425px) {
        .plans{
            .cards-container{
                .card{
                    flex: 0 0 100%;
                }
            }
        }
    }
</style>
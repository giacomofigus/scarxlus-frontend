<script>
    export default{
        name: 'AppHomePlansCard',
        props:{
            name: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            personalized: {
                type: String,
                required: true,
            },
            test_videocall: {
                type: Number,
                required: true,
            },
            send_photos: {
                type: Number,
                required: true,
            },
            workout_videocall: {
                type: Number,
                required: true,
            },
            isActive: {
                type: Boolean,
                default: false,
            },
        },
        methods:{
            transformToIcon(value){ 
                return value === 1 ? 'circle-check' : 'circle-xmark';
            },
            transformToColor(value){
                return value === 1 ? 'icon-green' : 'icon-red';
            }
        },

    }

</script>

<template>
    <div 
    class="card"
    :class="{ active: isActive }"
    @click="$emit('click')"
    >
        <div :class="{ 'flex-active': isActive }">
            <div>
                <h3 :class="{ 'title-active': isActive }">{{name}}</h3>
                <!-- Bottone solo se la carta è attiva -->
                <a href="" :class="{ 'button-active': isActive }">Prenota ora</a>
            </div>
            <h4 :class="{ 'price-active': isActive }">€{{ price }} 
                <span>/al mese</span>
            </h4>
        </div>

        <!-- Descrizione solo se la carta non è attiva -->
        <p>{{ description }}</p>

        <!-- Lista solo se la carta è attiva -->
         <ul :class="{ 'list-active': isActive }">
            <li>
                <fa 
                class="icon" 
                :class="transformToColor(personalized)" 
                :icon="['fas', transformToIcon(personalized)]" />
                <span>Scheda personalizzata</span>    
            </li>
            <li>
                <fa 
                class="icon" 
                :class="transformToColor(test_videocall)" 
                :icon="['fas', transformToIcon(test_videocall)]" />
                <span>Videocall fine mese</span> 
            </li>
            <li>
                <fa 
                class="icon" 
                :class="transformToColor(send_photos)" 
                :icon="['fas', transformToIcon(send_photos)]" />
                <span>Mandare foto e video al coach</span>   
            </li>
            <li>
                <fa 
                class="icon" 
                :class="transformToColor(workout_videocall)" 
                :icon="['fas', transformToIcon(workout_videocall)]" />
                <span>Videochiamata per allenamento</span> 
            </li>
         </ul>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .card{
        flex: 0 0 35%;
        border-radius: 18px;
        background-color: $bg-plans;
        padding: 20px;
        cursor: pointer;
        transition:  0.3s ease-out;
        scroll-snap-align: start;
        
        h3{
            font-family: 'Inter', sans-serif;
            letter-spacing: normal;
            font-weight:700;
            font-size: 22px;
        }

        h4{
            font-family: 'Inter', sans-serif;
            letter-spacing: normal;
            font-weight:900;
            font-size: 20px;
            background-color: #181818;
            margin-top: 10px;
            padding-block: 8px;
            border-radius: 25px;
            text-align: center;
            width: fit-content;
            padding-inline: 20px;

            span{
                color: $text-secondary;
                font-size: 16px;
                font-weight:500;
            }
        }

        a{
            display: none;
        }

        p{
            color: $text-secondary;
            font-family: 'Inter', sans-serif;
            margin-top: 20px;
        }
        
        ul{
            display: none
        }

        

        // CARTA IN MODALITA ACTIVE //

        // Carta
        &.active{
            background-color: white;

            .flex-active{
                display: flex;
                justify-content: space-between;

                // Titolo
                .title-active{
                    color: black;
                    margin-bottom: 10px;
                }
    
                // Prezzo
                .price-active{
                    background-color: transparent;
                    color: black;
                    font-size: 25px;
                    width: auto;
                    margin-top: 0;
                    padding-block: 0;
                    border-radius: 0;
    
                    span{
                        display: block;
                    }
                }

                // BOTTONE PRENOTAZIONE VISIBILE SE ATTIVA LA CARTA
                a{
                    display: block;
                    background-color: #a4a4a4;
                    padding: 5px;
                    font-size: 19px;
                    border-radius: 5px;
                    font-family: $font-bebas;
                    margin-bottom: 20px;
                    width: fit-content;
                    transition: background-color 0.2s ease;

                    &:hover{
                        background-color: #8a8a8a;
                        
                    }
                }   
            }

            // DESCRIZIONE NONE SE LA CARTA E ATTIVA
            p{
                display: none;
            }

            // LISTA DEI BENEFIT
            ul{
                display: block;
                font-size: 20px;
                font-family: 'Inter', sans-serif;
                font-weight: 500;

                li{
                    color: black;
                    margin-block: 20px;
                    display: flex;

                    .icon{
                        margin-right: 8px;
                    }
    
                    .icon-green{
                        color: #06A816;
                    }
    
                    .icon-red{
                        color: #EF1717;
                    }
                }
            }

        }


    }


</style>
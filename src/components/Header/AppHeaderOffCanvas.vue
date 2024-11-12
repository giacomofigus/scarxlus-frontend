<script>
    export default{
        name: "AppHeaderOffCanvas",
        props: {
            isVisible: {
                type: Boolean,
                required: true,
            }
        },

    }
</script>

<template>
    <div :class="['offcanvas', { show: isVisible }]">
        <div class="top-container">
            <img src="../../assets/img/logo.webp" alt="logo">
            <button
            @click="$emit('close')"
            >
                <img class="x-mark" src="../../assets/img/icons/xmark-solid.svg" alt="close-button">
            </button>
        </div>

        <nav>
            <ul>
                <li class="line">
                    <router-link 
                    class="router" 
                    to="/"
                    @click="$emit('close')">
                        Home
                    </router-link>
                </li>
                <li class="line">
                    <router-link 
                    class="router" 
                    to="/chi-sono"
                    @click="$emit('close')">
                        Chi sono
                    </router-link>
                </li>
                <li class="line">
                    <router-link 
                    class="router" 
                    to="/"
                    @click="$emit('close')">
                        Servizi
                    </router-link>
                </li>
                <li class="line">
                    <router-link 
                    class="router" 
                    to="/"
                    @click="$emit('close')">
                        Blog
                    </router-link>
                </li>
                <li>
                    <router-link 
                    class="router" 
                    to="/"
                    @click="$emit('close')">
                        Contatti
                    </router-link>
                </li>
            </ul>
            <a class="sign-in" href="">Inizia ora</a>
            <p>
                Hai già un account?
                <a class="sign-up" href="">Login</a>
            </p>
            
            <ul class="brands">
                <li>
                    <fa class="icon" :icon="['fab', 'instagram']"/>
                </li>
                <li>
                    <fa class="icon" :icon="['fab', 'discord']"/>
                </li>
                <li>
                    <fa class="icon" :icon="['fab', 'youtube']"/>
                </li>
                <li>
                    <fa class="icon" :icon="['fab', 'tiktok']"/>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;

    .offcanvas{
        display: flex;
        flex-direction: column;
        position: fixed;
        z-index: 10;
        top: 0;
        right: 0;
        width: 100%;
        height: 100dvh;
        
        transform: translateX(100%);
        transition: transform 0.3s ease;

        background-color: black ;
        color: white;
        padding-inline: 30px;
        padding-block: 30px;
        .top-container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            button{
                background-color: transparent;
                border: none;
                .x-mark{
                    width:25px;
                    fill: $button-yellow;
                    cursor: pointer;
                }
            }
        }
        nav{
            display: flex;
            flex-direction: column;
            // border: 1px solid blue;
            width: 70%;
            margin: auto;
            ul{
                text-align: center;
                li{
                    font-family: $font-bebas;
                    font-size: 22px;
                    padding: 20px 0;
                    letter-spacing: 2px;
                    .router:hover{
                        color: $button-yellow;
                        cursor: pointer;
                    }
                }
            }
            .sign-in{
                background-color: $button-yellow;
                border: none;
                padding-block: 15px;
                border-radius: 30px;
                margin-top: 30px;
                color: white;
                font-weight: bolder;
                font-size: 18px;
                cursor: pointer;
                text-align: center;
                font-family: 'Lato', sans-serif;
                &:hover{
                    opacity: 0.8;
                }
            }

            p{
                font-family: 'Lato', sans-serif;
                text-align: center;
                margin-block: 30px;
                color: $text-secondary;
                font-weight: 600;

                .sign-up{
                    color: $button-yellow;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }

            .brands{
                display: flex;
                gap: 40px;
                color: $text-secondary;
                margin: 0 auto;
            }
        }

        .line{
            border-bottom: 1px solid grey;
        }
    }

    .offcanvas.show {
        transform: translateX(0%);
    }
</style>
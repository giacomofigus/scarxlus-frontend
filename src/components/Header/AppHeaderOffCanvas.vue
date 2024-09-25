<script>
    export default{
        name: "AppHeaderOffCanvas",
        props: {
            isVisible: {
                type: Boolean,
                required: true,
            }
        },
        // data(){
        //     return{

        //     }
        // },
        // methods: {

        // }
    }
</script>

<template>
    <div :class="['offcanvas', { show: isVisible }]">
        <div class="top-container">
            <img src="../../assets/img/logo.png" alt="">
            <button
            @click="$emit('close')"
            >
                <fa class="icon" :icon="['fas', 'circle-xmark']"/>
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
                    to="/servizi"
                    @click="$emit('close')">
                        Servizi
                    </router-link>
                </li>
                <li class="line">
                    <router-link 
                    class="router" 
                    to="/blog"
                    @click="$emit('close')">
                        Blog
                    </router-link>
                </li>
                <li>
                    <router-link 
                    class="router" 
                    to="/contatti"
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
        // justify-content: space-between;

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
        // border: 3px solid red;
        .top-container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            // border: 1px solid green;
            button{
                background-color: transparent;
                border: none;
                color: $button-yellow;
                font-size: 30px;
                cursor: pointer;
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
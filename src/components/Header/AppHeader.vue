<script>
import AppHeaderOffCanvas from './AppHeaderOffCanvas.vue';

    export default{
        name: 'AppHeader',
        components: {
            AppHeaderOffCanvas
        },
        data(){
            return{
                isOffcanvasVisible: false
            };
        },
        methods: {
            toggleOffcanvas(){
                this.isOffcanvasVisible = !this.isOffcanvasVisible;
            }
        }
    }
</script>

<template>
    
    <header>
        <nav>
            <figure>
                <router-link to="/"> 
                    <img src="../../assets/img/logo.png" alt="logo">
                </router-link>
            </figure>
            <ul>
                <li>
                    <router-link 
                    class="router" 
                    exact-active-class="active"
                    to="/">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link 
                    class="router"
                    exact-active-class="active" 
                    to="/chi-sono">
                        Chi sono
                    </router-link>
                </li>
                <li>
                    <router-link 
                    class="router"
                    exact-active-class="active" 
                    to="/servizi">
                        Servizi
                    </router-link>
                </li>
                <li>
                    <router-link 
                    class="router"
                    exact-active-class="active" 
                    to="/blog">
                        Blog
                    </router-link>
                </li>
                <li>
                    <router-link 
                    class="router"
                    exact-active-class="active" 
                    to="/contatti">
                        Contatti
                    </router-link>
                </li>
            </ul>
            <div class="buttons">
                <a href="" class="cart">
                    <fa class="icon" :icon="['fas', 'cart-shopping']"/>
                </a>

                <a href="" class="sign-in">Registrati</a>

                <button 
                @click="toggleOffcanvas"
                href="" 
                class="hamburger-menu">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </button>
            </div>
        </nav>
    </header>

    <AppHeaderOffCanvas 
    class="display-none" 
    :isVisible="isOffcanvasVisible" 
    @close="toggleOffcanvas"
    />

    <div>

        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
        <h1>ciao</h1>
    </div>
</template>

<style scoped lang="scss">
    @use '../../assets/styles/partials/variables' as *;

    header{
        z-index: 1;
        position: fixed;
        left: 0;
        right: 0;
        height: 80px;
        // border: 1px solid red;
        font-family: $font-bebas;
        letter-spacing: 2px;
        padding-block: 20px;
        padding-inline: 50px;
        font-size: 18px;
        nav{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            // border: 1px solid blue;
            figure{
                img{
                    // border: 1px solid green;
                    display: block;
                }
            }
            ul{
                display: flex;
                align-items: center;
                border: 1px solid $button-yellow;
                border-radius: 25px;
                height: 100%;
                li{
                    // border: 1px solid red;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: $text-primary;
                    border-radius: 25px;
                    height: 100%;
                    width: 100px;
                    flex: 1;
                    text-align: center;
                    // padding-inline: 25px;
                    .router{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        &:not(.active):hover {
                            color: $button-yellow;
                            cursor: pointer;
                        }
                    }
                }
            }
            .buttons{
                display: flex;
                gap: 10px;
                // border: 1px solid red;
                
                height: 100%;
                a{
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                .cart{
                    background-color: $bg-plans;
                    padding-inline: 10px;
                    border-radius: 50%;
                    color: $button-yellow;
                    
                }
                .sign-in{
                    border: 1px solid $button-yellow;
                    color: $button-yellow;
                    padding-inline: 10px;
                    border-radius: 25px;
                    transition: 0.2s;
                    &:hover{
                        background-color: $button-yellow;
                        color: $text-primary;
                    }
                }
                .hamburger-menu{
                    display: none;
                }
            }
        }
    }

    .active{
        background-color: $button-yellow;
        border-radius: 25px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .display-none{
        display: none;
    }

    // LAPTOP
    @media screen and (max-width: 1024px) {
        header{
            padding-inline: 20px;
            nav{
                ul{
                    li{
                        // padding-inline: 15px;
                        width: 80px;
                    }
                }
            }
        }
    }

    // TABLET
    @media screen and (max-width: 768px) {
        header{
            padding-inline: 30px;
            nav{
                ul{
                    display: none;
                }

                .buttons{
                    gap: 20px;
                    .sign-in{
                        display: none;
                    }

                    .hamburger-menu{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: start;
                        transform: rotate(180deg);
                        cursor: pointer;
                        background-color: transparent;
                        border: none;

                        .line{
                            background-color: $button-yellow;
                            height: 3px;
                            border-radius: 5px;

                            &:nth-child(3){
                                width: 25px;
                            }
                            &:nth-child(2){
                                width: 15px;
                                margin-block: 7px;
                            }
                            &:nth-child(1){
                                width: 28px;
                            }
                        }
                    }
                }
            }
        }
        .display-none{
            display: flex;
        }
    }
</style>
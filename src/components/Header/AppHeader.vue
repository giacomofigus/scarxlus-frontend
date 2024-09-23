<script>
    import OffCanvas from './OffCanvas.vue';

    export default{
        name: 'AppHeader',
        components: {
            OffCanvas
        }
    }
</script>

<template>
    
    <header>
        <nav>
            <figure>
                <img src="../assets/img/logo.png" alt="logo">
            </figure>
            <ul>
                <li class="active">Home</li>
                <li>Chi sono</li>
                <li>Servizi</li>
                <li>Blog</li>
                <li>Contatti</li>
            </ul>
            <div class="buttons">
                <a href="" class="cart">
                    <fa class="icon" :icon="['fas', 'cart-shopping']"/>
                </a>

                <a href="" class="sign-in">Registrati</a>

                <a 
                @click=""
                href="" 
                class="hamburger-menu">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </a>
            </div>
        </nav>

        
    </header>
</template>

<style scoped lang="scss">
    @use '../assets/styles/partials/variables' as *;

    header{
        position: fixed;
        left: 0;
        right: 0;
        height: 80px;
        border: 1px solid red;
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
                    display: flex;
                    align-items: center;
                    color: $text-primary;
                    border-radius: 25px;
                    height: 100%;
                    padding-inline: 25px;
                    &:hover{
                        color: $button-yellow;
                        cursor: pointer;
                    }
                    &.active{
                        background-color: $button-yellow;
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

    // LAPTOP
    @media screen and (max-width: 1024px) {
        header{
            padding-inline: 20px;
            nav{
                ul{
                    li{
                        padding-inline: 15px;
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

                        .line{
                            background-color: $button-yellow;
                            height: 3px;
                            border-radius: 5px;

                            &:nth-child(3){
                                width: 35px;
                            }
                            &:nth-child(2){
                                width: 20px;
                                margin-block: 8px;
                            }
                            &:nth-child(1){
                                width: 30px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
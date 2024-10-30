<script>
    export default{
        name: 'AppHomeHero',
    }
</script>

<template>
    <div class="jumbo">
        <div class="container">
            <h1>
                <span>Lorem Ipsum,</span> 
                <span class="empty">Dolorem sit amet, </span> 
                <span>Consectuer amet</span>  
            </h1>
            <div class="buttons">
                <a class="first-button" href="">Coaching</a>
                <a class="second-button" href="">E-books</a>
            </div>
        </div>

        <ul>
            <li>Seguimi</li>
            <li>
                <a href="https://www.instagram.com/scarxlus_/" target="_blank">
                    <fa class="icon" :icon="['fab', 'instagram']"/>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <fa class="icon" :icon="['fab', 'tiktok']"/>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@scarxlus2053" target="_blank">
                    <fa class="icon" :icon="['fab', 'youtube']"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

.jumbo{
    position: relative;
    height: calc(100vh - 80px);
    margin-top: 80px;
    background-image: url("../../assets/img/hero-home-desktop.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    .container{
        margin-left: 50px;
        h1{
            color: $text-primary;
            font-size: 55px;
            letter-spacing: 3px;
            span{
                display: block;
                &:first-child{
                    margin-left: 50px;
                }
                &:nth-child(2){
                    margin-left: 100px;
                    color: transparent;
                    -webkit-text-stroke-width: 0.5px;
                    -webkit-text-stroke-color: white;
                }
            }
        }
        .buttons{
            padding-top: 60px;
            display: flex;
            gap: 20px;
            a{
                font-family: 'Milker';
                border: 1px solid $text-primary;
                padding: 10px;
                padding-inline: 20px;
                border-radius: 20px;
                font-size: 18px;
            }
            .first-button{
                background-color: $button-yellow;
            }
            .second-button{
                background-color: $button-black;
            }
        }

    }
    ul{
        color: $text-secondary;
        font-family: $font-bebas;
        display: flex;
        gap: 20px;
        font-size: 18px;
        position: absolute;
        bottom: 0;
        left: 0;
        border: 1px solid $text-secondary;
        padding: 10px;
        border-left: none;
        border-bottom: none;
        
        li{
            a{
                color: $text-secondary;
            }
        }
    }
}

@media screen and (max-width: 1024px){
    .jumbo{
        padding-inline: 25px;
        .container{
            margin-left: 0px;
            h1{
                font-size: 2.8em;
                line-height: 60px;
                span{
                display: block;
                &:first-child{
                    margin-left: 20px;
                }
                &:nth-child(2){
                    margin-left: 50px;
                }
            }
            }
        }
    }
}

@media screen and (max-width: 768px){
    .jumbo{
        padding-inline: 25px;
        justify-content: center;
        text-align: center;
        background-image: url("../../assets/img/hero-home-tablet.png");
        .container{
            margin-left: 0px;
            // border: 1px solid red;
            h1{
                font-size: 42px;
                line-height: 60px;
                span{
                display: block;
                &:first-child{
                    margin-left: 0px;
                }
                &:nth-child(2){
                    margin-left: 0px;
                }
            }
            }
            .buttons{
                justify-content: center;
            }
        }
    }
}
// TELEFONO
@media screen and (max-width: 425px){
    .jumbo{
        background-image: url("../../assets/img/hero-home-mobile-cmp.png");

        .container{
            h1{
                font-size: 2.3em;
                line-height: 40px;

                span{
                    &:nth-child(2){
                        padding-block: 15px;
                    }
                }
            }
        }

    }
}
</style>
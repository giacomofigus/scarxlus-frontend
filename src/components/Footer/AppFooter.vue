<script>
    export default{
        name: "AppFooter",
    }
</script>

<template>
    <footer>
        <div class="yellow-bar">
        </div>
        <div class="container">
            <div class="top">
                <img src="../../assets/img/logo.webp" alt="logo">
                <ul>
                    <li>Mappa del sito</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Termini e condizioni</li>
                    <li>Contatti</li>
                </ul>
            </div>
            
            <ul class="bottom"> 
                <li>P.IVA: 0438974328942</li>
                <li>Design a cura di: Giacomo Figus</li>
                <li>
                    <a href="https://www.instagram.com/scarxlus_/" target="_blank">
                        <img src="../../assets/img/icons/instagram-solid.svg" alt="instagram">
                    </a>
                    <a href="https://www.tiktok.com/discover/scarxlus?lang=it-IT" target="_blank">
                        <img src="../../assets/img/icons/tiktok-solid.svg" alt="tiktok">
                    </a>
                    <a href="https://www.youtube.com/@scarxlus2053" target="_blank">
                        <img src="../../assets/img/icons/youtube-solid.svg" alt="youtube">
                    </a>
                    <a href="" target="_blank">
                        <img src="../../assets/img/icons/discord-brands-solid.svg" alt="discord">
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;
    
    footer{
        background-color: #171717;
        font-family: $font-bebas;
        .yellow-bar{
            background-color: $button-yellow;
            height: 10px;
        }

        .container{
            width: 80%;
            margin: 0 auto;
            padding-block: 80px;
        }

        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $text-primary;
            margin: 0 auto;
            border-top: 2px solid #878787;
            border-bottom: 2px solid #878787;

            padding-block: 25px;

            ul{
                display: flex;
                gap: 50px;
                font-size: 20px;
                
                li{
                    transition: 0.2s;
                }
                li:hover{
                    color: $button-yellow;
                    cursor: pointer;
                }
            }
        }

        .bottom{
            color: #878787;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            font-size: 20px;

            li{
                display: flex;
                align-items: center;
                gap: 20px;
                img{
                    width: 25px;
                }
            }
        }
    }

    @media screen and (max-width:1024px) {
        footer{
            .container{
                width: 90%;
            }

            .top{
                ul{
                    gap: 30px;
                }
            }
        }
    }

    @media screen and (max-width:768px) {
        footer{
            .container{
                width: 90%;
            }

            .top{
                flex-direction: column;
                gap: 30px;
                ul{
                    flex-wrap: wrap;
                    width: 100%;
                    justify-content: center;
                }
            }

            .bottom{
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
            }
        }
    }
</style>
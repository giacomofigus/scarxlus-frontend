<script>
    export default{
        name: "AppHomeCta"
    }
</script>

<template>
    <section class="cta">
        <img class="form-1" src="../../assets/img/Forms.webp" alt="background-forms">
        <div>
            <h2>Sei pronto ad allenarti?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas ut quo accusantium, perspiciatis at dolorum maiores placeat nobis distinctio commodi molestias architecto accusamus itaque vel dolores error sunt nulla?
            </p>
            <a href="/">Inizia ora</a>
        </div>
        <img class="form-2" src="../../assets/img/Forms.webp" alt="background-forms">
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .cta{
        position: relative;
        margin-top: 100px;
        background-color: #141414;
        display: flex;
        justify-content: center;
        padding-block: 100px;
        overflow: hidden;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 60%;
            text-align: center;
            z-index: 2;
            h2{
                font-size: 3rem;
                color: white;
            }
            p{
                font-size: 25px;
                font-family: 'Inter', sans-serif;
                color: $text-secondary;
                margin-block: 20px;
            }
            a{
                font-family: 'Milker', sans-serif;
                font-size: 22px;
                background-color: $button-yellow;
                display: block;
                width: fit-content;
                padding: 10px;
                padding-inline: 20px;
                border-radius: 25px;
                border: 1px solid white;
            }
        }
        
        img{
            position: absolute;
            top: 50%;
            bottom: 50%;
            transform: translate(0, -50%);
            opacity: 0.6;
            z-index: 1;
        }
        .form-1{
            transform:translate(0, -50%) rotate(180deg);
            left: -50px;
        }
        .form-2{
            right: -50px;
        }
    }

    @media screen and (max-width:1024px){
        .cta{
            div{
                width: 70%;

                p{
                    margin-block: 30px;
                }

                h2{
                    font-size: 2.8rem;
                }
            }
        }
    }

    @media screen and (max-width:768px){
        .cta{
            padding-inline: 50px;
            div{
                width: 100%;
            }

            img{
                transform: none;
                top: none;
                bottom: none;
            }
            .form-1{
                top: 50px;
            }
            .form-2{
                display: none;
            }
        }
    }

    @media screen and (max-width:425px){
        .cta{
            padding-inline: 30px;
            div{
                h2{
                    font-size: 2.6rem;
                }

                p{
                    font-size: 23px;
                }

                a{
                    font-size: 22px;
                }
            }
        }
    }
</style>
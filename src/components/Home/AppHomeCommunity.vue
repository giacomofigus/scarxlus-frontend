<script>
    export default{
        name: "AppHomeCommunity",

        data(){
            return{
                pictures: [
                    { src: 'https://picsum.photos/200/200', alt: 'Profile 1', customClass: 'pic-1' },
                    { src: 'https://picsum.photos/200/200', alt: 'Profile 2', customClass: 'pic-2' },
                    { src: 'https://picsum.photos/200/200', alt: 'Profile 3', customClass: 'pic-3' },
                    { src: 'https://picsum.photos/200/200', alt: 'Profile 4', customClass: 'pic-4' },
                    { src: 'https://picsum.photos/200/200', alt: 'Profile 5', customClass: 'pic-5' },
                    { src: 'https://picsum.photos/200/200', alt: 'Profile 6', customClass: 'pic-6' },
                    { src: 'https://picsum.photos/200/200', alt: 'Profile 7', customClass: 'pic-7' },
                    { src: 'https://picsum.photos/200/200', alt: 'Profile 8', customClass: 'pic-8' },
                ],
            };
        },
    }

</script>

<template>
    <section class="community">

        <div class="pics">
            <img 
                v-for="(pic, index) in pictures" 
                :key="index" 
                :src="pic.src" 
                :alt="pic.alt" 
                class="pro-pic" 
                :class="pic.customClass" 
            />
        </div>

        <!-- Chevrons background -->
        <div class="bg-community">
            <div class="chevron chevron-1"></div>
            <div class="chevron chevron-2"></div>
            <div class="chevron chevron-3"></div>


        </div>

        <!-- Actual content -->
        <div class="content">
            <h2>Unisciti alla community!</h2>
            <a href="">Discord community</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/styles/partials/variables' as *;
    @use '../../assets/styles/partials/mixins' as *;

    .community{
        margin-top: 100px;
        border: 1px solid red;
        position: relative;
        height: 100vh;
        overflow: hidden;

        .pics{
            .pro-pic{
                background-color: red;
                position: absolute;
                height: auto;
                border-radius: 50%;
                z-index: 2;
            }

            // LEFT PICS
            .pic-1{
                top: 20%;
                left: 5%;
                width: 85px;
            }

            .pic-2{
                top: 45%;
                left: 10%;
                width: 110px;
            }

            .pic-3{
                top: 35%;
                left: 25%;
                width: 70px;
            }

            .pic-4{
                top: 50%;
                left: 40%;
                width: 65px;
            }

            // RIGHT PICS
            .pic-5{
                width: 110px;
                right: 5%;
                top: 15%;
            }

            .pic-6{
                width: 80px;
                right: 20%;
                top: 35%;
            }

            .pic-7{
                width: 100px;
                right: 35%;
                top: 50%;
            }

            .pic-8{
                width: 90px;
                right: 22%;
                top: 65%;
            }
        }

        // Backgorund of chevrons
        .bg-community{
            position: relative;
            z-index: 1;
            
            .chevron {
              --s: 25px; 
              width: 100%;
              aspect-ratio: 9/2.5;
              clip-path: polygon(0 0,0 var(--s),50% 100%,100% var(--s),100% 0,50% calc(100% - var(--s)));
              position: absolute;
            }
    
            .chevron-1{
                background-color: #3E2F01;
                top: 0%;
            }
    
            .chevron-2{
                background-color: #765902;
                top: calc(100% + 150px);
            }

            .chevron-3{
                background-color: #C99700;
                top: calc(100% + 300px);
            }
        }
            
        .content{
            z-index: 2;
            position: relative;
            // border: 1px solid green;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            h2{
                color: white;
                font-size: 3rem;
                text-align: center;
                margin-top: 40px;
            }

            a{
                font-family: 'Milker', sans-serif;
                background-color: $button-yellow;
                padding: 10px;
                border-radius: 25px;
                border: 1px solid white;
                font-size: 20px;
            }

        }
    }

    // LAPTOP
    @media screen and (max-width:1024px) {
        .community{
            .pics{

                //LEFT
                .pic-1{
                    width: 7%;
                }

                .pic-2{
                    width: 9%;
                }

                .pic-3{
                    width: 5.5%;
                }

                .pic-4{
                    width: 7%;
                }


                // RIGHT
                .pic-5{
                    width: 9%;
                }

                .pic-6{
                    width: 7%;
                }

                .pic-7{
                    width: 9%;
                }

                .pic-8{
                    width: 7.5%;
                }
            }

            .bg-community{
                .chevron-1{
                    top: calc(100% + 80px);
                }
    
                .chevron-2{
                    top: calc(100% + 230px);
                }

                .chevron-3{
                    top: calc(100% + 370px);
                }
            }
        }
    }

    // TABLETS
    @media screen and (max-width:768px) {
        .community{
            .pics{

                //LEFT PICS
                .pic-1{
                    width: 10%;
                }

                .pic-2{
                    width: 13%;
                    top: 55%;
                    left:8%;
                }

                .pic-3{
                    width: 9%;
                    top: 38%;
                }

                .pic-4{
                    width: 8%;
                    top: 60%;
                }

                // RIGHT PICS
                .pic-5{
                    width: 10%;
                    right: 5%;
                    top: 22%;
                }

                .pic-6{
                    width: 8%;
                    right: 15%;
                    top: 40%;
                }

                .pic-7{
                    width: 11%;
                    
                    right: 30%;
                }

                .pic-8{
                    width: 9%;
                    right: 10%;
                    top: 60%;

                }
            }

            .bg-community{
                .chevron {
                    --s: 30px; 
                    aspect-ratio: 9/4;
                }   
            }

            .content{
                h2{
                    font-size: 2.8rem;
                }
            }
        }
    }

    // MOBILE
    @media screen and (max-width:425px) {
        .community{
            .pics{
                // LEFT
                .pic-1{
                    width: 16%;
                    top: 30%;
                }

                .pic-2{
                    width: 20%;
                    top: 70%;
                    left:8%;
                }

                .pic-3{
                    width: 15%;
                    top: 50%;
                }

                .pic-4{
                    display: none;
                }

                // RIGHT
                .pic-5{
                    width: 20%;
                    right: 5%;
                    top: 30%;
                }

                .pic-6{
                    width: 16%;
                    right: 18%;
                    top: 50%;
                }

                .pic-7{
                    width: 15%;
                    top: 68%;
                    right: 25%;
                }

                .pic-8{
                    display: none;
                }
            }

            .bg-community{
                .chevron {
                    --s: 30px; 
                    aspect-ratio: 9/5;
                }

                .chevron-1{
                    top: calc(100% + 150px);
                }
    
                .chevron-2{
                    top: calc(100% + 300px);
                }

                .chevron-3{
                    top: calc(100% + 450px);
                }
                

            }

            .content{
                h2{
                    font-size: 2.5rem;
                }
            }
        }
    }
</style>
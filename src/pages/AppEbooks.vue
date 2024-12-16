<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'; 
    import 'swiper/swiper-bundle.css'; 
    import 'swiper/css/pagination';
    import { Pagination, Autoplay } from 'swiper/modules';
    
    import axios from 'axios';
    import AppEbooksCard from '../components/Ebooks/AppEbooksCard.vue';

    export default{
        components:{
            Swiper,
            SwiperSlide,
            AppEbooksCard,
        },
        data(){
            return{
                ebooks: [], 
                modules: [Pagination, Autoplay],
            }
        },

        mounted(){
            axios.get('http://127.0.0.1:8000/api/ebooks').then(response => {
                this.ebooks = response.data.ebooks
            });
        }
    }
</script>

<template>
    <main>
        <!-- JUMBO -->
        <section class="jumbo">
            <div class="hero-image">
                <img 
                role="presentation" 
                decoding="async" 
                rel="preload" 
                fetchpriority="high" 
                src="../assets/img/ebook-hero.webp" 
                alt="scarxlus-maltese-on-paralleles" 
                loading="lazy" 
                as="image/webp">
                <h1>E-books</h1>
            </div>
        </section>

        <!-- LISTA EBOOKS -->
         <section class="ebooks">
            <h2>I miei e-books:</h2>
             <swiper
                :slidesPerView="1.2"
                :spaceBetween="25"
                :pagination="{
                    el: '.custom-pagination',
                    clickable: true,
                }"
                :autoplay="{
                   delay: 3000, 
                   disableOnInteraction: false, 
                }"
                :modules="modules"
                :breakpoints="{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,  
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 1, 
                        spaceBetween: 10,
                    }
                }"
                class="mySwiper"
            >
                <swiper-slide
                    v-for="(item, index) in ebooks"
                    :key="item.id"
                    class="ebook-slide"
                >
                    <AppEbooksCard :ebook="item" />
                </swiper-slide>
            </swiper>
            <div class="custom-pagination"></div>
         </section>
    </main>
</template>

<style lang="scss" scopeds>
    @use '../assets/styles/partials/variables' as *;

    main{
        display: flex;
        flex-direction: column;
        color: $text-primary;
        
        .jumbo{
            margin-top: 80px;

            .hero-image{
                position: relative;
                img{
                    width: 100%;
                    display: block;
                }
                h1{
                    position: absolute;
                    top: 50%; 
                    left: 50%; 
                    transform: translate(-50%, -50%);
                    color: $text-primary;
                    font-size: 3rem;
                }
            }
        }

        .ebooks{
            // border: 1px solid green;
            margin-top: 100px;
            padding: 5px;

            h2{
                max-width: 1200px;
                margin: 0 auto;
                font-family: $font-bebas;
                font-weight: 700;
                font-size: 25px;
                margin-bottom: 20px;
                letter-spacing: 3px;
            }

            .mySwiper{
                max-width: 1200px;
            }
            .custom-pagination{
                display: flex;
                justify-content: center;
                margin-top: 20px;
                .swiper-pagination-bullet{
                    width: 16px;
                    height: 16px;
                    background: #636260;
                    margin: 0 5px;
                    border-radius: 50%;
                    opacity: 0.8;
                    transition: width 0.3s, opacity 0.3s;

                    &.swiper-pagination-bullet-active {
                        background: white;
                        opacity: 1;
                        width: 50px;
                        border-radius: 10px;
                    }
                }
            }
        }
    }

    @media screen and (max-width:1024px) {
        main{
            .ebooks{
                .mySwiper{
                    
                    width: 95%;
                }  
                .custom-pagination{
                    .swiper-pagination-bullet{
                        width: 14px;
                        height: 14px;
                    }
                }
            }
        }
    }
    @media screen and (max-width:768px) {
        main{
            .jumbo{
                height: 300px;
                .hero-image{
                    height: 100%;
                    img{
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
</style>
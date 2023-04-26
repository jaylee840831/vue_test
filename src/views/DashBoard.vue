<script setup>
</script>

<template>
    <div id="main">
        <!--數據儀錶板-->
        <div class="row">
            <DashBoardCard :cardName="eventTotal[0].name" :cardValue="eventTotal[0].value" :cardImage="0"
                style="width: 20%;">
            </DashBoardCard>
            <swiper 
                :spaceBetween="1" 
                :loop="true" 
                :autoplay="{
                delay: 2000
                }" 
                :slides-per-view="3" 
                :breakpoints= "{
                    500: {
                        slidesPerView: 2
                    },
                    767: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 2
                    },
                    1600: {
                        slidesPerView: 3
                    },
                    1920: {
                        slidesPerView: 3
                    }
                }"
                style="width: 60%;">
                <swiper-slide v-for="(event, index) in events" key="index">
                    <DashBoardCard :cardName="event.channelName" :cardValue="event.value" :cardImage="1" v-if="index < 3">
                    </DashBoardCard>
                    <DashBoardCard :cardName="event.channelName" :cardValue="event.value" :cardImage="2" v-else>
                    </DashBoardCard>
                </swiper-slide>
            </swiper>
            <DashBoardCard :cardName="eventTotal[1].name" :cardValue="eventTotal[1].value" :cardImage="0"
                style="width: 20%;">
            </DashBoardCard>
        </div>
    </div>
    <!--圖表儀錶板---->
</template>
 
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
// import {AutoPlay, Pagination} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import DashBoardCard from '../components/DashBoardCard.vue'

export default {
    data() {
        return {
            timer: false,
            timer2: null,
            car: 'car',
            license: 'license',
            eventTotal: [
                {
                    name: "Total Alarm",
                    value: 1000
                },
                {
                    name: "Alarm %",
                    value: 50
                }
            ],
            events: [
                {
                    channelName: "台北市中正區忠孝東路二段88號 Illegal Parking CH1",
                    value: 1000
                },
                {
                    channelName: "市民大道 Illegal Parking CH2",
                    value: 50
                },
                {
                    channelName: "市民大道 Illegal Parking CH3",
                    value: 2500
                },
                {
                    channelName: "中正運動中心停車場 LPR CH1",
                    value: 800
                },
                {
                    channelName: "中正運動中心停車場 LPR CH2",
                    value: 2000
                },
                {
                    channelName: "中正運動中心停車場 LPR CH3",
                    value: 1500
                }
            ],
            // swiper 設定值 --------------------------------------------------------
            swiperOptions1: {
                loop: true,
                autoplay: { delay: 3000 },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                init: true,
                slidesPerView: 3,
                spaceBetween: 25,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                },
                breakpoints: {
                    500: {
                        slidesPerView: 3
                    },
                    767: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1600: {
                        slidesPerView: 3
                    },
                    1920: {
                        slidesPerView: 3
                    }
                }
            }
            // swiper 設定值 --------------------------------------------------------
        }
    }, components: {
        DashBoardCard,
        Swiper,
        SwiperSlide
    }, methods: {
        loadData() {
            for (let i = 0; i < this.events.length; i++) {
                this.events[i].value = Math.floor((Math.random() * (2000 + 1 - 500)) + 500);
            }
        }
    }, watch: {
    }, mounted() {
        if (this.timer2) {
            clearInterval(this.timer2);
        } else {
            this.timer2 = setInterval(() => {
                this.loadData();
                console.log('loading new data from api')
            }, 10000);
        }
    },
    beforeDestroy() {
        console.log('計時結束')
        clearInterval(this.timer2);
    },
}
</script>
<style>
#main {
    font-family: Montserrat, "Segoe UI", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 2rem 0;
    text-align: center;
}
</style>
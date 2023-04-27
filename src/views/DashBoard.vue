<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Autoplay, Pagination];

</script>

<template>
    <div id="main">
        <!--數據儀錶板-->
        <div class="row">
            <DashBoardCard :cardName="eventTotal[0].name" :cardValue="eventTotal[0].value" :cardImage="0"
                class="dashboardcard">
            </DashBoardCard>
            <swiper :modules="modules" :autoplay="{ enable: false }" :breakpoints="{
                    0: {
                        slidesPerView: 3,
                        direction: 'vertical',
                        loop: false,
                        autoplay: {
                            enabled: false
                        }
                    },
                    500: {
                        slidesPerView: 3,
                        direction: 'vertical',
                        loop: false,
                        autoplay: {
                            enabled: false
                        }
                    },
                    1040: {
                        slidesPerView: 2,
                        direction: 'horizontal',
                        loop: true,
                        autoplay: {
                            enabled: true,
                            delay: 3000,
                        }
                    },
                    1600: {
                        slidesPerView: 3,
                        direction: 'horizontal',
                        loop: true,
                        autoplay: {
                            enabled: true,
                            delay: 3000,
                        }
                    },
                    1920: {
                        slidesPerView: 3,
                        direction: 'horizontal',
                        loop: true,
                        autoplay: {
                            enabled: true,
                            delay: 3000,
                        }
                    }
                }" class="dashboardcard-swiper">
                <swiper-slide v-for="(event, index) in events" key="index">
                    <DashBoardCard :cardName="event.channelName" :cardValue="event.value" :cardImage="1" v-if="index < 3">
                    </DashBoardCard>
                    <DashBoardCard :cardName="event.channelName" :cardValue="event.value" :cardImage="2" v-else>
                    </DashBoardCard>
                </swiper-slide>
            </swiper>
            <DashBoardCard :cardName="eventTotal[1].name" :cardValue="eventTotal[1].value" :cardImage="0"
                class="dashboardcard">
            </DashBoardCard>
        </div>
    </div>
    <!--圖表儀錶板---->
</template>
 
<script>
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
                    name: "Total Alarms",
                    value: 1000
                },
                {
                    name: "Device Alarms",
                    value: 2000
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
            ]
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
    margin: 1rem 0;
    text-align: center;
}

/** 1040像素以下*/
@media screen and (max-width: 1039px) {
    .dashboardcard {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 1rem 0;
    }

    .dashboardcard-swiper {
        height: 550px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
}

/** 1040像素以上 */
@media screen and (min-width: 1040px) {
    .dashboardcard {
        width: 20%;
    }

    .dashboardcard-swiper {
        width: 60%;
    }
}
</style>
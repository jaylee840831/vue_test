<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Autoplay, Pagination];

</script>

<template>
    <div class="dashboard">
        <!--數據儀錶板-->
        <div class="row">
            <div class="dashboardcard">
                <DashBoardCard :cardName="eventTotal[0].name" :cardValue="eventTotal[0].value" :cardImage="0">
                </DashBoardCard>
            </div>

            <!--像素750以上展開顯示 以下則是直立式顯示-->
            <swiper :modules="modules" :slidesPerView="3" :breakpoints="{
                    0: {
                        slidesPerView: 3,
                        direction: 'vertical',
                        loop: false,
                        // autoplay: {
                        //     enabled: false
                        // }
                    },
                    750: {
                        slidesPerView: 2,
                        direction: 'horizontal',
                        loop: true,
                        // autoplay: {
                        //     enabled: true,
                        //     delay: 3000,
                        // }
                    },
                    960: {
                        slidesPerView: 2,
                        direction: 'horizontal',
                        loop: true,
                        // autoplay: {
                        //     enabled: true,
                        //     delay: 3000,
                        // }
                    },
                    1280: {
                        slidesPerView: 2,
                        direction: 'horizontal',
                        loop: true,
                        // autoplay: {
                        //     enabled: true,
                        //     delay: 3000,
                        // }
                    },
                    1281: {
                        slidesPerView: 3,
                        direction: 'horizontal',
                        loop: true,
                        // autoplay: {
                        //     enabled: true,
                        //     delay: 3000,
                        // }
                    },
                    1600: {
                        slidesPerView: 3,
                        direction: 'horizontal',
                        loop: true,
                        // autoplay: {
                        //     enabled: true,
                        //     delay: 3000,
                        // }
                    },
                    1920: {
                        slidesPerView: 3,
                        direction: 'horizontal',
                        loop: true,
                        // autoplay: {
                        //     enabled: true,
                        //     delay: 3000,
                        // }
                    }
                }" class="dashboardcard-swiper">
                <swiper-slide v-for="(event, index) in events" key="index">
                    <DashBoardCard :cardName="event.channelName" :cardValue="event.value" :cardImage="1" v-if="index < 3">
                    </DashBoardCard>
                    <DashBoardCard :cardName="event.channelName" :cardValue="event.value" :cardImage="2" v-else>
                    </DashBoardCard>
                </swiper-slide>
            </swiper>

            <div class="dashboardcard">
                <DashBoardCard :cardName="eventTotal[1].name" :cardValue="eventTotal[1].value" :cardImage="0">
                </DashBoardCard>
            </div>
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
                    channelName: "市民大道 Illegal Parking CH1",
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
.dashboard {
    font-family: Montserrat, "Segoe UI", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    justify-content: center;
}

/** RWD < 750 */
@media screen and (max-width: 750px) {
    .dashboard {
        font-family: Montserrat, "Segoe UI", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        align-items: center;
        justify-content: center;
    }

    .dashboardcard {
    }

    .dashboardcard-swiper {
        height: 500px;
    }
}

/** RWD > 750 */
@media screen and (min-width: 750px) {
    .dashboard {
        font-family: Montserrat, "Segoe UI", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        align-items: center;
        justify-content: center;
    }

    .dashboardcard {
        width: 25%;
    }

    .dashboardcard-swiper {
        width: 50%;
    }
}

/** RWD > 960 */
@media screen and (min-width: 960px) {}

/** RWD > 1280 */
@media screen and (min-width: 1280px) {
    .dashboardcard {
        width: 20%;
    }

    .dashboardcard-swiper {
        width: 60%;
    }
}
</style>
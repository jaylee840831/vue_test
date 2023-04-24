<script setup>
</script>

<template>
    <div id="main">
        <!--數據儀錶板-->
        <div class="data-board">
            <div v-for="(board, index) in boards" class="data-card" key="index">
                <DashBoardCard :cardName="board.channelName" :cardValue="board.value" :cardImage="1" v-if="index < 3">
                </DashBoardCard>
                <DashBoardCard :cardName="board.channelName" :cardValue="board.value" :cardImage="2" v-else></DashBoardCard>
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
            boards: [
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
        DashBoardCard
    }, methods: {
        loadData() {
            for (let i = 0; i < this.boards.length; i++) {
                this.boards[i].value = Math.floor((Math.random() * (2000 + 1 - 500)) + 500);
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
.data-board {
    height: 300px;
    overflow-y: auto;
}

.data-card {
    display: inline-block;
}

#main {
    font-family: Montserrat, "Segoe UI", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 4rem 0;
    text-align: center;
}
</style>
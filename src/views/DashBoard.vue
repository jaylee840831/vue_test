<script setup>
</script>

<template>
    <div id="main">
        <div v-for="(board, index) in boards" class="d-card">
            <DashBoardCard :cardName="board.channelName" :cardValue="board.value"></DashBoardCard>
        </div>
    </div>
</template>
 
<script>

import DashBoardCard from '../components/DashBoardCard.vue'

export default {
    data() {
        return {
            timer: false,
            timer2: null,
            boards: [
                {
                    channelName: "Illegal Parking CH1",
                    value: 1000
                },
                {
                    channelName: "Illegal Parking CH2",
                    value: 50
                },
                {
                    channelName: "Illegal Parking CH3",
                    value: 2500
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
        /*
          最初始情况，项目刚打开的时候，这个时候页面是必定没有定时器的，那么逻辑就会走else，这个时候就会注册一个定时器去循环调用相应逻辑代码
          后续有三种情况
             情况一：路由跳转，跳走了，就要清除这个定时器，所以在beforeDestroy钩子中要清除定时器
             情况二：关闭项目，关闭项目了以后，系统就会自动停掉定时器，这个不用管它
             情况三：刷新页面，这个时候vue组件的钩子是不会执行beforeDestroy和destroyed钩子的，所以
                    需要加上if判断一下，若还有定时器的话，就清除掉，所以这个就是mounted钩子的if判断的原因
       */
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
.d-card {
    display: inline-block;
}

#main {
    font-family: Montserrat, "Segoe UI", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 4rem 0;
    text-align: center;
    /* display: grid;
    place-items: center;
    min-height: 100vh; */
}
</style>
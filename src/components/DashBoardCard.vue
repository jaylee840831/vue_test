<script setup>
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="title">
                            <img class="icon" src="../assets/car.png" style="margin: 0 10px;" v-if="cardImage === 1">
                            <img class="icon" src="../assets/license.png" style="margin: 0 10px;" v-else>
                        <h3>{{ cardName }}</h3>
                    </div>
                    <div class="body">
                        <h3 style="color: blue;">{{ regCardValue }}</h3>
                    </div>
                    <div class="footer">
                        <h3>decrease 10 %</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
        }
    },
    props: {
        cardName: String,
        cardImage: Number,
        cardValue: Number
    },
    methods: {
    },
    computed: {
        regCardValue() {
            //轉千分位
            var regExpInfo = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
            var ret = this.cardValue.toString().replace(regExpInfo, "$1,");
            return ret;
        }
    }, watch: {
        cardValue: {
            immediate: true,
            handler(val) {
                return this.cardValue;
            }
        }
    }
}
</script>
<style>
.title {
    display: flex;
    /* 水平置中 */
    justify-content: center;
    flex-wrap: wrap;
}

.body {}

.footer {
    color: #00ff00;
}

.card {
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
    margin: 1rem 0;
    /**上下間距 */
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
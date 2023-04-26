<script setup>
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="dashboard-card">
                    <div class="title">
                        <img class="icon" src="../assets/car.png" v-if="cardImage === 1">
                        <img class="icon" src="../assets/license.png" v-else>
                    </div>
                    <div class="title">
                        {{ cardNameShortening }}
                    </div>
                    <div class="body">
                        <div style="color: blue;">{{ cardValueReg }}</div>
                    </div>
                    <div class="footer">
                        decrease 10 %
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
        cardValueReg() {
            //轉千分位
            var regExpInfo = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
            var ret = this.cardValue.toString().replace(regExpInfo, "$1,");
            return ret;
        },
        cardNameShortening() {
            if (this.cardName.length > 24) {
                return this.cardName.substring(0, 24) + '...'
            }
            return this.cardName
        }
    },
    watch: {
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
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    /* 水平置中 */
    align-items: center;
    justify-content: center;
}

.body {}

.footer {
    color: #00ff00;
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

/** 1024以上像素 */
@media screen and (min-width: 1024px) {
    .dashboard-card {
        font-size: x-large;
        height: 250px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
        margin: 1rem 0;
    }
}

/** 991以下像素 */
@media screen and (max-width: 991px) {
    .dashboard-card {
        font-size: x-large;
        display: flex;
        flex-wrap: wrap;
        height: 250px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
        margin: 1rem 0;
    }
}

/** 992以上像素 */
@media screen and (min-width: 992px) {
    .dashboard-card {
        font-size: x-large;
        height: 250px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
        margin: 1rem 0;
    }
}

/** 1600以上像素 */
@media screen and (min-width: 1600px) {
    .dashboard-card {
        font-size: x-large;
        height: 250px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
        margin: 1rem 0;
    }
}

/** 1920以上像素 */
@media screen and (min-width: 1920px) {
    .dashboard-card {
        font-size: xx-large;
        height: 300px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
        margin: 1rem 0;
    }
}
</style>
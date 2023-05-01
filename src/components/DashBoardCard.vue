<script setup>
</script>

<template>
    <div class="container">
        <div class="row dashboard-card">
            <div class="col-2">
                <img class="icon" src="../assets/car.png" v-if="cardImage === 1">
                <img class="icon" src="../assets/license.png" v-else>
            </div>
            <div class="col-10">
                <div class="title">
                    {{ cardNameShortening }}
                </div>
                <div class="body">
                    {{ cardValueReg }}
                </div>
                <div class="footer">
                    decrease 10 % than yesterday
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
                return this.cardName.substring(0, 15) + '...'
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
/**RWD < 750*/
.dashboard-card {
    height: 120px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 1rem 0;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.icon {
        margin-top: 50px;
        width: 30px;
        height: 30px;
        background-color: #eee;
        border-radius: 15px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

.title {
    margin-top: 10px;
    font-size: 14px;
}

.body {
    color: blue;
    font-size: 40px;
    font-weight: 600;
}

.footer {
    color: #00BB00;
    font-size: 14px;
}

/** RWD > 750 */
@media screen and (min-width: 750px) {
    .dashboard-card {
        height: 160px;
        border: 1px solid black;
        border-radius: 10px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    /* .icon {
        margin-top: 50px;
        width: 50px;
        height: 50px;
        background-color: #eee;
        border-radius: 15px;
        text-align: center;
        align-items: center;
        justify-content: center;
    } */

    .body {
        color: blue;
        font-size: 30px;
        font-weight: 600;
    }
}

@media screen and (min-width: 960px) {
    .body {
        color: blue;
        font-size: 35px;
        font-weight: 600;
    }
}

@media screen and (min-width: 1280px) {
    .icon {
        margin-top: 50px;
        width: 30px;
        height: 30px;
        background-color: #eee;
        border-radius: 15px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .body {
        color: blue;
        font-size: 40px;
        font-weight: 600;
    }
}

@media screen and (min-width: 1440px) {
    .dashboard-card {
        height: 160px;
        border: 1px solid black;
        border-radius: 10px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
}

@media screen and (min-width: 1600px) {}

@media screen and (min-width: 1920px) {
}
</style>
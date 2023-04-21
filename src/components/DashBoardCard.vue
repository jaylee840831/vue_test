<script setup>
import { computed } from '@vue/reactivity';

</script>

<template>
    <div class="d-card">
        <div class="title">
            <h3>{{ cardName }}</h3>
        </div>
        <div class="body">
            <h1>{{ regCardValue }}</h1>
        </div>
        <div class="footer">

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
.d-card {
    margin: 0 2rem;
}

.title {}

.body {
    color: blue;
}
</style>
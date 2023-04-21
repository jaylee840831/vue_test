<script setup>
</script>

<template>
    <div id="formBody">
        <form action="#" class="form">
            <h2>Add Devices</h2>
            <!--依照step1、2、3...替換device card-->
            <AddDevicesCard></AddDevicesCard>
        </form>
    </div>
</template>

<script>

// const AddDevicesCard = () => import(/* webpackChunkName: "addDevicesCard" */ '../components/AddDevicesCard.vue')
import AddDevicesCard from '../components/AddDevicesCard.vue'

export default {
    data() {
        return {
        }
    }, components: {
        AddDevicesCard
    }, methods: {
    }, watch: {
    }
}
</script>

<style>
#formBody {
    font-family: Montserrat, "Segoe UI", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 4rem 0;
    /* display: grid;
    place-items: center;
    min-height: 100vh; */
}

.form {
    width: clamp(420px, 50%, 530px);
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 0.35rem;
    padding: 1.5rem;
}

.form-step {
    transform-origin: top;
    animation: animate 0.5s;
}

.form-data {
    margin: 2rem 0;
    height: 400px;
    overflow: scroll;
}
</style>
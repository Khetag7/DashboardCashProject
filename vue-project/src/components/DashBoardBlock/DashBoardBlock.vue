<template>
    <div class="DashBoard__wrapp">
        <MainHeader />
        <mainDashBoardComp />
        
        
    </div>
</template>

<script setup lang="ts">
import MainHeader from "../mainHeader/mainHeader.vue";
import mainDashBoardComp from "../mainDashBoardComp/mainDashBoardComp.vue";


</script>

<style scoped lang="scss">
@use '@/components/DashBoardBlock/DashBoardBlock.scss';

</style>

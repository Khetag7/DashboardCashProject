<template>
    <section class="mainView__section">
        <div class="container mainView__wrapper">
            <mainAside />
            <DashBoardBlock />

        </div>
    </section>
</template>

<script setup lang="ts">
import mainAside from "../mainAside/mainAside.vue";
import DashBoardBlock from "../DashBoardBlock/DashBoardBlock.vue";

</script>

<style scoped lang="scss">
@use '@/components/mainView/mainView.scss';
</style>

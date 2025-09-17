<template>
    <header class="dashboard__header">
        <h1 class="dashboard__header-title">Home</h1>
        <div class="dashboard__header-block">
            <img class="dashboard__header-block-search" src="@/assets/images/SearchSvg.svg" alt="">

            <router-link class="dashboard__header-block-link" to="/#">
                <img class="dashboard__header-block-notifi" src="@/assets/images/NotificationsSvg.svg" alt="">
                <div class="header__ellipse-orange"></div>
            </router-link>
            
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@use '@/components/mainHeader/mainHeader.scss';
</style>
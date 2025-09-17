<template>
    <div class="budget__wrapper">
        <h1>Budget Page</h1>
        <p>Your Balance in visa card is: {{ budget }}</p>

        <router-link to="/">
            <span>Вернуться назад нажми!</span>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const budget = ref('N 22,000')
</script>

<style scoped lang="scss">
.budget__wrapper
{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 100px;
}
h1
{
    font-size: 40px;
    color: #FFF;
    margin-bottom: 20px;
}
p
{
    font-size: 30px;
    color: #c0c0c0;
    margin-bottom: 20px;
}
span
{
    font-size: 25px;
    color: #FFF;
}
</style>
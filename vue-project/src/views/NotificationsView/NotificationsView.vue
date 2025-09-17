<template>
    <div class="budget__wrapper">
        <h1>Notifications!</h1>
        <p>You have new message!</p>
    </div>
    <span>Message : Hello this is notifications page nice day!</span>
    <router-link to="/">
        <p>Go home click me!</p>
    </router-link>
    
</template>

<script setup lang="ts">

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
    text-align: center;
}
span
{
    display: block;
    text-align: center;
    color: #FFF;
    font-size: 17px;
    margin-bottom: 20px;
}
</style>
<template>
    <aside class="aside__dashboard">
        <div class="aside__titles">
            <img src="@/assets/images/ManImage.png" alt="ManLogoImage" class="aside__titles-image">
            <h2 class="aside__titles-title">{{ PeoplesNames }}</h2>
        </div>
        <div class="aside__bottom-sections">
            <nav>
                <ul class="aside__list">
                    <li v-for="item in items" :key="item.id">
                        <router-link :to="item.path" class="aside__list-wrapper">
                            <img :src="item.icon" :alt="item.name + ' icon'" class="aside__list-icon">
                            <span class="aside__list-el g-texts">
                                {{ item.name }}
                            </span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { useAsideStore } from '@/stores/asideStore'

const store = useAsideStore()
const items = computed(()=>store.items)

const PeoplesNames = ref('Soibi-Bobo')
</script>

<style scoped lang="scss">
@use '@/components/mainAside/mainAside.scss';
</style>
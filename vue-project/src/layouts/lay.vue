<template>
    <mainAside />

    <main>
      <slot></slot>
    </main>
    
</template>
<script setup lang="ts">
  import mainAside from "@/components/mainAside/mainAside.vue";

</script>

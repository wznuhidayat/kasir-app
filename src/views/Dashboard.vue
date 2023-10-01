<template>
    
</template>
   
<script setup>
import { onMounted } from 'vue';
import { useUserStore } from "../store/auth";

const authStore = useUserStore();
onMounted(async()=>{
    await authStore.getUser();
})
</script>
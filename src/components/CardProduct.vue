<template>
    <div class="card bg-base-100 shadow-xl" style="padding: 0.5rem">
        <figure class="px-1 pt-1">
            <img :src="`${baseUrl}${product.image}`" alt="{{ product.name }}" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center " style="padding: 0.5rem">
            <h2 class="card-title text-neutral">{{ product.name }}</h2>
            <p class="text-neutral">{{ product.price }}</p>
        
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['product'])
const baseUrl = "http://localhost:2000/images/products/";
</script>
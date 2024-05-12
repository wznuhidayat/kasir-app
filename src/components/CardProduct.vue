<template >
    <div class="card bg-base-100 shadow-xl " style="padding: 0.5rem">
        
        <figure class="px-1 pt-1 ">
            <img :src="`${baseUrl}${product.image}`" alt="{{ product.name }}" class="rounded-xl object-cover object-center w-full h-32" />
        </figure>
        <div class="card-body items-center text-center" style="padding: 0.5rem">
            <!-- <span class="indicator-item indicator-top indicator-end badge badge-secondary"></span> -->
                <h2 class="card-title text-neutral">{{ product.name }}</h2>
                <p class="text-neutral">{{ formattedPrice(product.price) }}</p>
            
            </div>
            
    </div>
    
</template>
<script setup>
const props = defineProps(['product'])
import { formattedPrice } from "@/utils/formatter";
const baseUrl = "http://localhost:2000/images/products/";
</script>
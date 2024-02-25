<template>
    <div class="card text-primary bg-base-100">
        <div class="card-header">
            <h2 class="text-left font-bold text-black">Products</h2>
        </div>
        <div class="card-body">
            <div class="flex flex-row mb-2">
                <router-link  to="/products/create" class="btn btn-primary text-white">Add Product</router-link>
            </div>
            <Alert class="mb-2" :message="productStore.alertRef.message" :statusAlert="productStore.alertRef.status"  :typeAlert="productStore.alertRef.type"/>
            <div class="overflow-x-auto">
                <table class="table">
                    <!-- head -->
                    <thead class=" text-slate-50 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 py-36">
                        <tr>
                            <th>No</th>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th width="10">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr v-for="(product, index) in productStore.products" :key="index">
                            
                            <th>{{ index+1 }}</th>
                            <td>{{ product.code }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.category.name }}</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-error text-white"  @click.prevent="productStore.deleteProduct(product.id)">delete</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
   
<script setup>
import { onMounted } from 'vue';
import { useUserStore } from "@/store/auth";
import { useProducts } from "@/store/products";
import Alert from '@/components/Alert.vue'
const authStore = useUserStore();
const productStore = useProducts();


onMounted(async () => {
    await productStore.getProducts();
})

</script>
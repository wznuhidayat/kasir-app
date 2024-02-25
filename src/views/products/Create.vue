<template>
    <div class="card  text-primary bg-base-100">
        <div class="card-header">
            <h2 class="text-left font-bold text-black">Form Category</h2>
        </div>
        <form @submit.prevent="submitForm">
        <div class="card-body">
           
            <div class="label">
                    <span class="label-text">Code</span>
                </div>
                <input type="text" placeholder="Code Product" v-model="form.code" class="input input-bordered w-full max-w-xs" />
                <div class="label">
                    <span class="label-text">Name</span>
                </div>
                <input type="text" placeholder="Name Product"  v-model="form.name" class="input input-bordered w-full max-w-xs" />
                <div class="label">
                    <span class="label-text">Category</span>
                </div>
                <select class="select select-bordered w-full max-w-xs" v-model="form.category_id">
                    
                <option disabled selected>Selcect Category</option>
                <option v-for="(category, index) in categoryStore.categories" :value="category.id"    >{{ category.name }}</option>
                </select>
        </div>
        <div class="card-footer">
            <div class="flex justify-between ">
                <router-link  to="/products" class="btn btn-primary-content">Back</router-link>
                <button  class="btn btn-primary">Save</button>
            </div>
        </div>
        </form>
    </div>
   
</template>
   
<script setup>
import { onMounted } from 'vue';
import { useUserStore } from "@/store/auth";
import { useCategories } from '@/store/categories';
import { useProducts } from '@/store/products';
import { reactive } from 'vue';
const authStore = useUserStore();
const categoryStore = useCategories();
const productStore = useProducts();
const form = reactive({
        code: "",
        name: "",
        category_id: "",
      });
      
onMounted(async () => {
    await authStore.getUser();
    await categoryStore.getCategories();
})
    function submitForm() {
        return productStore.storeProduct(form);
    }
    
</script>
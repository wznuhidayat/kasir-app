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
                <input type="text" placeholder="Code Category" v-model="form.code" :class="categoryStore.errors.code == '' ? 'input input-bordered w-full max-w-xs' : 'input input-bordered input-error w-full max-w-xs'" />
                <div class="label" v-if="categoryStore.errors.code"><span class="label-text-alt text-error">{{ categoryStore.errors.code }}</span> </div>
                <div class="label">
                    <span class="label-text">Name</span>
                </div>
                <input type="text" placeholder="Name Category"  v-model="form.name" :class="categoryStore.errors.name == '' ? 'input input-bordered w-full max-w-xs' : 'input input-bordered input-error w-full max-w-xs'" />
                <div class="label" v-if="categoryStore.errors.name"><span class="label-text-alt text-error">{{ categoryStore.errors.name }}</span> </div>
            
        </div>
        <div class="card-footer">
            <div class="flex justify-between ">
                <router-link  to="/category" class="btn btn-primary-content">Back</router-link>
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
import { reactive } from 'vue';
const authStore = useUserStore();
const categoryStore = useCategories();
const form = reactive({
        code: "",
        name: "",
      });
      
onMounted(async () => {
    await authStore.getUser();
    
})
    function submitForm() {
        return categoryStore.storeCategories(form);
    }
    
</script>
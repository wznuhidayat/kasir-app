<template>
    <div class="card text-neutral bg-base-100">
        <div class="card-header">
            <h2 class="text-left font-bold text-black">Category</h2>
        </div>
        <div class="card-body">
            <div class="flex flex-row mb-2">
                <router-link  to="/category/create" class="btn btn-primary ">Add Category</router-link>
            </div>
            <Alert class="mb-2" :message="categoryStore.alertRef.message" :statusAlert="categoryStore.alertRef.status"  :typeAlert="categoryStore.alertRef.type"/>
            <div class="overflow-x-auto">
                <table class="table">
                    <!-- head -->
                    <thead >
                        <tr>
                            <th>No</th>
                            <th>Code</th>
                            <th>Name</th>
                            <th width="10">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr v-for="(category, index) in categoryStore.categories" :key="index">
                            
                            <th>{{ index+1 }}</th>
                            <td>{{ category.code }}</td>
                            <td>{{ category.name }}</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-error text-white"  @click.prevent="categoryStore.deleteCategories(category.id)">delete</button>
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
import { useCategories } from "@/store/categories";
import Alert from '@/components/Alert.vue'
import { reactive } from 'vue';
const authStore = useUserStore();
const categoryStore = useCategories();


onMounted(async () => {
    await categoryStore.getCategories();
})
// function deleteCategory(id) { 
//     return categoryStore.deleteCategories(id);
//  }
// const onDelete = async (categoryId) => {
//   try {
//     await categoryStore.deleteCategories(categoryId);
    
//   } catch (error) {
//     alertRef.status = true;
//     alertRef.message = 'Failed to delete category.';
//   }
// };
</script>
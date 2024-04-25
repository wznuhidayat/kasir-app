<template>
    <div class="w-full relative " style=" height: 700px;">
        <div class="w-2/3 text-natural px-4">
            <div class="card bg-base-100" style="padding: 0.5rem;">
                <div class="flex px-0">
                    <button :class="getClassCategoriesActive(category.id)" v-for="(category, index) in categoryStore.categories" :key="index" @click="productStore.toggleCategoresFilter(category.id)">{{ category.name }}</button>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-4 overflow-y-auto scrollbar-thin py-5">
                <CardProduct v-for="(product, index) in productStore.products" :key="index" :product="product"></CardProduct>
            </div>
        </div>
        <div class="w-1/3 h-full absolute top-0 right-0" >
            <div class="card bg-base-100 h-full">
                <div class="card-header">
                    <h2 class="card-title text-neutral">Order Menu</h2>
                </div>
                <div class="card-body text-neutral p-0 mt-4">
                    <table class="table w-full">
    <!-- head -->
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th ></th>
                        </tr>
                        </thead>
                        <tbody>
                        <!-- row 1 -->
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>1</td>
                            <td>$ 2.000</td>
                            <td>
                                <a href="javascript:;" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></a>
</td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>1</td>
                            <td>$ 2.000</td>
                            <td>
                                <a href="javascript:;" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></a>
</td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>1</td>
                            <td>$ 2.000</td>
                            <td>
                                <a href="javascript:;" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></a>
</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer text-neutral">
                    <div class="flex justify-between py-1">
                        <div class="">Subtotal</div>
                        <div class="">$ 4.000</div>
                    </div>
                    <div class="flex justify-between py-1">
                        <div class="">Discount</div>
                        <div class="">$ 0</div>
                    </div>
                    <div class="flex justify-between py-1">
                        <div class="">Payable Amount</div>
                        <div class="">$ 4.000</div>
                    </div>
                    <button class="btn btn-wide btn-block btn-success mt-4">Pay</button>
                </div>
            </div>
         </div>
    </div>
    <!-- <div class="grid grid-cols-3 gap-3 h-full">
        <div class="col-span-2 row-span-1  card text-neutral bg-base-100">
            <div class="card-body"></div>
        </div>
        <div class=" col-span-1 row-span-12 card text-neutral bg-base-100">
            <div class="card-header"></div>
            <div class="card-body"></div>
        </div>
        <div class="col-span-2 row-span-2  card text-neutral bg-base-100">
            <div class="card-header"></div>
            <div class="card-body"></div>
        </div>
        
    </div> -->
</template>
<script setup>
import CardProduct from '@/components/CardProduct.vue'
import { onMounted } from 'vue';
import { useCategories } from "@/store/categories";
import { useProducts } from "@/store/products"
const categoryStore = useCategories();
const productStore = useProducts();

onMounted(async () => {
    await categoryStore.getCategories();
    await productStore.getProducts();
})
function getClassCategoriesActive(id) {
    if (productStore.filterCategories.indexOf(id) !== -1) {
        return 'btn btn-active btn-primary mr-2 px-8'
    }else{
        return 'btn btn-active btn-gray mr-2 px-8'
    }
}

</script>
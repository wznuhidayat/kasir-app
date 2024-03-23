<template>
    <div class="card  text-primary bg-base-100">
        <div class="card-header">
            <h2 class="text-left font-bold text-black">Form Category</h2>
        </div>
        <Toast :message="productStore.alertRef.message" :statusAlert="productStore.alertRef.status"  :typeAlert="productStore.alertRef.type"/>
        <form @submit.prevent="submitForm">
        <div class="card-body">
                <div class="label">
                    <span class="label-text">Image</span>
                </div>
                <input type="file" id="image" @change="handleFileUpload($event)"  class="file-input file-input-bordered w-full max-w-xs" />
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
                <div class="label">
                    <span class="label-text">Price</span>
                </div>
                <input type="text" placeholder="Rp. xxx"  v-model="formattedPrice" value=""class="input input-bordered w-full max-w-xs" />
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
import { onMounted, computed } from 'vue';
import { useUserStore } from "@/store/auth";
import { useCategories } from '@/store/categories';
import { useProducts } from '@/store/products';
import { reactive } from 'vue';
import Toast from '@/components/Toast.vue';
const authStore = useUserStore();
const categoryStore = useCategories();
const productStore = useProducts();
const form = reactive({
        code: "",
        name: "",
        category_id: "",
        image: null,
        price: "",
      });
      const formattedPrice = computed({
        get() {
            var prefix = 'Rp. '
            var split = form.price.split(",");
            var sisa = split[0].length % 3;
            var rupiah = split[0].substr(0, sisa);
            var ribuan = split[0].substr(sisa).match(/\d{3}/gi);

            // tambahkan titik jika yang di input sudah menjadi angka ribuan
            if (ribuan) {
                var separator = sisa ? "." : "";
                rupiah += separator + ribuan.join(".");
            }

            rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
            return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";

        },
        set(newValue) {
            // Strip off non-numeric characters and set the value to the form's price
            if (newValue.toString().charAt(0) === '0') {
                newValue = newValue.toString().substring(1);
            }
            form.price = newValue.toString().replace(/[^,\d]/g, "");
        }
        });
     
onMounted(async () => {
    await authStore.getUser();
    await categoryStore.getCategories();
})
    function submitForm() {
        return productStore.storeProduct(form);
    }
    function ubahFormatRupiah(angka) {
        $(angka).val(formatRupiah(angka.value, "Rp. "));
    }
    function formatRupiah(prefix = 'Rp. ') {
        var angka = this.form.price
        if (angka.toString().charAt(0) === '0') {
            angka = angka.toString().substring(1);
        }
        var number_string = angka.toString().replace(/[^,\d]/g, "");
        split = number_string.split(",");
        sisa = split[0].length % 3;
        rupiah = split[0].substr(0, sisa);
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if (ribuan) {
            separator = sisa ? "." : "";
            rupiah += separator + ribuan.join(".");
        }

        rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
        return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
    }
    const handleFileUpload = (e) => {
        form.image = e.target.files[0]
    }
    
</script>
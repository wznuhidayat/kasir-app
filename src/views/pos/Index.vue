<template>
    <div class="w-full relative " style=" height: 700px;">
        <div class="w-2/3 text-natural px-4">
            <div class="card bg-base-100" style="padding: 0.5rem;">
                <Alert class="mb-2" :message="posStore.alertRef.message" :statusAlert="posStore.alertRef.status"  :typeAlert="posStore.alertRef.type"/>
                <div class="flex px-0">
                    <button :class="getClassCategoriesActive(category.id)" v-for="(category, index) in categoryStore.categories" :key="index" @click="productStore.toggleCategoresFilter(category.id)">{{ category.name }}</button>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-4 overflow-y-auto scrollbar-thin py-5">
                <CardProduct v-for="(product, index) in productStore.products" :key="index" :product="product" @click="posStore.addCart(product)"></CardProduct>
            </div>
        </div>
        <div class="w-1/3 h-full absolute top-0 right-0" >
            <div class="card bg-base-100 h-full">
                <div class="card-header">
                    <h2 class="card-title text-neutral">Order Menu</h2>
                </div>
                <div class="card-body text-neutral p-0 mt-4">
                    <table class="table w-full">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th ></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(cart, index) in posStore.carts">
                            <td>{{ cart.name }}</td>
                            <td>{{ cart.qty  }}</td>
                            <td>{{ formattedPrice(cart.price) }}</td>
                            <td>
                                <a @click="posStore.removeCart(cart.id)" href="javascript:;" class="text-error"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
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
                        <div class="">{{ posStore.totalPrice ? formattedPrice(posStore.totalPrice,'Rp. ') : 'Rp. 0' }}</div>
                    </div>
                    <div class="flex justify-between py-1">
                        <div class="">Discount</div>
                        <div class="">$ 0</div>
                    </div>
                    <div class="flex justify-between py-1">
                        <div class="">Payable Amount</div>
                        <div class="">$ 4.000</div>
                    </div>
                    <div class="flex w-full gap-2">
                        <button class="btn w-1/6 btn-auto btn-block" @click="posStore.reset()">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd" />
</svg>  
  </button>
                       
                        <button class="btn w-5/6 btn-wide btn-block btn-primary "  onclick="paymentModal.showModal()">Pay</button>
                    </div>
                </div>
            </div>
         </div>
    </div>
    <dialog id="paymentModal" class="modal">
    <div class="modal-box">
        <form method="dialog" @submit.prevent="submitPay">
        <button type="button"class="btn btn-sm btn-circle btn-dark absolute right-2 top-2">✕</button>
       
        <h3 class="font-bold text-lg text-neutral">Payment</h3>
        <div class="stat">
            <div class="stat-title text-left">Bill</div>
            <div class="stat-value text-neutral text-left">{{ posStore.totalPrice ? formattedPrice(posStore.totalPrice,'Rp. ') : 'Rp. 0' }}</div>
            <div class="stat-desc">- {{ formattedPrice(totalDiscount,'Rp. ') }}</div>
        </div>
        <label class="form-control w-full ">
            <div class="label">
                <span class="label-text">Discount</span>
            </div>
            <input type="text" placeholder="0,0 %" class="input input-bordered text-neutral w-full " v-model="form.discount" @keypress="NumbersOnly" />
       
        </label>
        <label class="form-control w-full ">
            <div class="label">
                <span class="label-text">Amount Pay</span>
            </div>
            <input type="text" placeholder="Rp 000.000" class="input input-bordered text-neutral w-full " v-model="AmountPay" />
       
        </label>
        <div class="modal-action">
            <div class="stat p-0">
                <div class="stat-title text-left text-xs">Remaining Money {{ form.amountPay }} - {{ parseInt(posStore.totalPrice) }}</div>
                <div class="stat-value text-neutral text-base text-left">{{ parseInt(posStore.totalPrice) > parseInt(form.amountPay) ? '-'+formattedPrice(remainingMoney,'Rp. ') : formattedPrice(remainingMoney,'Rp. ') }}</div>
            </div>
            <button class="btn btn-primary" >Pay Now</button>
        </div>
        </form>
    </div>

    </dialog>
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
import { onMounted,computed, reactive } from 'vue';
import { useCategories } from "@/store/categories";
import { useProducts } from "@/store/products";
import { usePos } from "@/store/pos";
import { formattedPrice } from "@/utils/formatter";
import Alert from '@/components/Alert.vue'

const categoryStore = useCategories();
const productStore = useProducts();
const posStore = usePos();
const form = reactive({
    discount: "",
    amountPay: ""});
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
function NumbersOnly(evt) {
    evt = evt || window.event;
    var charCode = evt.which || evt.keyCode;
    var inputValue = evt.target.value;

    // Check if input exceeds 100
    if (parseInt(inputValue + String.fromCharCode(charCode)) > 100) {
        evt.preventDefault();
    }

    // Allow digits, backspace, delete, and dot
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 && charCode !== 8 && charCode !== 46) {
        evt.preventDefault();
    }
}

const AmountPay = computed({
        get() {
            var prefix = 'Rp. '
            var split = form.amountPay.split(",");
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
            form.amountPay = newValue.toString().replace(/[^,\d]/g, "");
        }
        });
// const  totalDiscount(){
//             
//         }
const totalDiscount = computed(() => {
    const totalDisc = posStore.totalPrice * (parseFloat(form.discount) / 100);
    return isNaN(totalDisc) ? 0 : totalDisc;
})
const remainingMoney = computed(() => {
    return posStore.totalPrice - parseInt(form.amountPay);
})

function submitPay() {
    paymentModal.close();
    form.discount = '';
    form.AmountPay = '';
    return posStore.storePay(form);
}
</script>

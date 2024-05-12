<template>
   <span class="text-center"><strong>Weez F&D</strong></span>
   <br><br>
   <div class="flex justify-between">
      <span>Code Transaction</span>
      <span>{{ data.code }}</span>
   </div>
   <div class="flex justify-between">
      <span>Date Time </span>
      <span>{{ parseDate(data.dtTransaction) }}</span>
   </div>
   <hr class="border-dashed border-1 ">
   <div v-for="(order, index) in data.detailTransactions" :key="index" class="flex justify-between ">
      <span> {{ order.product.name }} <br> {{  formattedPrice(order.price)  }} - {{ order.qty }}x</span>
      <span > <br> {{ formattedPrice(order.price * order.qty)  }}</span>
   </div>
   <hr class="border-dashed border-1 ">
   <div class="flex justify-between">
      <span>Total</span>
      <span>{{ formattedPrice(parseInt(data.totalTransaction)) }}</span>
   </div>
</template>
   
<script setup>
import { onMounted, ref } from 'vue';
import { formattedPrice, parseDate } from "@/utils/formatter";
   import { useHistoryOrder } from "@/store/historyOrder";
   const HistoryOrderStore = useHistoryOrder();
   import { useRoute } from 'vue-router'
   const route = useRoute()
   const data = ref({});
   onMounted(async () => {
      const response = await HistoryOrderStore.getDetailOrder(route.params.id);
      data.value = response.data.sales
      window.print();
   })
</script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
    @media print {
        .page-break {
            page-break-after: always;
        }

        html,
        body {
            height: 100%;
        }
    }

    @page {
        margin: 7px 13px;
        size: 75mm 60mm potrait;
    }
</style>

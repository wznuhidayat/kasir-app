import axios from "axios";
import { defineStore } from "pinia";
import { ref, reactive, inject} from 'vue';

export const useHistoryOrder = defineStore("historyOrder", {
    state: () => ({
        historyOrders: ref([]),
    }),
    
    actions: {
      async getHistoryOrder(){
        const data = await axios.get(`http://localhost:2000/historyOrder`);
        this.historyOrders = data.data.sales;
      },
      async getDetailOrder(id){
        const response = await axios.post("http://localhost:2000/detailOrder",{
            id : id,
        });
        return response;
      }
      
    },
    
  });
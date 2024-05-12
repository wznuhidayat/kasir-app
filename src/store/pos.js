import axios from "axios";
import Swal from 'sweetalert2'
import { defineStore } from "pinia";
import { ref, reactive, inject} from 'vue';

export const usePos = defineStore("pos", {
    state: () => ({
        carts: ref([]),
        alertRef: reactive({ status: false ,message:'', type : ''})
    }),
    
    actions: {
        async addCart(data,qty = 1){
            const item = this.carts.find(item => item.id === data.id);
            if (item) {
                item.qty += qty; // Update quantity
            } else {
                data.qty = qty;
                this.carts.push(data);
            }
        },
        async removeCart(id){
            const index = this.carts.findIndex(item => item.id === id);
            this.carts.splice(index,1); 
        },
        async reset(){
            this.carts = [];
        },
        async storePay(data) {
            try {
              const response = await axios.post("http://localhost:2000/storeSales",{
                  discount : data.discount,
                  amountPay: data.amountPay,
                  carts : this.carts,
              });
              this.setMessage(true, response.data.message, 'success');
              this.carts = [];
              this.router.push('/pos');
            } catch (error) {
                console.log(error);
            //   this.setMessage(true, 'a system error occurred', 'error');
            }
        },
        setMessage(status, message, type) { 
                this.alertRef.status = status;
                this.alertRef.message = message;
                this.alertRef.type = type;
                setTimeout(() => this.alertRef.status = false,3000)
        }
    },
    getters: {
        totalPrice() {
            return this.carts.reduce((total, item) => total + (item.price * item.qty), 0);
        },
       
    },
  });
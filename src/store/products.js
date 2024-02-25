import axios from "axios";
import Swal from 'sweetalert2'
import { defineStore } from "pinia";
import { ref, reactive, inject} from 'vue';

export const useProducts = defineStore("products", {
    state: () => ({
        products: ref([]),
        alertRef: reactive({ status: false ,message:'', type : ''})
    }),
    
    actions: {
      async getProducts(){
        const data = await axios.get('http://localhost:2000/products');
        this.products = data.data.products;
      },
      async storeProduct(data) {
        const response = await axios.post("http://localhost:2000/products",{
            code : data.code,
            name: data.name,
            category_id: data.category_id
        });
        this.setMessage(true, response.data.message, 'success');
        this.router.push('/products');
      },
      async deleteProduct(id){
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
          if (result.isConfirmed) {
            await axios.delete('http://localhost:2000/products/' + id)
            .then(response => {
                this.getProducts();
                this.setMessage(true, response.data.message, 'error');
            })
            .catch(error => {
                alert("Something went wrong");
            });
          }
        });
      
      },
      setMessage(status, message, type) { 
            this.alertRef.status = status;
            this.alertRef.message = message;
            this.alertRef.type = type;
            setTimeout(() => this.alertRef.status = false,3000)
      }
    },
    
  });
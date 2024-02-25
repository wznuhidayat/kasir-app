import axios from "axios";
import { defineStore } from "pinia";
import { ref, reactive, inject} from 'vue';
import Swal from 'sweetalert2'

export const useCategories = defineStore("categories", {
    state: () => ({
        categories: ref([]),
        alertRef: reactive({ status: false ,message:'', type : ''})
    }),
    
    actions: {
      async getToken(){
        await axios.get('http://localhost:8989/sanctum/csrf-cookie',{
          withCredentials: true, // Add this line
        });
      },  
      async getCategories(){
        const data = await axios.get('http://localhost:2000/categories');
        this.categories = data.data.categories;
      },
      async storeCategories(data) {
        const response = await axios.post("http://localhost:2000/categories",{
            code : data.code,
            name: data.name
        });
        this.setMessage(true, response.data.message, 'success');
        this.router.push('/category');
      },
      async deleteCategories(id){
        
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
            await axios.delete('http://localhost:2000/categories/' + id)
            .then(response => {
                this.getCategories();
                this.setMessage(true, response.data.message, 'error');
            })
            .catch(error => {
                alert("Something went wrong");
            })
          }
        });
         // 
      },
      setMessage(status, message, type) { 
            this.alertRef.status = status;
            this.alertRef.message = message;
            this.alertRef.type = type;
            setTimeout(() => this.alertRef.status = false,3000)
      }
      
    },
  });
// /store/user.js

import axios from "axios";
import Toastify from "toastify-js";
import { defineStore } from "pinia";
// axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
axios.defaults.withCredentials = true;
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    authenticated: false,
    errors: {
      email : '',
      password : ''
    }
  }),
  persist: true,
  getters: {
    loggedInUser: (state) => state.user
  },
  actions: {
    async getToken(){
      await axios.get('http://localhost:8989/sanctum/csrf-cookie',{
        withCredentials: true, // Add this line
      });
    },  
    async getUser(){
      try {
        await axios
          .get('http://localhost:2000/user')
          .then((res) => {
            this.user = res.data.user;
            this.setAuthentication(true)
            // user.value = res.data.map((item) => item.name).toString()
          })
          .catch((err) => {
            this.setAuthentication(false)
          })
      } catch (error) {
        this.setAuthentication(false)
      }
    },
    async signIn(data) {
      
      await this.getToken();
      const user = await axios.post("http://localhost:8989/api/login",{
          email : data.email,
          password: data.password
      },{
        withCredentials: true, // Add this line
      });
      
      this.router.push('/dashboard');
    },
    setAuthentication(status){
      this.authenticated = status;
    },
    clearValidation(status){
      this.errors.email = '';
      this.errors.password = '';
    },
    async doLogin(data){
      await axios.post('http://localhost:2000/login', data, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res) => {
        this.setAuthentication(true)
        this.router.push('/dashboard');
      })
      .catch((err) => {
        if(err.response.status == 422){
          const errs =err.response.data.errors;
          errs.forEach(element => {
            if(element.path == 'email'){
              this.errors.email = element.msg;
            }
            if(element.path == 'password'){
              this.errors.password = element.msg;
            }
          });
        }
        if(err.response.status == 401){
          console.log(err.response);
          Toastify({
            text: err.response.data.message,
            className: "error",
            
          }).showToast();
        }
      })
    },
    async logout(){
      try {
        axios
          .delete('http://localhost:2000/logout')
          .then((res) => {
            this.setAuthentication(false)
            this.router.push('/login');
          })
          .catch((err) => {
            console.log(err.response.data.message)
          })
      } catch (error) {
        console.log(error)
      }
    },
    async signOut() {
      
      try {
        // Obtain a new CSRF token before signing out
        const csrfToken = await  this.getToken();
    
        // Make the logout request
        await axios.post("http://localhost:8989/api/logout", null,
             {
              headers: {
                'X-CSRF-TOKEN': csrfToken,
            },
          withCredentials: true, // Include credentials in the request
        });
    
        // Clear user data or perform other necessary actions
        this.user = null;
    
        // Redirect to the login page
        this.router.push('/login');
      } catch (error) {
        console.error("Error during logout:", error);
        // Handle errors as needed
      }
    },
  },
});
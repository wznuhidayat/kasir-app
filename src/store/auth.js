// /store/user.js

import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  getters: {
    loggedInUser: (state) => state.user
  },
  actions: {
    async getToken(){
      await axios.get('http://localhost:8989/sanctum/csrf-cookie',{
        withCredentials: true, // Add this line
      })
    },
    async getUser(){
      this.getToken();
      const data = await axios.get('http://localhost:8989/api/user',{
        withCredentials: true, // Add this line
      });
      this.user = data.data;
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
    async signOut() {
      const csrfToken = await this.getToken(); // Obtain a new CSRF token before signing out
      const user = await axios.post("http://localhost:8989/api/logout", null, {
        headers: {
          "X-XSRF-TOKEN": csrfToken, // Replace 'csrfToken' with the actual token value
        },
        withCredentials: true,
      });
      this.user = null;
      this.router.push('/login');
    },
  },
});
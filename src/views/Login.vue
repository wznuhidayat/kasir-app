<template>
  <div class="hero min-h-screen min-w-full bg-base-100" >
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl text-primary font-bold">Login now!</h1>
      <p class="py-6 text-secondary">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" v-model="form.email" class="input input-bordered rounded-none text-secondary" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" v-model="form.password" class="input input-bordered rounded-none text-secondary" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary rounded-none">Login</button>
        </div>
        </form>
      </div>
  </div>
</div>
  
</template>
  
  <script>
  import { ref } from 'vue';
  import { useUserStore } from "@/store/auth";
  import  axios  from 'axios';
  
  axios.default.withCredentials = true;

      
  export default {
    setup() {
      const form = ref({
        email: "",
        password: "",
      });
      const userStore = useUserStore();
      return { userStore, form };
    },
    
    methods: {
      async login() {
        // return await this.userStore.signIn(this.form);
        return await this.userStore.doLogin(this.form);

        // await axios.get('http://localhost:8989/sanctum/csrf-cookie')
        //   const user = await axios.post("http://localhost:8989/api/login",{
        //     email : this.form.email,
        //     password: this.form.password
        // });

        // console.log(user);
      },
    },
  };

  </script>
  
  <style scoped>
  
  </style>
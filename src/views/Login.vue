<template>
  <div class="hero min-h-screen min-w-full bg-base-100" >
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl text-neutral font-bold">Login now!</h1>
      <p class="py-6 text-secondary">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" v-model="form.email" :class="userStore.errors.email == '' ? 'input input-bordered text-secondary': 'input input-bordered input-error text-secondary'" />
          <div class="label" v-if="userStore.errors.email"><span class="label-text-alt text-error">{{ userStore.errors.email }}</span> </div>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" v-model="form.password" :class="userStore.errors.password == '' ? 'input input-bordered text-secondary': 'input input-bordered input-error text-secondary'"  />
          <div class="label" v-if="userStore.errors.password"><span class="label-text-alt text-error">{{ userStore.errors.password }}</span> </div>
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
  
  <script setup>
  import { reactive,onMounted } from 'vue';
  import { useUserStore } from "@/store/auth";
  import  axios  from 'axios';
  
  axios.default.withCredentials = true;
  const userStore = useUserStore();
  const form = reactive({
        email: "",
        password: "",
      });
  
onMounted(() => {
  userStore.clearValidation(); // <div>
})
  // console.log(userStore.errors.email != '');

  async function login() {
        // return await this.userStore.signIn(this.form);
        const data = await userStore.doLogin(form);
        return data;

      }
     
  </script>
  
  <style scoped>
  
  </style>
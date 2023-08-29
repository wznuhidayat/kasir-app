<template>
   <div class="hero min-h-screen min-w-full bg-base-200" >
  <div class="hero-content " >
    <div class="text-center lg:text-right bg-cover" style="background-image: url(https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80);">
      <h1 class="text-5xl font-bold">Register now!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input type="text" placeholder="username" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
         
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password Confirm</span>
          </label>
          <input type="text" placeholder="password confirm" class="input input-bordered" />
          
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Sign up</button>
        </div>
      </div>
  </div>
</div>
  
</template>
  
  <script>
  import { mapActions } from "vuex";
  

  </script>
  
  <style scoped>
  
  </style>
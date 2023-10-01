<template>
   <div class="hero min-h-screen min-w-full bg-base-200" >
  <div class="hero-content " >
    <div class="text-center lg:text-right bg-cover" >
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
          <button class="btn btn-warning">Sign up</button>
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
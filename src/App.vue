<script setup>
import { RouterView } from 'vue-router';
import Login from '@/views/Login.vue'
</script>

<template>
  <!-- <h1>Hello App!</h1>
  <p>
      <ul>
        <li><router-link to="/">Go to Home</router-link></li>
        <li><router-link to="/login">Go to About</router-link></li>
      </ul>
  </p> -->
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <component :is="$route.meta.layout" />
</template>

<style scoped>
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  } */
</style>

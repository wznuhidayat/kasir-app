import { createRouter , createWebHashHistory } from "vue-router";
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/Login', component: Login },
  { path: '/register', component: Register },
]

const router = new createRouter({
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
  routes,
});

export default router;
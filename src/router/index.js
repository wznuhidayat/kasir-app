import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Category from "@/views/category/Index.vue";
import Pos from "@/views/pos/Index.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import { useUserStore } from "../store/auth";
// import VueRouter from 'vue-router'

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    
    meta: {
      // requireAuth: true,
      layout: AuthLayout,
    },
  },
  {
    path: "/Login",
    name: 'login',
    component: Login,
    beforeEnter: preventAuthPage,
    meta: {
      // requireAuth: true,
      layout: AuthLayout,
    },
  },
  { path: "/register", component: Register },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    beforeEnter: requireAuth,
    meta: {
      // requireAuth: true,
      layout: AdminLayout,
    },
  },
  {
    path: "/pos",
    component: Pos,
    beforeEnter: requireAuth,
    meta: {
      // requireAuth: true,
      layout: AdminLayout,
    },
  },
  {
    path: "/category",
    component: Category,
    beforeEnter: requireAuth,
    meta: {
      // requireAuth: true,
      layout: AdminLayout,
    },
  },
  {
    path: "/category/create",
    name: 'category.create',
    beforeEnter: requireAuth,
    component: import('../views/category/Create.vue'),
    meta: {
      // requireAuth: true,
      layout: AdminLayout,
    },
  },
  {
    path: "/products",
    name: 'products',
    beforeEnter: requireAuth,
    component: import('../views/products/Index.vue'),
    meta: {
      // requireAuth: true,
      layout: AdminLayout,
    },
  },
  {
    path: "/products/create",
    name: 'products.create',
    beforeEnter: requireAuth,
    component: import('../views/products/Create.vue'),
    meta: {
      // requireAuth: true,
      layout: AdminLayout,
    },
  },
];

const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // base: process.env.BASE_URL,
  routes,
});
// const router = new VueRouter({
//   mode: 'history',
//   routes,
// });
function requireAuth(to, from, next) {
  const authStore = useUserStore();
  console.log(authStore.authenticated);
  if (authStore.authenticated == true) next(  )
  else next({ name: 'login' })
}
function preventAuthPage(to, from, next) {
  const authStore = useUserStore();
  console.log(authStore.authenticated);
  if (authStore.authenticated == false) next()
  else next({ name: 'dashboard' })
}
// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   if (authRequired && !auth.user) {
//       auth.returnUrl = to.fullPath;
//       return '/login';
//   }
// });
export default router;

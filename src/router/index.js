import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Category from "@/views/category/Index.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
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
    component: Login,
    meta: {
      // requireAuth: true,
      layout: AuthLayout,
    },
  },
  { path: "/register", component: Register },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: {
      // requireAuth: true,
      layout: AdminLayout,
    },
  },
  {
    path: "/category",
    component: Category,
    meta: {
      // requireAuth: true,
      layout: AdminLayout,
    },
  },
  {
    path: "/category/create",
    name: 'category.create',
    component: import('../views/category/Create.vue'),
    meta: {
      // requireAuth: true,
      layout: AdminLayout,
    },
  },
  {
    path: "/products",
    name: 'products',
    component: import('../views/products/Index.vue'),
    meta: {
      // requireAuth: true,
      layout: AdminLayout,
    },
  },
  {
    path: "/products/create",
    name: 'products.create',
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

import { createApp, markRaw } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
// import VueRouter from "vue-router";

createApp(App).use(router).use(pinia).mount('#app')

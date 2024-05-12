<template>
    <!-- <div class="drawer ode">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <Navbar></Navbar>
            <slot name="content" />
            
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label> 
            <ul class="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
            <li><a>Dashboard</a></li>
            <li><a>Product</a></li>
            </ul>
        
        </div>
        </div> -->
    
    <div class="drawer lg:drawer-open">
        
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content bg-base-200">
            
            <!-- Page content here -->
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            <Navbar :sidebarOpen="sidebarOpen" @toggle-sidebar="toggleSidebar"></Navbar>
            <slot name="content" />
        </div>
        <div class="drawer-side">
            <div class="bg-white">
                <h2 v-if="sidebarOpen" class="text-3xl font-bold py-4 text-gray-900">Weez F&D</h2>
                <h2 v-else class="text-xl font-bold py-4 text-gray-900">Weez</h2>
            </div>
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <transition enter-active-class="duration-300 ease-out" leave-active-class="duration-200 ease-in">
                <ul :class="sidebarOpen ? 'transition duration-300 ease-in-out menu p-4 w-80 min-h-full bg-base-100 gap-y-2 text-base-content text-lg' : 'transition duration-300 ease-in-out menu p-4 w-24 min-h-full bg-base-100 gap-y-2 text-base-content text-lg'">
                <!-- Sidebar content here -->
                <li><router-link to="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                            <path
                                d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path
                                d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                        <span :class="sidebarOpen ? '' : 'hidden'">Dashboard</span></router-link>
                </li>
                <li><router-link to="/historyOrder">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd" />
                    <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                    </svg>



                        <span :class="sidebarOpen ? '' : 'hidden'">Order History</span></router-link>
                </li>
                <li><router-link to="/category"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" class="w-8 h-8">
                            <path fill-rule="evenodd"
                                d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span :class="sidebarOpen ? '' : 'hidden'">Category</span></router-link></li>
                <li><router-link to="/products">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                            <path
                                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                            <path fill-rule="evenodd"
                                d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                                clip-rule="evenodd" />
                        </svg>

                        <span :class="sidebarOpen ? '' : 'hidden'">Products</span></router-link>
                </li>

            </ul>
            </transition>

        </div>
    </div>
</template>

<script setup>
import { HomeModernIcon } from '@heroicons/vue/24/solid'
import Navbar from '@/components/Navbar.vue'
import { ref } from 'vue';
const sidebarOpen = ref(true);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

</script>
<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
}


</style>
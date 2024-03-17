<template>
    <div class="navbar bg-base-100">
        <div class="flex-none">
            <button class="btn btn-square" @click="$emit('toggleSidebar')">
                <svg v-if="sidebarOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>



            </button>
        </div>
        <div class="flex-1">
            <!-- <a class="btn btn-ghost text-xl">daisyUI</a> -->
        </div>
        <div class="flex-none">

            
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabindex="0"
                    class="menu text-gray-800 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a href="javascript:void(0)" @click="logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useUserStore } from "../store/auth";
import Sidebar from './Sidebar.vue';
const authStore = useUserStore();
const props = defineProps(['sidebarOpen'])
onMounted(async () => { 
    // await authStore.getUser();
})
const logout = async () => {
    // Perform logout actions here, such as clearing user authentication state
    // await authStore.signOut(); // Assuming you have a logout method in your store
    await authStore.logout(); // Assuming you have a logout method in your store
}
</script>
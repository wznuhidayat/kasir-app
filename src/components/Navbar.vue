<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <label for="my-drawer-2" tabindex="0" class="btn btn-ghost btn-circle drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" for="my-drawer" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </label>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost normal-case text-xl" v-if="authStore.user">{{ authStore.user.name }}</a>
        </div>
        <div class="navbar-end">
            
            <button class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span class="badge badge-xs badge-primary indicator-item"></span>
                </div>
            </button>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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
const authStore = useUserStore();
onMounted(async () => {
    await authStore.getUser();
})
const logout = async () => {
    // Perform logout actions here, such as clearing user authentication state
    await authStore.signOut(); // Assuming you have a logout method in your store
}
</script>
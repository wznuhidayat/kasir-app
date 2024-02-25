

<template>
   <!-- <div role="alert" class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! Task failed successfully.</span>
    </div> -->
    <Transition>
        <div role="alert" class="alert alert-success" v-if="props.statusAlert && props.typeAlert === 'success'">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{{ props.message }}</span>
        </div>
        <div role="alert" class="alert alert-error " v-else-if="props.statusAlert && props.typeAlert === 'error'">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{{ props.message }}</span>
        </div>
    </Transition>
    
   </template>
   
   <script setup>
   const props = defineProps(['message','statusAlert', 'typeAlert'])
   console.log(props.message,props.typeAlert)
   </script>
   <style>
    /* we will explain what these classes do next! */
    .v-enter-active,
    .v-leave-active {
    transition: opacity 1s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
}
</style>
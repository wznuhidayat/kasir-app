


<template>

    <Transition>
        <div class="toast toast-top toast-end">
            <div class="alert alert-error"  v-if="props.statusAlert && props.typeAlert === 'error'">
            <span>{{ props.message }}</span>
        </div>
    </div>
    </Transition>
    
   </template>
   
   <script setup>
   const props = defineProps(['message','statusAlert', 'typeAlert'])
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
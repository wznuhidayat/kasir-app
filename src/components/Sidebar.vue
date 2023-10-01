
  <template>
   <div class="drawer ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <Navbar></Navbar>
            <!-- Page content here -->
            <slot name="content" />
            <!-- <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> -->
            
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label> 
            <ul class="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
            <!-- Sidebar content here -->
            <li><a>Dashboard</a></li>
            <li><a>Product</a></li>
            </ul>
        
        </div>
        </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/Navbar.vue'
  </script>
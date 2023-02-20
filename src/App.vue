<template>
  <Navbar />
  <div class="bg-white-400 h-screen">
    
  <router-view 
  :baseURL="baseURL"
  >
</router-view >
</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default{
  components:{ Navbar},
  data() {
    return {
      baseURL : "http://localhost:3022/",
    }
  },
}

</script>


<style>

</style>

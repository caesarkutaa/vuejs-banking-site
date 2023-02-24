<template>
  <Navbar />
  <div class="bg-white-400 h-screen">
  <router-view 
  :baseURL="baseURL"
  >
</router-view >
</div>
    <!-- <Footer  /> -->
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"
export default{
  components:{ Navbar ,Footer},
  data() {
    return {
      baseURL : "http://localhost:3022/",
    }
  },
}

</script>


<style>

:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

/* body {
	background: var(--dark-alt);
} */

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
</style>

<template>
    <div  class="bg-red-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
        
        <div class="flex items-center">
            <span class="text-green-500 text-xl mr-l cursor-pointer"></span>
              	<router-link to="/" >
				 	<h1 class="text-x1 text-gray-300">KutaWears</h1>
				</router-link>
            
        </div>
		<!-- search bar -->
		<div class="relative rounded-md shadow-sm">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
    </div>
    <input class="form-input py-2 pl-10 pr-4 rounded-md leading-5 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:shadow-outline-blue" type="search" placeholder="Search" aria-label="Search">
  </div>

			<!-- navbar -->
		<ul class="md:flex md:items-center">
			<li class="md:mx-4 md:my-0 my-6">
				
				<div class="relative inline-block text-left px-4 py-2 ">
				  <div>
					<span class="rounded-md shadow-sm">
					  <button @click="show = !show" type="button" class="inline-flex justify-center w-full rounded-md border  border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-green-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
						{{ label }}
						<svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path>
						</svg>
					  </button>
					</span>
				  </div>
				  <div v-show="show" class="origin-top-right absolute right-0 mt-2 w-56  rounded-md shadow-lg">
					<div class="rounded-md bg-white shadow-xs ">
					  <div class="py-1">
						<router-link to="/login" class="button md:mx-4 block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
							<span class="text-xl hover:text-green-500">Log in</span>
						</router-link>
						<router-link to="/signup" class="button md:mx-4 block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
							<span class="text-xl hover:text-green-500">Sign up</span>
						</router-link>
					  </div>
					</div>
				  </div>
				</div>
				<router-link to="/about" class="button md:mx-4">
				<span class="text-xl hover:text-green-500">About us</span>
			</router-link>
			<router-link to="/portfolio" class="button md:mx-4">
				<span class="text-xl hover:text-green-500">Team</span>
			</router-link>
			<router-link to="/contact" class="button md:mx-4">
				<span class="text-xl hover:text-green-500">Contact</span>
			</router-link>
			<router-link to="/login" class="button md:mx-4">
				<span class="text-xl hover:text-green-500">login</span>
			</router-link>
			</li>
        </ul>
       
    </div>

	


</template>


<script>
export default {
  data() {
    return {
      show: false,
	  isnav:false,
      label: 'Account',
	  name: 'Browse'
    }
  }
}
</script>



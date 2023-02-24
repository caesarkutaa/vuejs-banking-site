<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-md px-8 py-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Log In</h2>
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label class="block text-gray-700 font-bold mb-2" for="email">
                Email Address
              </label>
              <input v-model="email" :class="{'border-red-500': formErrors.email}" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address">
              <p v-if="formErrors.email" class="text-red-500 text-xs italic">{{ formErrors.email }}</p>
            </div>
            <div>
              <label class="block text-gray-700 font-bold mb-2" for="password">
                Password
              </label>
              <input v-model="password" :class="{'border-red-500': formErrors.password}" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
              <p v-if="formErrors.password" class="text-red-500 text-xs italic">{{ formErrors.password }}</p>
            </div>
            <div>
              <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import sweetalert from 'sweetalert'
import axios from 'axios';
  
  export default {
    props : ["baseURL"],
    data() {
      return {
        email: '',
        password: '',
        formErrors: {},
      };
    },
    methods: {
     async handleSubmit() {
        // Validate form data
         const login = {
          email: this.email,
          password:this.password
        }
          //Submit form data
        
              await axios({
                method:'post',
                url:this.baseURL + "user/login",
                data:JSON.stringify(login),
                headers:{'Content-Type':"application/json"}
              }).then(()=>{
                this.$router.replace("/");
                swal({
                  text: "login successfully",
                        icon: "success",
                      });
                  console.log("login successfully")
              }).catch(err =>{
                console.log(err);
              })
          //e.g. send request to server
          
          
        }
      },
  }
  
  </script>
  
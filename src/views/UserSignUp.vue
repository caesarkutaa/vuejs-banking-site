<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center px-4">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">Sign Up</h2>
      <form @submit="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="firstname">
            Firstname
          </label>
          <input v-model="firstname" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Enter your name" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="lastname">
            Lastname
          </label>
          <input v-model="lastname" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Enter your name" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="email" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="phoneNumber">
            phoneNumber
          </label>
          <input v-model="phoneNumber" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Enter your phoneNumber" required>
        </div>
         <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="IDcardNumber">
            IDcardNumber
          </label>
          <input v-model="IDcardNumber" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="idcard" type="text" placeholder="Enter your IDcardNumber" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="Address">
            Address
          </label>
          <input v-model="Address" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="address" placeholder="Enter your Address" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="Address">
            Date Of Birth
          </label>
          <input v-model="DOF" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dof" type="date"  required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" required>
        </div>
        <!-- <div class="mb-8">
          <label class="block text-gray-700 font-bold mb-2" for="confirm-password">
            Confirm Password
          </label>
          <input v-model="confirmPassword" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="Confirm your password" required>
        </div> -->
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "UserSignUp",
  props:["baseURL"],
  data(){
    return{
     firstname:"",
     lastname:"",
     email:"",
     phoneNumber:"",
     IDcardNumber:"",
     Address:"",
     DOF:"",
     password:"",
     //confirmPassword:""
    }
},

methods:{
async handleSubmit(e) {
      e.preventDefault();
      // if the password matches
      // if (this.password === this.confirmPassword) {
        // make the post body
        const user = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          phoneNumber:this.phoneNumber,
          IDcardNumber:this.IDcardNumber,
          Address:this.Address,
          DOF:this.DOF,
          //confirmPassword:this.confirmPassword
        }
        // call the API
        await axios({
                method:'post',
                url:this.baseURL + "user/signup",
                data:JSON.stringify(user),
                headers:{'Content-Type':"application/json"}
              }).then(()=>{
                swal({
                  text: "Signup successfully",
                        icon: "success",
                      });
                  console.log("Signup successfully")
              }).catch(err =>{
                console.log(err);
              })
              //   } else {
              //     // passwords are not matching
              //     swal({
              //       text: "Error! Passwords are not matching",
              //       icon: "error",
              //       closeOnClickOutside: false,
              //     });
              //   }
              // },
      }
  },




}
</script>

<style>

</style>
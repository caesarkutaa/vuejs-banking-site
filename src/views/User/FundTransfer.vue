<template>


   <div class="flex p-10 justify-center items-center h-screen bg-gray-100">
    
    <form @submit="handleSubmit" class="w-full max-w-lg bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 class="text-center text-2xl font-bold mb-6">Transfer Form</h2>

      <!-- Beneficiary -->
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="beneficiary">
          Beneficiary
        </label>
        <input
          v-model="beneficiary"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="beneficiary"
          type="text"
          placeholder="Enter beneficiary name"
        >
      </div>

      <!-- Bank Name -->
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="bankName">
          Bank Name
        </label>
        <input
          v-model="bankName"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="bankName"
          type="text"
          placeholder="Enter bank name"
        >
      </div>
      

      <!-- Account Number -->
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="accountNumber">
          Account Number
        </label>
        <input
          v-model="accountNumber"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="accountNumber"
          type="text"
          placeholder="Enter account number"
        >
      </div>

      <!-- Swift Code -->
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="swiftCode">
          Swift Code
        </label>
        <input
          v-model="swiftCode"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="swiftCode"
          type="text"
          placeholder="Enter swift code"
        >
      </div>

      <!-- Amount -->
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="amount">
          Amount
        </label>
        <input
          v-model="amount"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="amount"
          type="number"
          placeholder="Enter amount"
        >
      </div>

      <!-- Bank Address -->
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="bankAddress">
          Bank Address
        </label>
        <textarea
          v-model="bankAddress"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="bankAddress"
          type="text"
          placeholder="Enter Bank Address"
          ></textarea>
      </div>
      <div>
        <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">
                Log In
        </button>
        </div>
    </form>
     </div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue'
export default {
  components:{ Sidebar },
  data(){
    return{
      beneficiary:null,
      bankName:null,
      accountNumber:null,
      swiftCode:null,
      amount:null,
      bankAddress:null
    }

    
  }

}
</script>

<style>

</style>
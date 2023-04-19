<template>
    <section class="min-h-screen flex flex-col">
        <div class="flex flex-1 items-center justify-center">
            <div class="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                <p v-if="!errMsg.length"> 
                    <div v-for="err in errMsg" class="text-red-500">
                        {{ err[0] }}
                    </div>
                </p>
                <p v-if="success" class="text-green-500">
                    {{ success }}
                </p>

                <form @submit.prevent="update" class="text-center">
                    <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                        Update your Profile
                    </h1>
                    <div class="py-2 text-left">
                        <input v-model="state.name" type="text" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Name" />
                    </div>
                    <div class="py-2 text-left">
                        <input v-model="state.email" type="email" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" />
                    </div>
                    <div class="py-2">
                        <button type="submit" class="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from '@/router/axios'
import { useUserStore } from '@/stores/UserStore.js'

const userStore = useUserStore()
userStore.initialize()

const state = reactive({
    name: userStore.user.name,
    email: userStore.user.email,
})

let errMsg = ref([])
let success = ref('')

async function update() {
    axios.post(`/user/edit/` + userStore.user.id, state)
        .then(response => {
            errMsg.value = []
            success.value = response.data.message
            console.log(response.data)
        })
        .catch(err => {
            errMsg.value = err.response?.data?.errors
            console.log(err)
        })
}
</script>
<template>
    <section class="min-h-screen flex flex-col">
        <div class="flex flex-1 items-center justify-center">
            <div class="w-full rounded-lg sm:border-2 p-4 lg:px-24lg:max-w-xl sm:max-w-md">
                <div class="flex flex-row justify-between">
                    <h1>Your Contacts</h1>
                    <button @click="showModal = true"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add New Contact
                    </button>
                </div>
                <table class="w-full text-left">
                    <thead>
                        <tr>
                            <th colspan="2">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jane Doe</td>
                            <td class="flex justify-end space-x-4">
                                <a href="/chat/1">Chat</a>
                                <a href="">Profile</a>
                                <a href="">Remove</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Doe</td>
                            <td class="flex justify-end space-x-4">
                                <a href="">Chat</a>
                                <a href="">Profile</a>
                                <a href="">Remove</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Doe</td>
                            <td class="flex justify-end space-x-4">
                                <a href="">Chat</a>
                                <a href="">Profile</a>
                                <a href="">Remove</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Doe</td>
                            <td class="flex justify-end space-x-4">
                                <a href="">Chat</a>
                                <a href="">Profile</a>
                                <a href="">Remove</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        @click.self="showModal = false">
        <form @submit.prevent="register" class="w-1/3 p-4 rounded text-center bg-white">
            <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Add New Contact
            </h1>
            <div class="py-2 text-left">
                <input v-model="state.name" type="text"
                    class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Name" />
            </div>
            <div class="py-2 text-left">
                <input v-model="state.email" type="email"
                    class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Email" />
            </div>
            <div class="py-2 text-left">
                <input v-model="state.password" type="number"
                    class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Phone" />
            </div>
            <div class="py-2">
                <button type="submit"
                    class="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                    Submit
                </button>
            </div>
        </form>
</div></template>

<script setup>
import { ref, reactive } from 'vue'

const state = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
})

const showModal = ref(false)
</script>
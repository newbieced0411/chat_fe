<template>
    <section class="min-h-screen flex flex-col">
        <div class="flex flex-1 items-center justify-center">
            <div class="w-full rounded-lg sm:border-2 p-4 lg:px-24lg:max-w-xl sm:max-w-md">
                <div class="flex flex-row justify-between">
                    <h1>Your Contacts</h1>
                    <button @click="showModal = true"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded">
                        Add
                    </button>
                </div>
                <table class="w-full text-left">
                    <thead>
                        <tr>
                            <th colspan="2">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- {{ state.contacts }} -->
                        <tr v-for="contact in state.contacts" :key="contact.id" class="my-1 flex flex-row justify-between">
                            <td>{{ contact.name }}</td>
                            <td class="flex justify-end space-x-4">
                                <a :href="`/message/${contact.id}`">Chat</a>
                                <a href="/user/">Profile</a>
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
        <div class="w-1/3 p-4 rounded text-center bg-white">
            <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Search
            </h1>
            <div v-if="state.message">{{ state.message }}</div>
            <div class="py-2 text-left">
                <input v-model="state.input.query" type="text"
                    class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Search" />
            </div>
            <ul class="my-5 text-left">
                <div class="mb-2 text-xl font-medium">Result:</div>
                <li v-for="user in state.users" :key="user.id" class="my-1 flex flex-row justify-between">
                    <div>{{ user.name }}</div>
                    <div class="w-1/3 text-left">{{ user.email }}</div>
                    <div @click="add(user.id)" class="p-1 text-blue-500 cursor-pointer">Add</div>
                </li>
            </ul>

            <div class="py-2">
                <button type="submit" @click="search"
                    class="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                    Search
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from '@/router/axios'

const showModal = ref(false)
const state = reactive({
    contacts: [],
    input: {
        query: '',
    },
    users: [],
    message: '',
})

async function getContacts(){
    axios.get(`/contact/`)
        .then(response => {
            state.contacts = response.data.data
        })
        .catch(err => {
            console.log(err)
        })
}

async function search() {
    axios.post(`/contact/search`, state.input)
        .then(response => {
            state.users = response.data.data
        })
        .catch(err => {
            console.log(err)
        })
}

async function add($id){
    axios.post(`/contact/add/${$id}`)
        .then(response => {
            state.message = response.data.message
            getContacts()
        })
        .catch(err => {
            console.log(err)
        })
}

getContacts()
</script>
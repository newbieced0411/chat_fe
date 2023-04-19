<template>
    <div class="w-1/3 mt-32 mx-auto rounded shadow border border-3">
        <div class="rounded-lg">
            <div class="px-4 pt-2 flex flex-row justify-between items-center border-b-2">
                <h1 class="mb-2 text-2xl">Chat with {{ state.responder.name }}</h1>
                <a href="/home">Back</a>
            </div>
            <div class="h-80 overflow-y-scroll p-4">
                <div v-for="chat in state.messages" :key="chat.id" class="mb-8">
                    <div v-if="chat.user.id != state.responder.id" class="flex justify-end">
                        <div class="bg-blue-500 text-white py-2 px-4 rounded-full my-1 mr-2">
                            <p>{{ chat.message }}</p>
                        </div>
                    </div>
                    <div v-else class="flex justify-start">
                        <div class="bg-gray-200 py-2 px-4 rounded-full my-1 ml-2">
                            <p>{{ chat.message }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center bg-white p-4">
                <input v-model="state.chatbox" @keyup.enter="send" type="text" placeholder="Type your message here"
                    class="flex-grow p-2 rounded-l-lg border-2 border-r-0 border-gray-400 focus:outline-none focus:border-blue-500" />
                <button @click="send" class="px-4 py-2 rounded-r-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                    Send
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router'
import axios from '@/router/axios'

const route = useRoute()
const state = reactive({
    messages: [],
    payload: {
        chat: '',
        responder_id: ''
    },
    responder: [],
})

async function messages() {
    axios.get('/message/' + route.params.id)
        .then(response => {
            state.messages = response.data.convo
            state.responder = response.data.responder
        })
        .catch(err => {
            console.log(err)
        })
}

async function send(e) {
    e.preventDefault()
    if(chatbox != ''){
        state.payload.responder_id = responder.id
        axios.post('/message/send', state.payload)
            .then(response => {

            })
            .catch(err => {

            })

    }
    console.log('hello')
}



messages()
</script>
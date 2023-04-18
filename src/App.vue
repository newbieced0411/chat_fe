<template>
    <header>
        <nav class="flex flex-row justify-between p-4 border border-b-2 shadow-sm">
            <div class="w-full">
                <h1>Chat App</h1>
            </div>
            <div class="w-full">
                <ul v-if="userStore.isLoggedIn == false" class="flex justify-end">
                    <li v-if="currentRoute == '/login'"><a href="/register">Register</a></li>
                    <li v-if="currentRoute == '/register'"><a href="/login">Login</a></li>
                </ul>
                <ul v-if="userStore.isLoggedIn == true" class="flex flex-row justify-end space-x-4">
                    <li class="mr-5">Welcome, {{ userStore.user.name }}!</li>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/notifcation">Notification</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li @click="userStore.logout()"><a href="">Logout</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <RouterView />
    </main>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/UserStore.js'
import { ref } from 'vue'

const route = useRouter()
const currentRoute = ref(route.path)
const userStore = useUserStore()
userStore.initialize()

route.afterEach((to) => {
    currentRoute.value = to.path;
})
</script>

<style scoped>
</style>

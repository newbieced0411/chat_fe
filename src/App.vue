<template>
    <header>
        <nav class="flex flex-row justify-between p-4 border border-b-2 shadow-sm">
            <div class="w-full">
                <h1>Chat App</h1>
            </div>
            <div class="w-full">
                <ul v-if="!loggedIn" class="flex justify-end">
                    <li v-if="currentRoute == '/login'"><a href="/register">Register</a></li>
                    <li v-if="currentRoute == '/register'"><a href="/login">Login</a></li>
                </ul>
                <ul v-else class="flex flex-row justify-end space-x-4">
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li @click="logout"><a href="">Logout</a></li>
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
import { ref } from 'vue'

const route = useRouter()
const currentRoute = ref(route.path)
const loggedIn = false

route.afterEach((to) => {
    currentRoute.value = to.path;
});

function logout() {
    localStorage.setItem('token', null)
}

</script>

<style scoped></style>

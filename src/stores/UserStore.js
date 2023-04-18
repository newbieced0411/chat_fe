import { defineStore } from "pinia"
import router from '@/router/index'

export const useUserStore = defineStore('userStore', {
    id: 'user',
    state: () => ({
        isLoggedIn: false,
        token: null,
        user: null
    }),
    actions: {
        initialize() {
            const token = localStorage.getItem('token')
            const user = JSON.parse(localStorage.getItem('user'))
            if (token && user) {
                this.token = token
                this.user = user
                this.isLoggedIn = true
            }
        },
        login(token, user) {
            this.token = token
            this.user = user
            this.isLoggedIn = true
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
        },
        logout() {
            this.token = null
            this.user = null
            this.isLoggedIn = false
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            router.push('/login')
        },
    },
})
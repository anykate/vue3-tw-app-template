import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            token: '', // Dummy value here means login successful -> navigate to Home
            data: {},
        },
    }),

    getters: {
        getToken: (state) => state.user.token,
    },

    actions: {
        setToken(token) {
            this.user.token = token

            // if (token) {
            //     sessionStorage.setItem('TOKEN', token)
            // } else {
            //     sessionStorage.removeItem('TOKEN')
            // }
        },
    },
})

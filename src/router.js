import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/pages/Home.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        // {
        //     path: '/',
        //     name: 'register',
        //     component: Register,
        // },
        // {
        //     path: '/',
        //     name: 'login',
        //     component: Login,
        // },
    ],
})

export {router}
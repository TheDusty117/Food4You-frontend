import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import RestaurantsIndex from './pages/Restaurants.index.vue'
import RestaurantsShow from './pages/Restaurants.show.vue'
import NotFound from './pages/404.vue'
import Cart from './pages/Cart.vue'

const history = createWebHistory()
console.log('history: ', history)

const router = createRouter({
	history,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/restaurants',
			name: 'restaurants.index',
			component: RestaurantsIndex,
		},
		{
			path: '/restaurants/:slug',
			name: 'restaurants.show',
			component: RestaurantsShow,
			props: true,
		},
		{
			path: '/404',
			name: '404',
			component: NotFound,
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart,
		},
	],
})

export { router }
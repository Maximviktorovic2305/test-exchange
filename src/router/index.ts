import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import Convert from '../pages/Convert.vue'
import Home from '../pages/Home.vue'

const routes = [
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{
				path: '/',
				name: 'home',
				component: Home,
			},
			{
				path: '/convert',
				name: 'convert',
				component: Convert,
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

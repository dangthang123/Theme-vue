import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Blog from "../pages/Blog.vue"
import Contact from "../pages/Contact.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: '',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },

    {
        path: '/blog',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
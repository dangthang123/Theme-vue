import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Shop from "../pages/Shop.vue"
import Contact from "../pages/Contact.vue"
import ProductDetail from "../pages/DetailPage.vue"
import CartPage from "../pages/CartPage.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: '',
        component: Home,
    },
    {
        path: '/Testvue',
        name: 'TestVue',
        component: Home,
    },
    {
        path: '/another',
        name: 'Another',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },

    {
        path: '/shop',
        name: 'shop',
        component: Shop,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/product/:slug',
        name: 'product.detail',
        component: ProductDetail,
    }, {
        path: '/cart/',
        name: 'cart',
        component: CartPage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
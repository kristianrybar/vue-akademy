import { createRouter, createWebHistory } from "vue-router";
import Main from '@/components/a-main.vue'
import EditScreen from '@/components/a-edit-screen.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/edit/:id',
        name: 'EditScreen',
        component: EditScreen
    },
]

const router = createRouter(
    {
    history: createWebHistory(),
    routes
    }
)

export default router
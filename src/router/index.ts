import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import route from "./modules/route"

const routes: RouteRecordRaw[] = [...route]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            el: "#app",
            top: 0,
            behavior: "smooth"
        }
    }
})

export default router
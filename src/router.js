import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta: {
                title: "Scarxlus",
            }
        },
        {
            path: '/chi-sono',
            name: 'chi-sono',
            component: AppAbout,
            meta: {
                title: "Chi-sono",
            }
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
});


router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? "Default Title"
})

export { router };
import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppCoaching from './pages/AppCoaching.vue';
import AppEbooks from './pages/AppEbooks.vue';
import AppBlog from './pages/AppBlog.vue';
import AppContacts from './pages/AppContacts.vue';

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
        {
            path: '/coaching',
            name: 'coaching',
            component: AppCoaching,
            meta: {
                title: "Coaching",
            }
        },
        {
            path: '/ebooks',
            name: 'ebooks',
            component: AppEbooks,
            meta: {
                title: "Ebooks",
            }
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog,
            meta: {
                title: "Blog",
            }
        },
        {
            path: '/contatti',
            name: 'contatti',
            component: AppContacts,
            meta: {
                title: "Contatti",
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
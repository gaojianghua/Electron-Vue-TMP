import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
//路由规则描述数组
const routes = [
    {
        path: "/",
        component: Layout,
        redirect: '/chat',
        children: [
            { path: "chat", component: () => import("@/pages/home/chat.vue") },
            { path: "contact", component: () => import("@/pages/home/contact.vue") },
            { path: "like", component: () => import("@/pages/home/like.vue") },
            { path: "file", component: () => import("@/pages/home/file.vue") },
        ]
    },
    {
        path: '/login',
        component: () => import('@/pages/login/index.vue')
    },
    {
        path: "/set",
        component: () => import("@/pages/set/index.vue"),
        children: [
            { path: "account", component: () => import("@/pages/set/child/account.vue") }
        ],
    },
    {
        path: "/user",
        component: () => import("@/pages/user/index.vue"),
    },
];
//导出路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/render/layout/index.vue'
//路由规则描述数组
const routes = [
    {
        path: "/",
        component: Layout,
        redirect: '/chat',
        children: [
            { path: "chat", component: () => import("@/render/pages/home/chat.vue") },
            { path: "contact", component: () => import("@/render/pages/home/contact.vue") },
            { path: "like", component: () => import("@/render/pages/home/like.vue") },
            { path: "file", component: () => import("@/render/pages/home/file.vue") },
        ]
    },
    {
        path: '/login',
        component: () => import('@/render/pages/login/index.vue')
    },
    {
        path: "/set",
        component: () => import("@/render/pages/set/index.vue"),
        children: [
            { path: "account", component: () => import("@/render/pages/set/child/account.vue") }
        ],
    },
    {
        path: "/user",
        component: () => import("@/render/pages/user/index.vue"),
    },
];
//导出路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

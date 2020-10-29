import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Results from "@/components/Results.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/results/:query",
        name: "Results",
        component: Results,
    },
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.VUE_APP_MODE === 'production' ? '/' : '/movie-finder/',
    routes,
});

export default router;
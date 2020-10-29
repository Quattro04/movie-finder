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
    routes,
});

export default router;
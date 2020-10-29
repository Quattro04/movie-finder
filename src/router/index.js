import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Results from "@/components/Results.vue";

const routes = [
    {
        path: "/movie-finder/",
        name: "Home",
        component: Home,
    },
    {
        path: "/movie-finder/results/:query",
        name: "Results",
        component: Results,
    },
];

const router = createRouter({
    history: createWebHistory(),
    base: '/movie-finder/',
    routes,
});

export default router;
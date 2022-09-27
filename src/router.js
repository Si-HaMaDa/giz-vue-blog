import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./views/HomePage.vue";
import BlogsPage from "./views/BlogsPage.vue";
import SinglePage from "./views/SinglePage.vue";
import ContactPage from "./views/ContactPage.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/blogs", component: BlogsPage },
    { path: "/single", component: SinglePage },
    { path: "/contact", component: ContactPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router
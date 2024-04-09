import { createRouter, createWebHistory } from "vue-router";

import VideoComponent from "@/components/VideoComponent.vue";
import CVComponent from "@/components/CVComponent.vue";

const routes = [
    {path:"/", component:VideoComponent},
    {path:"/cv", component:CVComponent}
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
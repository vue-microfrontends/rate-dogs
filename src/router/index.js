import { createWebHistory, createRouter } from 'vue-router'
import RateDogs from "../components/rate-dogs.vue";

const routes = [{ path: "/rate-doggos", component: RateDogs }];

export default createRouter({
  history: createWebHistory(),
  routes
})
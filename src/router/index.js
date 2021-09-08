import { createWebHistory, createRouter } from "vue-router";
import Main from "@/layouts/Main";
import About from "@/layouts/About";
import NotFound from "@/layouts/NotFound";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes
});

export default router;

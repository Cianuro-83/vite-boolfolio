import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";

const history = createWebHistory();
console.log("history: ", history);

const router = createRouter({
  history,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
  ],
});

export { router };

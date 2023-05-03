import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import ChiSono from "./pages/ChiSono.vue";

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
    {
      path: "/about-me",
      name: "about-me",
      component: ChiSono,
    },
  ],
});

export { router };

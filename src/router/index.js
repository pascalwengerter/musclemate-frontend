import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Start from "../views/workout/Start.vue"
import Timer from "../views/workout/Timer.vue"
import Custom from "../views/workout/Custom.vue"
import Ready from "../views/workout/Ready.vue"
import Run from "../views/workout/Run.vue"
import Finished from "../views/workout/Finished.vue"
import ComingSoon from "../views/pro/ComingSoon.vue"
import SignUp from "../views/pro/SignUp.vue"
import NotFound from "../views/NotFound.vue"
import Legal from "../views/static/Legal.vue"
import Privacy from "../views/static/Privacy.vue"

const routes = [
  { path: "/", name: "Home", component: Home, },
  { path: "/pro", name: "Pro", component: ComingSoon, },
  { path: "/pro/signup", name: "SignUp", component: SignUp, },
  { path: "/workout/start", name: "Start", component: Start, },
  { path: "/workout/timer", name: "Timer", component: Timer, },
  { path: "/workout/custom", name: "Custom", component: Custom, },
  { path: "/workout/ready", name: "Ready", component: Ready, },
  { path: "/workout/run", name: "Run", component: Run, },
  { path: "/workout/finished", name: "Finished", component: Finished, },
  { path: "/about", name: "About", component: About, },
  { path: "/legal", name: "Legal", component: Legal, },
  { path: "/privacy", name: "Privacy", component: Privacy, },
  { path: "/:catchAll(.*)", component: NotFound, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

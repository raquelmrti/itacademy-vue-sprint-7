import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "benvinguda",
    component: () =>
      import(/* webpackChunkName: "benvinguda" */ "../views/BenvingudaView"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/HomeView"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../components/AboutComponent.vue";
import GuideView from "../components/GuideComponent.vue";
import FlightView from "../components/FlightComponent.vue";
import ContactView from "../components/ContactComponent.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  { path: "/guide", name: "guide", component: GuideView },
  { path: "/flight", name: "flight", component: FlightView },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact-us",
    name: "contact us",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  console.log(to.path);
  let title = to.path.match(/[^/]/gi).join("");
  document.title = title[0].toUpperCase() + title.slice(1);
});
export default router;

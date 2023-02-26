import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Experience from "@/views/Experience/Experience.vue";
import About from "@/views/About/About.vue";
import Portfolio from "@/views/Portfolio/Portfolio.vue";
import Testimonial from "@/views/Testimonial/Testimonial.vue";
import Contact from "@/views/Contact/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/experience",
      name: "Experience",
      component: Experience,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio,
    },
    {
      path: "/test",
      name: "Testimonial",
      component: Testimonial,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});

export default router;

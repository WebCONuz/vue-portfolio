<template lang="">
  <footer class="py-24 bg-gray-200">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <RouterLink to="/" class="nav__logo">
          <img src="@/assets/images/logo.png" alt="logo" class="w-[186px]" />
        </RouterLink>
        <ul class="flex items-center">
          <li class="mx-5">
            <RouterLink
              to="/"
              class="text-xl hover:text-violet-600 duration-200"
              >Home</RouterLink
            >
          </li>
          <li class="mx-5">
            <RouterLink
              to="/experience"
              class="text-xl hover:text-violet-600 duration-200"
              >Experience</RouterLink
            >
          </li>
          <li class="mx-5">
            <RouterLink
              to="/about"
              class="text-xl hover:text-violet-600 duration-200"
              >About</RouterLink
            >
          </li>
          <li class="mx-5">
            <RouterLink
              to="/portfolio"
              class="text-xl hover:text-violet-600 duration-200"
              >Portfolio</RouterLink
            >
          </li>
          <li class="mx-5">
            <RouterLink
              to="/test"
              class="text-xl hover:text-violet-600 duration-200"
              >Testimonial</RouterLink
            >
          </li>
        </ul>
        <div class="flex items-center">
          <a href="#" class="bx bxl-facebook mx-1 text-2xl"></a>
          <a href="#" class="bx bxl-instagram mx-1 text-2xl"></a>
          <a href="#" class="bx bxl-twitter mx-1 text-2xl"></a>
          <a href="#" class="bx bxl-linkedin-square mx-1 text-2xl"></a>
        </div>
      </div>
      <div
        class="flex items-center justify-between pt-6 border-t border-gray-400 mt-16"
      >
        <p>Made with 💖 by Airdokan</p>
        <div class="flex">
          <a href="#" class="mx-3 text-gray-600 hover:text-black duration-200"
            >Privacy Policy</a
          >
          <a href="#" class="mx-3 text-gray-600 hover:text-black duration-200"
            >Terms of Service</a
          >
          <a href="#" class="mx-3 text-gray-600 hover:text-black duration-200"
            >Cookies Settings</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  name: "Footer",
};
</script>
<style scoped>
footer .router-link-active {
  color: rgb(153, 0, 255) !important;
}
</style>

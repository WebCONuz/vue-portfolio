<template>
  <nav class="nav py-4 bg-white shadow-lg w-full sticky top-0 left-0">
    <div class="container flex justify-between items-center mx-auto">
      <RouterLink to="/" class="nav__logo">
        <img src="@/assets/images/logo.png" alt="logo" class="w-[186px]" />
      </RouterLink>
      <ul class="flex items-center">
        <li class="mx-5">
          <RouterLink to="/" class="text-xl hover:text-violet-600 duration-200"
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
      <RouterLink to="/contact">
        <Button
          class="border border-violet-600 text-violet-600 bg-white text-xl hover:bg-violet-600 hover:text-white duration-200"
          btnType="button"
          textValue="Contact me"
        />
      </RouterLink>
    </div>
  </nav>
</template>
<script>
import Button from "@/ui/Button.vue";
import { RouterLink } from "vue-router";

export default {
  name: "Navbar",
  components: {
    Button,
  },
};
</script>
<style scoped>
nav .router-link-active {
  color: rgb(153, 0, 255) !important;
}
</style>

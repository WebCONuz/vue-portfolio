<template>
  <nav class="nav py-4 bg-white shadow-lg w-full sticky top-0 left-0">
    <div class="container flex justify-between items-center mx-auto">
      <a href="#" class="nav__logo">
        <img src="../../assets/images/logo.png" alt="logo" class="w-[186px]" />
      </a>
      <ul class="flex items-center">
        <li class="mx-5">
          <a href="#" class="text-xl hover:text-violet-600 duration-200"
            >Home</a
          >
        </li>
        <li class="mx-5">
          <a href="#" class="text-xl hover:text-violet-600 duration-200"
            >Portfolio</a
          >
        </li>
        <li class="mx-5">
          <a href="#" class="text-xl hover:text-violet-600 duration-200"
            >About me</a
          >
        </li>
        <li class="mx-5">
          <a href="#" class="text-xl hover:text-violet-600 duration-200"
            >Testimonials</a
          >
        </li>
      </ul>
      <Button
        class="border border-violet-600 text-violet-600 bg-white text-xl hover:bg-violet-600 hover:text-white duration-200"
        btnType="button"
        textValue="Contact me"
      />
    </div>
  </nav>
</template>
<script>
import Button from "../../ui/Button.vue";
export default {
  name: "Navbar",
  components: {
    Button,
  },
};
</script>
<style lang=""></style>

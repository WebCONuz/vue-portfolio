<template>
  <section class="py-28 bg-blue-50">
    <div class="container mx-auto flex items-center">
      <div class="w-1/2">
        <p class="text-xl font-semibold mb-5">Hey, I am John</p>
        <h1 class="text-[65px] mb-5 leading-[75px] font-bold">
          I create <span class="text-violet-600">product design</span> and brand
          experience
        </h1>
        <p class="text-2xl mb-10 w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <Button
          class="bg-violet-600 text-white border border-violet-600 hover:bg-transparent hover:text-violet-600 text-xl duration-200"
          btnType="button"
          textValue="Get in Touch"
        />
      </div>
      <div class="w-1/2">
        <img src="../../assets/images/intro.png" alt="intro" class="w-full" />
      </div>
    </div>
  </section>
</template>
<script>
import Button from "../../ui/Button.vue";
export default {
  name: "Home",
  components: {
    Button,
  },
};
</script>
<style lang=""></style>

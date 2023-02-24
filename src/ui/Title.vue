<template>
  <div class="max-w-[1024px]">
    <p class="mb-4 font-semibold text-xl">{{ textContent }}</p>
    <h2 class="font-bold text-[55px] leading-[65px]">{{ titleContent }}</h2>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: {
    textContent: String,
    titleContent: String,
  },
};
</script>
<style lang=""></style>

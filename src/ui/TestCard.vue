<template>
  <div class="border border-green-700 rounded-lg p-8">
    <div class="flex text-xl text-green-700 mb-4">
      <i class="bx bxs-star"></i>
      <i class="bx bxs-star"></i>
      <i class="bx bxs-star"></i>
      <i class="bx bxs-star"></i>
      <i class="bx bxs-star"></i>
    </div>
    <p class="text-lg mb-6">{{ cardText }}</p>
    <div class="flex items-center">
      <img :src="manImg" alt="man" class="w-[70px] h-[70px]" />
      <div class="ml-5">
        <h4 class="text-xl font-semibold mb-1">{{ fullname }}</h4>
        <p class="text-xl">{{ company }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TestCard",
  props: {
    manImg: String,
    cardText: String,
    fullname: String,
    company: String,
  },
};
</script>
<style lang=""></style>

<template>
  <div class="p-6 rounded border-b-2 border-violet-600">
    <div
      class="w-[80px] h-[80px] flex items-center justify-center p-3 pb-4 rounded bg-white shadow mb-5"
    >
      <img :src="imgUrl" alt="icon" class="w-full" />
    </div>
    <h3 class="font-semibold text-[28px] mb-5">{{ cardTitle }}</h3>
    <p class="text-xl">{{ cardText }}</p>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    cardTitle: String,
    cardText: String,
    imgUrl: String,
  },
};
</script>
<style lang=""></style>

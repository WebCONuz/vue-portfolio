<template>
  <div class="work-card" style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)">
    <img :src="imgUrl" alt="card-head" class="w-full rounded-md" />
    <div class="card-body p-6 bg-white">
      <h3 class="font-bold text-2xl mb-3">{{ cardTitle }}</h3>
      <p class="text-lg mb-8">{{ cardText }}</p>
      <a :href="link" class="flex items-center font-semibold"
        >View in Dribble <i class="bx bx-link-external"></i
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "WorkCard",
  props: {
    cardTitle: String,
    cardText: String,
    imgUrl: String,
    link: String,
  },
};
</script>
<style lang=""></style>

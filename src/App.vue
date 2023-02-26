<template>
  <Navbar />
  <main class="">
    <RouterView />
  </main>
</template>
<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style scoped></style>

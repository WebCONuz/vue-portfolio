<template>
  <Navbar />
  <main class="">
    <RouterView />
  </main>
  <Footer />
</template>
<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style scoped></style>

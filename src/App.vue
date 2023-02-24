<template>
  <Navbar />
  <main class="">
    <Home />
    <Experience />
  </main>
</template>
<script>
import Navbar from "../src/components/Navbar/Navbar.vue";
import Home from "../src/views/Home/Home.vue";
import Experience from "../src/views/Experience/Experience.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Experience,
  },
};
</script>
<style scoped></style>

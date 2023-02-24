<template>
  <section class="p-28 bg-red-50">
    <div class="container mx-auto">
      <Title textContent="My Skills" titleContent="My Expertise" />
      <div class="flex justify-between mt-24">
        <Card
          class="w-[350px] bg-blue-50"
          cardTitle="Strategy & Direction"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          imgUrl="src/assets/images/exp-icon-1.png"
        />
        <Card
          class="w-[350px] bg-blue-50"
          cardTitle="Strategy & Direction"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          imgUrl="src/assets/images/exp-icon-1.png"
        />
        <Card
          class="w-[350px] bg-blue-50"
          cardTitle="Strategy & Direction"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          imgUrl="src/assets/images/exp-icon-1.png"
        />
        <Card
          class="w-[350px] bg-blue-50"
          cardTitle="Strategy & Direction"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          imgUrl="src/assets/images/exp-icon-1.png"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Title from "../../ui/Title.vue";
import Card from "../../ui/Card.vue";

export default {
  name: "Experience",
  components: {
    Title,
    Card,
  },
};
</script>
<style lang=""></style>

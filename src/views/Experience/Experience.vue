<template>
  <section class="py-24 bg-[#ff000008]">
    <div class="container mx-auto">
      <Title textContent="My Skills" titleContent="My Expertise" />
      <div class="flex justify-between mt-16">
        <Card
          class="w-[350px] bg-blue-50"
          cardTitle="Strategy & Direction"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          imgUrl="src/assets/images/exp-icon-1.png"
        />
        <Card
          class="w-[350px] bg-blue-50"
          cardTitle="Branding & Logo"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          imgUrl="src/assets/images/exp-icon-2.png"
        />
        <Card
          class="w-[350px] bg-blue-50"
          cardTitle="UI & UX Design"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          imgUrl="src/assets/images/exp-icon-3.png"
        />
        <Card
          class="w-[350px] bg-blue-50"
          cardTitle="Webflow Development"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          imgUrl="src/assets/images/exp-icon-4.png"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Title from "@/ui/Title.vue";
import Card from "@/ui/Card.vue";

export default {
  name: "Experience",
  components: {
    Title,
    Card,
  },
};
</script>
<style lang=""></style>

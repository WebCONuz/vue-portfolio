<template lang="">
  <section class="py-16 bg-[#ff000008]">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <Title textContent="Recent Projects" titleContent="Portfolio" />
        <a
          href="#"
          class="p-5 rounded-md bg-pink-500 text-white flex items-center text-xl"
        >
          <i class="bx bxl-dribbble"></i>
          <span class="ml-2">Visit My Dribbble</span>
        </a>
      </div>
      <div class="flex justify-between mt-16">
        <WorkCard
          class="w-[31%]"
          cardTitle="Ahuse"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          imgUrl="src/assets/images/work1.jpg"
          link="http://localhost:5500"
        />
        <WorkCard
          class="w-[31%]"
          cardTitle="App Dashboard"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          imgUrl="src/assets/images/work2.jpg"
          link="http://localhost:5500"
        />
        <WorkCard
          class="w-[31%]"
          cardTitle="Easy Rent"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          imgUrl="src/assets/images/work3.jpg"
          link="http://localhost:5500"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Title from "@/ui/Title.vue";
import WorkCard from "@/ui/WorkCard.vue";

export default {
  name: "Portfolio",
  components: {
    Title,
    WorkCard,
  },
};
</script>
<style lang=""></style>

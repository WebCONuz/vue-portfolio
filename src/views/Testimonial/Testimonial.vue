<template lang="">
  <section class="p-24 bg-blue-50">
    <div class="container mx-auto">
      <Title
        textContent="Clients Feedback"
        titleContent="Customer testimonials"
      />

      <div class="flex justify-between my-16">
        <TestCard
          class="w-[31%]"
          manImg="src/assets/images/man1.png"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
          fullname="Dianne Russell"
          company="Starbucks"
        />
        <TestCard
          class="w-[31%]"
          manImg="src/assets/images/man2.png"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
          fullname="Kristin Watson"
          company="Louis Vuitton"
        />
        <TestCard
          class="w-[31%]"
          manImg="src/assets/images/man3.png"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
          fullname="Kathryn Murphy"
          company="McDonald's"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Title from "@/ui/Title.vue";
import TestCard from "../../ui/TestCard.vue";

export default {
  name: "Testimonial",
  components: {
    Title,
    TestCard,
  },
};
</script>
<style lang=""></style>

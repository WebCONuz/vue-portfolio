<template>
  <section class="py-16 bg-[#ff000008]">
    <div class="container mx-auto">
      <div class="flex items-center">
        <div class="w-[40%]">
          <img src="@/assets/images/about.png" alt="about" class="w-full" />
        </div>
        <div class="w-[60%]">
          <div class="max-w-[700px] mx-auto">
            <Title textContent="About" titleContent="About me" />
            <p class="mt-8 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
            </p>
            <p class="mt-4 text-xl">
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi a, euismod risus r.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Title from "@/ui/Title.vue";

export default {
  name: "About",
  components: {
    Title,
  },
};
</script>
<style lang=""></style>

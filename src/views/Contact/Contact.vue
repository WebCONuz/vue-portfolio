<template lang="">
  <section class="p-16 bg-[#ff000008]">
    <div class="container mx-auto">
      <Title
        textContent="Get In Touch"
        titleContent="Contact me"
        class="text-center mx-auto"
      />
      <form action="">
        <div class="w-4/5 mx-auto my-10">
          <div class="flex justify-between">
            <Input
              inputType="text"
              inputId="firstname"
              labelValue="First Name"
              class="w-[49%]"
            />
            <Input
              inputType="text"
              inputId="lastname"
              labelValue="Last Name"
              class="w-[49%]"
            />
          </div>
        </div>
        <div class="w-4/5 mx-auto mt-8">
          <div class="flex justify-between">
            <Input
              inputType="email"
              inputId="email"
              labelValue="Email"
              class="w-[49%]"
            />
            <Input
              inputType="phone"
              inputId="phone"
              labelValue="Phone Number"
              class="w-[49%]"
            />
          </div>
        </div>
        <div class="w-4/5 mx-auto mt-8">
          <label for="topic" class="mb-2 text-xl block">Choose a topic</label>
          <select
            name="topic"
            id="topic"
            class="border border-violet-400 rounded-md p-3 focus:outline-none bg-white focus:ring-4 focus:ring-violet-300 text-gray-600 w-full block"
          >
            <option selected>Select one...</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </select>
        </div>
        <div class="w-4/5 mx-auto mt-8">
          <label for="message" class="mb-2 text-xl block">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message..."
            class="h-[200px] border resize-none border-violet-400 rounded-md p-3 focus:outline-none bg-white focus:ring-4 focus:ring-violet-300 text-gray-600 w-full block"
          ></textarea>
        </div>
        <div class="w-4/5 mx-auto mt-8 flex">
          <input
            type="checkbox"
            id="egree"
            class="enabled:hover:border-gray-400 disabled:opacity-75 w-6 h-6 mr-2"
          />
          <label for="egree" class="mb-2 text-xl block"
            >I accept the terms</label
          >
        </div>
        <div class="text-center">
          <Button
            btnType="submit"
            textValue="Submit"
            class="bg-violet-600 text-white text-lg"
          />
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import Title from "@/ui/Title.vue";
import Input from "@/ui/Input.vue";
import Button from "../../ui/Button.vue";

export default {
  name: "Contact",
  components: {
    Title,
    Input,
    Button,
  },
};
</script>
<style lang=""></style>

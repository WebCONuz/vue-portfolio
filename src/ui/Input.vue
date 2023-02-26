<template>
  <div class="flex flex-col">
    <label :for="inputId" class="mb-2 text-xl">{{ labelValue }}</label>
    <input
      :id="inputId"
      :type="inputType"
      class="border border-violet-400 rounded-md p-3 bg-white focus:outline-none focus:ring-4 focus:ring-violet-300 text-gray-600 w-full block"
    />
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    inputType: String,
    inputId: String,
    labelValue: String,
  },
};
</script>
<style></style>

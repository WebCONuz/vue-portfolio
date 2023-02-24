<template>
  <button
    :type="btnType"
    class="py-4 px-8 focus:outline-none focus:ring-2 rounded-md"
  >
    {{ textValue }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    btnType: String,
    textValue: String,
  },
};
</script>
<style></style>

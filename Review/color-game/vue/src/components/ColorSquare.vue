<template>
  <div
    class="colorSquare"
    :style="`background-color:${color}`"
    @click="clickedColor"
  />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    clickedColor(event) {
      this.$emit("clickedColor", event.srcElement.style.backgroundColor);
    }
  }
};
</script>

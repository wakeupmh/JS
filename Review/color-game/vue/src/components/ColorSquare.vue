<template>
  <div class="colorSquare" :style="`background-color:${color}`" />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
};
</script>

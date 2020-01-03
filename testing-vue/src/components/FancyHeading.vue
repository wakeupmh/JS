<template>
    <h1 :style="headingStyles">{{title}}</h1>
</template>

<script>
export default {
  data() {
    return {
      headingStyles: {
        color: this.color
      }
    };
  },
  props: ["title", "color", "font-size"]
};
</script>
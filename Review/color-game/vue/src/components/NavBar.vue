<template>
  <div class="nav">
    <button @click="restartGame">{{ newGame }}</button>
    <span>{{ result }}</span>
  </div>
</template>
<script>
export default {
  props: {
    result: {
      type: String
    },
    newGame: {
      type: String
    }
  },
  methods: {
    restartGame() {
      this.$emit("restartGame", true);
    }
  }
};
</script>

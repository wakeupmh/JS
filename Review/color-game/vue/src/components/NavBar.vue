<template>
  <div class="nav">
    <button>{{ newGame }}</button>
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
    newGame() {}
  }
};
</script>

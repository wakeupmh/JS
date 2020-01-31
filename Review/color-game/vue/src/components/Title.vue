<template>
  <div>
    <h1>
      The Great
      <br />
      <span>{{ rgb }}</span>
      <br />
      Color Picking Game
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    rgb: {
      type: String
    }
  }
}
</script>
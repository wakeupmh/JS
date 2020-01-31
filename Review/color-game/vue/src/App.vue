<template>
  <div id="app">
    <Title />
    <NavBar />
    <ColorContainer>
      <ColorSquare v-for="color in colors" :key="color" />
    </ColorContainer>
  </div>
</template>

<script>
import "@/styles/index.css";

import ColorContainer from "@/components/ColorContainer";
import ColorSquare from "@/components/ColorSquare";
import NavBar from "@/components/NavBar";

export default {
  name: "app",
  data: () => ({
    retrievedColor: null,
    result: null,
    colors: [],
    SQUARES_QUANTITY: 6
  }),
  components: {
    ColorContainer,
    ColorSquare,
    NavBar
  },
  mounted() {
    this.retrievedColor = this.getColor(colors);
    this.colors = this.createRandomColors(this.SQUARES_QUANTITY);
  },
  methods: {
    getColor(colorsArray) {
      return colorsArray[this.mathRandom(colorsArray.length)];
    },
    createRandomColors(quantity) {
      let colorsArray = [];
      for (let i = 0; i < quantity; i++) {
        colorsArray.push(this.randomizeColor());
      }
      return colorsArray;
    },
    randomizeColor() {
      let r = this.mathRandom();
      let g = this.mathRandom();
      let b = this.mathRandom();
      return `rgb(${r}, ${g}, ${b})`;
    },
    mathRandom(multiplier = 256) {
      return Math.floor(Math.random() * multiplier);
    }
  }
};
</script>

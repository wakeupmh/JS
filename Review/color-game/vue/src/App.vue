<template>
  <div id="app">
    <Title :rgb="rgb" />
    <NavBar
      :result="result"
      :newGame="newGame"
      @restartGame="handleRestartGame"
    />
    <ColorContainer v-for="(color, i) in colors" :key="i">
      <ColorSquare :color="color" @clickedColor="handleClickedColor" />
    </ColorContainer>
  </div>
</template>

<script>
import "@/styles/index.css";

import ColorContainer from "@/components/ColorContainer";
import ColorSquare from "@/components/ColorSquare";
import NavBar from "@/components/NavBar";
import Title from "@/components/Title";

export default {
  name: "app",
  data: () => ({
    retrievedColor: null,
    result: null,
    rgb: null,
    newGame: null,
    colors: [],
    SQUARES_QUANTITY: 6
  }),
  components: {
    ColorContainer,
    ColorSquare,
    NavBar,
    Title
  },
  mounted() {
    this.initGame();
  },
  methods: {
    handleRestartGame(restart) {
      if (restart) {
        this.initGame();
        this.result = "";
        this.newGame = "";
      }
    },
    handleClickedColor(clickedColor) {
      if (clickedColor === this.retrievedColor) {
        this.result = "Correct 🎉🎊";
        this.newGame = "Play Again? 😊";
        this.changeColors(clickedColor);
        this.h1BgColor = clickedColor;
      } else {
        this.result = "Try Again 😞";
        setTimeout(() => {
          this.result = "";
        }, 800);
      }
    },
    initGame() {
      this.colors = this.createRandomColors(this.SQUARES_QUANTITY);
      this.retrievedColor = this.getColor(this.colors);
      this.rgb = this.retrievedColor;
    },
    getColor(colorsArray) {
      return colorsArray[this.mathRandom(colorsArray.length)];
    },
    changeColors(color) {
      this.colors = new Array(this.SQUARES_QUANTITY).fill(color);
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

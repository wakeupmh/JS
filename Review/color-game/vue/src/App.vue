<template>
  <div id="app">
    <ColorContainer>
      <ColorSquare 
        v-for="colors in color"
        :key="color"
      />
    </ColorContainer>
  </div>
</template>

<script>
import ColorContainer from "@/components/ColorContainer";
import ColorSquare from "@/components/ColorSquare";

export default {
  name: "app",
  data: () => ({

  }),
  components: {
    ColorContainer, ColorSquare
  },
  methods: {
    getColor (colorsArray) {
      let randomColor = Math.floor(Math.random() * colorsArray.length);
      return colorsArray[randomColor];
    },
    createRandomColors (quantity) {
      let colorsArray = [];
      for (let i = 0; i < quantity; i++) {
        colorsArray.push(this.randomizeColor());
      }
      return colorsArray;
    },
    randomizeColor () {
      let r = this.mathRandom();
      let g = this.mathRandom();
      let b = this.mathRandom();
      return `rgb(${r}, ${g}, ${b})`;
    },
    mathRandom () {
      return Math.floor(Math.random() * 256);
    }
  },
};
</script>


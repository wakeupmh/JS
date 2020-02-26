<script>
  import { onMount } from 'svelte';
  import ColorContainer from "./components/ColorContainer.svelte";
  import ColorSquare from "./components/ColorSquare.svelte";
  import NavBar from "./components/NavBar.svelte";
  import Title from "./components/Title.svelte";

  $: retrievedColor = null;
  $: result = "";
  $: rgb = null;
  $: newGame = "";
  let colors = [];
  const SQUARES_QUANTITY = 6;

  onMount(() => {
    initGame();
  })
  function handleRestartGame(event) {
    if (event.detail.restartGame) {
      initGame();
      result = "";
      newGame = "";
    }
  }

  function handleClickedColor(event) {
    let clickedColor = event.detail.clickedColor;

    if (clickedColor === retrievedColor) {
      result = "Correct 🎉🎊";
      newGame = "Play Again? 😊";
      changeColors(clickedColor);
      h1BgColor = clickedColor;
    } else {
      result = "Try Again 😞";
      setTimeout(() => {
        result = "";
      }, 800);
    }
  }

  function initGame() {
    colors = createRandomColors(SQUARES_QUANTITY);
    retrievedColor = getColor(colors);
    rgb = retrievedColor;
  }

  function getColor(colorsArray) {
    return colorsArray[mathRandom(colorsArray.length)];
  }

  function changeColors(color) {
    colors = new Array(SQUARES_QUANTITY).fill(color);
  }

  function createRandomColors(quantity) {
    let colorsArray = [];
    for (let i = 0; i < quantity; i++) {
      colorsArray.push(randomizeColor());
    }
    return colorsArray;
  }

  function randomizeColor() {
    let r = mathRandom();
    let g = mathRandom();
    let b = mathRandom();
    return `rgb(${r}, ${g}, ${b})`;
  }

  function mathRandom(multiplier = 256) {
    return Math.floor(Math.random() * multiplier);
  }
</script>

<div id="app">
  <Title rgb={rgb} />
  <NavBar
    result={result}
    newGame={newGame}
    on:restartGame={handleRestartGame}
  />
  <ColorContainer>
    {#each colors as color}
      <ColorSquare color={color} on:clickedColor={handleClickedColor} />
    {/each}
  </ColorContainer>
</div>
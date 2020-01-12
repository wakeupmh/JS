const SQUARES_QUANTITY = 6;

let square = document.querySelectorAll('.colorSquare');
let result = document.querySelector('#result');
let h1 = document.querySelector("h1");
let newGame = document.querySelector('#newGame');
let rgb = document.querySelector('#rgb');
let colors = createRandomColors(SQUARES_QUANTITY);
let retrievedColor = getColor(colors);

window.addEventListener('load', () => {

  rgb.innerText = retrievedColor;

  for(var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
    square[i].style.display = "block";
  }

  clickSquare({
    square, 
    colors,
    retrievedColor, 
    result, 
    newGame, 
    h1
  });

})

function clickSquare () {
  for(let i = 0; i < params.square.length; i++) {
    params.square[i].style.background = params.colors[i];
    params.square[i].addEventListener("click", function() {
      let clickedColor = this.style.backgroundColor.replace(/\s+/g, ' ');
      if (clickedColor === params.retrievedColor) {
        params.result.textContent = "Correct ☺️"
        params.newGame.textContent = "Play Again?";
        changeColors(clickedColor);
        params.h1.style.background = clickedColor;
      }   else{
        this.style.background = "var(--bodyBG)";
        params.result.textContent = "Try Again ☹️";
      }
    })
  }
}

function getColor (colorsArray) {
  let randomColor = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomColor];
}

function createRandomColors (quantity) {
  let colorsArray = [];
  for(let i = 0; i < quantity; i++){
    colorsArray.push(randomizeColor());
  }
  return colorsArray;
}

function randomizeColor (){
  let r = mathRandom();
  let g = mathRandom();
  let b = mathRandom();

  return `rgb(${r}, ${g}, ${b})`;
}

function changeColors(color){
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = color;
  }
}

function mathRandom (){
  return Math.floor(Math.random() * 256);
}







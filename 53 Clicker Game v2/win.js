let button;
let heading;

function setup(){  
  const heading = createElement('h1', 'YOU WIN')
  heading.position('center', height/2)
  createCanvas(windowWidth, windowHeight)
  background("green");
  button = createButton('PLAY AGAIN');
  button.position("center")
  button.size(100, 60);
  button.mousePressed(goToLink)
}

function goToLink() {
    window.location.href = 'game.html';
  }
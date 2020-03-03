let heading;
let button;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background("lightblue");
  heading = createElement('h1', "Click Start to Begin!");
  heading.position('center',height/3);
  button = createButton("Start");
  button.position('center', height/2);
  button.mousePressed(goToLink)
}

function goToLink(){
  window.location.href = 'game.html';
}
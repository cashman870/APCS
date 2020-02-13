let button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Start');
  button.position(400,300)
  button.mousePressed(goToLink)
  seeCode = createButton('View the code')
  seeCode.position(600,600)
  seeCode.mousePressed(gitLink)
}
function goToLink() {
  window.location.href = 'index.html'; // Same tab
}

function gitLink(){
  window.open('https://github.com/cashman870/APCS/tree/master/Clicker%20Game%20-%20Banana%20Machine');
}
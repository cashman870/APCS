let button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Start');
  button.position(400,300)
  button.mousePressed(goToLink)
}
function goToLink() {
  window.location.href = 'index.html'; // Same tab
}
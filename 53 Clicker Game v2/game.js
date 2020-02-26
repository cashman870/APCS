// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0
let winningNum = 5

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)

  //
  const scoreLabel = createElement('h4', 'SCORE: ' + score)
  scoreLabel.position(width/20, height/10)

  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')  
  difficultySlider = createSlider(1, 5, 1, .5)
  difficultySlider.position(width/20, height/5.5)  
  difficultyLabel.position(width/20, height/7.5)
}

function draw() {
  // Adjust frameRate according to slider
  frameRate(difficultySlider.value())

  // Randomly Position Banana
  bananaImg.position(random(width), random(height))


}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {
  score = score + 1

}

function decreaseLives() {
  lives = lives - 1
  
}

function checkWin() {
  if(score === winningNum) {
    window.location.href = 'win.html';
  }
}

function checkLose() {
  if(lives < 1){
    window.location.href = 'lose.html';
  }
}
// Initialize UI Elements
let fishImg
let scoreDisplay
let livesDisplay 
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0

function setup() {
  // Setup Title
  title = createElement('h1', 'Click the Fish 5 times to win!')
  title.position('center', height/10)

  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
  background("lightblue");
  
  // Setup Score Display
  scoreDisplay = createElement('h4', 'SCORE: ' + score)
  scoreDisplay.position(width/20, height/10)

  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)

  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')  
  difficultySlider = createSlider(1, 5, 1, .5)
  difficultySlider.position(width/20, height/5.5)  
  difficultyLabel.position(width/20, height/7.5)

  // Creates Fish
  fishImg = createImg('fish.png', 'fish image')
  fishImg.size(200,100)
}

function draw() {
  // Adjust frameRate according to slider
  frameRate(difficultySlider.value())

  // Randomly Position fish
  fishImg.position(random(width-200), random(height-200))
  
  // Updates score and lives
  scoreDisplay.html("SCORE: " + score)
  livesDisplay.html("LIVES: " + lives)
}

  // Determines if you score or lose a life
function mousePressed() {
  if (dist(mouseX, mouseY, fishImg.x, fishImg.y) > 200) {
    decreaseLives()
  } else {
    increaseScore()
  }
}

function increaseScore() {
  score = score + 1
  checkWin()
  console.log(score)
}

function decreaseLives() {
  lives = lives - 1
  checkLose()
  console.log(lives)
}

function checkWin() {
  if(score === 5) {
    storeItem('lives', lives)
    window.location.href = 'win.html';
  }
}

function checkLose() {
  if(lives < 1){
    storeItem('score', score)
    window.location.href = 'lose.html';
  }
}
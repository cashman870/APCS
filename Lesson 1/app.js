// function setup() { 
//     createCanvas(400, 400);
//     background(220)
//     createElement('p', 'my lucky number is ...');
//     let numText = createElement('p', '14');
// } 
// function draw() { 
//     background(220);
//   }
// function setup(){
//     createCanvas(400,400)
// }
// function mousePressed(){
//     createP("My Lucky number is " + random(0,50))
// }
// function draw(){
//     background(220)
// }
// BUTTON CLICK LISTENERS
let button
let greeting

function setup(){
    createCanvas(windowWidth, windowHeight)

    button = createButton('Try me')
    button.position(width/2, height/2)
    button.mousePressed(greet)

    greeting = createElement('h2', 'say hello!')
    greeting.position(width/2, height/3)

    textAlign(CENTER)
    textSize(50)
}

function greet(){
    greeting.html('HELLO!')

    for(let i = 0; i < 200; i++){
        push()
        fill(random(255), 255, 255)
        translate(random(width), random(height))
        rotate(random(2*PI))
        text("HELLO", 0, 0)
        pop()
    }
}
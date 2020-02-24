let slider;
let slider2;
let slider3;
let textInput;
function setup() {
    slider = createSlider(0, 360, 100);
    slider2 = createSlider(0, 100, 100)
    slider3 = createSlider(0, 100, 100)
    textInput = createInput("Input Text")
    header = createElement("h1", textInput.value())
    createCanvas(600, 120); 
    colorMode(HSB);
}
function draw() {
    background(slider.value(), slider2.value(), slider3.value());
    textSize(80);
    text(textInput.value(), 210, 100);
    header.html(textInput.value())
}
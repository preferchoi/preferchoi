
function setup() {
    createCanvas(400, 400)
    background(0)
}

function draw() {
    rectMode(CORNERS)
    fill(random(0,255),random(0,255),random(0,255),40)
    rect(random(0,400),random(0,400),random(0,400),random(0,400))
}
function setup(){
    createCanvas(1000, 1000);
    background (181, 29, 29)
}

function draw() {
    fill(250);
    stroke(3);
    ellipse(mouseX, mouseY, random(100, 250), random(100, 250))
}
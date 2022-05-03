var letterToDraw;
var p = 0;

function setup(){
    createCanvas(1000,1000);
    background(28, 82, 232);
    //for the class to show up on the point
    rectMode(CENTER);
    //letterToDraw = new Letter(500,500);
    //letterToDraw.display();
    frameRate(60);
}

function draw() {
    
if (p <= 360) {
    translate(200, 200);
    push();
    showLetter(500, 500);
    rotate(p);
    showLetter(500, 500);
    pop();
    p++;
}
}


function showLetter(x,y) {
    stroke(255, 51, 0);
    fill(138, 190, 255);
    rect(x, y, 150, 500);
    rect(x, y - 200, 500, 150);

}

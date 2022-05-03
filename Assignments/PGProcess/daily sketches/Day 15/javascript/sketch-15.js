var letterToDraw;
var p = 0;

function setup(){
    createCanvas(1000,1000);
    background(51, 32, 79);
    //for the class to show up on the point
    rectMode(CENTER);
    //letterToDraw = new Letter(500,500);
    //letterToDraw.display();
    frameRate(60);
    fill(171, 171, 171);
    showLetter(500, 500);
}

function draw() {
    
if (p <= 360) {
    fill(255, 247, 0);
    translate(500, 500);
    push();
    showLetter(500, 500);
    rotate(p);
    showLetter(500, 500);
    pop();
    p++;
}

}


function showLetter(x,y) {
    rect(x, y, 150, 500);
    rect(x, y - 200, 500, 150)
}

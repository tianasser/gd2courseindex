var letterToDraw;
var p = 0;

function setup(){
    createCanvas(1000,1000);
    background(250, 227, 240);
    //for the class to show up on the point
    rectMode(CENTER);
    //letterToDraw = new Letter(500,500);
    //letterToDraw.display();
    angleMode(DEGREES)
}

function draw() {
    /*rotate(p)
    push();
    rect(0, 0, 200, 200);
    rect(200, 0, 200, 200);
    rect(400, 0, 200, 200);
    pop();
    p++;
    showLetter(500, 500);*/

if (p < 360) {
    rotate(p)
    push();
    pop();
    p++;
    showLetter(500, 500);
}
}


function showLetter(x,y) {
    fill(232, 28, 143);
    rect(x, y, 150, 500);
    rect(x, y - 200, 500, 150);
}

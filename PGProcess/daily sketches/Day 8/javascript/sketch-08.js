var i = 0;
var p = 0;
var bool = false;

function setup () {
    createCanvas(1000,1000);
    background (200);
    angleMode(DEGREES)
    frameRate (120);
}

function draw() {

    if (i <= 360) {
    push();
    translate (200, 200);
    fill (255);
    stroke(0);
    rect(-200, 0, 200, 200);
    rect(0, 0, 200, 200);
    rect(400, 0, 200, 200);

    
    rotate(i);
    rect(0, 0, 200, 200);
    rect(200, 0, 200, 200);
    rect(400, 0, 200, 200);
    pop();
    i++;
}

if (i >= 360){
    bool = true;

}

if (p <= 700 && bool == true) {

    push();
    noFill();
    stroke(0);
    rect(300, 100 + p, 200, 200);
    pop();
    p++;

}



}

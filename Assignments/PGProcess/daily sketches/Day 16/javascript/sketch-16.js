var p = 0;
var r = 0;
var g = 0;
var b = 0;
var rotation = 0;


function setup(){
    createCanvas(1000,1000);
    background(51, 32, 79);
    //for the class to show up on the point
    rectMode(CENTER);
    //letterToDraw = new Letter(500,500);
    //letterToDraw.display();
    frameRate(20);
}

function draw() {
    showLetter(500, 500);
    if (p < 360) {
        translate(500, 500);
        push();
        showLetter(0, 0);
        rotate(rotation + p);
        showLetter(0, 0);
        pop();
        p++;
    } 

    if (mouseIsPressed == true){
        rotation = 0; 
        p = 0;
    }
}


function showLetter(x,y) {
    if (p % 360 == 0){
        r = random (255);
        g = random (255);
        b = random (255);
    }
    if (mouseIsPressed == true){
        r = 255;
        g = 234;
        b = 0;
    }    

    stroke (0)
    fill(r, g, b);
    rect(x, y, 150, 500);
    rect(x, y - 200, 500, 150);
}


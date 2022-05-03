function setup() {
    createCanvas(1000, 1000)
    background(242, 134, 39)
    rectMode(CENTER);
    angleMode (DEGREES);
    frameRate(120);
    
}

var i = 0
var p = 0

function draw() {

    if (p < 100){
        push ();
        noFill ();
        stroke (53, 79, 53);
        strokeWeight (7);
        rect(500, 10 * p, 500, 300);
        p++;


    }

   while (i < 100){
        noFill ();
        stroke (53, 79, 53);
        strokeWeight (7);
        rect(30 * i, 50, 50, 650);
        i++;
    }
   /* if (i < 100){
        noFill ();
        stroke (53, 79, 53);
        strokeWeight (2);
        rect(10 * i, 50, 300, 650);
        i++;
       
       
        rotate (i);
        rect(10 * i, 50, 300, 650);
    }*/



    
}
var width = 1000;
var height = 1000;

function setup(){
    createCanvas(1000,1000);
    background(100);
    rectMode(CENTER);
    angleMode (DEGREES);
}
var i = 0;
var p = 0;
function draw(){


    while (i < 100){
        noFill ();
        stroke (0);
        strokeWeight (2);
        rect(30 * i, 50, 50, 650);
        i++;
    }

    while (p < 100){
        noFill ();
        stroke (0);
        strokeWeight (2);
        rect(500, 50 * p, 500, 300);
        p++;
    }

    
}
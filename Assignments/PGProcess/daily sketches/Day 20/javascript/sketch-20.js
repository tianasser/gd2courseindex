var i = 0;
var p = 0;

function setup() {
    createCanvas (1000, 1000)
    background (255, 217, 120)
    angleMode(DEGREES);
}

function draw() {

if (i <= 360) {
push ();
translate (200, 200);
fill (36, 28, 128);
stroke(255, 217, 120);
rect(-150, 0, 200, 200);
rect(50, 0, 200, 200);
rect(450, 0, 200, 200);
rect(250, 0, 200, 200);
rect(150, 200, 200, 200);
rect(150, 400, 200, 200);
rect(150, 600, 200, 200);


rotate(i);
rect(-150, 0, 200, 200);
rect(50, 0, 200, 200);
rect(450, 0, 200, 200);
rect(250, 0, 200, 200);
rect(150, 200, 200, 200);
rect(150, 400, 200, 200);
rect(150, 600, 200, 200);

pop();
i++;
}

}




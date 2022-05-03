function setup(){
    createCanvas(1000,1000, WEBGL);
    background(222, 62, 4);
    rectMode(CENTER);
    frameRate(60);
}

function draw(){
    fill(20, 27, 204);
    stroke(255);
    orbitControl();
    //torus(100, 100);
    rect(20, 50, 200, 600);
    rect (30, -150, 600, 200);
}
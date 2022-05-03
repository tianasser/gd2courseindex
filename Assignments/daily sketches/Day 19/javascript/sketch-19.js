function setup() {
    createCanvas(1000,1000,WEBGL)
    background(159, 136, 168)
    rectMode(CENTER);
   frameRate(60);
}

function draw(){
    fill(54, 4, 74);
    stroke(245, 126, 15);
    orbitControl();
    torus(100, 100);
    rect(20, 50, 200, 600);
    rect (30, -150, 600, 200);
}

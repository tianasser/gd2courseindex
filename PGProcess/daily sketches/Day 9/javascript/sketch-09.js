var i = 0;
var p = 0;
var bool = false;
var startAnim = false;

function setup () {
    createCanvas(1000,1000);
    background (200);
    angleMode(DEGREES)
    frameRate (120);
}

function draw() {

    if (i <= 360 && startAnim == true) {
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
// mouseCheck ();

}

function mouseClicked() {
    startAnim = true;
}

/*function keyPressed() {
    if (key == 's');
    saveCanvas("sketch-09", "png");
}

*/
function mouseCheck() {
    if( mouseX <= 500 && mouseY <= 500 ){
    background (247, 233, 243);}

    if( mouseX >= 500 && mouseY <= 500 ){
    background (245, 69, 194)}

    if( mouseX <= 500 && mouseY >= 500 ){
    background (112, 46, 93)}

    if( mouseX >= 500 && mouseY >= 500 ){
    background (166, 148, 161)}

}



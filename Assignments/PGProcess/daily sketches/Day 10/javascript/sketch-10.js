var i = 0;
var myFont;
var img;

function preload(){
    myFont = loadFont("fonts/LittleLordFontleroyNF.ttf");
    img = loadImage ("image/download.png");
}

function setup () {
    createCanvas (1000, 1000);
    background (112, 182, 219);
    angleMode (DEGREES);
}

function draw() {

/*for( i = 0; i < 20; i++){
        var noiseVal = mouseY + random(-20, 20);
    line(i * 10, 0, i * 10, noiseVal);
   //line(300, i * 10, noiseVal, i * 10);
   noFill();
   arc( i * 10, i * 10, 700, 400, PI * noiseVal, 25);
}*/

push();
translate(500, 500);

//background (112, 182, 219);
textFont(myFont);
textSize(60);
text("word",0, 0);

rotate(i);
textSize (60);
text("word",0, 0);
pop();
i++;

push();
translate(500, 600);

//background (112, 182, 219);
textFont(myFont);
textSize(60);
text("word",0, 0);

rotate(i);
textSize (60);
text("word",0, 0);
pop();
i++;

push();
translate(500, 400);

//background (112, 182, 219);
textFont(myFont);
textSize(60);
text("word",0, 0);

rotate(i);
textSize (60);
text("word",0, 0);
pop();
i++;

push();
translate(500, 300);

//background (112, 182, 219);
textFont(myFont);
textSize(60);
text("word",0, 0);

rotate(i);
textSize (60);
text("word",0, 0);
pop();
i++;

image(img, 500, 200, 200, 100);
image(img, 300, 200, 200, 100);


}



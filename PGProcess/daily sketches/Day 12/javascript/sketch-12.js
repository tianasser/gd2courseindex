var letterToDraw;
var p = 0;

function setup(){
    createCanvas(1000,1000);
    background(69, 150, 87);
    //for the class to show up on the point
    rectMode(CENTER);
    letterToDraw = new Letter(500,500);
    letterToDraw.display();
}

function draw() {
    letterToDraw = new Letter(500,500);
    letterToDraw.display();
    letterToDraw.move();

    push();
    letterToDraw = new Letter(p * 10, p * 10);
    letterToDraw.display();
    pop();
    p++;

    /*for (var i = 0; i < 100; i++) {
        letterToDraw = new Letter( 1 * 10, i * 10);
        letterToDraw.display();
    }*/

}

class Letter {
    //sets initial values/parameters of class
    constructor(x, y) {
        this.letterX = x;
        this.letterY = y;
        this.letterW = 100;
        this.letterH = 400;
        this.dir = 1;

    }
    //draw shapes that show up 
    display() {
        fill(184, 212, 190);
        rect(this.letterX - 50, this.letterY, 100, this.letterH);
        rect(this.letterX - 50, 350, this.letterH, 100);
    }
move () {
    this.letterX = this.letterX + this.dir;
}

}


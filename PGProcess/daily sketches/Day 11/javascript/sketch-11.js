var letterToDraw;

function setup(){
    createCanvas(1000,1000);
    background(255, 157, 0);
    //for the class to show up on the point
    rectMode(CENTER);
    letterToDraw = new Letter(500,500);
    letterToDraw.display();
}

function draw() {
    
    letterToDraw = new Letter(mouseX, mouseY);
    letterToDraw.display();
}

class Letter {
    //sets initial values/parameters of class
    constructor(x, y) {
        this.letterX = x;
        this.letterY = y;
        this.letterW = 100;
        this.letterH = 400;
    }
    //draw shapes that show up 
    display() {
        fill(74, 63, 45);
        rect(this.letterX - 50, this.letterY, 100, this.letterH);
        rect(this.letterX - 50, 350, this.letterH, 100);
    }

}


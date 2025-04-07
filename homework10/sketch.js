//portrait 

//variables
var eye1 = 130;
var eye2 = 250;
var speed;
var offset = 10;

var button1 = 350;
var button2 = 390;
var speedButton;
var offsetButton = 5; //5 pixels 

var lineSpeed;
var offsetLine = 7;
var lineStartx = 180;
var lineStarty = 250;
var lineEndx = 220;
var lineEndy = 250;

var normalText = 10;
var maxText = 30;
var minText = 3;
var curText = normalText;
var direction = 1; //-1 for shrinking
var textChange = 0.5;


function setup() {
    createCanvas(400, 400);

    //didn't want them moving too fast
    speed = random(0.02, 0.05);
    speedButton = random(0.06, 0.09);
    speedLine = random(0.03, 0.06);

}

function draw() {
    background(220);
    strokeWeight(4);
    rect(80, 170, 240, 120);
    circle(200, 150, 250);
    circle(eye1, 150, 30);
    circle(eye2, 150, 30);
    triangle(180, 210, 200, 210, 180, 150);
    rect(170, 270, 70, 60);
    rect(100, 310, 200, 90);
    triangle(80, 400, 100, 310, 130, 400);
    triangle(280, 400, 300, 310, 330, 400);
    rect(70, 80, 20, 170);
    rect(310, 80, 20, 170);
    triangle(50, 90, 200, 5, 360, 90);

    textSize(curText);
    text('Portrait', 10, 25);
    curText += direction * textChange;
    if (curText >= maxText || curText <= minText) {
        direction *= -1; //reverse ro stay in bounds
    }
    //set text back to normal
    textSize(12)
    text('By Madison :)', 10, 50);
    line(lineStartx, lineStarty, lineEndx, lineEndy);

    strokeWeight(22);
    point(200, button1);
    point(200, button2);

    //movement of eyes
    //move back and forth 10 pixels, oscillates back and forth forever
    eye1 = 130 + sin(frameCount * speed) * offset;
    eye2 = 250 + sin(frameCount * speed) * offset;

    //movement of buttons
    button1 = 350 + sin(frameCount * speedButton) * offsetButton;
    button2 = 390 + sin(frameCount * speedButton) * offsetButton;

    //move mouth diagonally
    lineStartx = 180 + sin(frameCount * speedLine) * offsetLine;
    lineStart7 = 250 + sin(frameCount * speedLine) * offsetLine;
    lineEndx = 220 + sin(frameCount * speedLine) * offsetLine;
    lineEndy = 250 + sin(frameCount * speedLine) * offsetLine;


}
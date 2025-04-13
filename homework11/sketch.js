//variables
var charX = 50;
var charY = 50;

//keys pressed
var w = 87;
var s = 83;
var d = 68;
var a = 65;

//shapesss
var shapeX = 50;
var shapeY = 40;
var shapeSpeedX;
var shapeSpeedY;

//mouse clicked
var shapeMouseX;
var shapeMouseY;

//extra obstacles
var obs1X = 100;
var obs1Y = 150;
var obs1SpeedX;
var obs1SpeedY;


function setup() {
    createCanvas(400, 400);

    //speeds randomized
    shapeSpeedX = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeSpeedY = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    obs1SpeedX = Math.floor(Math.random() * 5) + 1;
    obs1SpeedY = Math.floor(Math.random() * 5) + 1;

    //create character
    createCharacter(200, 350)
}

function draw() {
    background(0);
    stroke(0);
    fill(100);

    //set borders for screen
    setBorders(12)

    //create end goal
    textSize(18);
    text('exit', width - 50, height - 50);

    //created above 
    drawCharacter();
    movement();

    //enemy
    fill(16, 45, 67);
    circle(shapeX, shapeY, 20);

    // Obstacle 1 (red circle)
    fill(255, 0, 0);
    ellipse(obs1X, obs1Y, 40, 40);
    obs1X += obs1SpeedX;
    obs1Y += obs1SpeedY;
    if (obs1X > width) obs1X = 0;
    if (obs1X < 0) obs1X = width;
    if (obs1Y > height) obs1Y = 0;
    if (obs1Y < 0) obs1Y = height;


    shapeX += shapeSpeedX;
    shapeY += shapeSpeedY;

    //see if it hits the borders
    if (shapeX > width) {
        shapeX = 0;
    }
    if (shapeX < 0) {
        shapeX = width;
    }
    if (shapeY > height) {
        shapeY = 0;
    }
    if (shapeY < 0) {
        shapeY = height;
    }

    //see if character has made it to the end 
    if (charX > width - 12 && charY > height - 50) {
        fill(255);
        textSize(18);
        text('You Have Survived!', width / 2 - 80, height / 2);
    }

    if (shapeMouseX !== undefined && shapeMouseY !== undefined) {
        fill(45, 123, 78);
        circle(shapeMouseX, shapeMouseY, 60);
    }

    //randomize direction every few seconds using mod
    if (frameCount % 60 === 0) {
        obs1SpeedX = Math.floor(Math.random() * 5) + 1;
        obs1SpeedY = Math.floor(Math.random() * 5) + 1;
    }
}

//character stuff
function createCharacter(x, y) {
    charX = x;
    charY = y;
    console.log(charX);
}
function drawCharacter() {
    fill(23, 56, 234);
    circle(charX, charY, 30);
}

//set borders
function setBorders(thickness) {
    //top
    rect(0, 0, width, thickness);
    //bottom
    rect(0, height - thickness, width, thickness);
    //left
    rect(0, 0, thickness, height);
    //right
    rect(width - thickness, 0, thickness, height - 50);
}

//mouse stuffs
function mousePressed() {
    shapeMouseX = mouseX;
    shapeMouseY = mouseY;
}

function movement() {
    if (keyIsDown(w)) { //up
        charY -= 5;
    }
    if (keyIsDown(s)) { //down
        charY += 5;
    }
    if (keyIsDown(d)) { //right
        charX += 5;
    }
    if (keyIsDown(a)) { //left
        charX -= 5;
    }
}

//👻
//portrait 
function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(220);
    strokeWeight(4);
    rect(80, 170, 240, 120);
    circle(200, 150, 250);
    circle(130, 150, 30);
    circle(250, 150, 30);
    triangle(180, 210, 200, 210, 180, 150);
    rect(170, 270, 70, 60);
    rect(100, 310, 200, 90);
    triangle(80, 400, 100, 310, 130, 400);
    triangle(280, 400, 300, 310, 330, 400);
    rect(70, 80, 20, 170);
    rect(310, 80, 20, 170);
    triangle(50, 90, 200, 5, 360, 90);
    textSize(12);
    text('Portrait', 10, 20);
    text('By Madison :)', 10, 50);
    line(180, 250, 220, 250);

    strokeWeight(22);
    point(200, 350);
    point(200, 390);


}
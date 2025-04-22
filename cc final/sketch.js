let sound, fft;
let particles = [];
let audioContext;

function preload() {
    sound = loadSound('assets/stay by your side.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight); //full window for coolness
    background(0); //black
    angleMode(DEGREES); //degrees for rotation, good for sin and cos later cause radians suck
    colorMode(HSB); //need saturation and stuff
    fft = new p5.FFT(); //for frequency analysis
    sound.loop();

    // Wait for user interaction to resume the AudioContext
    //need to click the screen to start the audio
    userStartAudio();

    //create star array for each particle (fewer looks cooler)
    for (let i = 0; i < 100; i++) {
        let radius = random(100, 350);
        //scale the radius to the frequency band (0-1024) for the FFT
        let freqBand = int(map(radius, 50, 350, 0, 1024));
        particles.push(new Star(radius, freqBand)); //add to array
    }
}
//fun stuff now
function draw() {
    background(0, 0.05); // semi-transparent for trails

    translate(width / 2, height / 2); //origin at center
    rotate(frameCount * 0.01);
    translate(-width / 2, -height / 2);

    let spectrum = fft.analyze(); //using cool stuff to get amplitue array

    //iterates through array amd upates each particle based on frequency
    for (let p of particles) {
        let energy = spectrum[p.freqBand] || 0;
        p.update(energy);
        p.display(energy);
    }

    //for an animation with the mouse but looks weird 
    //fill(255);
    //ellipse(mouseX, mouseY, 50, 50);
}

class Star {
    //for star object
    constructor(radius, freqBand) {
        this.radius = radius;
        this.angle = random(360); //deg
        this.freqBand = freqBand;
        this.speed = random(0.2, 0.5); //random speed
    }

    //update the angle based on the speed and energy of the frequency band
    update(energy) { //energy is amp
        this.angle += this.speed + map(energy, 0, 255, 0, 1); //map used for scaling things
    }

    display(energy) {
        //math stuffs for position
        let x = width / 2 + this.radius * cos(this.angle);
        let y = height / 2 + this.radius * sin(this.angle);

        let size = map(energy, 0, 255, 2, 10); //size of particles based on amp
        fill(map(this.freqBand, 0, 1024, 200, 360), 255, 255);
        noStroke();
        ellipse(x, y, size, size);
    }
}
//🐈‍⬛

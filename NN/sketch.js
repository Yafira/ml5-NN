let model;
let targetLabel = 'C';

function setup() {
    createCanvas(400, 400);

    let options = {
        inputs: ['x', 'y'],
        outputs: ['label'],
        task: 'classification'
    };
    model = ml5.neuralNetwork(options);
    background(255);
}

function keyPressed() {
    targetLabel = key.toUpperCase();
}

// collect training data
function mousePressed() {

    stroke(0);
    noFill();
    ellipse(mouseX, mouseY, 24);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(targetLabel, mouseX, mouseY);
}
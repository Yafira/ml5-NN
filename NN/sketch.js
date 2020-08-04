let model;

function setup() {
createCanvas(400, 400);

let options = {

};
model = ml5.neuralNetwork(options);
}

function draw() {
    background(255);
}
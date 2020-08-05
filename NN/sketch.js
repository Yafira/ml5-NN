let model;
let targetLabel = 'C';
// let trainingData = [];

let state = 'collection';

function setup() {
    createCanvas(400, 400);

    let options = {
        inputs: ['x', 'y'],
        outputs: ['label'],
        task: 'classification',
        debug: 'true'
    };
    model = ml5.neuralNetwork(options);
    background(255);
}

function keyPressed() {

    if (key == 't') {
        state = 'training';
        console.log('starting training');
        model.normalizeData();
       let options = {
          epochs: 200 
       } 
        model.train(options, whileTraining, finishedTraining);
    } else {
        targetLabel = key.toUpperCase();
    }
}

function whileTraining(epoch, loss) {
    console.log(epoch);
}

function finishedTraining() {
    console.log('finished training.');
    state = 'prediction';
}

// collect training data
function mousePressed() {

    let inputs = {
        x: mouseX,
        y: mouseY
    }
    if (state == 'collection') {
    let target = {
        label: targetLabel
    }
    model.addData(inputs, target);
} else if (state == 'prediction') {
    model.classify(inputs, gotResults);
    }
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(results);
}
let model;
let targetLabel = 'C';
// let trainingData = [];

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
        model.normalizeData()
       let options = {
          epochs: 100 
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

}

// collect training data
function mousePressed() {

    let inputs = {
        x: mouseX,
        y: mouseY
    }

    let target = {
        label: targetLabel
    }

    model.addData(inputs, target);

    stroke(0);
    noFill();
    ellipse(mouseX, mouseY, 24);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(targetLabel, mouseX, mouseY);
}
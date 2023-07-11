function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bpoP4w35T/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(){
    
}
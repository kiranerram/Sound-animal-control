 function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rqY9ZVVLN/', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;


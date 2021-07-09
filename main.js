prediction_1 = ""
Webcam.attach (' #camera ')
camera = document.getElementById('camera');

Webcam.set ({
    width: 350,
    height: 300,
    image_format : 'png',
    png_quality:90
});

function take_snapshot() {
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
  
  // Initialize the Image Classifier method with MobileNet
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wWtV3Zvm4/model.json',modelLoaded)
function modelLoaded() {
  console.log('Model Loaded!');
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "The first prediction is" + prediction;
    var utterTHIS = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterTHIS);
}
function check() {
  img = document.getElementById('selfie_image');
  classifier.classify(img, gotResult);
}
function gotResult(error, results)  {
  if(error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    prediction_1 = results[0].label;

    speak();
  }

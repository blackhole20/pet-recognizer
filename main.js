Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function Take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>";
    });
}

console.log(ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xLXk02El_/",modelloaded);

function modelloaded(){
    console.log("model has been loaded");
}

function check(){
    img=document.getElementById("captured_image");
    console.log(img);
    classifier.classify(img, got_result);
}

function got_result(error, result){
     if (error) {
         console.error(error);
     } else {
         console.log(result);
         document.getElementById("result_object").innerHTML=result[0].label;
         document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3);
     }
}
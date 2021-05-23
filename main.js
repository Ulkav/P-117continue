function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();   
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nK73v4xjH/')
}

function draw() {
   image(video, 0, 0, 300, 300)
   classifier.classify(video, gotReult);
}

function modelLoaded() {
    console.log('Model Loaded')
}

function gotReusult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_Family_Member_name").innerHTML = result[0].label;
        document.getElementById("result_Family_Member_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
} 
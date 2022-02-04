var left_wrist_x= 0;
var right_wrist_x= 0;
var difference= 0;
function preload() {
}
function setup() {
    video=createCapture(VIDEO);
    video.size(600,380);
    canvas=createCanvas(600,380);
    canvas.position(570,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses)
}
function modelLoaded() {
    console.log("PoseNet is Intitalized / Model Loaded")
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        difference=floor(left_wrist_x - right_wrist_x);
    }
}
function draw() {
    background("#5ac3e0");
    textSize(difference);
    fill("#b8f0ff");
    text("Anya", 30, 250);
}

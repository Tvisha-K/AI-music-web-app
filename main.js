HP="";

peter_pan = "";

function setup(){

    canvas = createCanvas(600,500);

    canvas.center();

    video = createCapture(VIDEO);

    video.size(600,500);

    video.hide();

    pose_model =  ml5.poseNet(video,modelLoaded);

}

function modelLoaded(){

console.log("Model has loaded successfully")


}

function draw(){

    image(video,0,0,600,500);

}


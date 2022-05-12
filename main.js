harry="";

peter_pan = "";

leftX = "";

leftY ="";

rightX = "";

rightY = "";

function preload(){

    harry = loadSound("music.mp3");

    peter_pan = loadSound("music2.mp3");

}

function setup(){

    canvas = createCanvas(600,500);

    canvas.center();

    video = createCapture(VIDEO);

    video.size(600,500);

    video.hide();

    pose_model =  ml5.poseNet(video,modelLoaded);

    pose_model.on("pose",gotResults);

}

function modelLoaded(){

console.log("Model has loaded successfully")


}

function draw(){

    image(video,0,0,600,500);

}

function play(){

    music.play();

    music.setVolume(1);

    music.rate(1);

}

function gotResults(result){

    if (result.length > 0) {

         console.log(result);
 
         leftX = result[0].pose.leftWrist.x;
 
         leftY = result[0].pose.leftWrist.y;
 
         rightX = result[0].pose.rightWrist.x;
 
         rightY= result[0].pose.rightWrist.y;
    }

}
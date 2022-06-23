harry="";

peter_pan = "";

leftX = "";

leftY ="";

rightX = "";

rightY= "";

leftWrist ="";

song_status ="";

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
    
   song2 = harry.isPlaying();

   song1 = peter_pan.isPlaying();

   fill("red");

   stroke("black");

   if (left_score > 0.2){

    circle(leftX,leftY,20); 
    harry.stop();
    
    if (song1 == false){

     peter_pan.play();

     document.getElementById("song").innerHTML ="Song Name : Peter Pan" ;

 }

}

if (right_score > 0.2){

    circle(rightX,rightY,20); 
    peter_pan.stop();
    
    if (song2 == false){

     harry.play();

     document.getElementById("song").innerHTML ="Song Name : Harry Potter" ;

 }

}

   
}
    
  




function gotResults(result){

    if (result.length > 0) {

         console.log(result);
 
         leftX = result[0].pose.leftWrist.x;

         leftY = result[0].pose.leftWrist.y;
 
         rightX = result[0].pose.rightWrist.x;
 
         rightY= result[0].pose.rightWrist.y;

         left_score = result[0].pose.keypoints[9].score;
        
         right_score = result[0].pose.keypoints[10].score;

         leftWrist = 1;
    }

}
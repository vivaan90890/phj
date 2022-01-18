objects=[];
coco="";
status="";
function preload(){
video=createVideo("video.mp4");
}
function setup(){
canvas=createCanvas(550,450);
canvas.center();
video.hide();
}
function start(){
object_Detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
document.getElementById("pop").value = coco;

}
function modelLoaded(){
console.log("model loaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}
function draw(){
image(video,0,0,550,450);
if(status!=""){
for(i=0; i<objects.length; i++){}
}

}
function gotResult(){
    function gotResults(error,results){
        if(error){
        console.log(error);
        }
        console.log(results);
        objects=results;
        }
}
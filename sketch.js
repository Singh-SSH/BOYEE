function preload() {
}


function setup() {
  createCanvas(500, 500);
  video = createCapture(VIDEO);
}
webcam.set()
function draw(){
    rect(60, 60, 300, 25,);
    rect(40, 60, 25, 300,);
    rect(335, 60, 25, 300,);
    rect(60, 340, 300, 25,);
    circle(50,70,60 );
    circle(350,70,60 );
    circle(50,350,60 );
    circle(350,350,60 );
}
function take_snapshot(){    
  save('student_name.png');
}

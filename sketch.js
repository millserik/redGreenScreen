function setup() {
  createCanvas(480, 272);
  time = 0;
  mins = 0;
  g = 0;

}

function draw() {
  background(0);
  
  noStroke()
  fill(3,190,252)
  rect(0,0,480,32)

  textSize(20)
  stroke(0)
  fill(0)
  text('full screen button',8,24)
  time = time + deltaTime;
  out_time = floor(time/1000)
  if(out_time == 60){
    mins = mins + 1
    time = 0
    out_time = 0
  }
  if(out_time < 10){
    print_time = '0'+ out_time
  } else{
    print_time = out_time
  }
  text(mins + ':' + print_time,240,24)

  
  stroke(255)
  
  for(let j = 0; j < 4; j++){
    for(let i = 0; i < 2; i++){
      
      if(g== 1){
        fill(5,176,48)
      } else{
        fill(184,36,26)
      }
      
      rect(0,32,480,240)
    }
  }
}

function mousePressed(){
  if (mouseY < 272 && mouseY > 32){
    if(mouseX > 0 && mouseX < 480){
       g = 1
    }
  }
}

function mouseReleased(){
  g = 0

}

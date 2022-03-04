let b;
let pipes = [];
let frames = 0;
let score = 0;
let PipeIndex; //this will represent the next pipe for the bird to jump


function setup() {
  createCanvas(400, 400);
  pipes.push(new pipe)


  b = new bird(width/4, height/2);
}

function draw() {
  background(0);
  frames += 1;
  for (let i = pipes.length - 1; i >= 0; i--){ 
    pipes[i].update();
    pipes[i].show();
    
    if (pipes[i].collide(b)){
      noLoop();
      console.log('GameOver')
    }
    if (pipes[i].notInPlay()) {
      pipes.splice(i, 1);
    }    
  }
  
  if (pipes[0].x > b.x){
    pipeIndex = 0;
  } else {
    pipeIndex = 1;
  }
  
  
  // important to note  bird.x never actually changes. The 
  // pipes just move from right to left
  
  // we can use that to calculate how to jump 
  // basically, any time b.x is referenced, we could just say width/4
  
  if (b.y + b.jumpHeight > height - pipes[pipeIndex].bottom - 4*b.r){
    if (b.x - 2*b.r < pipes[pipeIndex].x + pipes[pipeIndex].w && frames%4 == 0){
      b.jump(); 
    }
  }
   
  b.show()
  b.update();
  
  if (frames % 100 == 0){
    pipes.push(new pipe);
    score += 1;
    console.log(score);
  } 
}




function keyPressed() {
  if (key == " ") {
    b.jump();
  }  
}

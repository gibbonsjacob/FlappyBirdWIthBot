function pipe() {
  this.spacing = 150; //how much space will be between top and bottom pipe
  this.top = random(height/8, (2/4 * height));
  this.bottom = height - this.top - this.spacing;
  // this.top = random(height/6, (3/4 * height));
  
  this.x = width; // since the game is played with a moving screen, we have to                            simulate them moving towards us
  this.w = 15; 
  this.speed = 2;
  
  
  this.collide = function(bird){
    if (bird.y < this.top || bird.y > height - this.bottom){
      if (bird.x > this.x && bird.x < this.x + this.w){
        return true;
      }
    }
    return false;
  }
  
  this.update = function(){
    this.x -= this.speed;
  }
  
  this.show = function(){
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }
  
  this.notInPlay = function(){
    if (this.x < 0) {
      return true;
    } else {
      return false;
    }
  }
  
  
  
  
}
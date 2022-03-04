class bird {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25
    this.velocity = 0;
    this.gravity = 0.8;
    this.jumpHeight = -15; // since max height is the bottom of the screen, we use a negative number to measure going "up"
  }
  
  show() {
    circle(this.x, this.y, this.r);
  }
  
  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.85;
    this.y += this.velocity;
    // this.x += 2
    
    if (this.y > height || this.y < 0) {
      noLoop();
      console.log('GameOver')
    }

    

  }
   
  jump() {
    this.velocity += this.jumpHeight;
    }
  
 
    
  
}
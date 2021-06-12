class Hammer {
  constructor(x, y,width,height) {
    var options = {
      'density':4,
      'friction': 1.0,
      'restitution':0.3
    }
    this.hammer = Bodies.rectangle(x, y,width,height, options);
  
    World.add(world, this.hammer);
    this.width = width;
    this.height = height;
  };
  display(){
    var hammerpos = this.hammer.position;
    hammerpos.x = mouseX;
    hammerpos.y = mouseY;
    var angle = this.hammer.angle;

    push();
    translate(hammerpos.x, hammerpos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};

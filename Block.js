class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.0
    };
    this.visibility = 255;
    this.removed = false;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    // a block that is hit hard is taken out of the world and fades away
    if (!this.removed && this.body.speed >= 3) {
      World.remove(world, this.body);
      this.removed = true;
    }
    if (this.removed) {
      this.visibility = this.visibility - 5;
      if (this.visibility <= 0) {
        return;
      }
    }

    var pos = this.body.position;
    push();
    drawingContext.globalAlpha = this.visibility / 255;
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}

function Meteor(radius, distance, speed){
  this.radius = radius
  this.theta=random(0,20)
  this.rotationSpeed = speed/1000
  this.distance = distance;

  this.calculate = function(){
    this.x = this.distance*planet.radius*(cos(this.theta))
    this.y = this.distance*planet.radius*(sin(this.theta))
  }
  this.show = function() {
    ellipseMode(CENTER)
    fill(255)
    this.theta += this.rotationSpeed
    ellipse(this.x,this.y,this.radius,this.radius)
  }
}

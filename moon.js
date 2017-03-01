function Moon(radius, distance, speed){
  this.radius = radius
  this.theta=random(0,20)
  this.rotationSpeed = speed/1000
  this.distance = distance;
  this.meteorDistance = random(0.5,1.5)
  this.theta = 3
  this.shade = random(50,175)
  this.fb = round(random(-1,1))


  this.calculate = function(){
    this.x = width/2 + this.distance*planet.radius*(cos(this.theta))
    this.y = height/2 + this.distance*planet.radius*(sin(this.theta))
  }
  this.show = function(mam) {

    ellipseMode(CENTER)
    fill(0,this.shade,0)
    this.theta += this.rotationSpeed
    noStroke()
    ellipse(this.x,this.y,this.radius,this.radius)
    fill(150,150,150)
    ellipse(this.mx,this.my,this.radius/2,this.radius/2)
  }
  this.meteor = function(){
    this.mx = this.x + this.meteorDistance*planet.radius*(cos(this.theta*this.fb))
    this.my = this.y + this.meteorDistance*planet.radius*(sin(this.theta*this.fb))
  }
}

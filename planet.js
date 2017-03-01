function Planet(radius){
  this.x = width/2
  this.y = height/2
  this.radius = radius

  this.show = function() {
    noStroke()
    fill(255,255,90)
    ellipse(this.x,this.y,this.radius,this.radius)
  }
}

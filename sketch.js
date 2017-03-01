var planet;
var moons = [];
var meteors = [];

function setup(){

  createCanvas(window.innerWidth,window.innerHeight)

  planet = new Planet(30);
  for (i = 1; i < 9; i+=1){
    moons[i-2] = new Moon(random(5,15),(i*2)-2,random(40-i,10-i))
  }
}

function draw(){
      background(51)
  planet.show()
  for (i=0; i< moons.length; i++){
    moons[i].calculate()
    moons[i].meteor()
    moons[i].show()
  }
}

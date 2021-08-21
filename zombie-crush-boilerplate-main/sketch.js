const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var left_wall, right_wall, ground;
var bridge_link;
var bridge;
var joinpoint;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height - 10, width * 2, 20, "#795548", true);
  left_wall = new Base(300, height / 2 + 50, 600, 100, "#8d6e63", true);
  right_wall = new Base(width - 300, height / 2 + 50, 600, 100, "#8d6e63", true);
  bridge = new Bridge(15,{x: width/2-400, y: height/2 });
  joinpoint= new Base(width-600,height/2 +10,40,20, "#8d6e63", true);
  Matter.Composite.add(bridge.body,joinpoint);
  bridge_link = new Link(bridge,joinpoint);

  for (var i=0; i<=8; i++){
    var x= random(width/2 - 300, width/2 +300)
    var y= random(-10,140)
    var stone= new Stone(x,y,80);
    stones.push(stone);
  }


}

function draw() {
  background(51);
  Engine.update(engine);
  left_wall.display()
  right_wall.display()
  ground.display()
  for (var stone of stones){
    stone.display();
  }
}

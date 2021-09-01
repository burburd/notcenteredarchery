const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, Computerbase, Computerplayer,player, Playerbase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   Playerbase=new PlayerBase(300,random(450,height -300),180,150)
   player=new Player(295,Playerbase.body.position.y-153,50,180)
   Computerbase=new ComputerBase(700,random(450,height-300),180,150)
   Computerplayer=new ComputerPlayer(695,Computerbase.body.position.y-153,50,180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   Playerbase.display();
   player.display();
   Computerbase.display();
   Computerplayer.display();
   //display Player and computerplayer

 
}

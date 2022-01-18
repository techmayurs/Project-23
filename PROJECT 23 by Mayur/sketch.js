var helicopterImg, bgImg;
var helicopterSprite, packageSprite;
var packageBody,boxBottomBody, boxLeftBody, boxRightBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	helicopterImg=loadImage("helicopter.png")
	packageImg=loadImage("package.png")
	bgImg=loadImage("bg.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 50,200,200);
	packageSprite.addImage(packageImg)
	packageSprite.shapeColor = "yellow"
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterImg)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;
	
	box1 = new Box(400, 610, 200,20);
 	box2 = new Box(310, 570, 20,100);
 	box3 = new Box(490, 570, 20,100);

	packageBody = Bodies.circle(width/2 , 100 , 20 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

}


function draw() {
	Engine.update(engine);
	background(bgImg);
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	box1.display();
	box2.display();
	box3.display();

	drawSprites(); 
}

function keyPressed() {
	
	if (keyCode === LEFT_ARROW) {

		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation)

	  } else if (keyCode === RIGHT_ARROW) {

		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(packageBody, translation)
		
	  }
	  
	   if(keyDown(DOWN_ARROW)) {
		Matter.Body.setStatic(packageBody,false);
		}	
		
		box1.display();
		box2.display();
		box3.display();
	
	  Engine.update(engine);

}

  

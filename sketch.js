var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.velocityY = (random(1,6));

	box1 = createSprite(790, 375,30,750);
	box1.visible = false;


	box2 = createSprite(10, 375,30,750);
	box2.visible = false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true},starBodyoptions);
	World.add(world, starBody);
	
	Engine.run(engine);

	var starBodyoptions = 
	{
		restitution:1.0
	}

}


function draw() {
  background(bgImg); 

  fairy.bounceOff(box1);
  fairy.bounceOff(box2);

  if(fairy.isTouching(star))
  {
	  fairy.velocityX = 0;
	  star.velocityY = 0;
  }

  drawSprites();

}

function keyPressed() {
	//write code here
	if (keyDown("RIGHT_ARROW")) {
		fairy.velocityX = -4;
		fairy.velocityY = 0;
	  }
	  
	  if (keyDown("LEFT_ARROW")) {
		fairy.velocityX = -4;
		fairy.velocityY = 0;
	  }
}

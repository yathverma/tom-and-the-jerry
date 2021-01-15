var garden,gardenImage;
var jerry,jerryAnimaton,jerryImage;
var tom,tomAnimation,tomImage,tomCalm;

function preload() {
    //load the images here

    gardenImage=loadImage("images/garden.png");
    jerryAnimation=loadImage("images/jerryThree.png");
    jerryImage=loadImage("images/jerryFour.png")
    tomImage=loadAnimation("images/tomThree.png");
    tomCalm=loadAnimation("images/tomFour.png");
    tomAnimation=loadAnimation("images/tomThree.png","images/tomTwo.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden=createSprite(500,400);
    garden.addImage("gardenImage",gardenImage);

    jerry=createSprite(450,620);
    jerry.addImage("jerryAni",jerryAnimation);
    jerry.addImage("jerryIm",jerryImage);
    jerry.scale=0.1;

    tom=createSprite(862,609);
    tom.addAnimation("tomImage",tomImage);
    tom.addAnimation("calm",tomCalm);
    tom.addAnimation("catRunning",tomAnimation);
    tom.scale=0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    text(mouseX+','+mouseY,10,45);

    keyPressed();

    /* if(jerry.x+200 > tom.x){
        tom.velocityX=0;
        tom.changeAnimation("calm",tomCalm);
        jerry.changeImage("jerryIm",jerryImage)
    }*/

    if((tom.x+jerry.x)<=(tom.width+jerry.width)/2){
        tom.velocityX=0;
        tom.changeAnimation("calm",tomCalm);
        jerry.changeImage("jerryIm",jerryImage)
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      tom.velocityX=-5;
      tom.changeAnimation("catRunning",tomAnimation);

  }

}

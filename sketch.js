var parv,parvImage;

function preload (){
  parvImage=loadImage("unnamed.jpg")

  
}
function setup(){
  
  parv = createSprite(200,200,200,200)
  parv.addImage(parvImage)
  parv.scale=2.0;
}

function draw(){
  
  drawSprites()
  
  
}
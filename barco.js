var mar, barco;
var seaImg;


function preload() {
  seaImg = loadImage("Sea.png");

}


function setup() {
  createCanvas(500, 200);
  mar = createSprite(250, 100, 60, 30);
  mar.addImage(seaImg);
  mar.scale = 0.2;

}

function draw() {
  background("black");
  mar.visible = true;

  drawSprites();
}
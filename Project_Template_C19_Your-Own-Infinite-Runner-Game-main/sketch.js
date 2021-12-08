function preload(){
    sharkImage = loadImage("shark.png");
    submarineImage = loadImage("submarine.png");
    backgroundImage = loadImage("background.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    submarine = createSprite(150,windowHeight/2);
    submarine.addImage(submarineImage);
    submarine.scale = 0.75;

    invisibleGround = createSprite(0,windowHeight/2 + 50, 2*windowWidth, 10);

    invisibleGround.visible = false;

    edges = createEdgeSprites();
}

function draw() {
    background(backgroundImage);
    submarine.collide(invisibleGround);
    submarine.collide(edges);
    drawSprites();
}
var bgImg;
var cat
function preload() {
    //load the images here
    bgImg = loadImage("cat1.png");
    catimg1 = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("cat2.png,cat3.png")
    mouseimg2 = loadAnimation("mouse2.png,mouse3.png")
}





function setup() {
    createCanvas(1000, 800);
    //create tom and jerry sprites here
    createSprite(tom);
    createSprite(jerry);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x(cat.width - mouse.width) / 2) {

    };
    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here
    if (KeyCode === Left_Arrow)
        mouse.add = Animation("mouseTeasing", mouseimg2)
    mouse.add = Animation("mouseTeasing")
    mouse.frameDely = 25;

    if (KeyCode === Left_Arrow)
        mouse.add = Animation("mouseTeasing", mouseimg2)
    mouse.add = Animation("mouseTeasing")
    mouse.frameDely = 25;
}

let bearButton, catButton, monkeyButton;
let img;

function setup() {
    createCanvas(400, 400);
    bearButton = createButton("show bear");
    bearButton.position(50, 150);
    catButton = createButton("show cat");
    catButton.position(150, 150);
    monkeyButton = createButton("show monkey");
    monkeyButton.position(250, 150);
}

function draw() {
    background(0);
    try {
       image(img, 100, 100);
    }
    catch (e) {
        console.log("no image to show");
     
    }
}

function getAnimalImage(name){
    img = loadImage("assets/" + name + ".jpg");
}

function mousePressed() {
    catButton.mousePressed(() => getAnimalImage("cat"));
    bearButton.mousePressed(() => getAnimalImage("bear"));
    monkeyButton.mousePressed(() =>getAnimalImage("monkey"));
}
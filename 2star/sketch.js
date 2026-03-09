function setup(){
    createCanvas(windowWidth/2, windowHeight/2);
}

function draw(){
    background(0);
    fish(windowWidth/4, windowHeight/4);
}

function windowResized(){
    resizeCanvas(windowWidth/2, windowHeight/2);
}

function fish(x,y){
fill(204, 27, 136);
ellipse(x, y, 100, 60);
fill(143, 71, 115);
triangle(x-50, y, x-80, y-20, x-80, y+20);
fill(245);
circle(x+38, y-3, 10);
}
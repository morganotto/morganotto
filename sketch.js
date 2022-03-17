function setup() {
  createCanvas(300, 300, WEBGL);

}

function draw() {
  background(0);
  rotateY(mouseX, mouseY);
  sphere(60);
}

function display() {
  
}
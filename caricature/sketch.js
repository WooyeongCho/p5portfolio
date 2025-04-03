let hairY = 0;
const palette = {
  skin: "#F7E7D7",
  nose: "#DBC0A5",
  hair: "#220D0D",
  sideHair: "#583E3E"
}

let isHairOff = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#9B8D8A");
  
  face(200,200);
}

function face(xPos, yPos) {
  let x = xPos;
  let y = yPos;
  let eyeY = y+2;
  
  // face
  noStroke();
  fill(palette.skin);
  ellipse(x, y, 128, 148);
  
  // white eye
  fill(255);
  ellipse(x-30, eyeY, 30, 18);
  ellipse(x+30, eyeY, 30, 18);
  
  // black eye
  noStroke();
  fill(0);
  ellipse(x-30, eyeY, 18, 18);
  ellipse(x+30, eyeY, 18, 18);
  
  // eye highlight
  fill(255);
  let eye1offsetX = constrain((mouseX-(x-33))/100, -1.5, 4);
  let eye2offsetX = constrain((mouseX-(x+27))/100, -1.5, 4);
  let eye1offsetY = constrain((mouseY-(eyeY-3))/100, -1.5, 2);
  let eye2offsetY = constrain((mouseY-(eyeY-3))/100, -1.5, 2);
  ellipse(x-33 + eye1offsetX, eyeY-3 + eye1offsetY, 4, 4);
  ellipse(x+27 + eye2offsetX, eyeY-3 + eye2offsetY, 4, 4);
  
  fill(palette.nose);
  ellipse(x, y+18, 15, 12);
  
  // ear
  fill(palette.skin);
  ellipse(x+66, y+8, 20, 30);
  ellipse(x-66, y+8, 20, 30);
  
  // hair
  hair(x, y+hairY);
  
  
  // glasses
  stroke(0);
  strokeWeight(3);
  noFill();
  ellipse(x-30, eyeY+3, 40, 37);
  ellipse(x+30, eyeY+3, 40, 37);
  
  line(x-10, eyeY, x+10, eyeY);
  line(x-52, eyeY, x-62, eyeY);
  line(x+52, eyeY, x+62, eyeY);
  
  stroke("#EC7769");
  if(mouseY < y+40) arc(x, y+40, 33, constrain(((y+40)-mouseY)/10, 1, 11), 0, PI);
  
  if(mouseY >= y+40) arc(x, y+40, 33, constrain(((y+40)-mouseY)/10, -11, 1), PI, 0);
  
  if(isHairOff) {
    if(frameCount >= 2*60) hairY -= 2;
  }
}

function hair(x,y) {
  stroke(palette.sideHair);
  fill(palette.sideHair);
  quad(x+60, y-14, x+60, y+6, x+62, y+2, x+63, y-14);
  quad(x-60, y-14, x-60, y+6, x-62, y+2, x-63, y-14);
  
  fill(palette.hair);
  stroke(palette.hair);
  beginShape();
  vertex(x+5, y-58);
  vertex(x+10, y-54);
  vertex(x+12, y-14);
  vertex(x+63, y-14);
  vertex(x+65, y-40);
  vertex(x+50, y-65);
  vertex(x+30, y-78);
  vertex(x+10, y-84);
  vertex(x, y-80); // 여기가 기점!
  vertex(x-10, y-84);
  vertex(x-30, y-78);
  vertex(x-50, y-65);
  vertex(x-65, y-40);
  vertex(x-63, y-14);
  vertex(x-12, y-14);
  vertex(x-10, y-54);
  vertex(x-5, y-58);
  endShape();
}

function keyPressed() {
  if(key = 'h') {
    isHairOff = true;
  }
}
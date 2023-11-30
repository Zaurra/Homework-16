function setup() {
  myDrawing = new spookyDrawing();
  createCanvas(1000, 1000);
  noStroke()
  background(0);
  rectMode(CENTER)
  ellipseMode(CENTER)
}

function draw() {
  myDrawing.drawing();
}
class spookyDrawing{
  drawing(){
    fill(32, 28, 54)
    rect(height/2,width,width,height/2)
    fill(16, 14, 28)
    rect(width*.8, height*.75,width/10, height/3)
    rect(width*.74, height*.88, width/15,height/15)
    rect(width*.85, height*.9, width/15,height/14)
    fill(220)
    ellipse(width*.86,height*.12, width/5)
    fill(180)
    ellipse(width*.84,height*.16, width/20)
    fill(160)
    ellipse(width*.9,height*.1, width/15)
    fill(170)
    ellipse(width*.82,height*.08, width/25)
    fill(25,20,45)
    ellipse(width*.7, height*.5, width/5)
    ellipse(width*.75, height*.55, width/5)
    ellipse(width*.83, height*.45, width/5)
    ellipse(width*.9, height*.56, width/5)
    fill(16, 14, 28)
    rect(width*.1, height*.75,width/3, height/1.2)
    rect(width*.3, height*.6,width/5, height/7)
    rect(width*.45, height*.55,width/5, height/9)
    fill(20, 15, 35)
    ellipse(width*.1, height*.15, width/1.5)
    ellipse(width*.4, height*.1, width/2)
    ellipse(width*.5, height*.46, width/4)
    ellipse(width*.6, height*.6, width/5)
    ellipse(width*.65, height*.45, width/5)
    fill(0)
    ellipse(width*.13, height*.7, width/6,height/5)
    fill(255, 198, 64)
    ellipse(width*.1, height*.7, width/40,height/40)
    ellipse(width*.16, height*.7, width/40,height/40)
  }
  
  uhhhhhh(){
    background(0)
  }
}
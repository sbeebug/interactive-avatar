//Sabrina Oliver
//so6299@bard.edu
//feb 19 2017
//I worked alone on this assignment
//reflection: I wanted this new avatar to feel more trippy and surreal. The original was very basic and lifelike and I wanted to change the mood of it. There's the background dots that continually change color and transparancy(static animation),the eyes that change color(static animation), and the ellipses that follow your mouse; changing into rectangles when the mouse is clicked(dynamic). The new variables we learned and if/else statements took a bit of getting used to, but definitely with more practice it will become easier.


function setup() {
    createCanvas(500,500);
    background(170);
}

function draw() {
//background dots
   for (var y=20; y<= height -20; y+=10){
       for (var x=20; x<= width-20; x+=10){
           fill(random(255),random(255),random(255),random(150));
           ellipse(x,y,4,4);
           line(x,y,250,250);
       }
   }
    
  //random ellipse
    
  if (mouseIsPressed){
   fill(random(255),random(255),random(255),random(255));
      rect(mouseX, mouseY, random(10,150),random(10,150));
  }  else{
    fill(random(255),random(255),random(255),random(150));
    ellipse(mouseX, mouseY, random(5,80),random(5,80));
  }
//hair top
    fill(37,26,14);
    ellipse(250,220,240,300);
//body
    fill(51,69,33);
    triangle(250,200,350,500,150,500);
//face
    fill(210,166,121);
    ellipse(250,200,195,220);
//left eyebrow
    fill(37,26,14);
    quad(230,160,229,168,179,163,182,157);
    triangle(182,157,200,159,170,168);
//right eyebrow
    quad(270,160,271,168,321,163,318,157);
    triangle(318,157,300,159,330,168);
//left eyelash
    strokeWeight(2);
    line(170,175,180,185);
    line(176,176,195,195);
//right eyelash
    line(330,175,320,185);
    line(324,176,305,195);
//hair side right
    strokeWeight(0);
    fill(37,26,14);
    triangle(230,80,300,100,350,155);
    triangle(300,120,355,160,350,230);
//hair side left
    triangle(270,80,200,100,150,155);
//left eye
    fill(255);
    strokeWeight(1);
    ellipse(200,190,48,35);
//right eye
    fill(255);
    strokeWeight(1);
    ellipse(300,190,48,35);
 //left eye color
    fill(random(255),random(255),random(255));
    strokeWeight(0);
    ellipse(200,190,35,35);
//right eye color
    strokeWeight(0);
    ellipse(300,190,35,35);
//left eye pupil
    fill(0);
    ellipse(200,190,25,25);
//right eye pupil
    fill(0);
    ellipse(300,190,25,25);
//left eye highlight
    fill(255);
    ellipse(190,185,5,5);
    ellipse(192,180,2,2);
//right eye highlight
    fill(255);
    ellipse(290,185,5,5);
    ellipse(292,180,2,2);
//mouth
    fill(134,45,67);
    arc(250,260,50,30,0,PI);
//nose
    fill(204,153,102);
    triangle(250,195,260,240,240,240,);

    
    
    
}
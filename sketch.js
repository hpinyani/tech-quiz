function preload(){
  a1=loadImage("A1.jpeg")
  a2=loadImage("A2.jpeg")
  a3=loadImage("A3.jpeg")
  a4=loadImage("A4.jpeg")
  a5=loadImage("A5.jpeg")
  a6=loadImage("A6.jpeg")
  a7=loadImage("A7.jpeg")
  a8=loadImage("A8.jpeg")
  a9=loadImage("A9.jpeg")
  a10=loadImage("A10.jpeg")
  b1=loadImage("B1.jpeg")
  b2=loadImage("B2.jpeg")
  b3=loadImage("B3.jpeg")
  b4=loadImage("B4.jpeg")
  b5=loadImage("B5.jpeg")
  b6=loadImage("B6.jpeg")
  b7=loadImage("B7.jpeg")
  b8=loadImage("B8.jpeg")
  b9=loadImage("B9.jpeg")
  b10=loadImage("B10.jpeg")
  c1=loadImage("C1.jpeg")
  c2=loadImage("C2.jpeg")
  c3=loadImage("C3.jpeg")
  c4=loadImage("C4.jpeg")
  c5=loadImage("C5.jpeg")
  c6=loadImage("C6.jpeg")
  c7=loadImage("C7.jpeg")
  c8=loadImage("C8.jpeg")
  c9=loadImage("C9.jpeg")
  c10=loadImage("C10.jpeg")  
  d1=loadImage("D1.jpeg")
  d2=loadImage("D2.jpeg")
  d3=loadImage("D3.jpeg")
  d4=loadImage("D4.jpeg")
  d5=loadImage("D5.jpeg")
  d6=loadImage("D6.jpeg")
  d7=loadImage("D7.jpeg")
  d8=loadImage("D8.jpeg")
  d9=loadImage("D9.jpeg")
  d10=loadImage("D10.jpeg")
}
function setup(){
option1=createSprite(250,250,20,20)
  option1.addImage("a",a1)
option2=createSprite(250,350,20,20)
  option2.addImage("a",b1)
option3=createSprite(250,450,20,20)
  option3.addImage("a",c1)
option4=createSprite(250,550,20,20)
  option4.addImage("a",d1)
option5=createSprite(250,250,20,20)
  option5.addImage("a",a2)
option6=createSprite(250,350,20,20) 
  option6.addImage("a",b2)
option7=createSprite(250,450,20,20)
  option7.addImage("a",c2)
option8=createSprite(250,550,20,20)
  option8.addImage("a",d2)

option9=createSprite(250,250,20,20)
  option9.addImage("a",a3)
option10=createSprite(250,350,20,20) 
  option10.addImage("a",b3)
option11=createSprite(250,450,20,20) 
  option11.addImage("a",c3)
option12=createSprite(250,550,20,20)
  option12.addImage("a",d3)
option13=createSprite(250,250,20,20)
  option13.addImage("a",a4)
option14=createSprite(250,350,20,20) 
  option14.addImage("a",b4)
option15=createSprite(250,450,20,20)  
  option15.addImage("a",c4)
option16=createSprite(250,550,20,20)
  option16.addImage("a",d4)
option17=createSprite(250,250,20,20)
  option17.addImage("a",a5)
option18=createSprite(250,350,20,20) 
  option18.addImage("a",b5)
option19=createSprite(250,450,20,20) 
  option19.addImage("a",c5)
  option20=createSprite(250,550,20,20)
  option20.addImage("a",d5)
option21=createSprite(250,250,20,20)
  option21.addImage("a",a6)
option22=createSprite(250,350,20,20)
  option22.addImage("a",b6)
option23=createSprite(250,450,20,20)
  option23.addImage("a",c6)
option24=createSprite(250,550,20,20)
  option24.addImage("a",d6)
  
option25=createSprite(250,250,20,20)
  option25.addImage("a",a7)
option26=createSprite(250,350,20,20) 
  option26.addImage("a",b7)
option27=createSprite(250,450,20,20) 
  option27.addImage("a",c7)
option28=createSprite(250,550,20,20)
  option28.addImage("a",d7)
option29=createSprite(250,250,20,20)
  
option30=createSprite(250,350,20,20) 
option31=createSprite(250,450,20,20)  
option32=createSprite(250,550,20,20)  
option33=createSprite(250,250,20,20)
option34=createSprite(250,350,20,20) 
option35=createSprite(250,450,20,20)  
option36=createSprite(250,550,20,20)
  option37=createSprite(250,250,20,20)
option38=createSprite(250,350,20,20) 
option39=createSprite(250,450,20,20)  
option40=createSprite(250,550,20,20)
  
}

  
  
  
  function draw(){
  text("click on start to play the game",50,100)
  if(keyDown("a")){
    q1()
  }

  if(keyDown("b")){
     q2()
     }
    if(keyDown("c")){
      q3()
      
    }
    if(keyDown("d")){
      q4()
    }
    if(keyDown("e")){
      q5()
    }
    if(keyDown("f")){
      q6()
    }
    if(keyDown("g")){
      q7()
    }
    if(keyDown("h")){
      q8()
    }
    if(keyDown("i")){
      q9()
    }
    if(keyDown("j")){
      q10()
    }
      
    
    
    
    
  drawSprites()
}
function q1(){
  text("www stands for?",250,150)
  
}
function q2(){
  text("MH2 stand for?",250,150)
  
}
function q3(){
  text("A process known as ______ is used by large retailers to study trends ",250,150)
}
function q4(){
  text("Technology is no longer protected by copyright, avaliable to everyone,is considered to be",250,150)
  
}
function q5(){
text("_____ is data that has been organized or presented in a meaningful fashion",250,150)
  
}
function q6(){
  text("What is a storage device?",250,150)
}
function q7(){
  text("the term bit is short of",250,150)
  
}
function q8(){
  text("A _______ is approximately one billion bytes",250,150)
}
function q9(){
   text("The components that process data are located in?",250,150) 
}
function q10(){
     text("_____ is any part of computer that you can physically touch?",250,150)
   }










let chapter=0;
function setup() {
  createCanvas (1000, 1000);
  background(255);
}
//the chapters and what they contain
function draw() {
    if (chapter===0){background (0)          
  speech ("press the light", 450,450, 25,247, 238, 127)                   
light (500,500,50,50,247, 238, 127)
  mousePressed (450,450,75,75)    
                    }   
  
  else if (chapter===1){background (29,5,20)
  body (500,500,400,400, 9,0,0)                    
  eye (0,0, 500, 500,100,100, 156, 191, 167)                     
  speech ("again", 150,150,25, 237, 228, 117)                        
   light (200,200,50,50, 237, 228, 117)   
    mousePressed (175,175,50,50) 
                       }
  
  else if (chapter===2){background (39,15,30)
  body (500,500,500,500,19,5,10)                      
    eye (0,0, 500, 500,100,100, 146, 181, 157)
                        
   eye (-150,-150, 350, 350,100,115, 201, 242, 153) 
  speech ("it seems to be working...", 650,650,25, 227, 218, 107)  
     light (700,700,50,50, 227, 218, 107)  
  mousePressed (650,650,75,75)                       
  }
  
  else if (chapter===3){background (59, 32, 60)
  body (500,500,600,600,39,12,40)                          
eye (0, 0,  500, 500, 100,100, 136, 171, 147)
eye (-150, -150, 350, 350, 100,115, 191, 232, 143)
                        
eye (164,110, 660,610, 75,75,  97, 148, 113)
eye (-170, 100, 330,600, 75,75 ,94, 130, 99)

  speech ("continue", 100,600,25, 217, 208, 97)                          
light (150,650,50,50, 217, 208, 97)
mousePressed (100,600,75,75)   
  }
  
    else if (chapter===4){background (79, 52, 90)
    body (450,500,600,600, 59,32,70)                        
eye (0,0,  500, 500, 100,100, 126, 161, 137)
 eye (-150,-150, 350, 350, 100,115, 181, 222, 133) 
eye (164,110, 660,610, 75,75,  87, 138, 103)
eye (-170, 100, 330,600, 75,75 ,84, 120, 89) 
                          
eye (180,-60, 680,440, 50,50,209, 16, 58)
eye (-300,-25 , 200,475, 50,75, 209, 16, 58)
eye (50,-180, 550, 320, 75,50, 241, 65, 103)

  speech ("almost there", 250,50,25, 207, 198, 87)                          
light (300,100,50,50,207, 198, 87)
  mousePressed (250,50,75,75)   
  }
  
    else if (chapter===5){background (93, 78, 109)
      body (450,450,700,700, 79,52,80)                        
  eye (0,0, 500, 500, 100,100, 116, 151, 127)
 eye (-150,-150, 350, 350, 100,115, 171, 212, 123) 
eye (164,110, 660,610, 75,75,  77, 128, 93)
eye (-170, 100, 330,600, 75,75 ,74, 110, 79) 
eye (180,-60, 680,440, 50,50,209, 16, 58)
eye (-300,-25 , 200,475, 50,75, 209, 16, 58)
eye (50,-180, 550, 320, 75,50, 241, 65, 103)
                          
eye (-250,-300, 250,200, 50,25, 241, 65, 103)
eye (-340,-190, 160,310, 25,25,77, 128, 93)
eye (210, -200, 710,300, 35,15,77, 128, 93)  
  
  speech ("one last time", 550,150,25, 197, 188, 77)                          
light (600,200,50,50, 197, 188, 77)
  mousePressed (550,150,75,75)   
                         }
  
    else if (chapter===6){background (150, 104, 159)
        body (450,450,700,700, 130,84,139)                          
      eye (0,0, 500, 500, 100,100, 106, 141, 117)
 eye (-150,-150, 350, 350, 100,115, 161,202, 93) 
eye (164,110, 660,610, 75,75,  67, 118, 83)
eye (-170, 100, 330,600, 75,75 ,64, 100, 69)
eye (180,-60, 680,440, 50,50,209, 16, 58)
eye (-300,-25 , 200,475, 50,75, 209, 16, 58)
eye (50,-180, 550, 320, 75,50, 241, 65, 103) 
eye (-250,-300, 250,200, 50,25, 241, 65, 103)
eye (-340,-190, 160,310, 25,25,77, 128, 93)
eye (210, -200, 710,300, 35,15,77, 128, 93)
                          
eye (-50,-310, 450, 200, 25,15, 241, 65, 103)
eye (125,-300, 625, 200, 10,10,  57, 108, 73)
eye (-330,170, 170, 670, 15,15, 241, 65, 103)  
  speech ("perfect. now press any letter you like", 500,800,25, 247, 238, 127)                          
                         }
  
    else if (chapter===7){background (175, 154, 178)
  body (450,450,800,800, 150,134,158)
      eye (0,0, 500, 500, 100,100, 96, 131, 107)
   eye (-150,-150, 350, 350, 100,115, 209, 16, 58) 
  eye (164,110, 660,610, 75,75,  57, 108, 73)
eye (-170, 100, 330,600, 75,75 ,54, 90, 59) 
eye (180,-60, 680,440, 50,50,209, 16, 58)
eye (-300,-25 , 200,475, 50,75, 209, 16, 58)
eye (50,-180, 550, 320, 75,50, 241, 65, 103)
eye (-250,-300, 250,200, 50,25, 241, 65, 103)
eye (-340,-190, 160,310, 25,25,77, 128, 93)
eye (210, -200, 710,300, 35,15,209, 16, 58)  
eye (-50,-310, 450, 200, 25,15, 241, 65, 103)
eye (125,-300, 625, 200, 10,10,  57, 108, 73)
eye (-330,170, 170, 670, 15,15, 241, 65, 103)
                          
eye (-440,-110, 60, 390, 10,10, 96, 131, 107)                          
eye (300,170, 800, 670, 15,25, 165, 70, 87)
eye (0,170, 500, 670, 35,15, 54, 90, 59)
eye (-150,-400, 350,100,25,25,77, 128, 93)
    speech ("they've spotted you press another letter", 200,800,25, 247, 238, 127)                                                  
                         }
  
  else if (chapter===8){background (175, 154, 178)
body (450,450,850,850, 150,134,158)
      eye (0,0, 500, 500, 100,100, 96, 131, 107) //1
   eye (-150,-150, 350, 350, 100,115, 209, 16, 58)
  eye (164,110, 660,610, 75,75,  57, 108, 73)//3
eye (-170, 100, 330,600, 75,75 ,54, 90, 59) 
  eye (180,-60, 680,440, 50,50,209, 16, 58)//5
eye (-300,-25 , 200,475, 50,75, 209, 16, 58)
eye (50,-180, 550, 320, 75,50, 241, 65, 103)//7
eye (-250,-300, 250,200, 50,25, 241, 65, 103)
eye (-340,-190, 160,310, 25,25,209, 16, 58)//9
eye (210, -200, 710,300, 35,15,77, 128, 93)
eye (-50,-310, 450, 200, 25,15, 241, 65, 103)//11
eye (125,-300, 625, 200, 10,10,  57, 108, 73)
eye (-330,170, 170, 670, 15,15, 241, 65, 103)  //13
eye (-440,-110, 60, 390, 10,10, 96, 131, 107)                          
eye (300,170, 800, 670, 15,25, 165, 70, 87)//15
eye (0,170, 500, 670, 35,15, 54, 90, 59)
eye (-150,-400, 350,100,25,25,77, 128, 93)//17
                        
eye (-400,-320, 100, 180, 25,25, 165, 70, 87)
eye (250,-330, 750, 170, 10,20, 54, 90, 59)//19
eye (100,270, 600, 770,30,20, 209, 16, 58)
eye (350,-100, 850, 400,30,30, 209, 16, 58)  //21
eye(40,-400, 540,100,30,30, 209, 16, 58)                        
  speech ("they are now awake", 100,800,25, 247, 238, 127)
  speech ("now press space bar to give them a hat", 100,850,25, 247, 238, 127)                      
                       }
  
  else if (chapter===9){background (175, 154, 178)
body (450,450,850,850, 150,134,158)
      eye (0,0, 500, 500, 100,100, 96, 131, 107) //1
   eye (-150,-150, 350, 350, 100,115, 209, 16, 58)
  eye (164,110, 660,610, 75,75,  57, 108, 73)//3
eye (-170, 100, 330,600, 75,75 ,54, 90, 59) 
  eye (180,-60, 680,440, 50,50,209, 16, 58)//5
eye (-300,-25 , 200,475, 50,75, 209, 16, 58)
eye (50,-180, 550, 320, 75,50, 241, 65, 103)//7
eye (-250,-300, 250,200, 50,25, 241, 65, 103)
eye (-340,-190, 160,310, 25,25,209, 16, 58)//9
eye (210, -200, 710,300, 35,15,77, 128, 93)
eye (-50,-310, 450, 200, 25,15, 241, 65, 103)//11
eye (125,-300, 625, 200, 10,10,  57, 108, 73)
eye (-330,170, 170, 670, 15,15, 241, 65, 103)  //13
eye (-440,-110, 60, 390, 10,10, 96, 131, 107)                          
eye (300,170, 800, 670, 15,25, 165, 70, 87)//15
eye (0,170, 500, 670, 35,15, 54, 90, 59)
eye (-150,-400, 350,100,25,25,77, 128, 93)//17
                        
eye (-400,-320, 100, 180, 25,25, 165, 70, 87)
eye (250,-330, 750, 170, 10,20, 54, 90, 59)//19
eye (100,270, 600, 770,30,20, 209, 16, 58)
eye (350,-100, 850, 400,30,30, 209, 16, 58)  //21
eye(40,-400, 540,100,30,30, 209, 16, 58)                        
  hat (0)
speech ("press a letter to tell them you like their hat", 50,800,25, 247, 238, 127)
                       }
  
  else if (chapter===10){background (224, 184, 186)
  body (450,450,850,850, 180,144,168)
      eyes (0,0, 500, 500, 100,100, 96, 131, 107) //1
   eyes (-150,-150, 350, 350, 100,115, 209, 16, 58)
  eyes (164,110, 660,610, 75,75,  57, 108, 73)//3
eyes (-170, 100, 330,600, 75,75 ,54, 90, 59) 
  eyes (180,-60, 680,440, 50,50,209, 16, 58)//5
eyes (-300,-25 , 200,475, 50,75, 209, 16, 58)
eyes (50,-180, 550, 320, 75,50, 241, 65, 103)//7
eyes (-250,-300, 250,200, 50,25, 241, 65, 103)
eyes (-340,-190, 160,310, 25,25,209, 16, 58)//9
eyes (210, -200, 710,300, 35,15,77, 128, 93)
eyes (-50,-310, 450, 200, 25,15, 241, 65, 103)//11
eyes (125,-300, 625, 200, 10,10,  57, 108, 73)
eyes (-330,170, 170, 670, 15,15, 241, 65, 103)  //13
eyes (-440,-110, 60, 390, 10,10, 96, 131, 107)                          
eyes (300,170, 800, 670, 15,25, 165, 70, 87)//15
eyes (0,170, 500, 670, 35,15, 54, 90, 59)
eyes (-150,-400, 350,100,25,25,77, 128, 93)//17                      
eyes (-400,-320, 100, 180, 25,25, 165, 70, 87)
eyes (250,-330, 750, 170, 10,20, 54, 90, 59)//19
eyes (100,270, 600, 770,30,20, 209, 16, 58)
eyes (350,-100, 850, 400,30,30, 209, 16, 58)  //21
eyes(40,-400, 540,100,30,30, 209, 16, 58)                        
  hat (0)                           
  speech ("congrats you've swoon the monster", 100,800,25, 247, 238, 127)  
                        }
  else if (chapter===11) {background (224, 184, 186)
  speech ("you and the monster found love and lived happily ever after", 100,500,30, 247, 238, 127)
    speech ("the end.", 450,600,45, 247, 238, 127)                        
}
} 
//monster
//the Eye

function eye(lineagex, lineagey,pupilx,pupily,pupilsizea, pupilsizeb, iriscolourr, iriscolourg, iriscolourb){
  
  // iris movement
  irisX = map(mouseX, 0, width, width/2-25, width/2+25);
 irisY = map(mouseY, 0, height, height/2-25, height/2+25);
  
  // Drawing the eye
  stroke(255);
  fill(255);
  ellipse(pupilx,pupily, pupilsizea+100, pupilsizeb+100);
  stroke(iriscolourr, iriscolourg, iriscolourb)
  fill( iriscolourr, iriscolourg, iriscolourb );
  ellipse(irisX+lineagex, irisY+lineagey, pupilsizea+50, pupilsizeb+50);
  stroke(0)
  fill(0);
  ellipse(irisX+lineagex, irisY+lineagey, pupilsizea, pupilsizeb);
}
//the body
function body (headx,heady,headsizex,headsizey,hr,hg,hb) {
  fill (hr,hg,hb)
  stroke (hr,hg,hb)
ellipse (headx,heady,headsizex,headsizey)
}

//the circle
function light (lightx,lighty,lightsizex,lightsizey,lightr,lightg,lightb) {
  stroke (lightr,lightg,lightb)
  fill (lightr,lightg,lightb)
  ellipse (lightx,lighty,lightsizex,lightsizey)
}
//text
function speech(speech, speechx,speechy, speechsize, sr,sg,sb) {
  fill (sr,sg,sb)
  stroke (sr+10,sg+10,sb+10)
  textSize (speechsize)
  text (speech,speechx,speechy)
  } 

//making the circle press change scene
function mousePressed (lightx,lighty,lightsizex,lightsizey){
    if (mouseIsPressed && mouseX > lightx && mouseX < lightx + lightsizex && mouseY > lighty && mouseY < lighty + lightsizey) 
{ chapter=chapter+1}
} 
//key pressing
function keyPressed () {
  if (chapter>5  && keyPressed) { chapter=chapter+1}
} 
//hat
function hat (hatr){
  fill(hatr)
  stroke (hatr)
rect (425,5, 50,50)
  rect (400,55, 100,15)
} 
//eye + shiny +blush
function eyes(lineagex, lineagey,pupilx,pupily,pupilsizea, pupilsizeb, iriscolourr, iriscolourg, iriscolourb){
  
  // iris movement 2
  irisX = map(mouseX, 0, width, width/2-25, width/2+25);
 irisY = map(mouseY, 0, height, height/2-25, height/2+25);
  
  // Drawing the eye 2
  stroke(255);
  fill(255);
  ellipse(pupilx,pupily, pupilsizea+100, pupilsizeb+100);
  stroke(iriscolourr, iriscolourg, iriscolourb)
  fill( iriscolourr, iriscolourg, iriscolourb );
  ellipse(irisX+lineagex, irisY+lineagey, pupilsizea+50, pupilsizeb+50);
  
  stroke(0)
  fill(0);
  ellipse(irisX+lineagex, irisY+lineagey, pupilsizea, pupilsizeb);
  //shiny
  fill(255)
  stroke (255)
  ellipse (irisX+lineagex-25, irisY+lineagey-25, pupilsizea, pupilsizeb)
  //blush
  fill (253, 195, 221)
  stroke (253, 195, 221)
  ellipse (200,600, 75,55)
    ellipse (800,600, 75,55)
}

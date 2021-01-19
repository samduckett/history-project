var roadOutlineColor;
var roadOutlineOutline;
var roadColor;
var roadOutline;
var roadCenterColor;
var roadCenterOutline;
var button;
var buttonAmount;
var yourClickes = 0
var robotClickes = 0

var people = 0
var clickAmount = 10

var clickes = 0


var clickAmountMax = 50
var j = 0
var on = true
var upDown = true;
var moon = false;
var goToMoon = false
function setup() {
  //noLoop()
  frameRate(20);
  createCanvas(400, 600);
  
  button = createButton('Add Worker');
  button.position(0, 32.5)
  button.mousePressed(AddPlayer);
  
  buttonAmount = createButton('Add Click Amount');
  buttonAmount.position(0, 67.5);
  buttonAmount.mousePressed(AddClickAmount);
}

function AddPlayer() {
  if (people <= 25 && clickes >= (people + 1) * 0.3) {
    people ++
    clickes -= people * 0.3
  }
  if (people > 25) {
    button.html('Max Workers')
  }
}

function AddClickAmount() {
  if (clickAmount < clickAmountMax && clickes >= (clickAmount + 5)/3) {
    clickAmount += 5
    clickes -= clickAmount/3
    buttonAmount.html('Add Click Amount');
  }
  if (clickAmount >= clickAmountMax) {
    buttonAmount.html('Max Click Amount')
  }
}

function mouseReleased() {
  clickes += clickAmount / 100
  yourClickes += clickAmount / 100
  
  if (moon == false) {
    if (clickes > 16000 + (clickAmount / 100)) {
      moon = true
      goToMoon = true
      clickes = 0
    }
  }
  if (moon) {
    if (clickes > 1500  + (clickAmount / 100)) {
      moon = false
      clickes = 0
      people = 0
      clickAmount = 10
      clickAmountMax = 50

    }
  }
}

function person(x, y, h, l) {
  if (j == 30) {
    upDown = false
  } else if (j == -10) {
    upDown = true 
  }
  
  if (upDown) {
    j ++
  } else {
    j --
  }
  stroke(0)
  noFill()
  strokeWeight(h / (2/3 + 14))
  circle(x, y - h/4, h/2);
  strokeWeight(h / (2/3 + 6))
  line(x, y, x, y + h)
  strokeWeight(h / (2/3 + 14))
  line(x, y + h, x + h/3, y + h + h/3)
  line(x, y + h, x - h/3, y + h + h/3)
  if (l) {
    line(x, y + h/3, x + h/1.5, y - 10)
    line(x, y + h/3, x - h/1.5, j + y)
    stroke("brown")
    line(x - h/1.5, j + y + h/1.5, x - h/1.5, j + y - h/1.5)
  
    strokeWeight(0)
    stroke("gray")
    fill("gray")
    beginShape();
    vertex(((x - h/1.5) - ((x - h/3) - (x - h/1.5))), j + y + h/1.5);
    vertex(x - h/3, j + y + h/1.5);
    vertex(x - h/3, j + y + h/1.5 + ((x - h/3) - ((x - h/1.5) - ((x - h/3) - (x - h/1.5)))) / 2);
    vertex(x - h/1.5, j + y + h/1.5 + ((x - h/3) - ((x - h/1.5) - ((x - h/3) - (x - h/1.5)))) );
    vertex(((x - h/1.5) - ((x - h/3) - (x - h/1.5))), j + y + h/1.5 + ((x - h/3) - ((x - h/1.5) - ((x - h/3) - (x - h/1.5)))) / 2);
    endShape(CLOSE);
  } else {
    line(x, y + h/3, x - h/1.5, y - 10)
    line(x, y + h/3, x + h/1.5, j + y)
  
    stroke("brown")
    line(x + h/1.5, j + y + h/1.5, x + h/1.5, j + y - h/1.5)
  
    strokeWeight(0)
    stroke("gray")
    fill("gray")
    beginShape();
    vertex(((x + h/1.5) - ((x + h/3) - (x + h/1.5))), j + y + h/1.5);
    vertex(x + h/3, j + y + h/1.5);
    vertex(x + h/3, j + y + h/1.5 + ((x - h/3) - ((x - h/1.5) - ((x - h/3) - (x - h/1.5)))) / 2);
    vertex(x + h/1.5, j + y + h/1.5 + ((x - h/3) - ((x - h/1.5) - ((x - h/3) - (x - h/1.5)))) );
    vertex(((x + h/1.5) - ((x + h/3) - (x + h/1.5))), j + y + h/1.5 + ((x - h/3) - ((x - h/1.5) - ((x - h/3) - (x - h/1.5)))) / 2);
    endShape(CLOSE);
  }
}

function draw() {
  if (moon == false) {
    background(50, 150, 50);
    roadOutlineColor = color(50, 150, 50)
    roadOutlineOutline = false

    roadColor = color(153, 102, 51)
    roadOutline = true

    roadCenterColor = color(50, 150, 50)
    roadCenterOutline = true
    if (clickes >= 10) {
      roadCenterColor = color(153, 102, 51)
      roadCenterOutline = false
    }
    if (clickes >= 20) {
      roadColor = color(163)
      roadCenterOutline = true
    }
    if (clickes >= 30) {
      roadCenterColor = color(163)
      roadCenterOutline = false
    }
    if (clickes >= 40) {
      roadColor = color(65)
      roadCenterColor = color(65)
      roadOutlineColor = color(50, 150, 50)
      roadOutlineOutline = false
    }
    if (clickes >= 50) {
      roadOutlineColor = color(164)
      roadOutlineOutline = true
    }
    if (clickes >= 60) {
      roadColor = color(255)
      roadCenterOutline = true
    }
    if (clickes >= 70) {
      roadCenterColor = color(255)
      roadCenterOutline = false
    }
    if (clickes >= 80) {
      roadOutlineColor = color(64)
      roadOutlineOutline = true
    }
    if (clickes >= 90) {
      roadColor = color(207,181,59)
      roadCenterOutline = true
    }
    if (clickes >= 100) {
      roadCenterColor = color(207,181,59)
      roadCenterOutline = false
    }
    if (clickes >= 110) {
      roadOutlineColor = color(255)
      roadOutlineOutline = true
    }
    if (clickes >= 120) {
      roadColor = color(111,22,21)
      roadCenterOutline = true
    }
    if (clickes >= 130) {
      roadCenterColor = color(111,22,21)
      roadCenterOutline = false
    }
    if (clickes >= 140) {
      roadOutlineColor = color(207,181,59)
      roadOutlineOutline = true
    }
    if (clickes >= 150) {
      roadColor = color(185,242,255)
      roadCenterOutline = true
    }
    if (clickes >= 160) {
      roadCenterColor = color(185,242,255)
      roadCenterOutline = false
    }
    if (clickes >= 170) {
      roadOutlineColor = color(111,22,21)
      roadOutlineOutline = true
    }
    if (clickes >= 180) {
      roadColor = color(80,200,120)
      roadCenterOutline = true
    }
    if (clickes >= 190) {
      roadCenterColor = color(80,200,120)
      roadCenterOutline = false
    }
    if (clickes >= 200) {
      roadOutlineColor = color(185,242,255)
      roadOutlineOutline = true
    }
    if (clickes >= 350) {
      roadColor = color(random(255),random(255),random(255),random(255))
      roadCenterOutline = true
      clickAmountMax = 70
    }
    if (clickes >= 600) {
      roadCenterColor = color(0,0,0,0)
      roadCenterOutline = false
      clickAmountMax = 80
    }
    if (clickes >= 950) {
      roadOutlineColor = color(80,200,120)
      roadOutlineOutline = true
      clickAmountMax = 100
    }
    if (clickes >= 1000) {
      background(153, 102, 51)
      clickAmountMax = 110
    }
    if (clickes >= 1500) {
      background(163)
      clickAmountMax = 120
    }
    if (clickes >= 2000) {
      background(65)
      clickAmountMax = 130
    }
    if (clickes >= 2500) {
      background(255)
      clickAmountMax = 140
    }
    if (clickes >= 3000) {
      background(207,181,59)
      clickAmountMax = 150
    }
    if (clickes >= 3500) {
      background(111,22,21)
      clickAmountMax = 160
    }
    if (clickes >= 4000) {
      background(185,242,255)
      clickAmountMax = 170
    }
    if (clickes >= 4500) {
      background(80,200,120)
      clickAmountMax = 180
    }
    if (clickes >= 10000) {
      background(random(255), random(255), random(255), random(255))
      clickAmountMax = 300
    }
    noStroke();
    fill("skyBlue")
    rect(0, 0, width, 100)
    fill(100)
  }
  //Moon Start--------------------------------------
  if (goToMoon == true) {
    goToMoon = false
    clickes = 0
    people = 0
    clickAmount = 10
    clickAmountMax = 50
  }
  if (moon) {
    noStroke();
    background(100)
    
    roadOutlineColor = color(100)
    roadOutlineOutline = false

    roadColor = color(200)
    roadOutline = true

    roadCenterColor = color(100)
    roadCenterOutline = true
    
    if (clickes >= 20) {
      roadCenterColor = color(200)
      roadCenterOutline = false
    }
    if (clickes >= 40) {
      roadColor = color(65)
      roadCenterOutline = true
    }
    if (clickes >= 60) {
      roadCenterColor = color(65)
      roadCenterOutline = false
    }
    if (clickes >= 80) {
      roadOutlineColor = color(180)
      roadOutlineOutline = true
    }
    if (clickes >= 100) {
      roadColor = color(255)
      roadOutlineOutline = true
    }
    if (clickes >= 120) {
      roadCenterColor = color(255)
      roadOutlineOutline = false
    }
    if (clickes >= 140) {
      roadOutlineColor = color(65)
      roadOutlineOutline = true
    }
    if (clickes >= 160) {
      roadColor = color(207,181,59)
      roadOutlineOutline = true
    }
    if (clickes >= 180) {
      roadCenterColor = color(207,181,59)
      roadOutlineOutline = false
    }
    if (clickes >= 200) {
      roadOutlineColor = color(225)
      roadOutlineOutline = true
    }
    if (clickes >= 140) {
      roadOutlineColor = color(65)
      roadOutlineOutline = true
    }
    if (clickes >= 200) {
      roadColor = color(111,22,21)
      roadOutlineOutline = true
    }
    if (clickes >= 220) {
      roadCenterColor = color(111,22,21)
      roadOutlineOutline = false
    }
    if (clickes >= 240) {
      roadOutlineColor = color(207,181,59)
      roadOutlineOutline = true
    }
    if (clickes >= 260) {
      roadColor = color(185,242,255)
      roadOutlineOutline = true
    }
    if (clickes >= 280) {
      roadCenterColor = color(185,242,255)
      roadOutlineOutline = false
    }
    if (clickes >= 300) {
      roadOutlineColor = color(111,22,21)
      roadOutlineOutline = true
    }
    if (clickes >= 320) {
      roadColor = color(80,200,120)
      roadOutlineOutline = true
    }
    if (clickes >= 340) {
      roadCenterColor = color(80,200,120)
      roadOutlineOutline = false
    }
    if (clickes >= 360) {
      roadOutlineColor = color(185,242,255)
      roadOutlineOutline = true
    }
    if (clickes >= 380) {
      roadColor = color(random(255),random(255),random(255),random(255))
      roadCenterOutline = true
      clickAmountMax = 70
    }
    if (clickes >= 400) {
      roadCenterColor = color(0,0,0,0)
      roadCenterOutline = false
      clickAmountMax = 80
    }
    if (clickes >= 420) {
      roadOutlineColor = color(80,200,120)
      roadOutlineOutline = true
      clickAmountMax = 100
    }
    if (clickes >= 440) {
      background(100)
      clickAmountMax = 110
    }
    if (clickes >= 460) {
      background(200)
      clickAmountMax = 120
    }
    if (clickes >= 480) {
      background(65)
      clickAmountMax = 130
    }
    if (clickes >= 500) {
      background(255)
      clickAmountMax = 140
    }
    if (clickes >= 520) {
      background(207,181,59)
      clickAmountMax = 150
    }
    if (clickes >= 540) {
      background(111,22,21)
      clickAmountMax = 160
    }
    if (clickes >= 560) {
      background(185,242,255)
      clickAmountMax = 170
    }
    if (clickes >= 600) {
      background(80,200,120)
      clickAmountMax = 180
    }
    if (clickes >= 620) {
      background(random(255), random(255), random(255), random(255))
      clickAmountMax = 300
    }
    
    fill("blue")
    rect(0, 0, width, 100)
    fill(100)
  }
    
    
    
  
  
  
  
  
  
  
  if (roadOutlineOutline) {
    stroke(0)
  } else {
    noStroke()
  }
  fill(roadOutlineColor)
  beginShape();
  vertex(width/2, 100);
  vertex(0, height);
  vertex(0, height-60);
  endShape(CLOSE);
  beginShape();
  vertex(width/2, 100);
  vertex(width, height);
  vertex(width, height-60);
  endShape(CLOSE);
  
  if (roadOutline) {
    stroke(0)
  } else {
    noStroke()
  }
  fill(roadColor)
  beginShape();
  vertex(width/2, 100);
  vertex(0, height);
  vertex(width, height);
  endShape(CLOSE);
  
  if (roadCenterOutline) {
    stroke(0)
  } else {
    noStroke()
  }
  fill(roadCenterColor)
  beginShape();
  vertex(width/2, 100);
  vertex(100, height);
  vertex(width - 100, height);
  endShape(CLOSE);
  clickes += people * 0.001
  robotClickes += people * 0.001
  
  
  for (n = 0; n < ceil(people/2); n ++) {
    person(width/2 + n * 15, n * 25 + 100, n * 5, true) 
  }
  for (n = 0; n < floor(people/2); n ++) {
    person(width/2 - n * 15, n * 25 + 100, n * 5, false) 
  }
  fill(0)
  stroke(0)
  strokeWeight(0.25)
  textSize(16);
  textAlign(RIGHT);
  text("Your Clickes Total: " + floor(yourClickes * 10), width - 5, 15)
  text("Total Worker Clickes: " + floor(robotClickes * 10), width - 5, 30);
  textAlign(LEFT);
  text("Total Clickes: " + floor(clickes * 10), 5, 15);
  text("Worker Amount: " + people, 5, 30)
  text("Cick Amount: " + clickAmount / 10, 5, 65)
  
  if (people > 25) {
    text('Max', 80, 49)
  } else {
    text("Cost: " + floor((people + 1) * 0.3 * 10) + " Clickes", 80, 49)
  }
  
  if (clickAmount >= clickAmountMax) {
    text('Max', 115, 85)
  } else {
    text("Cost: " + floor((clickAmount + 5)/3 * 10) + " Clickes", 115, 85)
  }
  
  
  if (clickes >= 16000 && moon == false) {
    textAlign(CENTER);
    fill(0)
    stroke(0)
    strokeWeight(0.25)
    textSize(30);
    text('Click To Go To The', 200, 150)
    textSize(90);
    text('Moon', 200, 250)
  }
  textAlign(CENTER)
  textSize(60)
  text('BPR', 320, 80)
  textSize(20)
  text('At Work', 320, 100)
  
  if (moon) {
    if (clickes >= 1500) {
      textAlign(CENTER)
      textSize(30);
      text('You Have Reached', 200, 150)
      text('The End Of The', 200, 175)
       
      textSize(90);
      text('Road', 200, 250)
      textSize(30);
      text('Click To Restart', 200, 375)
    }
  }
}
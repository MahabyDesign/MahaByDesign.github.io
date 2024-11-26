var sliderVel;
var sliderDens;
var sliderX1;
var sliderY1;
var sliderX2;
var sliderY2;

var x1Min, x1Max, x1Offset, x1Step;
var y1Min, y1Max, y1Offset, y1Step;
var x2Min, x2Max, x2Offset, x2Step;
var y2Min, y2Max, y2Offset, y2Step;

let chk1, chk2, chk3, chk4;

var canvas;
var speedRand;
let font;
let letter;
var myColor;
var strWg;
var rotNum;

function preload() {
 // font = loadFont("VolteMedium.otf");
}

function setup() {
  createCanvas(600,600);
  constructGraphics();
  rotNum = 0;
  strWg = 3;

  sliderVel = createSlider(0.01, 0.5, 0.05, 0.02);
  sliderVel.position(5, 20);
  sliderVel.addClass("mySliders");

  sliderDens = createSlider(6, 20, 10, 1);
  sliderDens.position(5, 50);
  sliderDens.addClass("mySliders");

  sliderX1 = createSlider(x1Min, x1Max, x1Offset, x1Step);
  sliderX1.position(5, 80);
  sliderX1.addClass("mySliders");

  sliderY1 = createSlider(y1Min, y1Max, y1Offset, y1Step);
  sliderY1.position(5, 110);
  sliderY1.addClass("mySliders");

  sliderX2 = createSlider(x2Min, x2Max, x2Offset, x2Step);
  sliderX2.position(5, 140);
  sliderX2.addClass("mySliders");

  sliderY2 = createSlider(y2Min, y2Max, y2Offset, y2Step);
  sliderY2.position(5, 170);
  sliderY2.addClass("mySliders");

  // get the checkboxes by their id
  // .elt means get the html element
  chk1 = select("#box1").elt;
  chk2 = select("#box2").elt;


  chk1.onchange = function () {
    // we only want to change things if the box was turned on
    // so we check like this
    if (chk1.checked) {
      chk2.checked = false;
    }
  };

  chk2.onchange = function () {
    if (chk2.checked) {
      chk1.checked = false;
    }
  };

  //sets starting values for when the sketch is started
  chk1.checked = true;
  letter = "A";
  x1Offset = 10;
	
	describe("Type Morpher explores the boundaries of type forms through dynamic patterns, forms and textures.")
}

function keyTyped() {
  if (key === "A") {
    letter = "A";
  } else if (key === "B") {
    letter = "B";
  } else if (key === "C") {
    letter = "C";
  } else if (key === "D") {
    letter = "D";
  } else if (key === "E") {
    letter = "E";
  } else if (key === "F") {
    letter = "F";
  } else if (key === "G") {
    letter = "G";
  } else if (key === "H") {
    letter = "H";
  } else if (key === "I") {
    letter = "I";
  } else if (key === "J") {
    letter = "J";
  } else if (key === "K") {
    letter = "K";
  } else if (key === "L") {
    letter = "L";
  } else if (key === "M") {
    letter = "M";
  } else if (key === "N") {
    letter = "N";
  } else if (key === "O") {
    letter = "O";
  } else if (key === "P") {
    letter = "P";
  } else if (key === "Q") {
    letter = "Q";
  } else if (key === "R") {
    letter = "R";
  } else if (key === "S") {
    letter = "S";
  } else if (key === "T") {
    letter = "T";
  } else if (key === "U") {
    letter = "U";
  } else if (key === "V") {
    letter = "V";
  } else if (key === "W") {
    letter = "W";
  } else if (key === "X") {
    letter = "X";
  } else if (key === "Y") {
    letter = "Y";
  } else if (key === "Z") {
    letter = "Z";
  } else if (key === "a") {
    letter = "a";
  } else if (key === "b") {
    letter = "b";
  } else if (key === "c") {
    letter = "c";
  } else if (key === "d") {
    letter = "d";
  } else if (key === "e") {
    letter = "e";
  } else if (key === "f") {
    letter = "f";
  } else if (key === "g") {
    letter = "g";
  } else if (key === "h") {
    letter = "h";
  } else if (key === "i") {
    letter = "i";
  } else if (key === "j") {
    letter = "j";
  } else if (key === "k") {
    letter = "k";
  } else if (key === "l") {
    letter = "l";
  } else if (key === "m") {
    letter = "m";
  } else if (key === "n") {
    letter = "n";
  } else if (key === "o") {
    letter = "o";
  } else if (key === "p") {
    letter = "p";
  } else if (key === "q") {
    letter = "q";
  } else if (key === "r") {
    letter = "r";
  } else if (key === "s") {
    letter = "s";
  } else if (key === "t") {
    letter = "t";
  } else if (key === "u") {
    letter = "u";
  } else if (key === "v") {
    letter = "v";
  } else if (key === "w") {
    letter = "w";
  } else if (key === "x") {
    letter = "x";
  } else if (key === "y") {
    letter = "y";
  } else if (key === "z") {
    letter = "z";
  }  else if (key === "ñ") {
    letter = "ñ";
  } else if (key === "Ñ") {
    letter = "Ñ";
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    strWg = strWg - 1;
  } else if (keyCode === RIGHT_ARROW) {
    strWg = strWg + 1;
  }
}

function constructGraphics() {
  canvas = createGraphics(600,600);

  //creates a PGraphics where an letter will be called. PGraphics canvas will not be called/drawn?
  canvas.fill(255);
  canvas.rect(0, 0, canvas.width, canvas.height);
  canvas.smooth(4);
  canvas.clear();
  canvas.textSize(500);
//  canvas.textFont(font);
  canvas.textAlign(CENTER, CENTER);
}

function draw() {
  canvas.clear();
  canvas.text(letter, width / 2, height / 2);

  background(255);

  let valVel = sliderVel.value();
  let valDens = sliderDens.value();
  let valSliderX1 = sliderX1.value();
  let valSliderY1 = sliderY1.value();
  let valSliderX2 = sliderX2.value();
  let valSliderY2 = sliderY2.value();

  strokeWeight(strWg);

  for (var x = -50; x < width + 50; x += valDens) {
    for (var y = -50; y < height + 50; y += valDens) {
      myColor = canvas.get(x, y);
      readCanvas();

      //activate the wavy animation
      if (chk1.checked) {
        x1Min = 10;
        x1Max = 4;
        x1Offset = 1;
        x1Step = -0.5;

        y1Min = 10;
        y1Max = 4;
        y1Offset = 1;
        y1Step = -0.5;

        x2Min = 10;
        x2Max = 4;
        x2Offset = 1;
        x2Step = -0.5;

        y2Min = 10;
        y2Max = 4;
        y2Offset = 1;
        y2Step = -0.5;

        line(
          x + sin(rotNum) * sin(x) * valSliderX1,
          y + cos(rotNum) * cos(x) * valSliderY1,
          x + sin(rotNum) * cos(y) * valSliderX2,
          y + cos(rotNum) * sin(y) * valSliderY2
        );
      }

      //activate the straight animation
      if (chk2.checked) {
        x1Min = 5;
        x1Max = 15;
        x1Offset = 15;
        x1Step = 1;

        y1Min = 18;
        y1Max = 22;
        y1Offset = 20;
        y1Step = 0.2;

        x2Min = 12;
        x2Max = 20;
        x2Offset = 10;
        x2Step = 1;

        y2Min = 15;
        y2Max = 25;
        y2Offset = 20;
        y2Step = 0.5;

        line(
          x + ((sin(rotNum) * y) / valSliderX1) * noise(x) * 5,
          y + ((cos(rotNum) * x) / valSliderY1) * noise(y) * 5,
          x + ((sin(rotNum) * y) / valSliderX2) * noise(x) * 5,
          y + ((cos(rotNum) * x) / valSliderY2) * noise(y) * 5
        );
      }
    }
  }
  rotNum = rotNum + valVel;
}

function readCanvas() {
  if (myColor[0] > 200) {
    stroke(0);
  } else {
    noStroke();
  }
}

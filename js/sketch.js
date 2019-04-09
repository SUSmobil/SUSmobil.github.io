let fakePositions = [];
let slider;
let sliderAnimation;
let select;
let grad;
let speed;


let update;


function setup() {
  let cnv = createCanvas(1100, 1100);

  cnv.parent('sketch-holder');
  getPoints();
  for (let i = 0; i < 8000; i++) {
    fakePositions[i] = [49.2485, 7.353];
  }

  slider = createSlider(1, 8000, 100, 1);
  slider.position(350, 1175);
  sliderAnimation = createSlider(1, 8000, 100, 1);
  sliderAnimation.hide();
  select = createSelect('#');
  select.option('Temperatur');
  select.option('Luftfeuchtigkeit');
  select.option('Luftdruck');
  select.option('CO2');
  select.option('Feinstaub');
  select.position(600, 1175);
  grad = createCheckbox("Gradient");
  grad.position(800, 1175);

  update = createButton('Update');
  update.mousePressed(function() {
    getPoints();
    xtest = 1;
  });
  update.size(100, 50);
  update.style('font-size', '25px');
  update.position(1200, 1100);


  speed = createSlider(1, 20, 1);
  speed.position(980, 1175);


}
//allData ist in der Form:   allData[Sensornummer][Temperatur,Luftfeuchte...][Zeit]
let timeValues = [];
let xtest = 100;
let dx;

function draw() {
  for (let i = 0; i < 1100; i++) {
    let col = 255 * (i + 50) / 1300;
    stroke(col, col, 255);
    line(i, 0, i, 1100);
  }
  //  background(220, 220, 255);
  image(zw, 0, 0);
  let auswahl;
  let wenig;
  let viel;
  let einheit;
  if (select.value() == "Temperatur") {
    auswahl = 0;
    wenig = 5;
    viel = 25;
    einheit = " °C";
  } else if (select.value() == "Luftfeuchtigkeit") {
    auswahl = 1;
    wenig = 20;
    viel = 70;
    einheit = " %";
  } else if (select.value() == "Luftdruck") {
    auswahl = 2;
    wenig = 99000;
    viel = 101000;
    einheit = " Pa";
  } else if (select.value() == "CO2") {
    auswahl = 4;
    wenig = 400;
    viel = 1000;
    einheit = " ppm";
  } else if (select.value() == "Feinstaub") {
    auswahl = 7;
    wenig = 100;
    viel = 500;
    einheit = " Pt/283ml";
  }

  addMarker(fakePositions[0][0] + 0.005, fakePositions[0][1] + 0.01, 300, float(allData[0][auswahl][allData[0][0].length - sliderAnimation.value()]), wenig, viel, "Circle", grad.checked(), einheit, false, 0);
  addMarker(fakePositions[0][0] + 0.007, fakePositions[0][1] + 0.09, 300, float(allData[1][auswahl][closest(allData[1][8], allData[0][8][8000 - sliderAnimation.value()])]), wenig, viel, "Square", grad.checked(), einheit, false, 0);
  calcTimes();
  graph(allData[0], auswahl, 70, 600, timeValues[0], 0, einheit);
  graph(allData[1], auswahl, 600, 600, timeValues[1], 1, einheit);

  //Animiere den Kappes
  sliderAnimation.value(xtest);
  xtest -= speed.value();
  if (xtest <= 0) {
    xtest = slider.value();
  }
  textSize(20);
  fill(240);
  stroke(0);
  rect(50, 880, 880, 150);
  noStroke();
  fill(0);

  text("Zeitskala", 170, 920);
  text("Daten", 400, 920);
  text("Gradient", 580, 920);
  text("Geschwindigkeit", 800, 920);


  //Zeit animieren
  dx = (slider.value() - xtest) * 400 / slider.value();
  stroke(0);
  line(70 + dx, 600, 70 + dx, 800);
  line(600 + dx, 600, 600 + dx, 800);
}

function closest(array, number) {
  var num = 0;
  for (var i = array.length - 1; i >= 0; i--) {
    if (Math.abs(number - array[i]) < Math.abs(number - array[num])) {
      num = i;
    }
  }
  return num;
}



function calcTimes() {
  timeValues[0] = slider.value();
  let currentTime = allData[0][8][8000 - slider.value()];
  for (let i = 1; i < anzahlSensoren; i++) {
    timeValues[i] = allData[i][8].length - closest(allData[i][8], currentTime);
  }
}
let slider1;

let select1;
let select2;
let update;
let save;
let table;
let wert;
let index = 0;
let einheit = " °C";
let sens1 = 0;
let sens2 = 1;

function setup() {
  let cnv = createCanvas(1100, 500);
  cnv.parent('messdaten');

  slider1 = createSlider(1, 4000, 20);
  slider1.position(548, 1065);
  slider1.style('width', '700px')

  wert = createSelect('#');
  wert.option('Temperatur');
  wert.option('Luftfeuchtigkeit');
  wert.option('Luftdruck');
  wert.option('CO2');
  wert.option('TVOC');
  wert.option('PM2.5');
  wert.option('PM10');

  wert.size(250, 50);
  wert.position(300, 1050);
  wert.style('font-size', '30px')


  select1 = createSelect('#');
  select1.option('Sensor 1');
  select1.option('Sensor 2');
  select1.position(500, 975);
  select1.size(100, 50);
  select1.style('font-size', '20px')
  select2 = createSelect('#');
  select2.option('Sensor 2');
  select2.option('Sensor 1');
  select2.position(1050, 975);
  select2.size(100, 50);
  select2.style('font-size', '20px')

  update = createButton('Update');
  update.position(780, 975);
  update.size(100, 50);
  update.style('font-size', '20px')
  update.mousePressed(function() {
    getPoints();
  });


  save = createButton('Daten speichern');
  save.size(100, 50);
  save.style('font-size', '20px');
  save.position(1250, 1050);
  save.mousePressed(function() {
    saveData(allData);
  });
  getPoints();
}
let timeValues = [100, 100];

function draw() {
  background(255);

  textSize(30);
  if (select1.value().toString() == "Sensor 1") {
    sens1 = 0;
  } else if (select1.value().toString() == "Sensor 2") {
    sens1 = 1;
  }

  if (select2.value().toString() == "Sensor 1") {
    sens2 = 0;
  } else if (select2.value().toString() == "Sensor 2") {
    sens2 = 1;
  }


  if (wert.value() == "Temperatur") {
    index = 0;
    einheit = " °C";
  } else if (wert.value() == "Luftfeuchtigkeit") {
    index = 1;
    einheit = " %";
  } else if (wert.value() == "Luftdruck") {
    index = 2;
    einheit = " hPa";
  } else if (wert.value() == "CO2") {
    index = 3;
    einheit = " ppm";
  } else if (wert.value() == "TVOC") {
    index = 4;
    einheit = " ppb";
  } else if (wert.value() == "PM2.5") {
    index = 5;
    einheit = " μg/m³";
  } else if (wert.value() == "PM10") {
    index = 6;
    einheit = " μg/m³";
  }
  calcTimes();

  graph(allData[sens1], index, 70, 200, timeValues[0], sens1, einheit);
  graph(allData[sens2], index, 600, 200, timeValues[1], sens2, einheit);

  stroke(100);
  for (let i = 0; i < 2; i++) {
    line(0, 75 + 500 * i, 1100, 75 + 500 * i);
    line(0, 150 + 500 * i, 1100, 150 + 500 * i);
  }

}




function calcTimes() {
  if (slider1.value() <= allData[0][8].length) {
    timeValues[0] = slider1.value();
  } else {
    timeValues[0] = allData[0][8].length - 1;
  }
  let currentTime = allData[0][8][allData[0][8].length - slider1.value()];
  for (let i = 1; i < anzahlSensoren; i++) {
    timeValues[i] = allData[i][8].length - closest(allData[i][8], currentTime);
  }
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




function saveData(data) {
  table = new p5.Table();
  let temp1 = wert.value() + " Sensor 1";
  let temp2 = wert.value() + " Sensor 2";
  table.addColumn('Zeitstempel Sensor 1');
  table.addColumn(temp1);
  table.addColumn('Zeitstempel Sensor 2');
  table.addColumn(temp2);

  let offset1 = data[sens1][8][0];
  let offset2 = data[sens2][8][0];

  for (let i = 0; i < slider1.value(); i++) {
    let newRow1 = table.addRow();
    newRow1.setNum('Zeitstempel Sensor 1', data[sens1][8][i] - offset1);
    newRow1.setString(temp1, data[sens1][index][i]);
    newRow1.setNum('Zeitstempel Sensor 2', data[sens2][8][i] - offset2);
    newRow1.setString(temp2, data[sens2][index][i]);
  }
  saveTable(table, wert.value() + '.csv');
}

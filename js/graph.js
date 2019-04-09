let x = [];
let y = [];
//valueCount = Anzahl der Messwerte, die angezeigt werden sollen
function graph(array, sensor, xOff, yOff, valueCount, sensorNummer, einheit) {
  push();
  textSize(20);
  translate(xOff, yOff);
  //1. Schaue ob genügend Daten im Array sind:
  if (array[sensor].length >= valueCount) {
    //2. Wenn genügend Werte vorhanden sind, berechne Maximum und Minimum der Messwerte
    let max = -Infinity;
    let min = Infinity;
    for (let i = array[sensor].length - valueCount; i < array[sensor].length; i++) {
      if (float(array[sensor][i]) > max) {
        max = float(array[sensor][i]);
      }
      if (float(array[sensor][i]) < min) {
        min = float(array[sensor][i]);
      }
    }
    //Hintergrund des Graphen
    stroke(0);
    fill(255);
    rect(0, 0, 400, 200);

    //Hilfsgitterlinien
    stroke(200);
    for (let i = 0; i < 9; i++) {
      line(0, 20 + 20 * i, 400, 20 + 20 * i);
      line(40 + 40 * i, 0, 40 + 40 * i, 200);
    }
    //Minimum und Maximum an den Achsen
    noStroke();
    fill(0);
    text(max.toString().replace('.', ',') + einheit, -30, -10);
    text(min.toString().replace('.', ',') + einheit, -30, +220);

    //Zeitstempel
    let arrPos = array[sensor].length - valueCount;
    text(day[sensorNummer][arrPos] + "." + month[sensorNummer][arrPos] + "." + year[sensorNummer][arrPos] + "\n " + hour[sensorNummer][arrPos] + ":" + minute[sensorNummer][arrPos] + ":" + second[sensorNummer][arrPos], 0, 240);
    text(day[sensorNummer][array[sensor].length - 1] + "." + month[sensorNummer][array[sensor].length - 1] + "." + year[sensorNummer][array[sensor].length - 1] + "\n " + hour[sensorNummer][array[sensor].length - 1] + ":" + minute[sensorNummer][array[sensor].length - 1] + ":" + second[sensorNummer][array[sensor].length - 1], 400, 240);


    //Zeit
    let x = [];
    //1. kleinste Zeit
    let tMin = array[8][array[sensor].length - valueCount];
    let tMax = array[8][array[sensor].length - 1];
    let dt = (tMax - tMin);
    let abstand = dt / (valueCount);

    for (let i = 0; i < valueCount; i++) {
      x[i] = (array[8][array[sensor].length - valueCount + i] - tMin) / dt;
      y[i] = array[sensor][array[sensor].length - valueCount + i];
    }

    //Punkte einzeichnen
    fill(255, 0, 0);
    stroke(255, 0, 0);
    for (let i = 0; i < valueCount; i++) {
      ellipse(400 * x[i], 200 - 200 * (y[i] - min) / (max - min), 5, 5);
      if (i != (valueCount - 1)) {
        line(400 * x[i], 200 - 200 * (y[i] - min) / (max - min), 400 * x[i + 1], 200 - 200 * (y[i + 1] - min) / (max - min));
      }
    }

    fill(0, 0, 255, 100);
    noStroke();
    textSize(40);
    text(y[valueCount - 1] + einheit, 200, 120);
    translate(-xOff, -yOff);
  } else {

    text("no Data", 200, 120)
    translate(-xOff, -yOff);
    return;
  }


}
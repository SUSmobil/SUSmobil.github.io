function Folie141() {
  textSize(30);
  text("Temperaturzyklus", 20, 50);
  textSize(20);
  text("Es hat sich gezeigt, dass der Sensor für Temperaturen zwischen 200°C und 250°C gut auf Ethanol reagiert. Das heißt, unter-\nschiedliche Konzentrationen sind hier sehr gut auflösbar. Man sagt: Der Sensor hat dort eine hohe Sensitivität!", 20, 100);

  fill(255);
  stroke(0);
  rect(170, 200, 860, 350);

  line(250, 220, 250, 505);
  line(245, 500, 950, 500);


  strokeWeight(1);

  for (let i = 0; i < 10; i++) {
    stroke(200);
    line(250, 220 + 28 * i, 950, 220 + 28 * i);
    line(320 + 70 * i, 220, 320 + 70 * i, 500);
  }


  strokeWeight(4);
  stroke(255, 0, 0);

  line(250, 248, 320, 248);
  line(320, 388, 600, 388);
  line(600, 248, 670, 248);
  line(670, 360, 950, 360);


  strokeWeight(1);
  noStroke();
  fill(0);

  text("450°C", 260, 239);
  text("450°C", 610, 239);

  text("200°C", 440, 380);
  text("250°C", 790, 350);

  text("Zeit [s]", 555, 540);
  for (let i = 0; i < 6; i++) {
    text(3 * i, 240 + 140 * i, 523);
    text(500 - 100 * i, 210, 225 + 56 * i)
  }

  text("hohe Sensitivität", 570, 460);
  stroke(0);
  line(560, 455, 500, 420);
  line(725, 455, 785, 395);

  noFill();
  stroke(0, 0, 255);
  strokeWeight(3);
  ellipse(460, 388, 300, 60);
  ellipse(810, 360, 300, 60);



  strokeWeight(1);
  noStroke();

  fill(0);
  translate(width / 2, height / 2);
  rotate(-PI / 2);
  text("Temperatur [°C]", -60, -505);

}



function Folie142() {
  textSize(30);
  text("Temperaturzyklus", 20, 50);
  textSize(20);
  text("Es hat sich gezeigt, dass der Sensor für Temperaturen zwischen 200°C und 250°C gut auf Ethanol reagiert. Das heißt, unter-\nschiedliche Konzentrationen sind hier sehr gut auflösbar. Man sagt: Der Sensor hat dort eine hohe Sensitivität!", 20, 100);
  text("Nach einiger Zeit würde das Sensorsignal in ein Gleichgewicht laufen. Um dieses Verhalten zu unterbinden, heizen wir den Sensor\nauf sehr hohe Temperaturen (z.B. 450°C). Dadurch wird der Sensor 'resettet'.", 20, 600);
  fill(255);
  stroke(0);
  rect(170, 200, 860, 350);

  line(250, 220, 250, 505);
  line(245, 500, 950, 500);


  strokeWeight(1);

  for (let i = 0; i < 10; i++) {
    stroke(200);
    line(250, 220 + 28 * i, 950, 220 + 28 * i);
    line(320 + 70 * i, 220, 320 + 70 * i, 500);
  }


  strokeWeight(4);
  stroke(255, 0, 0);

  line(250, 248, 320, 248);
  line(320, 388, 600, 388);
  line(600, 248, 670, 248);
  line(670, 360, 950, 360);


  strokeWeight(1);
  noStroke();
  fill(0);

  text("450°C", 260, 239);
  text("450°C", 610, 239);

  text("200°C", 440, 380);
  text("250°C", 790, 350);

  text("Zeit [s]", 555, 540);
  for (let i = 0; i < 6; i++) {
    text(3 * i, 240 + 140 * i, 523);
    text(500 - 100 * i, 210, 225 + 56 * i)
  }

  text("hohe Sensitivität", 570, 460);
  text("sorgt für Ungleich-\n      gewicht", 370, 300);
  stroke(0);
  line(560, 455, 500, 420);
  line(725, 455, 785, 395);

  line(310, 275, 360, 290);
  line(600, 275, 550, 290);

  noFill();
  stroke(0, 0, 255);
  strokeWeight(3);
  ellipse(460, 388, 300, 60);
  ellipse(810, 360, 300, 60);


  ellipse(285, 245, 100, 60);
  ellipse(635, 245, 100, 60);


  strokeWeight(1);
  noStroke();

  fill(0);
  translate(width / 2, height / 2);
  rotate(-PI / 2);
  text("Temperatur [°C]", -60, -505);

}

function Folie143() {
  textSize(50);
  text("Ethanol Kalibrierung", 400, 300);
  textSize(40);
  text("Versuchsaufbau", 510, 500);

}



function Folie144() {
  textSize(30);
  text("Versuchsaufbau", 20, 50);
  textSize(20);
  text("Verbinde nun den Sensor mit dem Mikrocontroller. Dazu nimmst du die Jumper-Kabel und steckst das Ende, das in die Messkammer\nführt, in die Beinchen des Sensorboards. Achte auf die richtige Farbe der Kabel als Orientierung!", 20, 100);
  text("[GROßAUFNAHME VON SENSORBOARD MIT KABELN]", 300, 200);

  text("Anschließend nimmst du die anderen Enden der Kabel und verbindest sie mit den Beinchen des Mikrocontrollers:", 20, 400);
  text("[GROßAUFNAHME VON MIKROCONTROLLER MIT KABELN]", 300, 500);
}

function Folie145() {
  textSize(30);
  text("Versuchsaufbau", 20, 50);
  textSize(20);
  text("Um den Mikrocontroller und den Sensor mit Strom zu versorgen und eine Datenübertragung zu ermöglichen, verbinde nun den\nMikrocontroller per USB-Kabel mit dem Computer:", 20, 100);
  text("[BILD VON USB-KABEL AN MIKROCONTROLLER]", 300, 400);
}


function Folie146() {
  textSize(30);
  text("Software zur Datenaufnahme", 20, 50);
  textSize(20);
  text("Um die Sensordaten auszulesen verwenden wir die Software 'SUSmobil_Modul2a.exe'. Öffne das Programm und starte das Tutorial.", 20, 100);
  image(Kalibrierprogramm, 350, 150);

}
function Folie61() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  fill(200);
  text("→ Man lässt die Temperatur eine Zeit\n    lang unverändert bei ϑ  .", 50, 150);
  text("→ Dabei wird beobachtet, dass sich der\n    Widerstand einem neuen stationären Wert\n    R  annähert (rotes Rechteck). ", 50, 220);
  textSize(16);
  text("1", 270, 185);
  text("2", 88, 280);
  textSize(20);
  fill(0);
  text("Es gibt einen Übergangszustand ", 50, 540);
  textSize(16);
  text("→ Die Sauerstoffbedeckung erhöht sich nach und nach,\nbis eine Sättigung erreicht ist.", 50, 580);
  text("→ Elektronen gehen eine Bindung mit dem Sauerstoff ein.", 50, 630);
  text("→ Der Strom sinkt langsam, der Widerstand steigt langsam.", 50, 660);
  textSize(50);
  text("→", 240, 380);
  textSize(16);
  image(Funktionsweise_5, 60, 300);


  noFill();

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);
  stroke(0);
  strokeWeight(2);
  line(600, 75, 600, 350);
  line(600, 350, 1030, 350);

  line(600, 375, 600, 650);
  line(600, 650, 1030, 650);

  stroke(0, 200, 0);
  line(600, 200, 750, 200);
  line(750, 300, 760, 290);


  line(750, 300, 762, 290);
  line(762, 290, 785, 275);
  line(785, 275, 800, 267);
  line(800, 267, 810, 263);
  line(810, 263, 825, 259);
  line(825, 259, 840, 257);
  line(840, 257, 850, 256);
  line(850, 256, 865, 255);

  //Pfeilspitzen
  stroke(0);
  line(595, 80, 600, 75);
  line(600, 75, 605, 80);
  line(1025, 345, 1030, 350);
  line(1030, 350, 1025, 355)
  line(595, 380, 600, 375);
  line(600, 375, 605, 380);
  line(1025, 645, 1030, 650);
  line(1030, 650, 1025, 655);

  stroke(0, 0, 200);
  line(600, 600, 750, 600);
  stroke(200, 100, 50);
  line(750, 560, 865, 560);

  stroke(255, 0, 0);
  noFill();
  rect(740, 240, 140, 60);

  stroke(0);
  for (let i = 0; i < 27; i++) {
    point(750, 200 + 4 * i);
    point(750 + 4 * i, 255)
  }
  for (let i = 0; i < 10; i++) {
    point(750, 600 - 4 * i);
  }

  strokeWeight(1);
  noStroke();
  fill(0);
  textSize(20);
  text("Zeit", 1055, 360);
  text("Zeit", 1055, 660);

  text("R", 670, 220);
  text("ϑ", 670, 585);
  text("ϑ", 800, 540);
  textSize(16);


  text("1", 685, 225);
  text("1", 680, 595);
  text("2", 810, 550);
  text("abrupte Senkung des Widerstands, danach\n Anschmiegen an den staionären Wert R", 775, 200);
  text("Temperatursprung\n    nach oben", 685, 670);
  textSize(12);
  text("2", 1065, 226);
  textSize(20);


  translate(width / 2, height / 2);
  rotate(-PI / 2);
  fill(200);
  text("Beobachtung", 115, -670);
  fill(0);
  text("Sensorwiderstand", 90, -150);
  text("Sensortemperatur", -220, -150);
  text("Erklärung und Veranschaulichung", -300, -670);
}



function Folie62() {
  textSize(30);
  aufgabe3.position(50, 500);
  aufgabe3.show();
  aufgabe3.size(420, 100);
  if (aufgabe3.value().length < 10) {
    weiter.hide();
  } else {
    weiter.show();
  }
  text("Aufgabe 3", 150, 50);
  textSize(20);
  text("Erkläre den, im Diagramm gezeigten, Verlauf des\nWiderstandes ab dem Zeitpunkt, ab dem die\nSensortemperatur wieder abrupt von ϑ   auf ϑ\ngesenkt wird!", 20, 100);
  text("Als Hilfe kannst du die Abbildungsfolge nutzen.", 20, 215);

  image(Funktionsweise_4, 10, 250);
  textSize(14);
  text("2              1", 358, 158);


  noFill();

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);
  stroke(0);
  strokeWeight(2);
  line(600, 75, 600, 350);
  line(600, 350, 1030, 350);

  line(600, 375, 600, 650);
  line(600, 650, 1030, 650);

  stroke(0, 200, 0);
  line(600, 200, 750, 200);
  line(750, 300, 760, 290);


  line(750, 300, 762, 290);
  line(762, 290, 785, 275);
  line(785, 275, 800, 267);
  line(800, 267, 810, 263);
  line(810, 263, 825, 259);
  line(825, 259, 840, 257);
  line(840, 257, 850, 256);
  line(850, 256, 865, 255);


  line(865, 98, 878, 145);
  line(878, 145, 885, 160);
  line(885, 160, 892, 172);
  line(892, 172, 905, 184);
  line(905, 184, 920, 190);
  line(920, 190, 975, 199);
  line(975, 199, 1000, 200);

  //Pfeilspitzen
  stroke(0);
  line(595, 80, 600, 75);
  line(600, 75, 605, 80);
  line(1025, 345, 1030, 350);
  line(1030, 350, 1025, 355)
  line(595, 380, 600, 375);
  line(600, 375, 605, 380);
  line(1025, 645, 1030, 650);
  line(1030, 650, 1025, 655);

  stroke(0, 0, 200);
  line(600, 600, 750, 600);
  line(865, 600, 1015, 600);
  stroke(200, 100, 50);
  line(750, 560, 865, 560);


  stroke(0);
  for (let i = 0; i < 27; i++) {
    point(750, 200 + 4 * i);
    point(750 + 4 * i, 255)
    point(865, 255 - 6 * i);
  }
  for (let i = 0; i < 35; i++) {

    point(865 + 4 * i, 200)
  }
  for (let i = 0; i < 10; i++) {
    point(750, 600 - 4 * i);
    point(865, 560 + 4 * i);
  }

  strokeWeight(1);
  noStroke();
  fill(0);
  textSize(20);
  text("Zeit", 1055, 360);
  text("Zeit", 1055, 660);

  text("R", 670, 220);
  text("R", 1020, 205);
  text("R", 800, 240);
  text("ϑ", 670, 585);
  text("ϑ", 800, 540);
  text("ϑ", 940, 585);

  textSize(16);
  text("1", 685, 225);
  text("1", 1035, 215);
  text("2", 815, 250);
  text("1", 680, 595);
  text("2", 810, 550);
  text("1", 950, 595);

  text("Steigerung des Widerstands,\ndanach Anschmiegen an\nden stationären Wert R", 855, 280);
  textSize(12);
  text("1", 1018, 328);
  textSize(20);
  translate(width / 2, height / 2);
  rotate(-PI / 2);
  fill(0);
  text("Sensorwiderstand", 90, -150);
  text("Sensortemperatur", -220, -150);

}


function MusterloesungAufgabe3() {
  textSize(20);
  textStyle(BOLD);
  text("Deine Erklärung", 20, 100);
  aufgabe3.position(20, 150);
  aufgabe3.show();
  aufgabe3.size(460, 200);

  text("Musterlösung", 620, 100);
  image(Funktionsweise_4, 10, 350);
  textStyle(NORMAL);
  text("- Es gibt wieder einen Übergangszustand.\n\n- Die Temperatursenkung verringert die Geschwindigkeit der\nElektronen sofort.\n\n- Die Sauerstoffbedeckung ist zunächst jedoch unverändert.\n\n- Der Strom sinkt abrupt. Nachweis durch den sofortigen Anstieg\ndes Sensorwiderstands.\n\n- Nach und nach sinkt die Sauerstoffbedeckung auf der Oberfläche.\n\n- Mehr Elektronen stehen für den Ladungstransport zur Verfügung.\n\n- Der Widerstand sinkt, bis ein stationärer Bereich erreicht wurde.", 600, 200);

  fill(255);
  stroke(0);
  ellipse(175, 550, 50, 50);
  ellipse(338, 550, 50, 50);

  ellipse(520, 300, 50, 50);
  ellipse(520, 500, 50, 50);

  line(600, 170, 550, 170);
  line(550, 170, 550, 415);
  line(550, 415, 600, 415);


  line(600, 420, 550, 420);
  line(550, 420, 550, 570);
  line(550, 570, 600, 570);

  fill(0);
  noStroke();
  textSize(30);
  text("1", 167, 560);
  text("2", 332, 560);
  text("1", 513, 310);
  text("2", 513, 510);

}



function Folie63() {
  aufgabe3.hide();
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Wir haben schon vorhin erwähnt, dass\ndie Widerstands-Zeit-Kurven für die Kalibrierung\ngenutzt werden können. Aber wie gelingt das?", 50, 150);
  text("Rechts wird die Idee an zwei (fiktiven)\nWiderstands-Zeit-Kurven verdeutlicht. ", 50, 240);


  noFill();

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);

  image(Kurven_Konzentration3, 600, 110);
  image(Kurven_Konzentration2, 600, 470);
  strokeWeight(2);
  line(600, 75, 600, 350);
  line(600, 350, 1030, 350);


  line(600, 375, 600, 650);
  line(600, 650, 1030, 650);

  //Pfeilspitzen
  stroke(0);
  line(595, 80, 600, 75);
  line(600, 75, 605, 80);
  line(1025, 345, 1030, 350);
  line(1030, 350, 1025, 355)
  line(595, 380, 600, 375);
  line(600, 375, 605, 380);
  line(1025, 645, 1030, 650);
  line(1030, 650, 1025, 655);

  strokeWeight(1);
  noStroke();
  fill(0);
  textSize(20);
  text("Zeit", 1055, 360);
  text("Zeit", 1055, 660);

  translate(width / 2, height / 2);
  rotate(-PI / 2);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);

}

function Folie64() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  fill(200);
  text("Wir haben schon vorhin erwähnt, dass\ndie Widerstands-Zeit-Kurven für die Kalibrierung\ngenutzt werden können. Aber wie gelingt das?", 50, 150);
  text("Rechts wird die Idee an zwei (fiktiven)\nWiderstands-Zeit-Kurven verdeutlicht. ", 50, 240);
  fill(0);

  text("→ In den beiden Messungen enthielt die\n    Atmosphäre um den Gassensor neben Luft\n    ein Zielgas mit der Konzentration c  (grüne\n    Kurve) bzw. c  (lila Kurve).", 50, 310);
  textSize(16);
  text("1", 380, 370);
  text("2", 192, 395);
  noFill();

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);

  image(Kurven_Konzentration3, 600, 110);
  image(Kurven_Konzentration2, 600, 470);
  strokeWeight(2);
  line(600, 75, 600, 350);
  line(600, 350, 1030, 350);

  line(600, 375, 600, 650);
  line(600, 650, 1030, 650);
  //Pfeilspitzen
  stroke(0);
  strokeWeight(2);
  line(595, 80, 600, 75);
  line(600, 75, 605, 80);
  line(1025, 345, 1030, 350);
  line(1030, 350, 1025, 355)
  line(595, 380, 600, 375);
  line(600, 375, 605, 380);
  line(1025, 645, 1030, 650);
  line(1030, 650, 1025, 655);


  noStroke();
  fill(0);
  textSize(20);
  strokeWeight(1);
  text("Zeit", 1055, 360);
  text("Zeit", 1055, 660);

  translate(width / 2, height / 2);
  rotate(-PI / 2);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);
}

function Folie65() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  fill(200);
  text("Wir haben schon vorhin erwähnt, dass\ndie Widerstands-Zeit-Kurven für die Kalibrierung\ngenutzt werden können. Aber wie gelingt das?", 50, 150);
  text("Rechts wird die Idee an zwei (fiktiven)\nWiderstands-Zeit-Kurven verdeutlicht. ", 50, 240);


  text("→ In den beiden Messungen enthielt die\n    Atmosphäre um den Gassensor neben Luft\n    ein Zielgas mit der Konzentration c  (grüne\n    Kurve) bzw. c  (lila Kurve).", 50, 310);
  textSize(16);
  text("1", 380, 370);
  text("2", 192, 395);
  fill(0);
  textSize(20);
  text("→ Die Widerstands-Zeit-Kurven unterschei-\n    den sich. Um diese Unterschiedlichkeit\n    besser greifbar zu machen, betrachtet man aber\n    nicht den gesamten Verlauf.", 50, 430);

  noFill();

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);

  image(Kurven_Konzentration3, 600, 110);
  image(Kurven_Konzentration2, 600, 470);
  strokeWeight(2);
  line(600, 75, 600, 350);
  line(600, 350, 1030, 350);

  line(600, 375, 600, 650);
  line(600, 650, 1030, 650);
  //Pfeilspitzen
  stroke(0);
  strokeWeight(2);
  line(595, 80, 600, 75);
  line(600, 75, 605, 80);
  line(1025, 345, 1030, 350);
  line(1030, 350, 1025, 355)
  line(595, 380, 600, 375);
  line(600, 375, 605, 380);
  line(1025, 645, 1030, 650);
  line(1030, 650, 1025, 655);

  noStroke();
  fill(0);
  textSize(20);
  strokeWeight(1);
  text("Zeit", 1055, 360);
  text("Zeit", 1055, 660);

  translate(width / 2, height / 2);
  rotate(-PI / 2);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);
}

function Folie66() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  fill(200);
  text("Wir haben schon vorhin erwähnt, dass\ndie Widerstands-Zeit-Kurven für die Kalibrierung\ngenutzt werden können. Aber wie gelingt das?", 50, 150);
  text("Rechts wird die Idee an zwei (fiktiven)\nWiderstands-Zeit-Kurven verdeutlicht. ", 50, 240);


  text("→ In den beiden Messungen enthielt die\n    Atmosphäre um den Gassensor neben Luft\n    ein Zielgas mit der Konzentration c  (grüne\n    Kurve) bzw. c  (lila Kurve).", 50, 310);
  textSize(16);
  text("1", 380, 370);
  text("2", 192, 395);
  textSize(20);
  text("→ Die Widerstands-Zeit-Kurven unterschei-\n    den sich. Um diese Unterschiedlichkeit\n    besser greifbar zu machen, betrachtet man aber\n    nicht den gesamten Verlauf.", 50, 430);
  fill(0);
  text("→ Vielmehr sucht man im Verlauf nach geeig-\n    neten Merkmalen, die man mit einzelnen\n    Zahlen einfach ausdrücken kann.", 50, 540);

  noFill();

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);

  image(Kurven_Konzentration3, 600, 110);
  image(Kurven_Konzentration2, 600, 470);
  strokeWeight(2);
  line(600, 75, 600, 350);
  line(600, 350, 1030, 350);

  line(600, 375, 600, 650);
  line(600, 650, 1030, 650);
  //Pfeilspitzen
  stroke(0);
  line(595, 80, 600, 75);
  line(600, 75, 605, 80);
  line(1025, 345, 1030, 350);
  line(1030, 350, 1025, 355)
  line(595, 380, 600, 375);
  line(600, 375, 605, 380);
  line(1025, 645, 1030, 650);
  line(1030, 650, 1025, 655);

  noStroke();
  strokeWeight(1);
  fill(0);
  textSize(20);
  text("Zeit", 1055, 360);
  text("Zeit", 1055, 660);

  translate(width / 2, height / 2);
  rotate(-PI / 2);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);
}

function Folie67() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Wir haben schon vorhin erwähnt, dass\ndie Widerstands-Zeit-Kurven für die Kalibrierung\ngenutzt werden können. Aber wie gelingt das?", 50, 150);
  text("Rechts wird die Idee an zwei (fiktiven)\nWiderstands-Zeit-Kurven verdeutlicht. ", 50, 240);

  fill(255, 200, 200);
  stroke(0);
  rect(20, 320, 460, 180);
  fill(0);
  noStroke();
  text("Merke:\n\nGegenstand der Kalibrierung eines Halbleiter-\ngassensors ist es, Merkmale von Widerstands-\nZeit-Kurven auf die zu Grunde liegende\nKonzentration zurückzuführen.", 50, 350);
  noFill();

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);

  image(Kurven_Konzentration3, 600, 110);
  image(Kurven_Konzentration2, 600, 470);
  strokeWeight(2);
  line(600, 75, 600, 350);
  line(600, 350, 1030, 350);

  line(600, 375, 600, 650);
  line(600, 650, 1030, 650);
  //Pfeilspitzen
  stroke(0);
  line(595, 80, 600, 75);
  line(600, 75, 605, 80);
  line(1025, 345, 1030, 350);
  line(1030, 350, 1025, 355)
  line(595, 380, 600, 375);
  line(600, 375, 605, 380);
  line(1025, 645, 1030, 650);
  line(1030, 650, 1025, 655);

  strokeWeight(1);
  noStroke();
  fill(0);
  textSize(20);
  text("Zeit", 1055, 360);
  text("Zeit", 1055, 660);

  translate(width / 2, height / 2);
  rotate(-PI / 2);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);
}

let arrX = [650, 650];
let arrY = [0, 700];

let timer = 0;

function Folie68() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Zum Beispiel fällt auf ...", 50, 150);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);

  image(Kurven_Konzentration3, 600, 110);
  image(Kurven_Konzentration2, 600, 470);
  strokeWeight(2);
  line(600, 75, 600, 350);
  line(600, 350, 1030, 350);

  line(600, 375, 600, 650);
  line(600, 650, 1030, 650);
  //Pfeilspitzen
  stroke(0);
  line(595, 80, 600, 75);
  line(600, 75, 605, 80);
  line(1025, 345, 1030, 350);
  line(1030, 350, 1025, 355)
  line(595, 380, 600, 375);
  line(600, 375, 605, 380);
  line(1025, 645, 1030, 650);
  line(1030, 650, 1025, 655);

  strokeWeight(1);
  noStroke();
  fill(0);
  textSize(20);
  text("Zeit", 1055, 360);
  text("Zeit", 1055, 660);

  translate(width / 2, height / 2);
  rotate(-PI / 2);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);

}

function Folie69() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Zum Beispiel fällt auf ...", 50, 150);
  text("→ Der (konstante) Widerstandswert vor dem Tem-\n    peratursprung ist bei grün größer als bei lila.", 50, 200);
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);

  image(Kurven_Konzentration3, 600, 110);
  image(Kurven_Konzentration2, 600, 470);
  push();
  noStroke();
  fill(0);

  pop();
  strokeWeight(2);
  line(600, 75, 600, 350);
  line(600, 350, 1030, 350);

  line(600, 375, 600, 650);
  line(600, 650, 1030, 650);
  //Pfeilspitzen
  stroke(0);
  line(595, 80, 600, 75);
  line(600, 75, 605, 80);
  line(1025, 345, 1030, 350);
  line(1030, 350, 1025, 355)
  line(595, 380, 600, 375);
  line(600, 375, 605, 380);
  line(1025, 645, 1030, 650);
  line(1030, 650, 1025, 655);

  strokeWeight(1);
  noStroke();
  fill(0);
  textSize(20);
  text("Zeit", 1055, 360);
  text("Zeit", 1055, 660);

  if (timer < 100) {
    arrY[0] += 2;
    arrY[1] -= 4;
  }
  stroke(0, 150, 0);
  strokeWeight(4);
  line(arrX[0], arrY[0], arrX[0], arrY[0] + 50);
  line(arrX[0] - 5, arrY[0] + 45, arrX[0], arrY[0] + 50);
  line(arrX[0] + 5, arrY[0] + 45, arrX[0], arrY[0] + 50);

  stroke(150, 0, 150);
  line(arrX[1], arrY[1], arrX[1], arrY[1] + 50);
  line(arrX[1] - 5, arrY[1] + 5, arrX[1], arrY[1]);
  line(arrX[1] + 5, arrY[1] + 5, arrX[1], arrY[1]);
  timer += 1;

  translate(width / 2, height / 2);
  rotate(-PI / 2);
  noStroke();
  fill(0);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);
}



function Folie70() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Zum Beispiel fällt auf ...", 50, 150);
  fill(200);
  text("→ Der (konstante) Widerstandswert vor dem Tem-\n    peratursprung ist bei grün größer als bei lila.", 50, 200);
  fill(0);
  text("→ Der Widerstand bei grün erreicht infolge\n    des Temperatursprunges einen höheren Wert.", 50, 270);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);

  image(Kurven_Konzentration3, 600, 110);
  image(Kurven_Konzentration2, 600, 470);

  strokeWeight(2);
  line(600, 75, 600, 350);
  line(600, 350, 1030, 350);

  line(600, 375, 600, 650);
  line(600, 650, 1030, 650);
  //Pfeilspitzen
  stroke(0);
  line(595, 80, 600, 75);
  line(600, 75, 605, 80);
  line(1025, 345, 1030, 350);
  line(1030, 350, 1025, 355)
  line(595, 380, 600, 375);
  line(600, 375, 605, 380);
  line(1025, 645, 1030, 650);
  line(1030, 650, 1025, 655);

  strokeWeight(1);
  noStroke();
  fill(0);
  textSize(20);
  text("Zeit", 1055, 360);
  text("Zeit", 1055, 660);

  if (timer < 100) {
    arrX[0] += 7.42;
    arrX[1] += 7.42;
    arrY[1] -= 6.8;
  }
  noFill();
  stroke(0, 150, 0);
  strokeWeight(3);
  ellipse(arrX[0] - 650, arrY[0] + 140, 30, 30);

  stroke(100, 0, 100);
  ellipse(arrX[1] - 650, arrY[1] + 180, 30, 30);
  timer += 1;

  translate(width / 2, height / 2);
  rotate(-PI / 2);
  noStroke();
  fill(0);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);

}
function Folie71() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Zum Beispiel fällt auf ...", 50, 150);
  fill(200);
  text("→ Der (konstante) Widerstandswert vor dem Tem-\n    peratursprung ist bei grün größer als bei lila.", 50, 200);
  text("→ Der Widerstand bei grün erreicht infolge\n    des Temperatursprunges einen höheren Wert.", 50, 270);
  fill(0);
  text("→ Zudem ist das plötzliche Ansteigen des\n    Widerstands bei grün größer als bei lila.", 50, 340);

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


  if (timer == 0) {
    arrX[0] = 0;
    arrY[0] = 750;
    arrX[1] = 0;
    arrY[1] = 750;
  }
  if (timer < 100) {
    arrX[0] += 6.7;
    arrX[1] += 7.1;
    arrY[1] -= 5.5;
    arrY[0] -= 6.1;
  }
  stroke(0, 150, 0);
  strokeWeight(4);
  line(arrX[0], arrY[0], arrX[0], arrY[0] + 120);
  line(arrX[0] - 5, arrY[0] + 5, arrX[0], arrY[0]);
  line(arrX[0] + 5, arrY[0] + 5, arrX[0], arrY[0]);

  stroke(150, 0, 150);
  line(arrX[1], arrY[1], arrX[1], arrY[1] + 90);
  line(arrX[1] - 5, arrY[1] + 5, arrX[1], arrY[1]);
  line(arrX[1] + 5, arrY[1] + 5, arrX[1], arrY[1]);

  if (timer > 120 && timer < 180) {
    arrX[1] -= 1.2;
    arrY[1] -= 0.5;
  }

  if (timer > 120) {
    stroke(220, 0, 220);
    line(710, 200, 710, 200 + 90);
    line(710 - 5, 200 + 5, 710, 200);
    line(710 + 5, 200 + 5, 710, 200);
  }
  timer += 1;
  translate(width / 2, height / 2);
  rotate(-PI / 2);
  noStroke();
  fill(0);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);
}

function Folie72() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Zum Beispiel fällt auf ...", 50, 150);
  fill(200);
  text("→ Der (konstante) Widerstandswert vor dem Tem-\n    peratursprung ist bei grün größer als bei lila.", 50, 200);
  text("→ Der Widerstand bei grün erreicht infolge\n    des Temperatursprunges einen höheren Wert.", 50, 270);
  text("→ Zudem ist das plötzliche Ansteigen des\n    Widerstands bei grün größer als bei lila.", 50, 340);
  fill(0);
  text("→ Unmittelbar nach dem Temperatursprung\n    fällt die grüne Kurve langsamer ab als die lila\n    Kurve.", 50, 410);

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


  if (timer == 0) {
    arrX[0] = 0;
    arrY[0] = 0;
    arrX[1] = 0;
    arrY[1] = 0;
  }
  if (timer < 100) {
    arrX[0] += 7.5;
    arrX[1] += 7.5;
    arrY[0] += 1.3;
    arrY[1] += 2.0;
  }
  stroke(0, 150, 0);
  strokeWeight(4);
  line(arrX[0], arrY[0], arrX[0] + 50, arrY[0] + 30);
  line(arrX[0] + 42, arrY[0] + 31, arrX[0] + 50, arrY[0] + 30);
  line(arrX[0] + 50, arrY[0] + 30, arrX[0] + 48, arrY[0] + 23);

  stroke(150, 0, 150);
  line(arrX[1], arrY[1], arrX[1] + 40, arrY[1] + 45);
  line(arrX[1] + 40, arrY[1] + 45, arrX[1] + 40, arrY[1] + 38);
  line(arrX[1] + 40, arrY[1] + 45, arrX[1] + 34, arrY[1] + 45);

  timer += 1;
  translate(width / 2, height / 2);
  rotate(-PI / 2);
  noStroke();
  fill(0);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);

}

function Folie73() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Zum Beispiel fällt auf ...", 50, 150);
  fill(200);
  text("→ Der (konstante) Widerstandswert vor dem Tem-\n    peratursprung ist bei grün größer als bei lila.", 50, 200);
  text("→ Der Widerstand bei grün erreicht infolge\n    des Temperatursprunges einen höheren Wert.", 50, 270);
  text("→ Zudem ist das plötzliche Ansteigen des\n    Widerstands bei grün größer als bei lila.", 50, 340);
  text("→ Unmittelbar nach dem Temperatursprung\n    fällt die grüne Kurve langsamer ab als die lila\n    Kurve.", 50, 410);
  fill(0);
  text("→ Gegen Ende jedoch fällt die grüne Kurve\n    schneller ab als die lila Kurve.", 50, 500);

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


  if (timer == 0) {
    arrX[0] = 0;
    arrY[0] = 0;
    arrX[1] = 0;
    arrY[1] = 0;
  }
  if (timer < 100) {
    arrX[0] += 9.3;
    arrX[1] += 9.3;
    arrY[0] += 1.8;
    arrY[1] += 2.2;
  }
  stroke(0, 150, 0);
  strokeWeight(4);
  line(arrX[0], arrY[0] + 20, arrX[0] + 50, arrY[0] + 30);
  line(arrX[0] + 45, arrY[0] + 34, arrX[0] + 50, arrY[0] + 30);
  line(arrX[0] + 50, arrY[0] + 30, arrX[0] + 48, arrY[0] + 23);

  stroke(150, 0, 150);
  line(arrX[1], arrY[1] + 45, arrX[1] + 50, arrY[1] + 45);
  line(arrX[1] + 50, arrY[1] + 45, arrX[1] + 45, arrY[1] + 40);
  line(arrX[1] + 50, arrY[1] + 45, arrX[1] + 45, arrY[1] + 50);


  timer += 1;
  translate(width / 2, height / 2);
  rotate(-PI / 2);
  noStroke();
  fill(0);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);
}


function Folie74() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Zum Beispiel fällt auf ...", 50, 150);
  fill(200);
  text("→ Der (konstante) Widerstandswert vor dem Tem-\n    peratursprung ist bei grün größer als bei lila.", 50, 200);
  text("→ Der Widerstand bei grün erreicht infolge\n    des Temperatursprunges einen höheren Wert.", 50, 270);
  text("→ Zudem ist das plötzliche Ansteigen des\n    Widerstands bei grün größer als bei lila.", 50, 340);
  text("→ Unmittelbar nach dem Temperatursprung\n    fällt die grüne Kurve langsamer ab als die lila\n    Kurve.", 50, 410);
  text("→ Gegen Ende jedoch fällt die grüne Kurve\n    schneller ab als die lila Kurve.", 50, 500);
  fill(0);
  text("Man könnte noch viele weitere, wenn auch\nnicht mehr ganz so offensichtliche Merkmale\nfinden. Um das ganze überschaubar zu halten,\nwerden wir uns in diesem Modul auf genau\nvier Merkmale beschränken.", 50, 570);

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


  if (timer == 0) {
    arrX[0] = 930;
    arrY[0] = 180;
    arrX[1] = 930;
    arrY[1] = 220;
  }

  stroke(0, 150, 0);
  strokeWeight(4);
  line(arrX[0], arrY[0] + 20, arrX[0] + 50, arrY[0] + 30);
  line(arrX[0] + 45, arrY[0] + 34, arrX[0] + 50, arrY[0] + 30);
  line(arrX[0] + 50, arrY[0] + 30, arrX[0] + 48, arrY[0] + 23);

  stroke(150, 0, 150);
  line(arrX[1], arrY[1] + 45, arrX[1] + 50, arrY[1] + 45);
  line(arrX[1] + 50, arrY[1] + 45, arrX[1] + 45, arrY[1] + 40);
  line(arrX[1] + 50, arrY[1] + 45, arrX[1] + 45, arrY[1] + 50);

  translate(width / 2, height / 2);
  rotate(-PI / 2);
  noStroke();
  fill(0);
  text("Sensorwiderstand [kΩ]", 60, -120);
  text("Sensorwiderstand [kΩ]", -265, -120);
}

function Folie75() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Am Messbeispiel aus dem vorhin gezeigten\nVideo wollen wir uns das genauer ansehen.\nVon der gesamten Widerstands-Zeit-Kurve\nbetrachten wir dabei nur einen kurzen\nAusschnitt von 10 s Dauer (rote Fläche\nzwischen t  und t  ) im Anschluss an den\nTemperatursprung von 175°C auf 100°C.", 50, 150);
  text("Die vier Merkmale sind...", 50, 350);




  text("Aus einem kurzen Abschnitt des Widerstands-Zeit-Verlaufes (rote Fläche)\nwerden Merkmale gesucht und berechnet.", 520, 600);

  image(Merkmale, 500, 250);
  fill(255, 100, 100, 100);
  noStroke();
  rect(742, 300, 87, 217);
  noStroke();
  fill(0);
  textSize(16);
  text("t  = 160 s, t  = 170 s", 770, 275);
  text("1           2", 143, 285);
  textSize(12);
  text("1                      2", 776, 282);
}

function Folie76() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Am Messbeispiel aus dem vorhin gezeigten\nVideo wollen wir uns das genauer ansehen.\nVon der gesamten Widerstands-Zeit-Kurve\nbetrachten wir dabei nur einen kurzen\nAusschnitt von 10 s Dauer (rote Fläche\nzwischen t  und t  ) im Anschluss an den\nTemperatursprung von 175°C auf 100°C.", 50, 150);
  text("Die vier Merkmale sind...", 50, 350);




  text("Aus einem kurzen Abschnitt des Widerstands-Zeit-Verlaufes (rote Fläche)\nwerden Merkmale gesucht und berechnet.", 520, 600);

  image(Merkmale, 500, 250);
  fill(255, 100, 100, 100);
  noStroke();
  rect(742, 300, 87, 217);
  for (let i = 0; i < 30; i++) {
    stroke(0);
    strokeWeight(3);
    fill(0);
    point(570 + 5.8 * i, 348);
  }
  strokeWeight(1);
  noStroke();
  text("R", 750, 340);



  stroke(0);
  fill(255, 255, 0, 100);
  rect(50, 400, 420, 50);

  fill(0);
  noStroke();
  text("... das Maximum          MAX = R  = 156 kΩ", 60, 430);
  textSize(16);
  text("1", 345, 440);
  text("1", 765, 350);
  textSize(20);
  noStroke();
  fill(0);
  textSize(16);
  text("t  = 160 s, t  = 170 s", 770, 275);
  text("1           2", 143, 285);
  textSize(12);
  text("1                      2", 776, 282);

}

function Folie77() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Am Messbeispiel aus dem vorhin gezeigten\nVideo wollen wir uns das genauer ansehen.\nVon der gesamten Widerstands-Zeit-Kurve\nbetrachten wir dabei nur einen kurzen\nAusschnitt von 10 s Dauer (rote Fläche\nzwischen t  und t  ) im Anschluss an den\nTemperatursprung von 175°C auf 100°C.", 50, 150);
  text("Die vier Merkmale sind...", 50, 350);




  text("Das Minimum des Widerstands wird am Ende des rötlich markierten Be-\nreiches zur Zeit t  = 170 s angenommen und beträgt R  = 128 kΩ.", 520, 600);

  image(Merkmale, 500, 250);
  fill(255, 100, 100, 100);
  noStroke();
  rect(742, 300, 87, 217);
  for (let i = 0; i < 30; i++) {
    stroke(0);
    strokeWeight(3);
    fill(0);
    point(570 + 5.8 * i, 348);
  }

  for (let i = 0; i < 45; i++) {
    stroke(0);
    strokeWeight(3);
    fill(0);
    point(570 + 5.8 * i, 380);
  }


  strokeWeight(1);
  noStroke();
  text("R", 750, 340);
  text("R", 840, 375);



  stroke(0);
  fill(255, 255, 0, 100);
  rect(50, 400, 420, 50);
  rect(50, 480, 420, 50);

  fill(0);
  noStroke();
  text("... das Maximum          MAX = R  = 156 kΩ", 60, 430);
  text("... das Minimum          MIN   = R  = 128 kΩ", 60, 510);
  textSize(16);
  text("1", 345, 440);
  text("1", 765, 350);
  text("2", 342, 520);
  text("2", 855, 385);

  text("2", 670, 635);
  text("2", 1000, 635);
  noStroke();
  fill(0);
  textSize(16);
  text("t  = 160 s, t  = 170 s", 770, 275);
  text("1           2", 143, 285);
  textSize(12);
  text("1                      2", 776, 282);
}

function Folie78() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Am Messbeispiel aus dem vorhin gezeigten\nVideo wollen wir uns das genauer ansehen.\nVon der gesamten Widerstands-Zeit-Kurve\nbetrachten wir dabei nur einen kurzen\nAusschnitt von 10 s Dauer (rote Fläche\nzwischen t  und t  ) im Anschluss an den\nTemperatursprung von 175°C auf 100°C.", 50, 150);
  text("Die vier Merkmale sind...", 50, 350);




  text("Der Mittelwert von Maximum R  und Minimum R  beträgt 142 kΩ.", 520, 600);

  image(Merkmale, 500, 250);
  fill(255, 100, 100, 100);
  noStroke();
  rect(742, 300, 87, 217);
  for (let i = 0; i < 30; i++) {
    stroke(0);
    strokeWeight(3);
    fill(0);
    point(570 + 5.8 * i, 348);
  }

  for (let i = 0; i < 45; i++) {
    stroke(0);
    strokeWeight(3);
    fill(0);
    point(570 + 5.8 * i, 380);
  }

  for (let i = 0; i < 38; i++) {
    stroke(0);
    strokeWeight(3);
    fill(0);
    point(570 + 5.8 * i, 365);
  }


  strokeWeight(1);
  noStroke();
  text("R", 750, 340);
  text("R", 840, 375);
  text("MW", 792, 360);



  stroke(0);
  fill(255, 255, 0, 100);
  rect(50, 400, 420, 50);
  rect(50, 480, 420, 50);
  rect(50, 560, 420, 50);

  fill(0);
  noStroke();
  text("... das Maximum          MAX = R  = 156 kΩ", 60, 430);
  text("... das Minimum          MIN   = R  = 128 kΩ", 60, 510);
  text("... den Mittelwert     MW =              = 142 kΩ", 60, 590);
  textSize(16);
  text("1", 345, 440);
  text("1", 765, 350);
  text("2", 342, 520);
  text("2", 855, 385);

  text("1", 794, 610);
  text("2", 945, 610);
  textSize(15)
  text("R   + R", 300, 580);
  text("2", 325, 601);
  textSize(10);
  text("1         2", 312, 585);
  stroke(0);
  line(300, 587, 358, 587);
  noStroke();
  fill(0);
  textSize(16);
  text("t  = 160 s, t  = 170 s", 770, 275);
  text("1           2", 143, 285);
  textSize(12);
  text("1                      2", 776, 282);
}

function Folie79() {
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Am Messbeispiel aus dem vorhin gezeigten\nVideo wollen wir uns das genauer ansehen.\nVon der gesamten Widerstands-Zeit-Kurve\nbetrachten wir dabei nur einen kurzen\nAusschnitt von 10 s Dauer (rote Fläche\nzwischen t  und t  ) im Anschluss an den\nTemperatursprung von 175°C auf 100°C.", 50, 150);
  text("Die vier Merkmale sind...", 50, 350);




  text("Im Zeitraum von t  = 160 s bis t  = 170 s, also innerhalb von 10 s, sinkt\nder Widerstand um 28 kΩ, innerhalb einer Sekunde im Mittel nur um\n2,8 kΩ.\nBeachte: Die mittlere Steigung des Widerstandsverlaufes im markierten\nrötlichen Bereich ist negativ. Deshalb ist ST = − 2,8 kΩ/s.", 520, 600);
  textSize(16);
  text("1                        1", 680, 610);
  image(Merkmale, 500, 250);
  fill(255, 100, 100, 100);
  noStroke();
  rect(742, 300, 87, 217);
  textSize(20);

  strokeWeight(1);
  noStroke();
  fill(0);
  text("ST", 790, 350);

  stroke(0);
  strokeWeight(5);
  line(740, 345, 830, 378);
  strokeWeight(1);



  stroke(0);
  fill(255, 255, 0, 100);
  rect(50, 400, 420, 50);
  rect(50, 480, 420, 50);
  rect(50, 560, 420, 50);
  rect(50, 640, 420, 50);

  fill(0);
  noStroke();
  text("... das Maximum          MAX = R  = 156 kΩ", 60, 430);
  text("... das Minimum          MIN   = R  = 128 kΩ", 60, 510);
  text("... den Mittelwert     MW =              = 142 kΩ", 60, 590);
  text("... die Steigung         ST =              = -2,8 kΩ/s", 60, 670);

  textSize(16);
  text("1", 345, 440);
  text("2", 342, 520);

  textSize(15)
  text("R   + R", 300, 580);
  text("2", 325, 601);
  textSize(10);
  text("1         2", 312, 585);
  text("2         1", 312, 665);
  stroke(0);
  line(300, 587, 358, 587);
  line(300, 667, 358, 667);

  noStroke();
  textSize(15);
  text("R   - R", 300, 660);
  text("10s", 318, 679)

  noStroke();
  fill(0);
  textSize(16);
  text("t  = 160 s, t  = 170 s", 770, 275);
  text("1           2", 143, 285);

  textSize(12);

  text("1                      2", 776, 282);
}

function Folie80() {
  textSize(30);
  min.show();
  max.show();
  mw1.show();
  mw2.show();
  st1.show();
  st2.show();
  text("Aufgabe 4", 180, 50);
  textSize(20);
  text("Bestimme die vier Merkmale des Widerstands-\nZeit-Verlaufes im farbig markierten Bereich …", 50, 100);

  //image(Merkmale, 500, 250);


  translate(0, -100);
  stroke(0);
  fill(255, 255, 0, 100);
  rect(50, 255, 420, 70);
  rect(50, 355, 420, 70);
  rect(50, 455, 420, 130);
  rect(50, 615, 420, 130);

  fill(0);
  noStroke();
  text("... das Maximum", 60, 300);
  text("... das Minimum", 60, 400);
  text("... den Mittelwert", 60, 485);
  text("... die Steigung", 60, 650);


  text("MAX =", 270, 300);
  text("kΩ", 405, 300);

  text("MIN =", 270, 400);
  text("kΩ", 405, 400);
  let mw = (parseFloat(mw1.value()) + parseFloat(mw2.value())) / 2;
  let st = (parseFloat(st1.value()) - parseFloat(st2.value())) / 30;
  text("MW =", 80, 555);
  text("= " + nf(mw, 0, 1).replace('.', ',') + " kΩ", 340, 555);
  text("ST =", 88, 720);
  text("= " + nf(st, 0, 1).replace('.', ',') + " kΩ/s", 340, 720);




  textSize(30);
  text("+", 220, 540);
  text("-", 223, 700);
  text("2", 220, 580);
  text("30s", 206, 740);

  stroke(0);
  strokeWeight(3);
  line(145, 547, 320, 547);
  line(145, 710, 320, 710);
  translate(0, 100);

  fill(255);
  strokeWeight(1);
  rect(550, 100, 600, 550);
  line(595, 520, 1100, 520);


  line(595, 275, 600, 270);
  line(600, 270, 605, 275);


  line(1095, 515, 1100, 520);
  line(1100, 520, 1095, 525);

  strokeWeight(2);
  fill(0);


  stroke(0, 200, 0);


  for (let i = 50; i < video_Daten.length - 30; i++) {
    line(605 + 5 * (i - 50), 570 - 1.5 * video_Daten[i], 605 + 5 * (i - 51), 570 - 1.5 * video_Daten[i - 1])

  }
  textSize(20);
  for (let i = 0; i < 7; i++) {
    let a = 25 * i;
    stroke(200);
    text(a, 590 + 83 * i, 555);

    line(600 + 83 * i, 520, 600 + 83 * i, 270)
  }



  for (let i = 0; i < 4; i++) {
    line(600, 270 + 62.5 * i, 1100, 270 + 62.5 * i);
  }



  if (mouseX > 600 && mouseX < 1060 && mouseY > 260 && mouseY < 520) {
    noFill();
    stroke(255, 0, 0);
    ellipse(mouseX, mouseY, 20, 20);
    fill(0);
    noStroke();
    text("[" + floor((mouseX - 600) / 3.3333) + "s, " + floor(200 - (mouseY - 270) / 1.25) + "kΩ]", mouseX + 20, mouseY - 50);
  }


  noStroke();
  fill(255, 100, 100, 100);
  rect(800, 270, 100, 250);
  strokeWeight(1);
  stroke(0);
  line(600, 270, 600, 525);
  noStroke();

  fill(0);
  textSize(20);
  text("Zeit [s]", 810, 590);
  textSize(20);
  text("Der rote Bereich liegt im Intervall [60s, 90s]", 580, 140);
  text("200", 560, 270);



  translate(width / 2, height / 2);
  rotate(-PI / 2);
  text("Sensorwiderstand [kΩ]", -130, -120);


  if (max.value() > 154 && max.value() < 165 && min.value() > 95 && min.value() < 105 && mw >= 125 && mw <= 135 && st < -1.6 && st > -2.34) {
    weiter.show();
  } else {
    weiter.hide();
  }
}
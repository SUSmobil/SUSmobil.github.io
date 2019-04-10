function Folie111() {
  textSize(14);
  text("1", 642, textX + 30);
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Die Ethanolkonzentration in der\n    Messkammer ist nun c  .", 420, textX);

  if (textX < 100) {
    textX += 4;
    weiter.hide();
  } else {
    weiter.show();
  }


  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(100 + konzMesskammer2, 100 - konzMesskammer2, 100 - konzMesskammer2, konzMesskammer2 / 4);
  Spritze(spritzeX, spritzeY, spritzeFuellung);


  stroke(0);
  line(830, 200, 830, 300);
  line(825, 295, 970, 295);


  line(830, 340, 830, 440);
  line(825, 435, 970, 435);


  stroke(255, 0, 0);
  strokeWeight(3);
  line(830, 360, 850, 360);
  line(850, 410, 890, 410);
  line(890, 360, 910, 360);
  line(910, 400, 950, 400);

  //>Temperatur
  strokeWeight(2);
  stroke(100);
  for (let i = 0; i < 10; i++) {
    point(850, 360 + 5 * i);
    point(890, 360 + 5 * i);
    point(910, 360 + 4 * i)
  }


  stroke(100);
  line(830, 280, 850, 280);
  line(850, 280, 850, 220);
  line(890, 238, 890, 280);
  line(890, 280, 910, 280);
  line(910, 280, 910, 230);
  for (let i = 0; i < 40; i++) {
    line(850 + i, 220 + 1.5 * Math.log(i * i * i), 851 + i, 220 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
    line(910 + i, 230 + 1.5 * Math.log(i * i * i), 911 + i, 230 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
  }



  noStroke();
  fill(0);
  textSize(20);
  text("c   = 0", 970, 220);
  text("Zeit", 950, 315);
  text("Zeit", 950, 455);
  textSize(14);
  text("0", 980, 225);
  textSize(20);

  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  textSize(16);
  text("Widerstand", 92, 115);
  text("Temperatur", -50, 115);

  pop();

  timerSpritze = 0;
}

function Folie112() {
  textSize(14);
  text("1", 642, 130);
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Die Ethanolkonzentration in der\n    Messkammer ist nun c  .", 420, 100);
  text("Die nächste Widerstands-Zeit-Kurve\n         wird aufgenommen ...", 385, 700 - textX);
  if (textX < 100) {
    textX += 4;
    weiter.hide();
  } else {
    weiter.show();
  }
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(100 + konzMesskammer2, 100 - konzMesskammer2, 100 - konzMesskammer2, konzMesskammer2 / 4);
  //Spritze(spritzeX, spritzeY, spritzeFuellung);


  stroke(0);
  line(830, 200, 830, 300);
  line(825, 295, 970, 295);


  line(830, 340, 830, 440);
  line(825, 435, 970, 435);


  stroke(255, 0, 0);
  strokeWeight(3);
  line(830, 360, 850, 360);
  line(850, 410, 890, 410);
  line(890, 360, 910, 360);
  line(910, 400, 950, 400);

  //>Temperatur
  strokeWeight(2);
  stroke(100);
  for (let i = 0; i < 10; i++) {
    point(850, 360 + 5 * i);
    point(890, 360 + 5 * i);
    point(910, 360 + 4 * i)
  }


  stroke(100);
  line(830, 280, 850, 280);
  line(850, 280, 850, 220);
  line(890, 238, 890, 280);
  line(890, 280, 910, 280);
  line(910, 280, 910, 230);
  for (let i = 0; i < 40; i++) {
    line(850 + i, 220 + 1.5 * Math.log(i * i * i), 851 + i, 220 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
    line(910 + i, 230 + 1.5 * Math.log(i * i * i), 911 + i, 230 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
  }



  noStroke();
  fill(0);
  textSize(20);
  text("c   = 0", 970, 220);
  text("Zeit", 950, 315);
  text("Zeit", 950, 455);
  textSize(14);
  text("0", 980, 225);
  textSize(20);

  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  textSize(16);
  text("Widerstand", 92, 115);
  text("Temperatur", -50, 115);

  pop();
}

function Folie113() {
  textSize(14);
  text("1", 642, 130);
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Die Ethanolkonzentration in der\n    Messkammer ist nun c  .", 420, 100);
  text("Die nächste Widerstands-Zeit-Kurve\n         wird aufgenommen ...", 385, 600);
  text("... und in der Kalibriersoftware dar-\n                  gestellt.", 385, 750 - textX);
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(100 + konzMesskammer2, 100 - konzMesskammer2, 100 - konzMesskammer2, konzMesskammer2 / 4);
  //Spritze(spritzeX, spritzeY, spritzeFuellung);
  if (textX < 100) {
    textX += 4;
    weiter.hide();
  } else {
    weiter.show();
  }

  stroke(0);
  line(830, 200, 830, 300);
  line(825, 295, 970, 295);


  line(830, 340, 830, 440);
  line(825, 435, 970, 435);


  stroke(255, 0, 0);
  strokeWeight(3);
  line(830, 360, 850, 360);
  line(850, 410, 890, 410);
  line(890, 360, 910, 360);
  line(910, 400, 950, 400);

  //>Temperatur
  strokeWeight(2);
  stroke(100);
  for (let i = 0; i < 10; i++) {
    point(850, 360 + 5 * i);
    point(890, 360 + 5 * i);
    point(910, 360 + 4 * i)
  }


  stroke(100);
  line(830, 280, 850, 280);
  line(850, 280, 850, 220);
  line(890, 238, 890, 280);
  line(890, 280, 910, 280);
  line(910, 280, 910, 230);
  for (let i = 0; i < 40; i++) {
    line(850 + i, 220 + 1.5 * Math.log(i * i * i), 851 + i, 220 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
    line(910 + i, 230 + 1.5 * Math.log(i * i * i), 911 + i, 230 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
  }

  stroke(0, 255, 0);
  translate(0, 10);
  line(830, 275, 850, 275);
  line(850, 275, 850, 220);
  line(890, 238, 890, 275);
  line(890, 275, 910, 275);
  line(910, 275, 910, 230);
  for (let i = 0; i < 40; i++) {
    line(850 + i, 220 + 1.5 * Math.log(i * i * i), 851 + i, 220 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
    line(910 + i, 230 + 1.5 * Math.log(i * i * i), 911 + i, 230 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
  }

  translate(0, -10);



  noStroke();
  fill(0);
  text("c  = 0", 970, 220);
  fill(0, 200, 0);

  text("c", 970, 240);
  textSize(14);
  text("1", 980, 245);
  fill(0);
  text("0", 980, 225);
  textSize(20);
  text("Zeit", 950, 315);
  text("Zeit", 950, 455);

  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  textSize(16);
  text("Widerstand", 92, 115);
  text("Temperatur", -50, 115);
  pop();
}

function Folie114() {
  weiter.hide();
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(100 + konzMesskammer2, 100 - konzMesskammer2, 100 - konzMesskammer2, konzMesskammer2 / 4);
  //Spritze(spritzeX, spritzeY, spritzeFuellung);

  noStroke();
  fill(0);
  if (timerSpritze > 30 && timerSpritze < 100) {
    spritzeX = 170;
    spritzeY = 550;
    spritzeFuellung = 0;
  } else if (timerSpritze > 150 && timerSpritze < 220) {
    spritzeY -= 2;
  } else if (timerSpritze > 250 && timerSpritze < 300) {
    spritzeFuellung += 0.54;
  } else if (timerSpritze > 320 && timerSpritze < 380) {
    spritzeY += 2;
  } else if (timerSpritze > 420 && timerSpritze < 574) {
    spritzeX += 2;
  } else if (timerSpritze > 614 && timerSpritze < 629) {
    spritzeY -= 2;
  } else if (timerSpritze > 650 && timerSpritze < 725) {
    spritzeFuellung -= 0.37;
    konzMesskammer2 += 1;
  } else if (timerSpritze > 750 && timerSpritze < 850) {
    spritzeY += 3;
  }

  if (textX < 100) {
    textX += 4;
    weiter.hide();
  } else {
    weiter.show();
  }

  textSize(14);
  text("2", 679, textX + 30);
  textSize(20);
  text("     Die Ethanolkonzentration in der\nMesskammer wird analog auf c   erhöht.", 400, textX);


  if (timerSpritze > 100) {
    Spritze(spritzeX, spritzeY, spritzeFuellung);
  }


  if (timerSpritze > 850) {
    textSize(20);
    fill(0);
    noStroke();
    text("Die nächste Widerstands-Zeit-Kurve\n         wird aufgenommen ...", 385, 580);
  }

  if (timerSpritze > 900) {
    text("... und in der Kalibriersoftware dar-\n                  gestellt.", 385, 630);
  }

  stroke(0);
  line(830, 200, 830, 300);
  line(825, 295, 970, 295);


  line(830, 340, 830, 440);
  line(825, 435, 970, 435);


  stroke(255, 0, 0);
  strokeWeight(3);
  line(830, 360, 850, 360);
  line(850, 410, 890, 410);
  line(890, 360, 910, 360);
  line(910, 400, 950, 400);

  //>Temperatur
  strokeWeight(2);
  stroke(100);
  for (let i = 0; i < 10; i++) {
    point(850, 360 + 5 * i);
    point(890, 360 + 5 * i);
    point(910, 360 + 4 * i)
  }


  stroke(100);
  line(830, 280, 850, 280);
  line(850, 280, 850, 220);
  line(890, 238, 890, 280);
  line(890, 280, 910, 280);
  line(910, 280, 910, 230);
  for (let i = 0; i < 40; i++) {
    line(850 + i, 220 + 1.5 * Math.log(i * i * i), 851 + i, 220 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
    line(910 + i, 230 + 1.5 * Math.log(i * i * i), 911 + i, 230 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
  }

  stroke(0, 255, 0);
  translate(0, 10);
  line(830, 275, 850, 275);
  line(850, 275, 850, 220);
  line(890, 238, 890, 275);
  line(890, 275, 910, 275);
  line(910, 275, 910, 230);
  for (let i = 0; i < 40; i++) {
    line(850 + i, 220 + 1.5 * Math.log(i * i * i), 851 + i, 220 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
    line(910 + i, 230 + 1.5 * Math.log(i * i * i), 911 + i, 230 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
  }

  translate(0, -10);


  if (timerSpritze > 900) {
    stroke(0, 0, 255);
    translate(0, 15);
    line(830, 275, 850, 275);
    line(850, 275, 850, 220);
    line(890, 238, 890, 275);
    line(890, 275, 910, 275);
    line(910, 275, 910, 230);
    for (let i = 0; i < 40; i++) {
      line(850 + i, 220 + 1.5 * Math.log(i * i * i), 851 + i, 220 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
      line(910 + i, 230 + 1.5 * Math.log(i * i * i), 911 + i, 230 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
    }

    translate(0, -15);
    noStroke();
    fill(0, 0, 255);
    text("c", 970, 260);
    textSize(14);
    text("2", 980, 265);
    textSize(20);
  }

  if (timerSpritze > 950) {
    weiter.show();
  } else {
    weiter.hide();
  }



  noStroke();
  fill(0);
  text("c  = 0", 970, 220);
  fill(0, 200, 0);

  text("c", 970, 240);
  textSize(14);
  text("1", 980, 245);
  fill(0);
  text("0", 980, 225);
  textSize(20);

  text("Zeit", 950, 315);
  text("Zeit", 950, 455);

  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  textSize(16);
  text("Widerstand", 92, 115);
  text("Temperatur", -50, 115);
  pop();
  timerSpritze += 1;
}



let mm1 = 700;
let mm2 = 700;

function Folie115() {
  weiter.hide();
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(100 + konzMesskammer2, 100 - konzMesskammer2, 100 - konzMesskammer2, konzMesskammer2 / 4);
  //Spritze(spritzeX, spritzeY, spritzeFuellung);

  noStroke();
  fill(0);

  if (timerSpritze < 50) {
    textSize(14);
    text("2", 319, 130);
    textSize(20);
    text("     Die Ethanolkonzentration in der\nMesskammer wird analog auf c   erhöht.", 40, 100);
    textSize(20);
    fill(0);
    noStroke();
    text("Die nächste Widerstands-Zeit-Kurve\n         wird aufgenommen ...", 385, 580);
    text("... und in der Kalibriersoftware dar-\n                  gestellt.", 385, 630);
  }

  if (timerSpritze > 100) {
    textSize(20);
    fill(0);
    noStroke();
    text("Sind alle Messungen abgeschlossen, werden aus den\n       Kurven Merkmale berechnet und mit den\n         Konzentrationen in Beziehung gesetzt.", 220, 580);


    textSize(16);
    text("c", 1055, 235);
    text("M1", 1088, 235);
    text("M2", 1123, 235);
    textSize(16);
    text("0", 1055, 260);
    text("c", 1054, 290);
    text("c", 1054, 320);
    textSize(30);
    text(".", 1054, 350);
    text(".", 1054, 380);

    textSize(12);
    text("1", 1061, 295);
    text("2", 1061, 325)
    textSize(20);
    stroke(0);
    line(1045, 240, 1150, 240);
    line(1080, 225, 1080, 400);
    line(1115, 225, 1115, 400);


    noStroke();
    fill(255, 193, 37, 90);
    rect(854, mm1, 15, 95);
    rect(1083, mm1 + 23, 30, 170);

    fill(191, 62, 255, 90);
    rect(920, mm1, 15, 95);
    rect(1118, mm1 + 23, 30, 170);
    if (mm1 > 200) {
      mm1 -= 5;
    }
  }

  if (timerSpritze > 250) {
    textSize(20);
    fill(0);
    text("Um die Genauigkeit der Kalibrierung zu erhöhen, werdet ihr noch\nzwei weitere Konzentrationen als Trainingsdaten verwenden.", 200, 680);
  }

  if (timerSpritze > 350) {
    weiter.show();
  } else {
    weiter.hide();
  }



  stroke(0);
  line(830, 200, 830, 300);
  line(825, 295, 970, 295);


  line(830, 340, 830, 440);
  line(825, 435, 970, 435);


  stroke(255, 0, 0);
  strokeWeight(3);
  line(830, 360, 850, 360);
  line(850, 410, 890, 410);
  line(890, 360, 910, 360);
  line(910, 400, 950, 400);

  //>Temperatur
  strokeWeight(2);
  stroke(100);
  for (let i = 0; i < 10; i++) {
    point(850, 360 + 5 * i);
    point(890, 360 + 5 * i);
    point(910, 360 + 4 * i)
  }


  stroke(100);
  line(830, 280, 850, 280);
  line(850, 280, 850, 220);
  line(890, 238, 890, 280);
  line(890, 280, 910, 280);
  line(910, 280, 910, 230);
  for (let i = 0; i < 40; i++) {
    line(850 + i, 220 + 1.5 * Math.log(i * i * i), 851 + i, 220 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
    line(910 + i, 230 + 1.5 * Math.log(i * i * i), 911 + i, 230 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
  }

  stroke(0, 255, 0);
  translate(0, 10);
  line(830, 275, 850, 275);
  line(850, 275, 850, 220);
  line(890, 238, 890, 275);
  line(890, 275, 910, 275);
  line(910, 275, 910, 230);
  for (let i = 0; i < 40; i++) {
    line(850 + i, 220 + 1.5 * Math.log(i * i * i), 851 + i, 220 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
    line(910 + i, 230 + 1.5 * Math.log(i * i * i), 911 + i, 230 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
  }

  translate(0, -10);



  stroke(0, 0, 255);
  translate(0, 15);
  line(830, 275, 850, 275);
  line(850, 275, 850, 220);
  line(890, 238, 890, 275);
  line(890, 275, 910, 275);
  line(910, 275, 910, 230);
  for (let i = 0; i < 40; i++) {
    line(850 + i, 220 + 1.5 * Math.log(i * i * i), 851 + i, 220 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
    line(910 + i, 230 + 1.5 * Math.log(i * i * i), 911 + i, 230 + 1.5 * Math.log((i + 1) * (i + 1) * (i + 1)));
  }

  translate(0, -15);
  noStroke();
  fill(0, 0, 255);
  text("c", 970, 260);
  textSize(14);
  text("2", 980, 265);

  textSize(20);
  noStroke();
  fill(0);
  text("c  = 0", 970, 220);
  fill(0, 200, 0);

  text("c", 970, 240);
  textSize(14);
  text("1", 980, 245);
  fill(0);
  text("0", 980, 225);
  textSize(20);
  text("Zeit", 950, 315);
  text("Zeit", 950, 455);

  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  textSize(16);
  text("Widerstand", 92, 115);
  text("Temperatur", -50, 115);
  pop();
  timerSpritze += 1;

}


function Folie116() {
  textSize(50);
  text("Experimentelle Basis", 400, 300);
  textSize(40);
  text(" Konzentrationen -\nwie misst man das?", 462, 450);
}

function Folie117() {
  textSize(30);
  text("Messgröße Konzentration", 450, 50);
  textSize(20);
  text("Bislang haben wir schon oft von Gaskonzentrationen gesprochen. Tatsächlich wollen wir den Sensor ja auf diese Messgröße\nkalibrieren. Dabei haben wir erwartet, bzw. vorausgesetzt, dass ihr eine intuitive Vorstellung habt, was Gaskonzentrationen\nüberhaupt sind. Es ist wichtig, diese Intuition zu vertiefen.", 20, 100);
}

function Folie118() {
  textSize(30);
  text("Messgröße Konzentration", 450, 50);
  textSize(20);
  text("Bislang haben wir schon oft von Gaskonzentrationen gesprochen. Tatsächlich wollen wir den Sensor ja auf diese Messgröße\nkalibrieren. Dabei haben wir erwartet, bzw. vorausgesetzt, dass ihr eine intuitive Vorstellung habt, was Gaskonzentrationen\nüberhaupt sind. Es ist wichtig, diese Intuition zu vertiefen.", 20, 100);
  text("Angaben der                                                         findet", 20, 200);
  textStyle(BOLD);
  text("Konzentration als Massenanteil", 143, 200);
  textStyle(NORMAL);
  text("man sehr häufig bei der Angabe von Grenzwerten.", 20, 225);
  text("Zum Beispiel liegt der, von der WHO empfohlene, Jahres-\nmittelgrenzwert von Stickstoffdioxid (NO  ) in  der Außen-\nluft bei                . Diese Angabe bedeutet, dass die\nGesamtmasse aller NO  - Moleküle in 1 m³ (= 1000 l)\nder Außenluft im Jahresmittel nicht mehr als 40 μg\nbetragen darf.", 20, 270);
  textSize(14);
  text("2", 375, 300);
  text("2", 228, 350);
  textSize(20);
  textStyle(BOLD);
  text("40 μg/m³", 85, 320);

  image(NO2_Jahresmittel, 100, 410);


}

function Folie119() {
  textSize(30);
  text("Messgröße Konzentration", 450, 50);
  textSize(20);
  text("Bislang haben wir schon oft von Gaskonzentrationen gesprochen. Tatsächlich wollen wir den Sensor ja auf diese Messgröße\nkalibrieren. Dabei haben wir erwartet, bzw. vorausgesetzt, dass ihr eine intuitive Vorstellung habt, was Gaskonzentrationen\nüberhaupt sind. Es ist wichtig, diese Intuition zu vertiefen.", 20, 100);
  fill(200);
  text("Angaben der                                                         findet", 20, 200);
  textStyle(BOLD);
  text("Konzentration als Massenanteil", 143, 200);
  textStyle(NORMAL);
  text("man sehr häufig bei der Angabe von Grenzwerten.", 20, 225);
  text("Zum Beispiel liegt der, von der WHO empfohlene, Jahres-\nmittelgrenzwert von Stickstoffdioxid (NO  ) in  der Außen-\nluft bei                . Diese Angabe bedeutet, dass die\nGesamtmasse aller NO  - Moleküle in 1 m³ (= 1000 l)\nder Außenluft im Jahresmittel nicht mehr als 40 μg\nbetragen darf.", 20, 270);
  textSize(14);
  text("2", 375, 300);
  text("2", 228, 350);
  textSize(20);
  textStyle(BOLD);
  text("40 μg/m³", 85, 320);

  fill(0);

  textStyle(NORMAL);
  textSize(20);
  text("In SUSmobil werden wir meistens jedoch\n                                                angeben.", 680, 200);
  text("Ein Beispiel: Zusammensetzung der trockenen Luft\nDiese besteht fast ausschließlich aus Stickstoff (78 %)\nund Sauerstoff (21 %). Nur etwa        (1 Vol.-% , sprich:\nVolumenprozent), also                                    gehört zu\neinem anderen Gas (z.B. Argon, Helium, Wassersoff oder\nCO  ).", 680, 270);
  textStyle(BOLD);
  text("Konzen-", 1050, 200);
  text("trationen als Teilchenanteil", 680, 225);
  text("1 %", 970, 320);
  text("1 von 100 Teilchen", 890, 345);

  textStyle(NORMAL);
  textSize(14);
  text("2", 710, 400);
  image(NO2_Jahresmittel, 100, 410);
  image(Zusammensetzung_Luft, 700, 410);
}

function Folie120() {
  textSize(40);
  textStyle(BOLD);

  text("Konzentration als Teilchenanteil", 350, 50);
  textStyle(NORMAL);
  textSize(20);
  text("Gerade wenn wir uns für Luftschadstoffe interessieren, werden wir Konzentrationen vorfinden, die zumeist noch sehr viel kleiner\nsind als 1 Vol-%. In diesen Fällen ist es einfacher, wenn man anstelle des Volumenprozents kleinere Einheiten verwendet. Eine\nkleinere Einheit als das Prozent kenn ihr sicherlich: Das                . Daneben sind noch kleinere Konzentrationsheinheiten üblich.\n\nIm folgenden Gedankenexperiment lernt ihr sie kennen.", 20, 100);
  textStyle(BOLD);
  text("Promille", 520, 150);

}



// function Folie111() {
//   textSize(30);
//   text("Bekannte Konzentrationen erzeugen", 20, 50);
//   textSize(20);
//   text("Um den Sensor richtig kalibrieren zu können, müssen wir seine Reaktion für bekannte Reaktionen beobachten. Diese müssen wir\nnun zunächst herstellen.", 20, 100);
//   text("Dazu verwenden wir eine einfache 'Gasmischanlage'. Diese besteht aus:", 20, 200);
//   image(gma, 800, 160);
//
//   text("→ einer Plexiglasbox mit einer kleinen Öffnung", 100, 300);
//   text("→ einem Heizelement", 100, 350);
//
//   noFill();
//   stroke(255, 0, 0);
//   strokeWeight(5);
//   ellipse(980, 370, 150, 100);
// }
//
// function Folie112() {
//   textSize(30);
//   text("Bekannte Konzentrationen erzeugen", 20, 50);
//   textSize(20);
//   text("Um den Sensor richtig kalibrieren zu können, müssen wir seine Reaktion für bekannte Reaktionen beobachten. Diese müssen wir\nnun zunächst herstellen.", 20, 100);
//   text("Dazu verwenden wir eine einfache 'Gasmischanlage'. Diese besteht aus:", 20, 200);
//   image(gma, 800, 160);
//
//   text("→ einer Plexiglasbox mit einer kleinen Öffnung", 100, 300);
//   text("→ einem Heizelement", 100, 350);
//   text("→ und einem Ventilator", 100, 400);
//   stroke(255, 0, 0);
//   noFill();
//   strokeWeight(5);
//   ellipse(900, 360, 100, 75);
// }
//
// function Folie113() {
//   textSize(30);
//   text("Bekannte Konzentrationen erzeugen", 20, 50);
//   textSize(20);
//   text("Um den Sensor richtig kalibrieren zu können, müssen wir seine Reaktion für bekannte Reaktionen beobachten. Diese müssen wir\nnun zunächst herstellen.", 20, 100);
//   text("Dazu verwenden wir eine einfache 'Gasmischanlage'. Diese besteht aus:", 20, 200);
//   image(gma, 800, 160);
//
//   text("→ einer Plexiglasbox mit einer kleinen Öffnung", 100, 300);
//   text("→ einem Heizelement", 100, 350);
//   text("→ und einem Ventilator", 100, 400);
//
//
//   text("Eine definierte Menge Ethanol wird nun auf das Heizelement gegeben. Durch die Hitze\nverdampft es und geht in die Gasphase über. Der Ventilator sorgt für eine gleichmäßige\nVerteilung des Ethanols.", 20, 500);
//   text("Frage: Wie hoch ist die Konzentration in der Gasmischanlage?", 20, 600);
// }
//
//
// function Folie114() {
//   textSize(30);
//   text("Berechnung der Ethanol-Konzentration ", 20, 50);
//   textSize(20);
//   text("Um die Ethanol-Konzentration zu berechnen müssen wir das Verhältnis aus der Anzahl der Ethanol-Moleküle zur Anzahl der Luft-\nmoleküle berechnen.", 20, 100);
//
// }
//
// function Folie115() {
//   textSize(30);
//   text("Berechnung der Ethanol-Konzentration ", 20, 50);
//   textSize(20);
//   text("Um die Ethanol-Konzentration zu berechnen müssen wir das Verhältnis aus der Anzahl der Ethanol-Moleküle zur Anzahl der Luft-\nmoleküle berechnen.", 20, 100);
//   textStyle(BOLD);
//   text("1. Anzahl Luftteilchen pro cm³", 20, 180);
//   textStyle(NORMAL);
//   text("Um die Anzahl der Luftteilchen pro cm³ zu berechnen, brauchen wir die folgenden Angaben:", 20, 220);
//
// }

// function Folie116() {
//
//   textSize(30);
//   text("Berechnung der Ethanol-Konzentration ", 20, 50);
//   textSize(20);
//   text("Um die Ethanol-Konzentration zu berechnen müssen wir das Verhältnis aus der Anzahl der Ethanol-Moleküle zur Anzahl der Luft-\nmoleküle berechnen.", 20, 100);
//   textStyle(BOLD);
//   text("1. Anzahl Luftteilchen pro cm³", 20, 180);
//   textStyle(NORMAL);
//   fill(255);
//   stroke(0);
//   ellipse(310, 295, 250, 100);
//   ellipse(790, 295, 350, 100);
//
//   ellipse(550, 415, 550, 100);
//
//   fill(0);
//   noStroke();
//   text("Um die Anzahl der Luftteilchen pro cm³ zu berechnen, brauchen wir die folgenden Angaben:", 20, 220);
//   translate(0, -30);
//   text("Dichte ρ = 0,0012 g/cm³", 200, 330);
//   text("molare Masse M = 28,949 g/mol", 650, 330);
//   text("Avogadro-Konstante N  = 6,022 ⋅ 10    Teilchen/mol", 330, 450);
//
//
//   textSize(14);
//   text(" 23", 646, 440);
//   text("A", 530, 455);
//   translate(0, 30);
// }

// function Folie117() {
//
//   textSize(30);
//   text("Berechnung der Ethanol-Konzentration ", 20, 50);
//   textSize(20);
//   text("Um die Ethanol-Konzentration zu berechnen müssen wir das Verhältnis aus der Anzahl der Ethanol-Moleküle zur Anzahl der Luft-\nmoleküle berechnen.", 20, 100);
//   textStyle(BOLD);
//   text("1. Anzahl Luftteilchen pro cm³", 20, 180);
//   textStyle(NORMAL);
//   fill(255);
//   stroke(0);
//   ellipse(310, 295, 250, 100);
//   ellipse(790, 295, 350, 100);
//   ellipse(550, 415, 550, 100);
//   fill(0);
//   noStroke();
//   text("Um die Anzahl der Luftteilchen pro cm³ zu berechnen, brauchen wir die folgenden Angaben:", 20, 220);
//   translate(0, -30);
//   text("Dichte ρ = 0,0012 g/cm³", 200, 330);
//   text("molare Masse M = 28,949 g/mol", 650, 330);
//   text("Avogadro-Konstante N  = 6,022 ⋅ 10    Teilchen/mol", 330, 450);
//
//
//   textSize(14);
//   text(" 23", 646, 440);
//   text("A", 530, 455);
//
//   textSize(20);
//   text("Teilt man die Dichte ρ durch die molare Masse M, so erhält man die Molzahl pro cm³:", 20, 530);
//   text("ρ", 404, 580);
//   text("0,0012 g/cm³", 465, 578);
//
//
//   text("M", 400, 608);
//   text("28,949 g/mol", 460, 608);
//   text("=", 425, 595);
//   text("= 0,0000415 mol/cm³", 595, 595);
//
//
//   stroke(0);
//   line(398, 588, 418, 588);
//   line(450, 588, 585, 588);
//   translate(0, 30);
// }
//
// function Folie118() {
//
//   textSize(30);
//   text("Berechnung der Ethanol-Konzentration ", 20, 50);
//   textSize(20);
//   text("Um die Ethanol-Konzentration zu berechnen müssen wir das Verhältnis aus der Anzahl der Ethanol-Moleküle zur Anzahl der Luft-\nmoleküle berechnen.", 20, 100);
//   textStyle(BOLD);
//   text("1. Anzahl Luftteilchen pro cm³", 20, 180);
//   textStyle(NORMAL);
//   fill(255);
//   stroke(0);
//   ellipse(310, 295, 250, 100);
//   ellipse(790, 295, 350, 100);
//
//   ellipse(550, 415, 550, 100);
//
//   rect(710, 658, 217, 40);
//
//
//   fill(0);
//   noStroke();
//   text("Um die Anzahl der Luftteilchen pro cm³ zu berechnen, brauchen wir die folgenden Angaben:", 20, 220);
//   translate(0, -30);
//   text("Dichte ρ = 0,0012 g/cm³", 200, 330);
//   text("molare Masse M = 28,949 g/mol", 650, 330);
//   text("Avogadro-Konstante N  = 6,022 ⋅ 10    Teilchen/mol", 330, 450);
//
//
//   textSize(14);
//   text(" 23", 646, 440);
//   text("A", 530, 455);
//
//   textSize(20);
//   text("Teilt man die Dichte ρ durch die molare Masse M, so erhält man die Molzahl pro cm³:", 20, 530);
//   text("Multipliziert man diesen Wert nun mit der Avogadro-Konstanten, so erhält man die Anzahl der Luftteilchen pro cm³:", 20, 660);
//   text("ρ", 404, 580);
//   text("0,0012 g/cm³", 465, 578);
//
//
//   text("M", 400, 608);
//   text("28,949 g/mol", 460, 608);
//   text("=", 425, 595);
//   text("= 0,0000415 mol/cm³", 595, 595);
//
//
//   text("0,0000415 mol/cm³  6,022 ⋅ 10    Teilchen/mol =  2,5 ⋅ 10   Teilchen/cm³", 285, 715);
//   textSize(14);
//   text(" 23                                                     19", 552, 705);
//
//   stroke(0);
//   line(398, 588, 418, 588);
//   line(450, 588, 585, 588);
//   berechnungEthanolDichte.hide();
//   berechnungEthanolMasse.hide();
//   berechnungEthanolVerhältnis.hide();
//   translate(0, 30);
// }
// let erg2 = "2.34e+23";
//
// function Folie119() {
//
//
//   textSize(30);
//   text("Berechnung der Ethanol-Konzentration ", 20, 50);
//   textSize(20);
//   textStyle(BOLD);
//   text("2. Anzahl Ethanol pro cm³", 20, 100);
//   textStyle(NORMAL);
//   fill(255);
//   stroke(0);
//   ellipse(310, 265, 250, 100);
//   ellipse(790, 265, 350, 100);
//   ellipse(550, 385, 550, 100);
//   fill(0);
//   noStroke();
//   text("Berechne nun analog die Anzahl der Ethanol-Teilchen pro cm³. Dazu stehen dir die folgenden Angaben zur Verfügung:", 20, 150);
//   translate(0, -60);
//   text("Dichte ρ = 0,7893 g/cm³", 200, 330);
//   text("molare Masse M = 46,07 g/mol", 650, 330);
//   text("Avogadro-Konstante N  = 6,022 ⋅ 10    Teilchen/mol", 330, 450);
//   textSize(14);
//   text("   23", 640, 440);
//   text("A", 530, 455);
//
//
//   textSize(20);
//
//   text("ρ", 404, 580);
//   text("               g/cm³", 465, 578);
//
//
//   text("M", 400, 608);
//   text("               g/mol", 460, 608);
//   text("=", 425, 595);
//   text("=              mol/cm³", 615, 595);
//
//
//   text("               mol/cm³  ⋅   6,022 ⋅ 10    Teilchen/mol =                     Teilchen/cm³", 285, 715);
//
//   textSize(14);
//   text("  23", 554, 705);
//
//   stroke(0);
//   line(398, 588, 418, 588);
//   line(450, 588, 595, 588);
//   berechnungEthanolDichte.show();
//   berechnungEthanolMasse.show();
//   berechnungEthanolVerhältnis.show();
//
//   let erg = "";
//
//   if (berechnungEthanolDichte.value().replace(',', '.') != "" && berechnungEthanolMasse.value().replace(',', '.') != "") {
//     erg = berechnungEthanolDichte.value().replace(',', '.') / berechnungEthanolMasse.value().replace(',', '.');
//     noStroke();
//     textSize(20);
//     text(nf(erg, 0, 3).replace(".", ","), 630, 595);
//   } else if (isNaN(erg)) {
//     erg = "";
//   }
//
//   if (berechnungEthanolVerhältnis.value().replace(',', '.') != "" && berechnungEthanolVerhältnis.value().replace(',', '.') != 0) {
//     erg2 = berechnungEthanolVerhältnis.value().replace(',', '.') * 6.022 * Math.pow(10, 23);
//     if (isNaN(erg2) == false) {
//       erg2 = erg2.toExponential().toString();
//       textSize(20);
//       noStroke();
//       text(nf(erg2, 0, 3).replace(".", ",") + " ⋅ 10", 718, 715);
//       textSize(14);
//       text(erg2.split("+")[1].replace(".", ","), 808, 705);
//     }
//   }
//   translate(0, 60);
//   länge.hide();
//   breite.hide();
//   höhe.hide();
// }
//
// function Folie120() {
//   berechnungEthanolDichte.hide();
//   berechnungEthanolMasse.hide();
//   berechnungEthanolVerhältnis.hide();
//
//   fill(255);
//   stroke(0);
//   ellipse(350, 213, 400, 70);
//   ellipse(840, 213, 470, 70);
//   fill(0);
//   noStroke();
//
//   textSize(30);
//   text("Berechnung der Ethanol-Konzentration ", 20, 50);
//   textSize(20);
//   textStyle(BOLD);
//   text("3. Absolute Anzahl an Teilchen", 20, 100);
//   textStyle(NORMAL);
//   text("Da wir nun die Dichte von Luft und Ethanol kennen, können wir die absolute Anzahl an Teilchen berechnen:", 20, 150);
//
//
//   text("Dichte Luft =  2,5 ⋅ 10   Teilchen/cm³", 200, 220);
//   text("Dichte Ethanol = ", 650, 220);
//   erg2 = erg2.toString();
//   text(nf(erg2, 0, 3).replace(".", ",") + " ⋅ 10    Teilchen/cm³", 808, 220);
//   textSize(14);
//   text(erg2.split("+")[1].replace(".", ","), 897, 210);
//   text("19", 389, 210);
//   textSize(20);
//
//   text("Miss dazu das Volumen der Gasmischanlage:", 20, 300);
//   text("Länge L:                        cm", 100, 370);
//   text("Breite B:                        cm", 475, 370);
//   text("Höhe H:                        cm", 850, 370);
//
//   länge.show();
//   breite.show();
//   höhe.show();
//
//   text("Das Volumen berechnet sich dann durch:", 20, 440);
//   if (länge.value() != "" && breite.value() != "" && höhe.value() != "" && isNaN(länge.value().replace(",", ".")) == false && isNaN(breite.value().replace(",", ".")) == false && isNaN(höhe.value().replace(",", ".")) == false) {
//     let a = länge.value().replace(",", ".") * breite.value().replace(",", ".") * höhe.value().replace(",", ".")
//     text("V [cm³] = " + länge.value() + " x " + breite.value() + " x " + höhe.value() + " = " + nf(a, 0, 2).replace(".", ",") + " cm³", 480, 500);
//   } else {
//     text("V = L x B x H", 520, 500);
//   }
// }
//



//
// function Folie111() {
//   textSize(30);
//   text("Materialien", 50, 50);
//   textSize(20);
//   text("Für diesen Versuch benötigst du folgende Materialien:", 20, 100);
//   text("→ einen Sensor (BME680)", 50, 200);
//
//   textSize(40);
//   text("[Hier werden dann die Bilder\neingeblendet]", 500, 300);
// }
//
//
//
// function Folie112() {
//   textSize(30);
//   text("Materialien", 50, 50);
//   textSize(20);
//   text("Für diesen Versuch benötigst du folgende Materialien:", 20, 100);
//   text("→ einen Sensor (BME680)", 50, 200);
//   text("→ einen Mikrocontroller mit USB-Kabel ", 50, 300);
//
//   textSize(40);
//   text("[Hier werden dann die Bilder\neingeblendet]", 500, 300);
// }
//
// function Folie113() {
//   textSize(30);
//   text("Materialien", 50, 50);
//   textSize(20);
//   text("Für diesen Versuch benötigst du folgende Materialien:", 20, 100);
//   text("→ einen Sensor (BME680)", 50, 200);
//   text("→ einen Mikrocontroller mit USB-Kabel", 50, 300);
//   text("→ Eine Messkammer", 50, 400);
//
//
//   textSize(40);
//   text("[Hier werden dann die Bilder\neingeblendet]", 500, 300);
// }
//
// function Folie114() {
//   textSize(30);
//   text("Materialien", 50, 50);
//   textSize(20);
//   text("Für diesen Versuch benötigst du folgende Materialien:", 20, 100);
//   text("→ einen Sensor (BME680)", 50, 200);
//   text("→ einen Mikrocontroller mit USB-Kabel.", 50, 300);
//   text("→ Eine Messkammer", 50, 400);
//   text("→ Jumper-Kabel", 50, 500);
//
//
//   textSize(40);
//   text("[Hier werden dann die Bilder\neingeblendet]", 500, 300);
// }
//
// function Folie115() {
//   textSize(30);
//   text("Materialien", 50, 50);
//   textSize(20);
//   text("Für diesen Versuch benötigst du folgende Materialien:", 20, 100);
//   text("→ einen Sensor (BME680)", 50, 200);
//   text("→ einen Mikrocontroller mit USB-Kabel", 50, 300);
//   text("→ Eine Messkammer", 50, 400);
//   text("→ Jumper-Kabel", 50, 500);
//   text("→ Eine Spritze", 50, 600);
//
//   textSize(40);
//   text("[Hier werden dann die Bilder\neingeblendet]", 500, 300);
// }
//
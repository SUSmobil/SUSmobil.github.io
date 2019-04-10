// function Folie101() {
//
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Verdünnt man das Blut (z.B. in Wasser), dann\nreduziert man auch den Alkoholgehalt.", 20, 150);
//
// }
//
// function Folie102() {
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Verdünnt man das Blut (z.B. in Wasser), dann\nreduziert man auch den Alkoholgehalt.", 20, 150);
//
//   image(Würfel_groß, 520, 80);
//   image(Würfel_klein, 260, 620);
//
//   text("Blut mit Alkoholgehalt\n      c = 1 Vol-‰", 280, 550);
//   text("V = 1 mm³", 380, 620);
//   strokeWeight(2);
//   stroke(0);
//   line(330, 650, 425, 630);
//   line(425, 630, 520, 650);
//
//
//
//
// }


let textX = -100;

function Folie103() {
  weiter.hide();

  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Gasvorratskammer mit Heizer\n            und Ventilator", 20, 550);
  text("Messkammer", 400, 550);
  text("Mikrocontroller", 1050, 655);
  text("Die Gasvorratskammer ist zu Beginn\n des Experiments schon vorbereitet.", textX, 110);
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(120, 80, 80, 5);

  if (textX < 46) {
    textX += 4;
  } else {
    weiter.show();
  }
  noStroke();
  fill(255, 0, 0);

}


function Folie104() {
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Gasvorratskammer mit Heizer\n            und Ventilator", 20, 550);
  text("Messkammer", 400, 550);
  text("Mikrocontroller", 1050, 655);
  text("Als erstes wird die Widerstands-Zeit-\nKurve für Luft aufgenommen (c  = 0).", 390, textX + 100);
  textSize(14);
  text("0", 665, textX + 130);
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(120, 80, 80, 5);

  if (textX < 46) {
    textX += 4;
    weiter.hide();
  } else {
    weiter.show();
  }
  noStroke();
  fill(255, 0, 0);

}

function Folie105() {
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Gasvorratskammer mit Heizer\n            und Ventilator", 20, 550);
  text("Messkammer", 400, 550);
  text("Mikrocontroller", 1050, 655);
  text("Als erstes wird die Widerstands-Zeit-\nKurve für Luft aufgenommen (c  = 0).", 390, 148);

  text("Der Mikrocontroller regelt\nhierfür die Temperatur\nund nimmt die Daten auf.", 690, 835 - textX);
  textSize(14);
  text("0", 665, 178);
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(120, 80, 80, 5);
  noStroke();
  fill(255, 0, 0);

  if (textX < 150) {
    textX += 4;
    weiter.hide();
  } else {
    weiter.show();
  }

}

function Folie106() {
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Gasvorratskammer mit Heizer\n            und Ventilator", 20, 550);
  text("Messkammer", 400, 550);
  text("Mikrocontroller", 1050, 655);
  text("Die erhaltene Kurve für c  = 0 wird in\n   der Kalibriersoftware dargestellt.", 400, textX + 20);
  textSize(14);
  text("0", 620, textX + 25);
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(120, 80, 80, 5);

  if (textX < 100) {
    textX += 2;
    weiter.hide();
  } else {
    weiter.show();
  }

  noStroke();
  fill(255, 0, 0);

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




function Folie107() {
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Gasvorratskammer mit Heizer\n            und Ventilator", 20, 550);
  text("Messkammer", 400, 550);
  text("Mikrocontroller", 1050, 655);
  text("Als nächstes wird die Ethanolkonzentration\n           in der Messkammer erhöht.", 390, textX);
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(120, 80, 80, 5);

  if (textX < 100) {
    textX += 2;
    weiter.hide();
  } else {
    weiter.show();
  }

  noStroke();
  fill(255, 0, 0);

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

function Folie108() {

  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Hierzu wird eine kleine Menge Ethanol-Luft-Gemisch aus der\n        Vorratskammer mit einer Spritze entnommen...", textX, 100);
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(120, 80, 80, 5);

  if (textX < 30) {
    textX += 2;
    weiter.hide();
  } else {
    Spritze(170, 550, 0);
    weiter.show();
  }

  noStroke();
  fill(255, 0, 0);

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

let spritzeX = 170
let spritzeY = 550;
let spritzeFuellung = 0;

let timerSpritze = 0;

function Folie109() {
  weiter.hide();
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Hierzu wird eine kleine Menge Ethanol-Luft-Gemisch aus der\n        Vorratskammer mit einer Spritze entnommen...", textX, 100);
  Gasvorratskammer2(255, 0, 0, hitze * 0.7);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(120, 80, 80, 5);
  Spritze(spritzeX, spritzeY, spritzeFuellung);

  if (timerSpritze < 70) {
    spritzeY -= 2;
  } else if (timerSpritze > 100 && timerSpritze < 150) {
    spritzeFuellung += 0.54;
  }

  if (timerSpritze < 200) {
    timerSpritze += 1;
  } else {
    weiter.show();
  }


  noStroke();
  fill(255, 0, 0);
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


let konzMesskammer2 = 20;

function Folie110() {

  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Hierzu wird eine kleine Menge Ethanol-Luft-Gemisch aus der\n        Vorratskammer mit einer Spritze entnommen...\n           ... und in die Messkammer überführt.", textX, 100);
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
  weiter.hide();

  if (timerSpritze > 20 && timerSpritze < 80) {
    spritzeY += 2;
  } else if (timerSpritze > 120 && timerSpritze < 274) {
    spritzeX += 2;
  } else if (timerSpritze > 315 && timerSpritze < 329) {
    spritzeY -= 2;
  } else if (timerSpritze > 350 && timerSpritze < 425) {
    spritzeFuellung -= 0.36;
    konzMesskammer2 += 1;
  } else if (timerSpritze > 450 && timerSpritze < 490) {
    spritzeY += 2;
  } else if (timerSpritze > 500) {
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

  timerSpritze += 1;

}
//
// function Folie103() {
//
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Verdünnt man das Blut (z.B. in Wasser), dann\nreduziert man auch den Alkoholgehalt.", 20, 150);
//   text("In der Bilderfolge wird das Blut 1000-fach\nverdünnt. Der Alkoholgehalt sinkt von 1 ‰\nauf 0,001 ‰. Nun gilt:\n\nAuf 1.000.000  (eine Million) Teilchen des\nGemisches entfällt im Mittel noch 1 Teilchen\nAlkohol. Der Alkoholgehalt beträgt c = 1 ppm.", 20, 220);
//
//   image(Würfel_groß, 520, 80);
//   image(Würfel_klein, 260, 620);
//
//   text("Blut mit Alkoholgehalt\n      c = 1 Vol-‰", 280, 550);
//   text("V = 1 mm³", 380, 620);
//   strokeWeight(2);
//   stroke(0);
//   line(330, 650, 425, 630);
//   line(425, 630, 520, 650);
//
//
//
//   Spritze(300, 300, 50);
//
// }
//
// function Folie104() {
//
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Verdünnt man das Blut (z.B. in Wasser), dann\nreduziert man auch den Alkoholgehalt.", 20, 150);
//   text("In der Bilderfolge wird das Blut 1000-fach\nverdünnt. Der Alkoholgehalt sinkt von 1 ‰\nauf 0,001 ‰. Nun gilt:\n\nAuf 1.000.000  (eine Million) Teilchen des\nGemisches entfällt im Mittel noch 1 Teilchen\nAlkohol. Der Alkoholgehalt beträgt c = 1 ppm.", 20, 220);
//   text('Die Abkürzung ppm bedeutet parts per\nmillion, also "Anteile pro Millionen"', 20, 420);
//   image(Würfel_groß, 520, 80);
//   image(Würfel_klein, 260, 620);
//
//   text("Blut mit Alkoholgehalt\n      c = 1 Vol-‰", 280, 550);
//   text("V = 1 mm³", 380, 620);
//   strokeWeight(2);
//   stroke(0);
//   line(330, 650, 425, 630);
//   line(425, 630, 520, 650);
//
//
//
//
//
// }
//
// function Folie105() {
//
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Das schon 1000-fach verdünnte Blut wird noch\neinmal 1000-fach verdünnt. Der Alkoholgehalt\nsinkt von 1 ppm auf 0,001 ppm. Also gilt:", 20, 180);
//
//   image(Würfel_groß_wenig_Konzentration, 520, 80);
//   image(Würfel_klein_wenig_Konzentration, 260, 620);
//
//   text("Blut mit Alkoholgehalt\n      c = 1 Vol-‰", 280, 550);
//   text("V = 1 mm³", 380, 620);
//
//   text("     Blut mit\nAlkoholgehalt\n  c = 1 Vol-‰", 50, 550);
//   strokeWeight(2);
//   stroke(0);
//   line(330, 650, 425, 630);
//   line(425, 630, 520, 650);
//
//
//
//
//
//
//
//
//
// }
//
// function Folie106() {
//
//
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Das schon 1000-fach verdünnte Blut wird noch\neinmal 1000-fach verdünnt. Der Alkoholgehalt\nsinkt von 1 ppm auf 0,001 ppm. Also gilt:", 20, 150);
//   text("Auf 1.000.000.000 (eine Milliarde) Teilchen des\nGemisches entfällt im Mittel noch 1\nTeilchen Alkohol. Der Alkoholgehalt beträgt c = 1 ppb.\n\nDie Abkürzung ppb bedeutet parts per billion, also\n„Anteile pro Milliarde“ (im Englischen\nheißt billion nicht Billion, sondern Milliarde)", 20, 250);
//   image(Würfel_groß_wenig_Konzentration, 520, 80);
//   image(Würfel_klein_wenig_Konzentration, 260, 620);
//
//   strokeWeight(2);
//   stroke(0);
//   fill(200, 0, 0);
//   rect(85, 680, 7, 7);
//
//   strokeWeight(1);
//   noStroke();
//   fill(0);
//
//   text("Blut mit Alkoholgehalt\n      c = 1 Vol-‰", 280, 550);
//   text("V = 1 mm³", 380, 620);
//
//   text("← V = 1 mm³ →", 110, 690);
//
//   text("     Blut mit\nAlkoholgehalt\n  c = 1 Vol-‰", 50, 550);
//   strokeWeight(2);
//   stroke(0);
//   line(330, 650, 425, 630);
//   line(425, 630, 520, 650);
// }
//
// function Folie107() {
//
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Die Tabelle zeigt eine Übersicht von vier vielfach verwendeten Einheiten in der Lesart als Volumenanteil.", 20, 150);
//
//   image(Einheiten, 100, 250);
//
//
//
//
//
// }
//
// function Folie108() {
//
//
//   textSize(50);
//   text("Aufgabe 5", 550, 60);
//
//   textSize(20);
//   text("Ozon ist ein Gas mit drei Sauerstoffatomen (O3). In Höhen von 20 bis 30 km gehört es zu den wichtigsten Gasen unserer\nAtmosphäre, da es die Lebewesen der Erde vor besonders energiereicher und damit gefährlicher Strahlung der Sonne schützt\n(Ozonschicht). Ozon ist jedoch giftig und kann in Bodennähe („Smog“) die Gesundheit beeinträchtigen (u.a. Lungenerkrankungen).\nUm Gefahren für die Menschen rechtzeitig abzuwenden, gibt es für Ozon eine sogenannte Informationsschwelle. Ab dieser\nKonzentrationen sind Medien verpflichtet, Verhaltensempfehlungen an die Bevölkerung herauszugeben (z.B. „Verlassen sie nicht\ndie Wohnung“ oder „Verzichten Sie möglichst auf das Auto“).", 40, 150);
//
//   text("Die Informationsschwelle für Ozon beträgt 180 µg/m3. Die Masse aller Ozonmoleküle innerhalb von einem Kubikmeter Luft\nbeträgt also 180 µg. Man kann zeigen, dass Ozonmoleküle mit einer Gesamtmasse von 180 µg unter Normalbedingungen\n(Temperatur 20 °C, Luftdruck 1013 hPa) ein Volumen von ca. 90 mm3 einnehmen würden.", 40, 320);
//
//
//   text("Berechne die Konzentration von Ozon für die Informationsschwelle 180 µg/m3 in Form eines Volumenanteils. Gib diesen\nVolumenanteil in den Einheiten Vol-%, Vol-‰, ppm und ppb an!", 40, 450);
//   fill(255);
//   stroke(0);
//   rect(50, 540, 1100, 50);
//   rect(50, 590, 1100, 50);
//   noStroke();
//   fill(0);
//   text("%                                            ‰                                                ppm                                                ppb", 150, 570);
//   prozent.show();
//   promille.show();
//   ppm.show();
//   ppb.show();
//
//
//
//   // textSize(30);
//   // text("Versuch: Ethanol-Kalibrierung", 20, 50);
//   //
//   // textSize(20);
//   // text("Du hast nun alle Grundlagen um selber eine Kalibrierung durchzuführen. Wir werden gemeinsam einen Halbleiter-Gassensor auf\nverschiedene Ethanol-Konzentrationen kalibrieren. Dazu werden wir zunächst eine Ethanol-Atmosphäre in einer Plexiglasbox er-\nzeugen.", 20, 100);
//   // text("Mit einer Spritze können wir dann eine definierte Konzentration auf den Sensor geben und uns die Reaktion anschauen. Diese wird\nsich für verschiedene Konzentrationen unterscheiden.", 20, 320);
//   //
//   // text("Deine Aufgabe wird es dann sein besondere Merkmale der Reaktionskurven für verschiedene Konzentration zu bestimmen, welche\nein neuronales Netz nutzt um ein mathematisches Modell zu erzeugen, das diese mit den Konzentrationen in Verbindung bringt.", 20, 550);
//
// }
//
// function Folie109() {
//   textSize(30);
//   text("Bekannte Konzentrationen erzeugen", 20, 50);
//   textSize(20);
//   text("Um den Sensor richtig kalibrieren zu können, müssen wir seine Reaktion für bekannte Reaktionen beobachten. Diese müssen wir\nnun zunächst herstellen.", 20, 100);
//   text("Dazu verwenden wir eine einfache 'Gasmischanlage'. Diese besteht aus:", 20, 200);
//   image(gma, 800, 160);
// }
//
//
// function Folie110() {
//   textSize(30);
//   text("Bekannte Konzentrationen erzeugen", 20, 50);
//   textSize(20);
//   text("Um den Sensor richtig kalibrieren zu können, müssen wir seine Reaktion für bekannte Reaktionen beobachten. Diese müssen wir\nnun zunächst herstellen.", 20, 100);
//   text("Dazu verwenden wir eine einfache 'Gasmischanlage'. Diese besteht aus:", 20, 200);
//   image(gma, 800, 160);
//
//   text("→ einer Plexiglasbox mit einer kleinen Öffnung", 100, 300);
//
//   noFill();
//   stroke(255, 0, 0);
//   strokeWeight(5);
//   ellipse(950, 300, 350, 250);
// }
//
//
//
// //
// // function Folie110() {
// //   textSize(30);
// //   text("Materialien", 50, 50);
// //   textSize(20);
// //   text("Für diesen Versuch benötigst du folgende Materialien:", 20, 100);
// // }
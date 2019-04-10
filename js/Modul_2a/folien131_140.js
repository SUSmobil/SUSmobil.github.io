function Folie131() {
  buttonAufgabe.hide();
  weiter.hide();
  textSize(20);
  text("Schritt 1:  Berechnung der Teilchenzahl an Luft\n                                 in der Gasvorratskammer.", 50, 50);
  text("Teilchen", 1065, 130);
  textSize(16);

  text("Luft,GVK", 157, 80);
  text("Luft,GVK", 620, 105);
  text("Luft,GVK           Luft,GVK       GVK", 712, 45);
  textStyle(ITALIC);
  textSize(20);
  text("N", 140, 75);
  let ergebnis = GasTeilchen[0].value().replace(',', '.') * GasTeilchen[2].value().replace(',', '.') * Math.pow(10, GasTeilchen[1].value().replace(',', '.'));

  text("N                = n              ⋅ V", 690, 40);
  text("N               =               ⋅ 10                 ⋅               ml   = " + nf(numberParts(ergebnis, 10).mantissa, 0, 2).replace('.', ',') + " ⋅ 10", 600, 100);


  textSize(14);
  textStyle(NORMAL);
  text("Teilchen", 855, 90);
  text("ml", 870, 105);

  text(nf(numberParts(ergebnis, 10).exponent, 0, 0).replace('.', ','), 1150, 90);

  for (let i = 0; i < GasTeilchen.length; i++) {
    GasTeilchen[i].hide();
  }

  GasTeilchen[0].show();
  GasTeilchen[1].show();
  GasTeilchen[2].show();
  GasTeilchen[1].style('font-size', '12px');
  GasTeilchen[0].position(730, 85);
  GasTeilchen[1].position(840, 75);
  GasTeilchen[2].position(940, 85);
  GasTeilchen[1].size(14, 14);
  stroke(0);
  line(855, 93, 910, 93);

  let schritt2 = false;
  let schritt3 = false;

  // if (GasTeilchen[0].value() == 2.55 || GasTeilchen[0].value() == "2,55") {
  //   if (GasTeilchen[1].value() == 19) {
  //     if (GasTeilchen[2].value() == 64000 || GasTeilchen[2].value() == "64.000") {
  //       schritt2 = true;
  //     }
  //   }
  // }
  //
  // if (schritt2) {
  noStroke();
  textSize(20);
  text("Schritt 2:  Berechnung der Teilchenzahl in zwei\n                Milliliter flüssigen Ethanols\n                in der Gasvorratskammer.", 50, 250);
  text("Teilchen", 1065, 350);
  let ergebnis2 = GasTeilchen[3].value().replace(',', '.') * GasTeilchen[5].value().replace(',', '.') * Math.pow(10, GasTeilchen[4].value().replace(',', '.'));


  textSize(16);
  text("Ethanol", 395, 283);
  text("Ethanol             Ethanol          Tropfen", 712, 260);
  text("Ethanol", 620, 325)
  textSize(20);
  textStyle(ITALIC);
  text("N", 380, 275);



  text("N                = n              ⋅ V", 690, 250);
  text("N               =               ⋅ 10                 ⋅               ml   = " + nf(numberParts(ergebnis2, 10).mantissa, 0, 2).replace('.', ',') + " ⋅ 10", 600, 310);
  textSize(14);
  text(nf(numberParts(ergebnis2, 10).exponent, 0, 0).replace('.', ','), 1150, 300);



  GasTeilchen[3].show();
  GasTeilchen[4].show();
  GasTeilchen[5].show();
  GasTeilchen[4].style('font-size', '12px');
  GasTeilchen[3].position(730, 295);
  GasTeilchen[4].position(840, 285);
  GasTeilchen[5].position(940, 295);
  GasTeilchen[4].size(14, 14);


  textSize(14);
  textStyle(NORMAL);
  text("Teilchen", 855, 300);
  text("ml", 870, 315);
  stroke(0);
  line(855, 303, 910, 303);




  // if (GasTeilchen[3].value() == 1.30 || GasTeilchen[3].value() == "1,30" || GasTeilchen[3].value() == "1,3") {
  //   if (GasTeilchen[4].value() == 22) {
  //     if (GasTeilchen[5].value() == 1 || GasTeilchen[5].value() == "1,0") {
  //       schritt3 = true;
  //     }
  //   }
  // }
  // }

  // if (schritt3) {
  translate(0, 50);
  noStroke();
  textSize(20);
  text("Schritt 3:  Berechnung der Konzentration c\n                verdampften Ethanols in der Gas-\n                vorratskammer und Angabe in Vol-‰\n                und ppm.", 50, 450);

  translate(-140, 0);
  let ergebnis3 = ergebnis2 / (ergebnis + ergebnis2);
  if (isNaN(ergebnis3)) {
    ergebnis3 = 0;
  }

  console.log(ergebnis, ergebnis2, ergebnis3)

  text("= " + nf(numberParts(ergebnis3, 10).mantissa, 0, 2).replace('.', ',') + "⋅ 10      =                  Vol-‰  =                    ppm", 750, 550);

  textStyle(ITALIC);
  text("c   =                                   =", 670, 450);
  text("c   ", 720, 550);
  text("")
  textSize(18);
  text("N                                                  " + nf(numberParts(ergebnis2, 10).mantissa, 0, 2).replace('.', ',') + " ⋅ 10     Teilchen", 760, 430);
  text("N               + N                       (" + nf(numberParts(ergebnis, 10).mantissa, 0, 2).replace('.', ',') + " ⋅ 10      + " + nf(numberParts(ergebnis2, 10).mantissa, 0, 2).replace('.', ',') + " ⋅ 10    ) Teilchen", 727, 470);
  textStyle(NORMAL);
  textSize(14);
  text(nf(numberParts(ergebnis2, 10).exponent, 0, 0).replace('.', ','), 1095, 420);

  text("Ethanol", 775, 440);
  text("Luft,GVK", 745, 480);
  text("Ethanol", 845, 480);
  text(nf(numberParts(ergebnis, 10).exponent, 0, 0).replace('.', ','), 1035, 460);
  text(nf(numberParts(ergebnis2, 10).exponent, 0, 0).replace('.', ','), 1150, 460);
  text(nf(numberParts(ergebnis3, 10).exponent, 0, 0).replace('.', ','), 840, 535);

  GasTeilchen[6].show();
  GasTeilchen[6].position(780, 585);
  GasTeilchen[7].show();
  GasTeilchen[7].position(960, 585);


  stroke(0);
  line(720, 443, 893, 443);
  line(930, 443, 1280, 443);
  translate(140, 0);
  translate(0, -50);
  // }

  if (GasTeilchen[7].value() == 12700 || GasTeilchen[7].value() == "12700") {
    weiter.show();
  }


}


function numberParts(x, b) {
  var exp = 0
  var sgn = 0
  if (x === 0) return {
    sign: 0,
    mantissa: 0,
    exponent: 0
  }
  if (x < 0) sgn = 1, x = -x
  while (x > b) x /= b, exp++
  while (x < 1) x *= b, exp--
  return {
    sign: sgn,
    mantissa: x,
    exponent: exp
  }
}

function getNumberParts(x) {
  var float = new Float64Array(1),
    bytes = new Uint8Array(float.buffer);

  float[0] = x;

  var sign = bytes[7] >> 7,
    exponent = ((bytes[7] & 0x7f) << 4 | bytes[6] >> 4) - 0x3ff;

  bytes[7] = 0x3f;
  bytes[6] |= 0xf0;

  return {
    sign: sign,
    exponent: exponent,
    mantissa: float[0],
  }
}


function Folie132() {
  textSize(20);

  weiter.hide();

  for (let i = 0; i < GasTeilchen.length; i++) {
    GasTeilchen[i].hide();
  }

  GasTeilchen[8].show();
  GasTeilchen[8].position(785, 385);
  GasTeilchen[9].show();
  GasTeilchen[9].position(1030, 385);
  GasTeilchen[10].show();
  GasTeilchen[10].position(890, 375);
  GasTeilchen[10].size(15, 15);
  GasTeilchen[10].style('font-size', '12px');



  text("Zur Berechnung der Konzentration c   braucht man nicht erst die einzelnen Teilchenzahlen in der Spritze und in der Messkammer\nberechnen. Das Ethanol-Luft-Gemisch aus der kleinen Spritze kann sich nun nämlich in das viel größere Volumen der Mess-\nkammer verteilen. Somit folgt für die Verdünnung von c   nach c   einfach...", 20, 50);


  text("Schritt 4:", 20, 250);
  text("Berechnung der Konzentration c    des\nverdampften Ethanols in der\nMesskammer und Angabe in Vol-‰\nund ppm.", 120, 250);


  text("c   = c  ⋅                           = 1,27 ⋅ 10   ⋅ ", 600, 280);
  text("V                                                         1 ml", 705, 260);
  text("V      + V                                        1.250 ml + 1 ml", 680, 290);


  stroke(0);
  line(675, 270, 810, 270);
  line(960, 270, 1140, 270);

  textSize(14);
  noStroke();
  text("Spritze", 715, 265);
  text("MK            Spritze", 693, 300);
  text("1         0", 610, 285);
  text("-2", 920, 268);
  text("-5", 728, 390);

  textSize(20);

  text("c   ≈ 1,00 ⋅ 10    =                ⋅ 10         Vol-‰ =                    ppm", 600, 400);

  if (GasTeilchen[8].value() == "1" || GasTeilchen[8].value() == "1.00" || GasTeilchen[8].value() == "1,00") {
    if (GasTeilchen[10].value() == "-2") {
      if (GasTeilchen[9].value() == 10 || GasTeilchen[9].value() == "10,00" || GasTeilchen[9].value() == "10.00") {
        weiter.show();
      }

    }
  }


  textSize(14);
  text("1", 342, 57);
  text("1", 611, 408);
  text("1", 410, 260)
  text("0                 1", 510, 107);

}

function Folie133() {

  for (let i = 0; i < GasTeilchen.length; i++) {
    GasTeilchen[i].hide();
  }


  textSize(30);
  textStyle(BOLD);
  text("Ergebnis", 20, 50);
  textStyle(NORMAL);
  textSize(20);
  text("Spritzt man 1 ml des Ethanol-Luft-Gemisches aus der Gasvorratskammer in die Messkammer, so beträgt die Ethanolkonzentration\nin der Messkammer c  = 10 ppm.", 20, 100);
  text("Spritzt man 2 ml, ein so beträgt die Ethanolkonzentration in der Messkammer 2 c  = 20 ppm usw. Die eingespritzten Mengen an\nEthanol-Luft-Gemisch und die Ethanolkonzentration in der Messkammer sind näherungsweise proportional zu einander. Im Dia-\ngramm unten wird dieser Sachverhalt gezeigt.", 20, 180);


  text("Ethanol-Konzentration in Messkammer [ppm]", 40, 280);
  text("Ethanol-Luft-Gemisch\nin Messkammer [ml]", 900, 700);
  text("1                                  2                                  3", 395, 680);

  text("30", 160, 385.5);
  text("20", 160, 475);
  text("10", 160, 562.5);


  textSize(14);
  text("1", 210, 135)
  text("1", 735, 185);
  stroke(0);
  line(200, 300, 200, 655);
  line(195, 650, 1000, 650);


  line(195, 305, 200, 300);
  line(200, 300, 205, 305);


  line(995, 645, 1000, 650);
  line(1000, 650, 995, 655);


  stroke(0, 0, 255);
  line(200, 650, 1000, 300);


  line(200, 562.5, 400, 562.5);
  line(400, 562.5, 400, 650);
  line(200, 475, 600, 475);
  line(600, 475.5, 600, 650);
  line(200, 387.5, 800, 387.5);
  line(800, 387.5, 800, 650);
}

function Folie134() {
  textSize(50);
  text("Experimentelle Basis", 400, 300);
  textSize(40);
  text("Bedienung der Kalibriersoftware", 352, 450);
  weiter.show();
}

function Folie135() { //140
  textSize(30);
  textStyle(BOLD);
  text("Erklärung der Software", 20, 50);
  textSize(20);
  textStyle(NORMAL);
  text("Sage deinem Betreuer nun Bescheid, damit er die Kalibriersoftware für dich öffnet. Um sie bedienen zu können, musst du den\nMikrocontroller über das USB-Kabel mit dem PC verbinden.\nWenn das Programm geöffnet ist, absolviere zunächst das Tutorial. Anschließend nimmst du Merkmale für verschiedene Konzen-\ntrationen auf. Danach wirst du damit ein mathematisches Modell erstellen, das Vorhersagen für Konzentrationen gibt. ", 20, 100);

  image(software, 420, 200);

  weiter.hide();
}

function Folie136() {}

function Folie137() {}

function Folie138() {}

function Folie139() {}

function Folie140() {}






// function Folie131() {
//   textSize(30);
//   text("Mikrocontroller", 20, 50);
//   textSize(20);
//   text("Hier siehst du einen Vergleich zwischen Mensch und Mikrocontroller:", 20, 100);
//
//   fill(255, 100);
//   strokeWeight(2);
//   stroke(0);
//   rect(100, 150, 1000, 500);
//   rect(100, 150, 1000, 70);
//   rect(100, 150, 200, 500);
//   rect(300, 150, 400, 500);
//   strokeWeight(1);
//   rect(100, 315, 1000, 115);
//   rect(100, 430, 1000, 115);
//
//
//   noStroke();
//   fill(0);
//   textSize(30);
//   text("Mensch", 450, 190);
//   text("Mikrocontroller", 800, 190);
//
//
//   text("Geschwin-\n  digkeit", 130, 260);
//   text("Genauigkeit", 120, 385);
//   text("Reproduzier-\n    barkeit", 115, 485);
//   text("Durchhalte-\n vermögen", 120, 590);
//
//   textSize(22);
//   text("wenige Messwerte pro Minute", 340, 275);
//   text(" je nach Taktrate bis zu mehreren\nTausend Messwerten pro Sekunde", 730, 260);
//
// }
//
//
//
// function Folie132() {
//   textSize(30);
//   text("Mikrocontroller", 20, 50);
//   textSize(20);
//   text("Hier siehst du einen Vergleich zwischen Mensch und Mikrocontroller:", 20, 100);
//
//   fill(255, 100);
//   strokeWeight(2);
//   stroke(0);
//   rect(100, 150, 1000, 500);
//   rect(100, 150, 1000, 70);
//   rect(100, 150, 200, 500);
//   rect(300, 150, 400, 500);
//   strokeWeight(1);
//   rect(100, 315, 1000, 115);
//   rect(100, 430, 1000, 115);
//
//
//   noStroke();
//   fill(0);
//   textSize(30);
//   text("Mensch", 450, 190);
//   text("Mikrocontroller", 800, 190);
//
//
//   text("Geschwin-\n  digkeit", 130, 260);
//   text("Genauigkeit", 120, 385);
//   text("Reproduzier-\n    barkeit", 115, 485);
//   text("Durchhalte-\n vermögen", 120, 590);
//
//   textSize(22);
//   text("wenige Messwerte pro Minute", 340, 275);
//   text(" je nach Taktrate bis zu mehreren\nTausend Messwerten pro Sekunde", 730, 260);
//
//
//   text("ungenau", 450, 380);
//   text("sehr genau", 840, 380);
//
//
// }
//
// function Folie133() {
//   textSize(30);
//   text("Mikrocontroller", 20, 50);
//   textSize(20);
//   text("Hier siehst du einen Vergleich zwischen Mensch und Mikrocontroller:", 20, 100);
//
//   fill(255, 100);
//   strokeWeight(2);
//   stroke(0);
//   rect(100, 150, 1000, 500);
//   rect(100, 150, 1000, 70);
//   rect(100, 150, 200, 500);
//   rect(300, 150, 400, 500);
//   strokeWeight(1);
//   rect(100, 315, 1000, 115);
//   rect(100, 430, 1000, 115);
//
//
//   noStroke();
//   fill(0);
//   textSize(30);
//   text("Mensch", 450, 190);
//   text("Mikrocontroller", 800, 190);
//
//
//   text("Geschwin-\n  digkeit", 130, 260);
//   text("Genauigkeit", 120, 385);
//   text("Reproduzier-\n    barkeit", 115, 485);
//   text("Durchhalte-\n vermögen", 120, 590);
//
//   textSize(22);
//   text("wenige Messwerte pro Minute", 340, 275);
//   text(" je nach Taktrate bis zu mehreren\nTausend Messwerten pro Sekunde", 730, 260);
//
//
//   text("ungenau", 450, 380);
//   text("sehr genau", 840, 380);
//
//   text("ungenau", 450, 500);
//   text("exakt", 870, 500);
// }
//
// function Folie134() {
//   textSize(30);
//   text("Mikrocontroller", 20, 50);
//   textSize(20);
//   text("Hier siehst du einen Vergleich zwischen Mensch und Mikrocontroller:", 20, 100);
//
//   fill(255, 100);
//   strokeWeight(2);
//   stroke(0);
//   rect(100, 150, 1000, 500);
//   rect(100, 150, 1000, 70);
//   rect(100, 150, 200, 500);
//   rect(300, 150, 400, 500);
//   strokeWeight(1);
//   rect(100, 315, 1000, 115);
//   rect(100, 430, 1000, 115);
//
//
//   noStroke();
//   fill(0);
//   textSize(30);
//   text("Mensch", 450, 190);
//   text("Mikrocontroller", 800, 190);
//
//
//   text("Geschwin-\n  digkeit", 130, 260);
//   text("Genauigkeit", 120, 385);
//   text("Reproduzier-\n    barkeit", 115, 485);
//   text("Durchhalte-\n vermögen", 120, 590);
//
//   textSize(22);
//   text("wenige Messwerte pro Minute", 340, 275);
//   text(" je nach Taktrate bis zu mehreren\nTausend Messwerten pro Sekunde", 730, 260);
//
//
//   text("ungenau", 450, 380);
//   text("sehr genau", 840, 380);
//
//   text("ungenau", 450, 500);
//   text("exakt", 870, 500);
//
//
//   text("wenige Stunden", 420, 610);
//   text("unbegrenzt", 840, 610);
// }
//
// function Folie135() {
//   textSize(30);
//   text("Temperaturzyklus", 20, 50);
//   textSize(20);
//   text("Das Programm, das den Mikrocontroller steuert ist bereits aufgespielt. Sobald du den Sensor mit dem Mikrocontroller verbindest,\nwird dieser geheizt und ausgelesen.", 20, 100);
//   text("Die Daten können dann mit einem Messprogramm ausgelesen werden. Mit einem solchen wirst du gleich arbeiten. Doch lass uns\nzunächst einmal schauen auf welche Temperaturen der Sensor geheizt wird.", 20, 175);
//
// }
//
// function Folie136() {
//   textSize(30);
//   text("Temperaturzyklus", 20, 50);
//   textSize(20);
//   text("Das Programm, das den Mikrocontroller steuert ist bereits aufgespielt. Sobald du den Sensor mit dem Mikrocontroller verbindest,\nwird dieser geheizt und ausgelesen.", 20, 100);
//   text("Die Daten können dann mit einem Messprogramm ausgelesen werden. Mit einem solchen wirst du gleich arbeiten. Doch lass uns\nzunächst einmal schauen auf welche Temperaturen der Sensor geheizt wird.", 20, 175);
//
//
//   text("Wie du im Theorieteil gesehen hast, zeigt der Sensor bei Temperatursprüngen, abhängig vom Gasangebot, ein charakteris-\ntisches Verhalten:", 20, 250);
//   //("Das bedeutet es werden 5 Messpunkte bei einer Sensortemperatur von 450°C, 20 Messpunkte bei einer Sensortemperatur von\n200°C, usw. aufgenommen. Ein Messzyklus dauert in etwa 7 Sekunden.", 20, 620);
//   noFill();
//
//   fill(255);
//   stroke(0);
//   strokeWeight(1);
//   rect(350, 300, 600, 310);
//
//   image(Kurven_Konzentration1, 400, 301);
//   noStroke();
//   fill(0);
//   text("Temperatur-\n  sprung", 420, 350);
//   stroke(0);
//   line(480, 385, 530, 420);
//   strokeWeight(2);
//   line(400, 310, 400, 550);
//   line(400, 550, 900, 550);
//
//
//
//   //Pfeilspitzen
//   line(395, 315, 400, 310);
//   line(400, 310, 405, 315);
//   line(895, 545, 900, 550);
//   line(900, 550, 895, 555)
//
//   strokeWeight(1);
//   noStroke();
//   fill(0);
//   textSize(20);
//   text("Zeit", 620, 590);
//
//
//   translate(width / 2, height / 2);
//   rotate(-PI / 2);
//   text("Sensorwiderstand [kΩ]", -160, -320);
//
//
// }
//
// function Folie137() {
//   textSize(30);
//   text("Temperaturzyklus", 20, 50);
//   textSize(20);
//   text("Das Programm, das den Mikrocontroller steuert ist bereits aufgespielt. Sobald du den Sensor mit dem Mikrocontroller verbindest,\nwird dieser geheizt und ausgelesen.", 20, 100);
//   text("Die Daten können dann mit einem Messprogramm ausgelesen werden. Mit einem solchen wirst du gleich arbeiten. Doch lass uns\nzunächst einmal schauen auf welche Temperaturen der Sensor geheizt wird.", 20, 175);
//   text("Wie du im Theorieteil gesehen hast, zeigt der Sensor bei Temperatursprüngen, abhängig vom Gasangebot, ein charakteris-\ntisches Verhalten:", 20, 250);
//   text("Dieses Verhalten werden wir nutzen, indem wir den Sensor auf unterschiedliche Temperaturen heizen, und Temperatursprünge\neinbauen.", 20, 650);
//
//   noFill();
//
//   fill(255);
//   stroke(0);
//   strokeWeight(1);
//   rect(350, 300, 600, 310);
//
//   image(Kurven_Konzentration1, 400, 301);
//   noStroke();
//   fill(0);
//   text("Temperatur-\n  sprung", 420, 350);
//   stroke(0);
//   line(480, 385, 530, 420);
//   strokeWeight(2);
//   line(400, 310, 400, 550);
//   line(400, 550, 900, 550);
//
//
//
//   //Pfeilspitzen
//   line(395, 315, 400, 310);
//   line(400, 310, 405, 315);
//   line(895, 545, 900, 550);
//   line(900, 550, 895, 555)
//
//   strokeWeight(1);
//   noStroke();
//   fill(0);
//   textSize(20);
//   text("Zeit", 620, 590);
//
//
//   translate(width / 2, height / 2);
//   rotate(-PI / 2);
//   text("Sensorwiderstand [kΩ]", -160, -320);
//
// }
//
// function Folie138() {
//   textSize(30);
//   text("Temperaturzyklus", 20, 50);
//   textSize(20);
//   text("Das Ganze betreiben wir zyklisch. Das bedeutet, der Sensor wird abwechselnd immer wieder auf eine hohe, und dann auf eine\nniedrige Temperatur geheizt.", 20, 100);
//
// }
//
// function Folie139() {
//   textSize(30);
//   text("Temperaturzyklus", 20, 50);
//   textSize(20);
//   text("Das Ganze betreiben wir zyklisch. Das bedeutet, der Sensor wird abwechselnd immer wieder auf eine hohe, und dann auf eine\nniedrige Temperatur geheizt.", 20, 100);
//   text("Für die Kalibrierung verwenden wir einen Zyklus, der alle 15 Sekunden wiederholt wird:", 20, 160);
//   fill(255);
//   stroke(0);
//   rect(170, 200, 860, 350);
//
//   line(250, 220, 250, 505);
//   line(245, 500, 950, 500);
//
//
//   strokeWeight(1);
//
//   for (let i = 0; i < 10; i++) {
//     stroke(200);
//     line(250, 220 + 28 * i, 950, 220 + 28 * i);
//     line(320 + 70 * i, 220, 320 + 70 * i, 500);
//   }
//
//
//   strokeWeight(4);
//   stroke(255, 0, 0);
//
//   line(250, 248, 320, 248);
//   line(320, 388, 600, 388);
//   line(600, 248, 670, 248);
//   line(670, 360, 950, 360);
//
//
//   strokeWeight(1);
//   noStroke();
//   fill(0);
//
//   text("450°C", 260, 239);
//   text("450°C", 610, 239);
//
//   text("200°C", 440, 380);
//   text("250°C", 790, 350);
//
//   text("Zeit [s]", 555, 540);
//   for (let i = 0; i < 6; i++) {
//     text(3 * i, 240 + 140 * i, 523);
//     text(500 - 100 * i, 210, 225 + 56 * i)
//   }
//
//
//   translate(width / 2, height / 2);
//   rotate(-PI / 2);
//   text("Temperatur [°C]", -60, -505);
// }
//
// function Folie140() {
//   textSize(30);
//   text("Temperaturzyklus", 20, 50);
//   textSize(20);
//   text("Das Ganze betreiben wir zyklisch. Das bedeutet, der Sensor wird abwechselnd immer wieder auf eine hohe, und dann auf eine\nniedrige Temperatur geheizt.", 20, 100);
//   text("Für die Kalibrierung verwenden wir einen Zyklus, der alle 15 Sekunden wiederholt wird:", 20, 160);
//   text("Doch warum gerade dieser Temperaturzyklus?", 400, 610);
//   fill(255);
//   stroke(0);
//   rect(170, 200, 860, 350);
//
//   line(250, 220, 250, 505);
//   line(245, 500, 950, 500);
//
//
//   strokeWeight(1);
//
//   for (let i = 0; i < 10; i++) {
//     stroke(200);
//     line(250, 220 + 28 * i, 950, 220 + 28 * i);
//     line(320 + 70 * i, 220, 320 + 70 * i, 500);
//   }
//
//
//   strokeWeight(4);
//   stroke(255, 0, 0);
//
//   line(250, 248, 320, 248);
//   line(320, 388, 600, 388);
//   line(600, 248, 670, 248);
//   line(670, 360, 950, 360);
//
//
//   strokeWeight(1);
//   noStroke();
//   fill(0);
//
//   text("450°C", 260, 239);
//   text("450°C", 610, 239);
//
//   text("200°C", 440, 380);
//   text("250°C", 790, 350);
//
//   text("Zeit [s]", 555, 540);
//   for (let i = 0; i < 6; i++) {
//     text(3 * i, 240 + 140 * i, 523);
//     text(500 - 100 * i, 210, 225 + 56 * i)
//   }
//
//
//   translate(width / 2, height / 2);
//   rotate(-PI / 2);
//   text("Temperatur [°C]", -60, -505);
// }
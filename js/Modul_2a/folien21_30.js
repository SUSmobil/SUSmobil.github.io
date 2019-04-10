function Folie21() { //Folie 25
  textSize(20);
  push();
  textStyle(BOLD);
  text("Aufgabe 1a)", 20, 50);
  text("Begründe deine Antwort und gebe sie ab!", 20, 390);
  pop();
  text("Ordnet die Temperaturen der drei Flüssigkeiten ϑ   , ϑ   , \nϑ  nach ihrer Größe. Schreibt die Indizes {1,2,3} in die Un-\ngleichungskette.\n\nHinweis: Am roten Punkt könnt ihr das Thermometer\nverschieben.", 20, 100);
  textSize(14);
  text("1", 455, 105);
  text("2", 495, 105);
  text("3", 30, 132);


  //Wassergläser
  push();
  noStroke();
  fill(200, 200, 255);
  rect(700, 400, 100, 120);
  rect(850, 400, 100, 120);
  rect(1000, 400, 100, 120);
  stroke(0);
  line(700, 380, 700, 520);
  line(700, 520, 800, 520);
  line(800, 520, 800, 380);
  translate(150, 0);
  line(700, 380, 700, 520);
  line(700, 520, 800, 520);
  line(800, 520, 800, 380);
  translate(150, 0);
  line(700, 380, 700, 520);
  line(700, 520, 800, 520);
  line(800, 520, 800, 380);
  pop();


  //Thermometer
  stroke(0);
  rect(xTherm, yTherm - 50, 50, 350);
  fill(0, 0, 255);
  ellipse(xTherm + 25, yTherm + 320, 35, 35);
  noStroke();
  rect(xTherm + 15, yTherm + 320, 20, 300 - temperatur);
  fill(255, 0, 0);
  ellipse(xTherm + 25, yTherm + 320, 8, 8);
  if (temp) {
    xTherm = mouseX - 25;
    yTherm = mouseY - 320;
  }

  //Zemperatursäule steigt oder fällt
  if (xTherm > 675 && xTherm < 775 && yTherm > 100 && yTherm < 300 && temperatur < 504) {
    let a = Math.abs(temperatur - 504);
    temperatur += a / 70;
  }
  if (xTherm > 675 && xTherm < 775 && yTherm > 100 && yTherm < 300 && temperatur >= 504) {
    let a = Math.abs(temperatur - 504);
    temperatur -= a / 70;
  }

  if (xTherm > 825 && xTherm < 925 && yTherm > 100 && yTherm < 300 && temperatur < 405) {
    let a = Math.abs(temperatur - 405);
    temperatur += a / 70;
  }
  if (xTherm > 825 && xTherm < 925 && yTherm > 100 && yTherm < 300 && temperatur >= 405) {
    let a = Math.abs(temperatur - 405);
    temperatur -= a / 70;
  }
  if (xTherm > 975 && xTherm < 1075 && yTherm > 100 && yTherm < 300 && temperatur < 575) {
    let a = Math.abs(temperatur - 575);
    temperatur += a / 70;
  }
  if (xTherm > 975 && xTherm < 1075 && yTherm > 100 && yTherm < 300 && temperatur >= 575) {
    let a = Math.abs(temperatur - 575);
    temperatur -= a / 70;
  }

  //Zimmertemperatur
  if (xTherm < 675 && temperatur < 420) {
    let a = Math.abs(temperatur - 420);
    temperatur += a / 70;
  }
  if (xTherm < 675 && temperatur >= 420) {
    let a = Math.abs(temperatur - 420);
    temperatur -= a / 70;
  }
  if (xTherm > 775 && xTherm < 825 && temperatur < 420) {
    let a = Math.abs(temperatur - 420);
    temperatur += a / 70;
  }
  if (xTherm > 775 && xTherm < 825 && temperatur >= 420) {
    let a = Math.abs(temperatur - 420);
    temperatur -= a / 70;
  }
  if (xTherm > 925 && xTherm < 975 && temperatur < 420) {
    let a = Math.abs(temperatur - 420);
    temperatur += a / 70;
  }
  if (xTherm > 925 && xTherm < 975 && temperatur >= 420) {
    let a = Math.abs(temperatur - 420);
    temperatur -= a / 70;
  }
  if (xTherm > 1075 && temperatur < 420) {
    let a = Math.abs(temperatur - 420);
    temperatur += a / 70;
  }



  for (let i = 0; i < tempOrdnen.length; i++) {
    tempOrdnen[i].show();
  }
  textSize(30);
  noStroke();
  fill(0);
  text("ϑ", 770, 510);
  text("ϑ", 920, 510);
  text("ϑ", 1070, 510);
  textSize(20);
  text("1", 785, 520);
  text("2", 935, 520);
  text("3", 1085, 520);
  textSize(40);
  text("ϑ   <  ϑ   <  ϑ", 120, 300);
  fragenTextfeld[1].show();

  if (abgeschickt == false) {
    textSize(20);
    fill(255, 0, 0);
    text("Überlege noch einmal!", 165, 600);
  } else if (abgeschickt == true) {
    textSize(20);
    fill(0);
    text("Antwort:\n\nMan kann die Temperatur an der Höhe der Flüssigkeitssäule ablesen, da sich die Flüssigkeit mit steigender Temperatur ausdehnt.\nJe höher die Flüssigkeitssäule, desto größer ist die Temperatur.", 20, 600);
  }
}

let temp = false;

function Folie22() { //26

  textSize(20);
  text("Einen Wert der Temperatur können wir so noch nicht angeben. Hierzu müssten wir wissen, welche Flüssigkeitshöhe", 20, 50);
  text("sich zu welcher Temperatur    einstellt. Eine solche                                 ist beim Beispiel des Flüssigkeitsthermometers\ndie Grundlage für dessen Kalibrierung. Dieser Zusammenhang ist (näherungsweise)            . ", 20, 75);
  textStyle(ITALIC);
  text("h", 1055, 50);
  text("ϑ", 268, 75);
  textStyle(BOLD);
  text("Zuordnung h → ϑ", 478, 75);
  text("linear", 770, 100);

  text("Aufgabe", 20, 150);
  textStyle(NORMAL);
  text("Laut Definition der Celsius-Skala hat Eiswasser eine\nTemperatur von 0°C.\nSiedendes Wasser hat eine Temperatur von 100°C.\nDabei ist die Ausdehnung der Flüssigkeitssäule propor-\ntional zur Temperatur.\n\nBeschrifte das Thermometer!", 20, 200);
  text("Eiswasser", 705, 650);
  text("siedendes\n  Wasser", 1005, 650);



  //nEiswasser
  fill(100, 100, 255);
  rect(700, 500, 100, 100);
  fill(255, 100, 100);
  rect(1000, 500, 100, 100);
  stroke(0);
  line(700, 470, 700, 600);
  line(700, 600, 800, 600);
  line(800, 600, 800, 470);

  line(1000, 470, 1000, 600);
  line(1000, 600, 1100, 600);
  line(1100, 600, 1100, 470)



  fill(255);
  //Thermometer
  stroke(0);
  rect(xTherm, yTherm - 50, 50, 350);
  fill(0, 0, 255);
  ellipse(xTherm + 25, yTherm + 320, 35, 35);
  noStroke();

  rect(xTherm + 15, yTherm + 320, 20, 300 - temperatur);
  fill(255, 0, 0);
  ellipse(xTherm + 25, yTherm + 320, 8, 8);
  if (temp) {
    xTherm = mouseX - 25;
    yTherm = mouseY - 320;
  }
  //im Eiswasser
  if (xTherm == 725) {
    if (temperatur < 386) {
      temperatur += Math.abs((temperatur - 386)) / 70;
    }
    if (temperatur >= 386) {
      temperatur -= Math.abs((temperatur - 386)) / 70;
    }
    stroke(100);
    line(750, yTherm + 620 - temperatur, 900, yTherm + 620 - temperatur);
  }
  if (xTherm == 1025) {
    if (temperatur < 585) {
      temperatur += Math.abs((temperatur - 585)) / 70;
    }
    if (temperatur >= 585) {
      temperatur -= Math.abs((temperatur - 585)) / 70;
    }
    stroke(100);
    line(1050, yTherm + 620 - temperatur, 900, yTherm + 620 - temperatur);
  }

  if (xTherm != 725 && xTherm != 1025) {
    if (temperatur < 420) {
      temperatur += Math.abs((temperatur - 420)) / 70;
    } else {
      temperatur -= Math.abs((temperatur - 420)) / 70;
    }
  }



  //Höhe der Flüssigkeitssäule
  stroke(0);
  line(900, 200, 900, 535);
  for (let i = 0; i < 7; i++) {
    strokeWeight(1.5);
    line(890, 220 + 50 * i, 910, 220 + 50 * i);
    strokeWeight(1);
    if (i != 6) {
      for (let j = 0; j < 5; j++) {
        line(895, 220 + 50 * i + 10 * j, 905, 220 + 50 * i + 10 * j)
      }
    }
  }
  noStroke();
  textSize(20);
  fill(0);
  text("h [cm]", 830, 190);
  text("ϑ [°C]", 920, 190);
  for (let i = 0; i < 7; i++) {
    text(33 - 5 * i, 840, 228 + 50 * i);
  }

  //Beschriftungen
  for (let i = 0; i < 7; i++) {
    thermometerBeschriftung[i].show();
  }
  if (thermometerBeschriftung[0].value() == "125" && thermometerBeschriftung[1].value() == "100" && thermometerBeschriftung[2].value() == "75" && thermometerBeschriftung[3].value() == "50" && thermometerBeschriftung[4].value() == "25" && thermometerBeschriftung[5].value() == "0" && thermometerBeschriftung[6].value() == "-25") {
    weiter.show();
  } else {
    weiter.hide();
  }
}

function Folie23() { //27
  textSize(20);
  text("Richtig! Aufgrund des linearen Zusammenhangs zwischen Steighöhe h und der Temperatur sind die Abstände der Steighöhen\nzwischen zwei Temperaturen äquidistant.", 20, 50);
  text("Benutze nun dein kalibriertes Thermometer um die\nTemperaturen der drei Gefäße vom Anfang genau zu\nbestimmen.", 20, 180);
  textStyle(BOLD);
  text("Aufgabe", 20, 150);



  //3 Gefäße
  //Wassergläser
  push();
  translate(0, 200);
  noStroke();
  fill(200, 200, 255);
  rect(700, 400, 100, 120);
  rect(850, 400, 100, 120);
  rect(1000, 400, 100, 120);
  stroke(0);
  line(700, 380, 700, 520);
  line(700, 520, 800, 520);
  line(800, 520, 800, 380);
  translate(150, 0);
  line(700, 380, 700, 520);
  line(700, 520, 800, 520);
  line(800, 520, 800, 380);
  translate(150, 0);
  line(700, 380, 700, 520);
  line(700, 520, 800, 520);
  line(800, 520, 800, 380);
  pop();

  textSize(30);
  noStroke();
  fill(0);
  text("ϑ", 770, 710);
  text("ϑ", 920, 710);
  text("ϑ", 1070, 710);

  text("ϑ =         °C", 730, 120);
  text("ϑ =         °C", 730, 170);
  text("ϑ =         °C", 730, 220);
  textSize(20);
  text("1", 785, 720);
  text("2", 935, 720);
  text("3", 1085, 720);

  text("1", 745, 130);
  text("2", 745, 180);
  text("3", 745, 230);

  textStyle(NORMAL);
  text("h [cm]", 20, 275);
  text("ϑ [°C]", 530, 660);

  fill(255);


  //Thermometer
  stroke(0);
  rect(xTherm, yTherm - 50, 50, 350);
  fill(0, 0, 255);
  ellipse(xTherm + 25, yTherm + 320, 35, 35);
  noStroke();

  rect(xTherm + 15, yTherm + 320, 20, 300 - temperatur);
  fill(255, 0, 0);
  ellipse(xTherm + 25, yTherm + 320, 8, 8);
  if (temp) {
    xTherm = mouseX - 25;
    yTherm = mouseY - 320;
  }

  //Zusätzliche Beschriftung durch Kalibrierung
  stroke(0);
  //100°C
  strokeWeight(2);
  line(xTherm + 38, yTherm + 620 - 585, xTherm + 50, yTherm + 620 - 585);
  //-25°C
  line(xTherm + 38, yTherm + 620 - 335, xTherm + 50, yTherm + 620 - 335);
  //0°C
  line(xTherm + 38, yTherm + 620 - 385, xTherm + 50, yTherm + 620 - 385);
  //25°C
  line(xTherm + 38, yTherm + 620 - 435, xTherm + 50, yTherm + 620 - 435);
  //50°C
  line(xTherm + 38, yTherm + 620 - 485, xTherm + 50, yTherm + 620 - 485);
  //75°C
  line(xTherm + 38, yTherm + 620 - 535, xTherm + 50, yTherm + 620 - 535);
  //125°
  line(xTherm + 38, yTherm + 620 - 635, xTherm + 50, yTherm + 620 - 635);

  strokeWeight(1);
  stroke(100);
  for (let i = 0; i < 30; i++) {
    line(xTherm + 42, yTherm + 620 - 635 + 10 * i, xTherm + 50, yTherm + 620 - 635 + 10 * i);
  }
  noStroke();
  fill(0);
  for (let i = 0; i < 7; i++) {
    text(125 - 25 * i + " °C", xTherm + 60, yTherm + 625 - 635 + 50 * i)
  }


  for (let i = 0; i < 3; i++) {
    temperaturGläser[i].show();
  }

  if (xTherm > 675 && xTherm < 775 && yTherm > 300 && yTherm < 720 && temperatur < 504) {
    let a = Math.abs(temperatur - 504);
    temperatur += a / 70;
  }
  if (xTherm > 675 && xTherm < 775 && yTherm > 300 && yTherm < 720 && temperatur >= 504) {
    let a = Math.abs(temperatur - 504);
    temperatur -= a / 70;
  }

  if (xTherm > 825 && xTherm < 925 && yTherm > 300 && yTherm < 720 && temperatur < 405) {
    let a = Math.abs(temperatur - 405);
    temperatur += a / 70;
  }
  if (xTherm > 825 && xTherm < 925 && yTherm > 300 && yTherm < 720 && temperatur >= 405) {
    let a = Math.abs(temperatur - 405);
    temperatur -= a / 70;
  }
  if (xTherm > 975 && xTherm < 1075 && yTherm > 300 && yTherm < 720 && temperatur < 575) {
    let a = Math.abs(temperatur - 575);
    temperatur += a / 70;
  }
  if (xTherm > 975 && xTherm < 1075 && yTherm > 300 && yTherm < 720 && temperatur >= 575) {
    let a = Math.abs(temperatur - 575);
    temperatur -= a / 70;
  }

  if (xTherm < 675 && temperatur < 420) {
    let a = Math.abs(temperatur - 420);
    temperatur += a / 70;
  }
  if (xTherm < 675 && temperatur >= 420) {
    let a = Math.abs(temperatur - 420);
    temperatur -= a / 70;
  }
  if (xTherm > 775 && xTherm < 825 && temperatur < 420) {
    let a = Math.abs(temperatur - 420);
    temperatur += a / 70;
  }
  if (xTherm > 775 && xTherm < 825 && temperatur >= 420) {
    let a = Math.abs(temperatur - 420);
    temperatur -= a / 70;
  }
  if (xTherm > 925 && xTherm < 975 && temperatur < 420) {
    let a = Math.abs(temperatur - 420);
    temperatur += a / 70;
  }
  if (xTherm > 925 && xTherm < 975 && temperatur >= 420) {
    let a = Math.abs(temperatur - 420);
    temperatur -= a / 70;
  }
  if (xTherm > 1075 && temperatur < 420) {
    let a = Math.abs(temperatur - 420);
    temperatur += a / 70;
  }





  //Graph

  stroke(0);
  line(50, 300, 50, 660);
  line(40, 650, 500, 650);
  line(45, 305, 50, 300);
  line(50, 300, 55, 305);
  line(495, 645, 500, 650);
  line(500, 650, 495, 655);
  line(50, 600, 500, 300);
  if (xTherm == 725 || xTherm == 875 || xTherm == 1025) {
    line(xTherm + 25, yTherm + 620 - temperatur, 50, yTherm + 620 - temperatur);
    line(50 + 1.5 * temperatur - 553, 650, 50 + 1.5 * temperatur - 553, yTherm + 620 - temperatur);
  }

  for (let i = 0; i < 6; i++) {
    stroke(0);
    line(74.5 + 75 * i, 650, 74.5 + 75 * i, 655);
    line(45, 336 + 50 * i, 50, 336 + 50 * i);
    textStyle(NORMAL);
    noStroke();
    text(25 * i, 61.5 + 75 * i, 680);

    text(33 - 5 * i, 15, 345 + 50 * i);

  }
  text(33 - 5 * 6, 15, 345 + 50 * 6);
  //  weiter.show();
  streitWeiter.hide();

  if (tempOrdnen[0].value() == "60" && tempOrdnen[1].value() == "10" && tempOrdnen[2].value() == "95") {
    weiter.show();
  } else {
    weiter.hide();
  }

}

// function Folie24() {
//   textSize(20);
//   fill(255);
//   stroke(0);
//   rect(15, 60, 460, 60);
//   fill(0);
//   noStroke();
//   text("Unser ursprüngliches Ziel war es die Temperatur\nzu messen. Aber haben wir das wirklich getan?", 20, 80);
//   text("[PLATZHALTER FÜR ANIMATION\nGespräch zwischen Lehrer und Schüler?]", 20, 350);
//   fill(255);
//   stroke(0);
//   rect(500, 50, 600, 650);
//   fill(255, 197, 150);
//   rect(700, 100, 200, 100);
//   textSize(30);
//   fill(0);
//   noStroke();
//   text("Temperatur", 723, 160);
//
// }

let mundLehrer = 10;
let mundSchueler = 10;
let mundLehrerV = 1;
let mundSchuelerV = 1;

function Folie27() {
  textSize(20);
  weiter.hide();
  zurück.hide();
  if (streitShow == 0) {
    streitWeiter.show();
    zurück.show();
  }
  if (streitShow > 17) {
    weiter.show();
    streitWeiter.hide();
  }

  if (mundLehrer <= 2) {
    mundLehrerV = 0.5;
  }
  if (mundLehrer >= 12) {
    mundLehrerV = -0.5;
  }
  if (mundSchueler <= 2) {
    mundSchuelerV = 0.5;
  }
  if (mundSchueler >= 12) {
    mundSchuelerV = -0.5;
  }


  if (streitShow < 18) {
    text("Verfolge das kurze Gespräch zwischen dem Lehrer und einem Schüler, die sich über das „Wesen“ der Kalibrierung eines Flüssigkeits-\nthermometers unterhalten.", 20, 50);

    translate(300, 100);
    stroke(0);
    fill(100, 200, 100);
    rect(100, 350, 200, 100);
    fill(255);
    ellipse(150, 400, 50, 50);
    line(150, 425, 150, 500);
    line(150, 500, 125, 550);
    line(150, 500, 175, 550);

    line(150, 450, 200, 425);
    line(150, 450, 195, 435);

    ellipse(400, 400, 50, 50);
    line(400, 425, 400, 500);
    line(400, 500, 375, 550);
    line(400, 500, 425, 550);
    line(400, 450, 350, 475);
    line(400, 450, 450, 475);


    ellipse(165, 410, 12, mundLehrer);

    ellipse(400, 410, 12, mundSchueler);


    strokeWeight(4);
    point(390, 390);
    point(410, 390);

    point(165, 390);
    line(200, 425, 215, 380);

    translate(-300, -100);
  }
  strokeWeight(1);


  //Lehrer
  if (streitShow % 2 == 0 && streitShow != 0 && streitShow != 18) {
    mundLehrer += mundLehrerV;

    fill(255);
    stroke(0);
    ellipse(500, 300, 600, 200);
    beginShape();
    vertex(550, 397);
    vertex(480, 500);
    vertex(600, 394);
    endShape();
    noStroke();
    fill(0);

    textSize(30);
  }
  if (streitShow % 2 == 1) {
    mundSchueler += mundSchuelerV;
    fill(255);
    stroke(0);
    ellipse(850, 300, 600, 200);
    beginShape();
    vertex(800, 398);
    vertex(710, 505);
    vertex(850, 398);
    endShape();
    noStroke();
    fill(0);
    textSize(30);
  }


  if (streitShow == 1) {
    text("Mit einem Flüssigkeitsthermometer messen\n                 wir die Temperatur!", 567, 300);
  }

  if (streitShow == 2) {
    text("Das ist nicht ganz richtig.", 320, 310);
  }

  if (streitShow == 3) {
    textSize(30);
    text("Wieso? Wir lesen doch die Temperatur\n                        direkt ab!", 585, 290);
  }
  if (streitShow == 4) {
    text("Und woran liest du sie ab?", 320, 310);
  }
  if (streitShow == 5) {
    text("An der Skala. Je nachdem wie hoch die\n                 Flüssigkeitssäule ist.", 585, 290);
  }
  if (streitShow == 6) {
    text("Richtig. Eigentlich messen wir die\n                   Steighöhe.", 270, 290);
  }
  if (streitShow == 7) {
    text("   Ah, genau! Erst die Skala zeigt uns an,\n        welche Höhe welcher Temperatur\n                       entspricht.", 580, 275);
  }
  if (streitShow == 8) {
    textSize(26);
    text("So ist es! Die Skala ist das Ergebnis einer\nKalibrierung. Sie basiert auf der Zuordnung\n   einer Steighöhe zu einer Temperatur.", 250, 275);
  }
  if (streitShow == 9) {
    text("Ja, das habe ich verstanden. Mmmhhh –\n  Aber wieso eigentlich dieser Umweg?", 580, 290);
  }
  if (streitShow == 10) {
    text("Du meinst: Warum messen wir nicht direkt\n                    die Temperatur?", 225, 290);
  }

  if (streitShow == 11) {
    text("Ja richtig.", 780, 310);
  }
  if (streitShow == 12) {
    text("Temperaturen können wir durch unsere\n   Sinne bestenfalls grob schätzen ….", 240, 290);
  }
  if (streitShow == 13) {
    text("… Höhen dagegen können genau ge-\nmessen werden. Klasse. Das ist eine\n                       tolle Idee.", 580, 275);
  }
  if (streitShow == 14) {
    text("Diese Idee kann man auch mit dem\n    Begriff „Wandlung“ beschreiben. ", 250, 290);
  }
  if (streitShow == 15) {
    text('Ja, ich weiß, was Sie meinen: Die Tem-\nperatur wird sozusagen in die Steighöhe\n                     „gewandelt“.', 585, 275);
  }
  if (streitShow == 16) {
    text("Und die Kalibrierung ermöglicht den\n  Rückweg von der Steighöhe zur\n                  Temperatur.", 270, 290);
  }
  if (streitShow == 17) {
    text("Das ist gar nicht schwer.", 695, 310);
  }


  if (streitShow == 18) {
    textSize(30);
    text("Fassen wir das Gespräch der beiden Schüler zusammen und ergänzen es durch\n                                                            ein Schaubild.", 50, 350);
  }


}




//
// function Folie25() {
//   fill(255);
//   stroke(0);
//   rect(15, 60, 460, 60);
//   rect(15, 150, 460, 95);
//   fill(0);
//   noStroke();
//   textSize(20);
//   text("Unser ursprüngliches Ziel war es die Temperatur\nzu messen. Aber haben wir das wirklich getan?\n\n\nNein! Wir haben die Steighöhe der Flüssigkeit\nim Thermometer gemessen, und diesem Messwert\neine Temperatur zugeordnet.", 20, 80);
//   fill(255);
//   stroke(0);
//   rect(500, 50, 600, 650);
//   fill(255, 197, 150);
//   rect(700, 100, 200, 100);
//   fill(255, 100, 100);
//   rect(700, 550, 200, 100);
//   fill(200, 200, 255);
//   rect(700, 325, 200, 100);
//   fill(0);
//   line(800, 200, 800, 325);
//   line(795, 320, 800, 325);
//   line(800, 325, 805, 320);
//   line(800, 425, 800, 550);
//   line(795, 545, 800, 550);
//   line(800, 550, 805, 545);
//
//   textSize(30);
//
//   noStroke();
//   text("Temperatur", 723, 160);
//   text("Füllstand", 735, 385);
//   text("Temperatur", 723, 610);
// }
//
// function Folie26() {
//   fill(255);
//   stroke(0);
//   rect(15, 60, 460, 60);
//   rect(15, 150, 460, 95);
//   rect(15, 270, 460, 97);
//   fill(0);
//   noStroke();
//   textSize(20);
//   text("Unser ursprüngliches Ziel war es die Temperatur\nzu messen. Aber haben wir das wirklich getan?\n\n\nNein! Wir haben die Steighöhe der Flüssigkeit\nim Thermometer gemessen, und diesem Messwert\neine Temperatur zugeordnet.", 20, 80);
//   text("Warum haben wir diesen Umweg genommen?\nWeil wir eine Höhe leicht messen können. Tem-\nperatur jedoch nicht.", 20, 300);
//
//   fill(255);
//   stroke(0);
//   rect(500, 50, 600, 650);
//   fill(255, 197, 150);
//   rect(700, 100, 200, 100);
//   fill(255, 100, 100);
//   rect(700, 550, 200, 100);
//   fill(200, 200, 255);
//   rect(700, 325, 200, 100);
//   fill(0);
//   line(800, 200, 800, 325);
//   line(795, 320, 800, 325);
//   line(800, 325, 805, 320);
//   line(800, 425, 800, 550);
//   line(795, 545, 800, 550);
//   line(800, 550, 805, 545);
//
//   textSize(30);
//
//   noStroke();
//   text("Temperatur", 723, 160);
//   text("Füllstand", 735, 385);
//   text("Temperatur", 723, 610);
//   textSize(15);
//   text("ursprüngliche Messgröße\n(nicht direkt bestimmbar)", 520, 140);
//   text("       Steighöhe\n(direkt bestimmbar)", 540, 380);
// }



// function Folie27() {
//   fill(255);
//   stroke(0);
//   rect(15, 60, 460, 60);
//   rect(15, 150, 460, 95);
//   rect(15, 270, 460, 97);
//   rect(15, 400, 460, 95);
//   fill(0);
//   noStroke();
//   textSize(20);
//   text("Unser ursprüngliches Ziel war es die Temperatur\nzu messen. Aber haben wir das wirklich getan?\n\n\nNein! Wir haben die Steighöhe der Flüssigkeit\nim Thermometer gemessen, und diesem Messwert\neine Temperatur zugeordnet.", 20, 80);
//   text("Warum haben wir diesen Umweg genommen?\nWeil wir eine Höhe leicht messen können. Tem-\nperatur jedoch nicht.", 20, 300);
//   text("Wir haben also die Temperatur in eine andere,\ntemperaturabhängige Größe (die Steighöhe) gewan-\ndelt.", 20, 425);
//
//   fill(255);
//   stroke(0);
//   rect(500, 50, 600, 650);
//   fill(255, 197, 150);
//   rect(700, 100, 200, 100);
//   fill(255, 100, 100);
//   rect(700, 550, 200, 100);
//   fill(200, 200, 255);
//   rect(700, 325, 200, 100);
//   fill(0);
//   line(800, 200, 800, 325);
//   line(795, 320, 800, 325);
//   line(800, 325, 805, 320);
//   line(800, 425, 800, 550);
//   line(795, 545, 800, 550);
//   line(800, 550, 805, 545);
//
//   textSize(30);
//
//   noStroke();
//   text("Temperatur", 723, 160);
//   text("Füllstand", 735, 385);
//   text("Temperatur", 723, 610);
//   textSize(15);
//   text("ursprüngliche Messgröße\n(nicht direkt bestimmbar)", 520, 140);
//   text("       Steighöhe\n(direkt bestimmbar)", 540, 380);
//   textSize(20);
//   text("Wandlung", 890, 270);
// }
//
// function Folie28() {
//   fill(255);
//   stroke(0);
//   rect(15, 60, 460, 60);
//   rect(15, 150, 460, 95);
//   rect(15, 270, 460, 97);
//   rect(15, 400, 460, 95);
//   rect(15, 525, 460, 75);
//   fill(0);
//   noStroke();
//   textSize(20);
//   text("Unser ursprüngliches Ziel war es die Temperatur\nzu messen. Aber haben wir das wirklich getan?\n\n\nNein! Wir haben die Steighöhe der Flüssigkeit\nim Thermometer gemessen, und diesem Messwert\neine Temperatur zugeordnet.", 20, 80);
//   text("Warum haben wir diesen Umweg genommen?\nWeil wir eine Höhe leicht messen können. Tem-\nperatur jedoch nicht.", 20, 300);
//   text("Wir haben also die Temperatur in eine andere,\ntemperaturabhängig Größe (die Steighöhe) gewan-\ndelt.", 20, 425);
//   text("Die Zuordnung von Steighöhe zu Temperatur nennt\nman Kalibrierung.", 20, 560);
//
//   fill(255);
//   stroke(0);
//   rect(500, 50, 600, 650);
//   fill(255, 197, 150);
//   rect(700, 100, 200, 100);
//   fill(255, 100, 100);
//   rect(700, 550, 200, 100);
//   fill(200, 200, 255);
//   rect(700, 325, 200, 100);
//   fill(0);
//   line(800, 200, 800, 325);
//   line(795, 320, 800, 325);
//   line(800, 325, 805, 320);
//   line(800, 425, 800, 550);
//   line(795, 545, 800, 550);
//   line(800, 550, 805, 545);
//
//   textSize(30);
//
//   noStroke();
//   text("Temperatur", 723, 160);
//   text("Füllstand", 735, 385);
//   text("Temperatur", 723, 610);
//   textSize(15);
//   text("ursprüngliche Messgröße\n(nicht direkt bestimmbar)", 520, 140);
//   text("ursprüngliche Messgröße\n(an einer Skala ablesbar)", 520, 590);
//   text("       Steighöhe\n(direkt bestimmbar)", 540, 380);
//   textSize(20);
//   text("Wandlung", 890, 270);
//   text(" Zuordnung\n     h → ϑ\n(Kalibrierung)", 880, 470);
// }
//
// function Folie29() {
//   //Wird übersprungen
//   //text("NOCH ZU FÜLLEN. IDEE: VERGLEICHEN WIR DIE TEMPERATURKALIBRIERUNG MIT DEM LETZTEN MODUL:\nDA HABEN WIR NUR QUALITATIVE UNTERSCHIEDE BESTIMMT. JETZT WERDEN WIR EINEN STOFF QUANTIFIZIEREN", 20, 50);
// }

function Folie30() {
  textSize(20);
  text("Das Messprinzip mit den Schritten Wandlung und Kalibrierung ist bei technischen Sensoren ganz analog, aber in der Umsetzung\nmeistens schwieriger. Gassensoren (genauer Halbleitergassensoren) sind solche technischen Sensoren.\n\nStellen wir das Prinzip für das Flüssigkeitsthermometer und den Gassensor einmal gegenüber.", 20, 50);


}
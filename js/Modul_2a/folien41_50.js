function Folie41() {
  fill(255);
  stroke(0);
  rect(500, 50, 600, 650);

  textSize(30);
  noStroke();
  fill(0);
  text("Funktionsweise von Halbleiter-\n Gassensoren - Wiederholung", 45, 50);
  textSize(20);
  fill(200);
  text("Die abgeleitete Messgröße von Halbleiter-\ngassensoren ist der Sensorwiderstand R.", 50, 150);
  text("Dieser hängt in erster Linie ab von („Pri-\nmärvariablen“)", 50, 220);
  text("→ der Gasart / Gaszusammensetzung,\n\n→ der Gaskonzentration und\n\n→ der Sensortemperatur", 50, 290);
  text("Die Temperatur des Sensors wird über eine\nHeizspannung geregelt.", 50, 450);
  fill(0);
  text("Die Temperaturabhängigkeit des Sensor-\nwiderstandes ist für die angestrebte Kalibrierung\nsehr wichtig.", 50, 522);
  text("So gelang euch in Modul 1 die Unterschei-\ndung verschiedener Gase, da diese charakteris-\ntische Abhängigkeiten R(T) aufweisen.", 50, 615);
  stroke(0);
  fill(200, 200, 255);
  rect(720, 570, 160, 75);
  fill(255, 197, 150);
  rect(550, 60, 130, 75);
  rect(710, 60, 170, 75);
  rect(910, 60, 150, 75);


  fill(240, 240, 0);
  rect(990, 280, 105, 50);


  line(615, 135, 800, 570);
  line(800, 135, 800, 570);
  line(985, 135, 800, 570);

  line(985, 135, 1045, 280);


  textSize(20);
  noStroke();
  fill(0);


  text("Gasart", 580, 100);
  text("Gaskonzen-\n   tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);
  text("   Heiz-\nspannung", 1000, 300);

  text("  Sensor\nwiderstand", 752, 600);
}



function Folie42() {
  fill(255);
  stroke(0);
  rect(500, 50, 600, 650);

  textSize(30);
  noStroke();
  fill(0);
  text("Funktionsweise von Halbleiter-\n Gassensoren - Wiederholung", 45, 50);
  textSize(20);
  text("Als Beispiel zeigt das Diagramm unten die\nAbhängigkeit des Sensorwiderstands von der\nSensortemperatur aus Modul 1 (für feuchte\nLuft über einer Wasseroberfläche und für die\nAusdünstungen aus Apfelsaft).", 50, 150);

  image(Apfelsaft_Wasser, 50, 265);
  stroke(0);
  fill(200, 200, 255);
  rect(720, 570, 160, 75);
  fill(255, 197, 150);
  rect(550, 60, 130, 75);
  rect(710, 60, 170, 75);
  rect(910, 60, 150, 75);


  fill(240, 240, 0);
  rect(990, 280, 105, 50);


  line(615, 135, 800, 570);
  line(800, 135, 800, 570);
  line(985, 135, 800, 570);

  line(985, 135, 1045, 280);


  textSize(20);
  noStroke();
  fill(0);


  text("Gasart", 580, 100);
  text("Gaskonzen-\n   tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);
  text("   Heiz-\nspannung", 1000, 300);

  text("  Sensor\nwiderstand", 752, 600);
}



function Folie43() {
  fill(255);
  stroke(0);
  rect(500, 50, 600, 650);


  textSize(30);
  noStroke();
  fill(0);
  text("Funktionsweise von Halbleiter-\n Gassensoren - Wiederholung", 45, 50);
  textSize(20);
  text("Durch die Modellierung der Abläufe im Sensor\nund auf der Sensoroberfläche habt ihr weitere\nVariablen der Funktionsweise des Sensors\nkennengelernt („Sekundärvariablen“).", 50, 150);

  image(Funktionsweise_1, 130, 250);



  stroke(0);
  fill(200, 200, 255);
  rect(720, 570, 160, 75);
  fill(255, 197, 150);
  rect(550, 60, 130, 75);
  rect(710, 60, 170, 75);
  rect(910, 60, 150, 75);


  line(615, 135, 800, 570);
  line(800, 135, 800, 570);
  line(985, 135, 800, 570);


  textSize(20);
  noStroke();
  fill(0);


  text("Gasart", 580, 100);
  text("Gaskonzen-\n   tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);

  text("  Sensor\nwiderstand", 752, 600);


  textSize(16);
  text("  Sensor-\noberfläche", 20, 280);
  text("Sensor-\nmaterial", 350, 310);
  text("  Sensor-\ntemperatur\n  (Farbe)", 20, 380);
  text("Atmosphäre", 185, 280);

  stroke(0);
  line(100, 280, 170, 327);
  line(345, 320, 290, 350);
  line(100, 370, 170, 350);
}


function Folie44() {
  fill(255);
  stroke(0);
  rect(500, 50, 600, 650);


  textSize(30);
  noStroke();
  fill(0);
  text("Funktionsweise von Halbleiter-\n Gassensoren - Wiederholung", 45, 50);
  textSize(20);
  fill(200);
  text("Durch die Modellierung der Abläufe im Sensor\nund auf der Sensoroberfläche habt ihr weitere\nVariablen der Funktionsweise des Sensors\nkennengelernt („Sekundärvariablen“).", 50, 150);
  textSize(18);
  fill(0);
  text("Die Sekundärvariablen sind...", 50, 510);
  text("→ ...die Geschwindigkeit der Elektronen, die für den\nLadungstransport im Sensor zur Verfügung stehen.", 65, 550);

  image(Funktionsweise_1, 130, 250);



  stroke(0);
  fill(200, 200, 255);
  rect(720, 570, 160, 75);
  fill(255, 197, 150);
  rect(550, 60, 130, 75);
  rect(710, 60, 170, 75);
  rect(910, 60, 150, 75);

  fill(50, 205, 50);
  rect(850, 420, 180, 70);


  line(615, 135, 800, 570);
  line(800, 135, 800, 570);
  line(985, 135, 940, 420);
  line(940, 490, 800, 570);



  textSize(20);
  noStroke();
  fill(0);


  text("Gasart", 580, 100);
  text("Gaskonzen-\n   tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);

  text("Geschwindigkeit\n  der Elektronen", 870, 450);

  text("  Sensor\nwiderstand", 752, 600);


  textSize(16);

  text("   Elektronen-\ngeschwindigkeit\n  (Pfeillänge)", 10, 340);
  stroke(0);
  line(130, 350, 162, 361);

  noFill();
  stroke(255, 0, 0);
  strokeWeight(3);
  rect(162, 361, 28, 14);

}

function Folie45() {
  fill(255);
  stroke(0);
  rect(500, 50, 600, 650);


  textSize(30);
  noStroke();
  fill(0);
  text("Funktionsweise von Halbleiter-\n Gassensoren - Wiederholung", 45, 50);
  textSize(20);
  fill(200);
  text("Durch die Modellierung der Abläufe im Sensor\nund auf der Sensoroberfläche habt ihr weitere\nVariablen der Funktionsweise des Sensors\nkennengelernt („Sekundärvariablen“).", 50, 150);
  textSize(18);
  fill(0);
  text("Die Sekundärvariablen sind...", 50, 510);
  fill(200);
  text("→ ...die Geschwindigkeit der Elektronen, die für den\nLadungstransport im Sensor zur Verfügung stehen.", 65, 550);
  fill(0);
  text("  → ... die Bedeckung der Sensoroberfläche mit Sauer-\nstoff. Dieser Sauerstoff bindet freie Elektronen und be-\neinflusst somit die Anzahl freier Elektronen.", 65, 620);

  image(Funktionsweise_1, 130, 250);



  stroke(0);
  fill(200, 200, 255);
  rect(720, 570, 160, 75);
  fill(255, 197, 150);
  rect(550, 60, 130, 75);
  rect(710, 60, 170, 75);
  rect(910, 60, 150, 75);

  fill(50, 205, 50);
  rect(850, 420, 180, 70);
  rect(590, 220, 200, 100);
  rect(590, 420, 200, 70);




  line(985, 135, 940, 420);
  line(940, 490, 800, 570);

  line(615, 135, 690, 220);
  line(795, 135, 690, 220);
  line(985, 135, 690, 220);

  line(690, 320, 690, 420);

  line(690, 490, 800, 570);



  textSize(20);
  noStroke();
  fill(0);


  text("Gasart", 580, 100);
  text("Gaskonzen-\n   tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);

  text("Geschwindigkeit\n  der Elektronen", 870, 450);
  text("  Bedeckung der\nSensoroberfläche\n  mit Sauerstoff", 610, 250);
  text("Anzahl freier\n  Elektronen", 630, 450);

  text("  Sensor\nwiderstand", 752, 600);


  textSize(16);

  text("   Elektronen-\ngeschwindigkeit\n  (Pfeillänge)", 10, 340);
  text(" Sauerstoff auf\nSensoroberfläche\n bindet Elektronen", 340, 270);
  stroke(0);
  line(130, 350, 162, 361);
  line(288, 322, 335, 280);

  noFill();
  stroke(255, 0, 0);
  strokeWeight(3);
  rect(162, 361, 28, 14);
  ellipse(284, 328, 16, 16);
}

function Folie46() {

  textSize(40);
  text("Aufgabe 2", 140, 50);
  fill(255);
  stroke(0);
  rect(500, 50, 600, 650);


  textSize(30);
  noStroke();
  fill(0);

  textSize(20);
  text("Entscheidet bei den Zusammenhängen X → Y,\nob der Einfluss von X auf Y gleichsinnig oder\ngegensinnig ist. Durch Klicken auf die\nKreissymbole könnt ihr nacheinander\nwechseln zwischen:", 50, 100);
  stroke(0);
  fill(50, 205, 50);
  rect(30, 475, 130, 60);
  fill(200, 200, 255);
  rect(340, 475, 120, 60);

  line(160, 505, 340, 505);

  fill(0, 255, 0);
  ellipse(60, 250, 35, 35);
  fill(255, 0, 0);
  ellipse(60, 300, 35, 35);
  ellipse(250, 505, 35, 35);

  fill(100);
  ellipse(60, 350, 35, 35);
  fill(255);
  ellipse(60, 400, 35, 35);

  fill(0);
  textSize(25);
  text("+", 53, 260);
  text("-", 56, 307);

  text("?", 53, 360);
  text("?", 53, 410);


  text("-", 246, 512);

  textSize(20);
  fill(0);
  noStroke();
  text("je größer X, desto größer Y (gleichsinnig)", 100, 255);
  text("je größer X, desto kleiner Y (gegensinnig)", 100, 305);
  text("keine allgemeine Aussage möglich", 100, 355);
  text("ich habe keine Ahnung", 100, 405);
  text("Ein Beispiel ist schon eingetragen:", 50, 450);


  text("Anzahl freier\n  Elektronen", 40, 500);
  text("   Sensor-\nwiderstand", 350, 500);


  text("Je mehr Elektronen im Sensormaterial zum\nLadungstransport beitragen, desto größer ist\nder Stromfluss I bei gegebener Spannung U,\ndie am Sensor anliegt. Steigt die Anzahl freier\nElektronen, so sinkt der Sensorwiderstand\n       R = U/I.", 50, 570);


  textSize(18);

  stroke(0);
  fill(200, 200, 255);
  rect(720, 570, 160, 75);
  fill(255, 197, 150);
  rect(550, 60, 130, 75);
  rect(710, 60, 170, 75);
  rect(910, 60, 150, 75);

  fill(50, 205, 50);
  rect(850, 420, 180, 70);
  rect(590, 220, 200, 100);
  rect(590, 420, 200, 70);




  line(985, 135, 940, 420);
  line(940, 490, 800, 570);

  line(615, 135, 690, 220);
  line(795, 135, 690, 220);
  line(985, 135, 690, 220);

  line(690, 320, 690, 420);

  line(690, 490, 800, 570);

  //Hier die Antworten
  fill(255, 0, 0);
  ellipse(745, 530, 35, 35);

  for (let i = 0; i < antwortenA2.length; i++) {
    let antwort = "";
    if (antwortenA2[i] == -1) {
      fill(100, 100, 255);
    }
    if (antwortenA2[i] == 0) { //keine Ahnung
      fill(255);
      antwort = "?";
    } else if (antwortenA2[i] == 1) { //gleichsinning
      fill(0, 255, 0);
      antwort = "+";
    } else if (antwortenA2[i] == 2) { //gegensinning
      fill(255, 0, 0);
      antwort = "-";
    } else if (antwortenA2[i] == 3) { //kein Zusammenhang
      fill(100);
      antwort = "?";
    }
    if (i == 0) {
      ellipse(655, 177, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 648, 186);
      } else {
        text(antwort, 651, 185);
      }
      stroke(0);
    } else if (i == 1) {
      ellipse(745, 177, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 738, 186);
      } else {
        text(antwort, 741, 185);
      }
      stroke(0);
    } else if (i == 2) {
      ellipse(850, 177, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 843, 186);
      } else {
        text(antwort, 846, 185);
      }
      stroke(0);
    } else if (i == 3) {
      ellipse(963, 277, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 956, 286);
      } else {
        text(antwort, 959, 285);
      }
      stroke(0);
    } else if (i == 4) {
      ellipse(690, 370, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 683, 379);
      } else {
        text(antwort, 686, 378);
      }
      stroke(0);
    } else if (i == 5) {
      ellipse(870, 530, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 863, 539);
      } else {
        text(antwort, 866, 538);
      }
      stroke(0);
    }
  }
  textSize(20);
  noStroke();
  fill(0);
  text("Gasart", 580, 100);
  text("Gaskonzen-\n   tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);
  text("Geschwindigkeit\n  der Elektronen", 870, 450);
  text("  Bedeckung der\nSensoroberfläche\n  mit Sauerstoff", 610, 250);
  text("Anzahl freier\n  Elektronen", 630, 450);
  text("  Sensor\nwiderstand", 752, 600);

  textSize(25);


  text("-", 741, 536);
}



let alleAngeschaut = [false, false, false, false, false, false, false];

function Folie47() {
  //Anzahl Fehler
  let fehler = 0;
  let richtig = 0;
  if (antwortenA2[0] == 3) {
    richtig += 1;
  }
  if (antwortenA2[1] == 2) {
    richtig += 1;
  }
  if (antwortenA2[2] == 1) {
    richtig += 1;
  }
  if (antwortenA2[3] == 1) {
    richtig += 1;
  }
  if (antwortenA2[4] == 2) {
    richtig += 1;
  }
  if (antwortenA2[5] == 2) {
    richtig += 1;
  }

  fehler = 6 - richtig;

  let string = "";
  if (fehler == 0) {
    string = "Klasse, du hast alles richtig gemacht!";
  } else {
    string = "Du hast " + fehler + " Fehler gemacht. Deine Fehler werden\nrechts angezeigt.";
  }

  textSize(40);
  text("Aufgabe 2 - Lösung", 80, 50);
  fill(255);
  stroke(0);
  rect(500, 50, 600, 650);


  textSize(30);
  noStroke();
  fill(0);

  textSize(20);
  text(string, 50, 100);
  text("Fahrt mit der Maus über die Kreissymbole um\ndie Erklärungen einzusehen. Sobald ihr euch\nalle Antworten angesehen habt, könnt ihr fortfahr-\nen.", 50, 170);
  stroke(0);


  fill(0);
  noStroke();
  textSize(18);

  stroke(0);
  fill(200, 200, 255);
  rect(720, 570, 160, 75);
  fill(255, 197, 150);
  rect(550, 60, 130, 75);
  rect(710, 60, 170, 75);
  rect(910, 60, 150, 75);

  fill(50, 205, 50);
  rect(850, 420, 180, 70);
  rect(590, 220, 200, 100);
  rect(590, 420, 200, 70);




  line(985, 135, 940, 420);
  line(940, 490, 800, 570);

  line(615, 135, 690, 220);
  line(795, 135, 690, 220);
  line(985, 135, 690, 220);

  line(690, 320, 690, 420);

  line(690, 490, 800, 570);

  //Hier die Antworten
  fill(255, 0, 0);
  ellipse(745, 530, 35, 35);

  for (let i = 0; i < antwortenA2.length; i++) {
    let antwort = "";
    if (i == 0) { //keine Ahnung
      fill(100);
      if (antwortenA2[0] == 3) {
        stroke(0, 200, 0)
      } else {
        stroke(220, 0, 0);
      }
      antwort = "?";
    } else if (i == 1) { //gleichsinning
      fill(255, 0, 0);
      if (antwortenA2[1] == 2) {
        stroke(0, 180, 0)
      } else {
        stroke(200, 0, 0);
      }
      antwort = "-";
    } else if (i == 2) { //gegensinning
      fill(0, 255, 0);
      if (antwortenA2[2] == 1) {
        stroke(0, 180, 0)
      } else {
        stroke(200, 0, 0);
      }
      antwort = "+";
    } else if (i == 3) { //kein Zusammenhang
      fill(0, 255, 0);
      if (antwortenA2[3] == 1) {
        stroke(0, 180, 0)
      } else {
        stroke(200, 0, 0);
      }
      antwort = "+";
    } else if (i == 4) { //kein Zusammenhang
      fill(255, 0, 0);
      if (antwortenA2[4] == 2) {
        stroke(0, 180, 0)
      } else {
        stroke(200, 0, 0);
      }
      antwort = "-";
    } else if (i == 5) { //kein Zusammenhang
      fill(255, 0, 0);
      if (antwortenA2[5] == 2) {
        stroke(0, 180, 0)
      } else {
        stroke(200, 0, 0);
      }
      antwort = "-";
    }

    if (i == 0) {
      strokeWeight(5);
      ellipse(655, 177, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 648, 186);
      } else {
        text(antwort, 651, 185);
      }
      stroke(0);
    } else if (i == 1) {
      ellipse(745, 177, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 738, 186);
      } else {
        text(antwort, 741, 185);
      }
      stroke(0);
    } else if (i == 2) {
      ellipse(850, 177, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 843, 186);
      } else {
        text(antwort, 846, 185);
      }
      stroke(0);
    } else if (i == 3) {
      ellipse(963, 277, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 956, 286);
      } else {
        text(antwort, 959, 285);
      }
      stroke(0);
    } else if (i == 4) {
      ellipse(690, 370, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 683, 379);
      } else {
        text(antwort, 686, 378);
      }
      stroke(0);
    } else if (i == 5) {
      ellipse(870, 530, 35, 35);
      noStroke();
      textSize(25);
      fill(0);
      if (antwort != "-") {
        text(antwort, 863, 539);
      } else {
        text(antwort, 866, 538);
      }
      stroke(0);
    }
  }

  textSize(20);
  noStroke();
  fill(0);
  text("Gasart", 580, 100);
  text("Gaskonzen-\n   tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);
  text("Geschwindigkeit\n  der Elektronen", 870, 450);
  text("  Bedeckung der\nSensoroberfläche\n  mit Sauerstoff", 610, 250);
  text("Anzahl freier\n  Elektronen", 630, 450);
  text("  Sensor\nwiderstand", 752, 600);

  if (mouseX > 630 && mouseX < 670 && mouseY > 155 && mouseY < 195) {
    alleAngeschaut[0] = true;
    text("Deine Antwort: ", 50, 300);
    stroke(0);
    strokeWeight(1);
    if (antwortenA2[0] == 3) {
      fill(100);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[0] == 0) {
      fill(255);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[0] == 1) {
      fill(0, 255, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("+", 243, 301);
    } else if (antwortenA2[0] == 2) {
      fill(255, 0, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("-", 246, 300);
    }
    noStroke();
    fill(0);
    textSize(20);
    text("Richtige Antwort:", 50, 350);
    fill(100);
    stroke(0);
    ellipse(250, 343, 35, 35);
    fill(0);
    noStroke();
    textSize(25);
    text("?", 243, 350);
    textSize(20);
    text("Die Variable „Gasart“ ist kategorial. Eine Aussage\nder Form „Je mehr Gasart, desto…“ ist daher\nunlogisch.", 50, 430);
    text("Dennoch hat die Gasart natürlich einen Einfluss\nauf die Sauerstoffbedeckung, da die Wahrschein-\nlichkeit einer Reaktion mit dem Sauerstoff (Reak-\ntionsrate) von Gas zu Gas verschieden ist. Bei\ngroßer Reaktionsrate eines Gases, sinkt die Stär-\nke der Bedeckung", 50, 530);
  }
  if (mouseX > 725 && mouseX < 765 && mouseY > 155 && mouseY < 195) {
    alleAngeschaut[1] = true;
    text("Deine Antwort: ", 50, 300);
    stroke(0);
    strokeWeight(1);
    if (antwortenA2[1] == 3) {
      fill(100);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[1] == 0) {
      fill(255);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[1] == 1) {
      fill(0, 255, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("+", 243, 301);
    } else if (antwortenA2[1] == 2) {
      fill(255, 0, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("-", 246, 300);
    }
    noStroke();
    fill(0);
    textSize(20);
    text("Richtige Antwort:", 50, 350);
    fill(255, 0, 0);
    stroke(0);
    ellipse(250, 343, 35, 35);
    fill(0);
    textSize(25);
    noStroke();
    text("-", 245, 350);
    textSize(20);
    text("Sind in der Gasatmosphäre mehr Teilchen des\nZielgases vorhanden, so steigt die Wahrschein-\nlichkeit einer Reaktion mit dem Sauerstoff (Reak-\ntionsrate). ", 50, 430);
    text("Somit gilt: Je größer die Gaskonzentration ist,\ndesto geringer ist die Bedeckung der Sensoro-\nberfläche mit Sauerstoff.", 50, 550);

  }
  if (mouseX > 830 && mouseX < 870 && mouseY > 155 && mouseY < 195) {
    alleAngeschaut[2] = true;
    text("Deine Antwort: ", 50, 300);
    stroke(0);
    strokeWeight(1);
    if (antwortenA2[2] == 3) {
      fill(100);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[2] == 0) {
      fill(255);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[2] == 1) {
      fill(0, 255, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("+", 243, 301);
    } else if (antwortenA2[2] == 2) {
      fill(255, 0, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("-", 246, 300);
    }
    noStroke();
    fill(0);
    textSize(20);
    text("Richtige Antwort:", 50, 350);
    fill(0, 255, 0);
    stroke(0);
    ellipse(250, 343, 35, 35);
    fill(0);
    textSize(25);
    noStroke();
    text("+", 243, 351);
    textSize(20);
    text("Eine gesteigerte Sensortemperatur erhöht die\nWahrscheinlichkeit, dass sich Sauerstoff an\nder Sensoroberfläche andocken kann und dabei\nElektronen bindet", 50, 430);
    text("Somit gilt: Je größer die Sensortemperatur ist,\ndesto größer ist die Bedeckung der Sensor-\noberfläche mit Sauerstoff.", 50, 550);
  }
  if (mouseX > 940 && mouseX < 985 && mouseY > 255 && mouseY < 300) {
    alleAngeschaut[3] = true;
    text("Deine Antwort: ", 50, 300);
    stroke(0);
    strokeWeight(1);
    if (antwortenA2[3] == 3) {
      fill(100);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[3] == 0) {
      fill(255);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[3] == 1) {
      fill(0, 255, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("+", 243, 301);
    } else if (antwortenA2[3] == 2) {
      fill(255, 0, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("-", 246, 300);
    }
    noStroke();
    fill(0);
    textSize(20);
    text("Richtige Antwort:", 50, 350);
    fill(0, 255, 0);
    stroke(0);
    ellipse(250, 343, 35, 35);
    fill(0);
    textSize(25);
    noStroke();
    text("+", 243, 351);
    textSize(20);
    text("Die Elektronen müssen bei ihrer Ausbreitung im\nSensor Energiebarrieren überwinden. Eine\nhöhere Sensortemperatur erhöht die Wahrschein-\nlichkeit hierfür. ", 50, 430);
    text("Interpretiert man diese Wahrscheinlichkeit mit\neiner höheren Geschwindigkeit der Elek-\ntronen, so gilt: ", 50, 550);
    text("Je größer die Sensortemperatur ist, desto grö-\nßer ist die Geschwindigkeit der Elektro-\nnen im Sensor.", 50, 640);
  }
  if (mouseX > 670 && mouseX < 710 && mouseY > 350 && mouseY < 390) {
    alleAngeschaut[4] = true;
    text("Deine Antwort: ", 50, 300);
    stroke(0);
    strokeWeight(1);
    if (antwortenA2[4] == 3) {
      fill(100);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[4] == 0) {
      fill(255);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[4] == 1) {
      fill(0, 255, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("+", 243, 301);
    } else if (antwortenA2[4] == 2) {
      fill(255, 0, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("-", 246, 300);
    }
    noStroke();
    fill(0);
    textSize(20);
    text("Richtige Antwort:", 50, 350);
    fill(255, 0, 0);
    stroke(0);
    ellipse(250, 343, 35, 35);
    fill(0);
    textSize(25);
    noStroke();
    text("-", 245, 350);
    textSize(20);
    text("Sauerstoff an der Sensoroberfläche bindet Elek-\ntronen, die dann nicht mehr zum Ladungs-\ntransport beitragen können.", 50, 430);
    text("Somit gilt: Je größer die Bedeckung der Sensor-\noberfläche ist, desto kleiner ist die An-\nzahl freier Elektronen.", 50, 550);

  }
  if (mouseX > 850 && mouseX < 890 && mouseY > 510 && mouseY < 550) {
    alleAngeschaut[5] = true;
    text("Deine Antwort: ", 50, 300);
    stroke(0);
    strokeWeight(1);
    if (antwortenA2[5] == 3) {
      fill(100);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[5] == 0) {
      fill(255);
      ellipse(250, 293, 35, 35);
      textSize(25);
      fill(0);
      noStroke();
      text("?", 243, 299);
    } else if (antwortenA2[5] == 1) {
      fill(0, 255, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("+", 243, 301);
    } else if (antwortenA2[5] == 2) {
      fill(255, 0, 0);
      ellipse(250, 293, 35, 35);
      fill(0);
      textSize(25);
      noStroke();
      text("-", 246, 300);
    }
    noStroke();
    fill(0);
    textSize(20);
    text("Richtige Antwort:", 50, 350);
    fill(255, 0, 0);
    stroke(0);
    ellipse(250, 343, 35, 35);
    fill(0);
    textSize(25);
    noStroke();
    text("-", 245, 350);
    textSize(20);
    text("Strom ist Ladung pro Zeit. Sind die Elektronen\nschneller, werden in gleichen Zeiten mehr\nLadungen transportiert. Der Stromfluss I bei\ngegebener Spannung U, die am Sensor anliegt,\nsteigt.", 50, 430);
    text("Somit gilt: Je größer die Geschwindigkeit der\nElektronen ist, desto kleiner ist der Sensor-\nwiderstand R = U/I.", 50, 570);
  }


  if (mouseX > 720 && mouseX < 770 && mouseY > 490 && mouseY < 580) {
    alleAngeschaut[6] = true;
    noStroke();
    fill(0);
    textSize(20);
    text("Richtige Antwort:", 50, 350);
    fill(255, 0, 0);
    stroke(0);
    strokeWeight(1);
    ellipse(250, 343, 35, 35);
    fill(0);
    textSize(25);
    noStroke();
    text("-", 245, 350);
    textSize(20);
    text("Je mehr Elektronen im Sensormaterial zum\nLadungstransport beitragen, desto größer ist\nder Stromfluss I bei gegebener Spannung U,\ndie am Sensor anliegt. Steigt die Anzahl freier\nElektronen, so sinkt der Sensorwiderstand\n       R = U/I.", 50, 480);
  }
  textSize(25);
  text("-", 741, 536);
  if (alleAngeschaut[0] && alleAngeschaut[1] && alleAngeschaut[2] && alleAngeschaut[3] && alleAngeschaut[4] && alleAngeschaut[5] && alleAngeschaut[6]) {
    weiter.show();
  } else {
    weiter.hide();
  }

}

function Folie48() {
  textSize(50);
  text("Theoretische Grundlagen", 400, 300);
  textSize(40);
  text("Funktionsweise von Halbleiter-\n   gassensoren - Vertiefung", 400, 500);
}

function Folie49() {
  image(Apfelsaft_Wasser, 800, 170);
  fill(255);
  stroke(0);
  rect(490, 70, 700, 95);
  rect(490, 190, 300, 70);
  rect(490, 270, 300, 70);
  rect(490, 350, 300, 45);
  rect(490, 405, 300, 95);
  rect(490, 510, 300, 70);
  rect(490, 590, 300, 45);

  line(490, 452.5, 470, 452.5);
  line(470, 452.5, 470, 612.5);
  line(470, 612.5, 490, 612.5);

  fill(0);
  noStroke();
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  text("Erinnert euch an die Aufgabenstellung aus\nModul 1, bei der die Temperaturabhängigkeit\ndes Sensorwiderstands untersucht wurde\n(siehe rechts).", 20, 150);
  text("Erinnerung:\nIn Modul 1 solltet ihr die Sensortemperatur über die Heizspannung variieren\nund die Sensorreaktion aufnehmen.", 500, 100);
  text("1) Stelle die Heizspannung auf\n   ca. 2,8 Volt", 500, 220);
  text("2) Schraube das Glas an die\n    Halterung unter den Sensor.", 500, 300);
  text("3) Warte 30 Sekunden", 500, 380);
  text("4) Nimm den Widerstand auf\n    und schreibe ihn in\n    die Tabelle.", 500, 435);
  text("5) Verringere die Heizspannung\n    um 0,2 Volt.", 500, 540);
  text("6) Warte 10 Sekunden.", 500, 620);
  //image(Erinnerung, 0, 100);
}

function Folie50() {
  image(Apfelsaft_Wasser, 800, 170);
  fill(255);
  stroke(0);
  rect(490, 70, 700, 95);
  rect(490, 190, 300, 70);
  rect(490, 270, 300, 70);
  rect(490, 350, 300, 45);
  rect(490, 405, 300, 95);
  rect(490, 510, 300, 70);
  rect(490, 590, 300, 45);

  line(490, 452.5, 470, 452.5);
  line(470, 452.5, 470, 612.5);
  line(470, 612.5, 490, 612.5);

  fill(0);
  noStroke();
  textSize(30);
  text("Funktionsweise von Halbleitergas-\n      sensoren - Vertiefung", 30, 50);
  textSize(20);
  fill(200);
  text("Erinnert euch an die Aufgabenstellung aus\nModul 1, bei der die Temperaturabhängigkeit\ndes Sensorwiderstands untersucht wurde\n(siehe rechts).", 20, 150);
  fill(0);
  text("Erinnerung:\nIn Modul 1 solltet ihr die Sensortemperatur über die Heizspannung variieren\nund die Sensorreaktion aufnehmen.", 500, 100);
  text("1) Stelle die Heizspannung auf\n   ca. 2,8 Volt", 500, 220);
  text("2) Schraube das Glas an die\n    Halterung unter den Sensor.", 500, 300);
  text("3) Warte 30 Sekunden", 500, 380);
  text("4) Nimm den Widerstand auf\n    und schreibe ihn in\n    die Tabelle.", 500, 435);
  text("5) Verringere die Heizspannung\n    um 0,2 Volt.", 500, 540);
  text("6) Warte 10 Sekunden.", 500, 620);
  text("Nach Einstellung einer neuen Heizspannung\n(Temperaturänderung) solltet ihr immer einige\nSekunden abwarten, ehe ihr den Wert\ndes Widerstands notiert habt.", 20, 270);
}
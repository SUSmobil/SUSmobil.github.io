function Folie91() {
  textSize(30);
  text("Zusammenfassung des gesamten\n              Messprozesses", 10, 50);
  textSize(20);
  fill(0);
  text("Abschließend fassen wir den gesamten\nMessprozess einschließlich der Kalibrierung\nzusammen.", 50, 150);
  textSize(16);
  fill(200);
  text("→ Unser Ziel ist es, die Konzentration eines Zielgases zu\n    messen.", 30, 250);
  text("→ Im Allgemeinen ist das Zielgas Bestandteil eines Gasge-\n    misches (auch Untergrund, z.B. gewöhnliche Luft).", 30, 320);
  text("→ Der Gassensor wird mit einer veränderlichen Temperatur be-\n    trieben.", 30, 385);
  fill(0);
  text("→ Als Sensorantwort auf die veränderliche Temperatur wird ein\n    zum Untergrund und der Konzentration des Zielgases spezi-\n    fischer Verlauf des Sensorwiderstands gemessen.", 30, 450);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);



  fill(255, 230, 230);
  rect(550, 80, 360, 115);

  rect(930, 80, 160, 115);

  fill(255, 197, 150);
  rect(730, 100, 160, 75);


  fill(200, 200, 255);
  rect(730, 300, 160, 75);



  fill(0);
  noStroke();
  textSize(20);
  text("  Konzentration\neines Zielgases", 740, 130);
  text("Gasuntergrund", 560, 145);
  text("  veränderliche\n    Temperatur\ndes Gassensors", 942, 120);
  text("Widerstands-\n    verlauf", 752, 330);

  textSize(16);
  text("              Wandlung\nder ursprünglichen Messgröße\n   in eine elektrische Größe", 535, 240);

  stroke(0);
  line(810, 195, 810, 300);
  line(1010, 195, 810, 250);

}

function Folie92() {
  textSize(30);
  text("Zusammenfassung des gesamten\n              Messprozesses", 10, 50);
  textSize(20);
  fill(0);
  text("Abschließend fassen wir den gesamten\nMessprozess einschließlich der Kalibrierung\nzusammen.", 50, 150);
  textSize(16);
  fill(200);
  text("→ Unser Ziel ist es, die Konzentration eines Zielgases zu\n    messen.", 30, 250);
  text("→ Im Allgemeinen ist das Zielgas Bestandteil eines Gasge-\n    misches (auch Untergrund, z.B. gewöhnliche Luft).", 30, 320);
  text("→ Der Gassensor wird mit einer veränderlichen Temperatur be-\n    trieben.", 30, 385);
  text("→ Als Sensorantwort auf die veränderliche Temperatur wird ein\n    zum Untergrund und der Konzentration des Zielgases spezi-\n    fischer Verlauf des Sensorwiderstands gemessen.", 30, 450);
  fill(0);
  text("→ Aus dem Widerstandsverlauf werden Merkmale bestimmt (z.B.\n    Maximal-, Minimal-, Mittelwerte und Steigungen).", 30, 530);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);



  fill(255, 230, 230);
  rect(550, 80, 360, 115);

  rect(930, 80, 160, 115);

  fill(255, 197, 150);
  rect(730, 100, 160, 75);


  fill(200, 200, 255);
  rect(730, 300, 160, 75);

  for (let i = 0; i < 75; i++) {
    stroke(4 * i, 30, 255 - 4 * i);
    line(730, 445 + i, 890, 445 + i);
  }



  fill(0);
  noStroke();
  textSize(20);
  text("  Konzentration\neines Zielgases", 740, 130);
  text("Gasuntergrund", 560, 145);
  text("  veränderliche\n    Temperatur\ndes Gassensors", 942, 120);
  text("Widerstands-\n    verlauf", 752, 330);

  textSize(16);
  text("              Wandlung\nder ursprünglichen Messgröße\n   in eine elektrische Größe", 535, 240);

  textSize(20);
  fill(255);
  text("Merkmale des\n    Verlaufs", 752, 480);

  stroke(0);
  line(810, 195, 810, 300);
  line(1010, 195, 810, 250);

  line(810, 375, 810, 450);


}

function Folie93() {
  textSize(30);
  text("Zusammenfassung des gesamten\n              Messprozesses", 10, 50);
  textSize(20);
  fill(0);
  text("Abschließend fassen wir den gesamten\nMessprozess einschließlich der Kalibrierung\nzusammen.", 50, 150);
  textSize(16);
  fill(200);
  text("→ Unser Ziel ist es, die Konzentration eines Zielgases zu\n    messen.", 30, 250);
  text("→ Im Allgemeinen ist das Zielgas Bestandteil eines Gasge-\n    misches (auch Untergrund, z.B. gewöhnliche Luft).", 30, 320);
  text("→ Der Gassensor wird mit einer veränderlichen Temperatur be-\n    trieben.", 30, 385);
  text("→ Als Sensorantwort auf die veränderliche Temperatur wird ein\n    zum Untergrund und der Konzentration des Zielgases spezi-\n    fischer Verlauf des Sensorwiderstands gemessen.", 30, 450);
  text("→ Aus dem Widerstandsverlauf werden Merkmale bestimmt (z.B.\n    Maximal-, Minimal-, Mittelwerte und Steigungen).", 30, 530);
  fill(0);
  text("→ Die Merkmale ermöglichen Rückschlüsse auf die Konzentra-\n    tion. Sie sind Grundlage der Kalibrierung.", 30, 590);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);



  fill(255, 230, 230);
  rect(550, 80, 360, 115);

  rect(930, 80, 160, 115);

  fill(255, 197, 150);
  rect(730, 100, 160, 75);


  fill(200, 200, 255);
  rect(730, 300, 160, 75);

  for (let i = 0; i < 75; i++) {
    stroke(4 * i, 30, 255 - 4 * i);
    line(730, 445 + i, 890, 445 + i);
  }


  stroke(0);
  fill(255, 100, 100);
  rect(730, 600, 160, 75);



  fill(0);
  noStroke();
  textSize(20);
  text("  Konzentration\neines Zielgases", 740, 130);
  text("Gasuntergrund", 560, 145);
  text("  veränderliche\n    Temperatur\ndes Gassensors", 942, 120);
  text("Widerstands-\n    verlauf", 752, 330);

  text("Konzentration\ndes Zielgases", 752, 630);

  textSize(16);
  text("              Wandlung\nder ursprünglichen Messgröße\n   in eine elektrische Größe", 535, 240);
  text("           Kalibrierung\n Merkmale des Verlaufs auf\nKonzentration zurückführen", 898, 470);
  textSize(20);
  fill(255);
  text("Merkmale des\n    Verlaufs", 752, 480);

  stroke(0);
  line(810, 195, 810, 300);
  line(1010, 195, 810, 250);

  line(810, 375, 810, 450);
  line(810, 520, 810, 600);
}

function Folie94() {
  textSize(30);
  text("Zusammenfassung des gesamten\n              Messprozesses", 10, 50);
  textSize(20);
  fill(0);
  text("Abschließend fassen wir den gesamten\nMessprozess einschließlich der Kalibrierung\nzusammen.", 50, 150);
  textSize(16);
  fill(200);
  text("→ Unser Ziel ist es, die Konzentration eines Zielgases zu\n    messen.", 30, 250);
  text("→ Im Allgemeinen ist das Zielgas Bestandteil eines Gasge-\n    misches (auch Untergrund, z.B. gewöhnliche Luft).", 30, 320);
  text("→ Der Gassensor wird mit einer veränderlichen Temperatur be-\n    trieben.", 30, 385);
  text("→ Als Sensorantwort auf die veränderliche Temperatur wird ein\n    zum Untergrund und der Konzentration des Zielgases spezi-\n    fischer Verlauf des Sensorwiderstands gemessen.", 30, 450);
  text("→ Aus dem Widerstandsverlauf werden Merkmale bestimmt (z.B.\n    Maximal-, Minimal-, Mittelwerte und Steigungen).", 30, 530);
  text("→ Die Merkmale ermöglichen Rückschlüsse auf die Konzentra-\n    tion. Sie sind Grundlage der Kalibrierung.", 30, 590);
  fill(0);
  text("→ Der Mess- und Auswerteprozess basiert auf computergestütz-\n    ter Signalverarbeitung.", 30, 650);
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);

  fill(255, 230, 230);
  rect(550, 80, 360, 115);
  rect(930, 80, 160, 115);

  fill(255, 197, 150);
  rect(730, 100, 160, 75);
  fill(200, 200, 255);
  rect(730, 300, 160, 75);

  for (let i = 0; i < 75; i++) {
    stroke(4 * i, 30, 255 - 4 * i);
    line(730, 445 + i, 890, 445 + i);
  }

  for (let i = 0; i < 60; i++) {
    stroke(4 * i, 30, 255 - 4 * i);
    line(520, 450 + i, 690, 450 + i);
  }
  noStroke();
  fill(240);
  text("computergestützte\nSignalverarbeitung", 540, 474);

  stroke(0);
  fill(255, 100, 100);
  rect(730, 600, 160, 75);

  fill(0);
  noStroke();
  textSize(20);
  text("  Konzentration\neines Zielgases", 740, 130);
  text("Gasuntergrund", 560, 145);
  text("  veränderliche\n    Temperatur\ndes Gassensors", 942, 120);
  text("Widerstands-\n    verlauf", 752, 330);

  text("Konzentration\ndes Zielgases", 752, 630);

  textSize(16);
  text("              Wandlung\nder ursprünglichen Messgröße\n   in eine elektrische Größe", 535, 240);
  text("           Kalibrierung\n Merkmale des Verlaufs auf\nKonzentration zurückführen", 898, 470);
  textSize(20);
  fill(255);
  text("Merkmale des\n    Verlaufs", 752, 480);

  stroke(0);
  line(810, 195, 810, 300);
  line(1010, 195, 810, 250);

  line(810, 375, 810, 450);
  line(810, 520, 810, 600);
}


function Folie95() {
  textSize(50);
  text("Experimentelle Basis", 400, 300);
  textSize(40);
  text("Versuchsaufbau und\n      Durchführung", 452, 450);
}



function Folie96() {
  textSize(20);
  text("Die Abbildung zeigt euch den gesamten Versuchsaufbau. Auf den nächsten Folien werdet ihr die wichtigsten Komponenten kennen-\nlernen.", 20, 50);

  textSize(100);
  image(gesamtAufbau, 200, 65);
  weiter.show();
}



let angeklickt = [false, false, false, false];

let hauptseite = true;
let gaskammer = false;
let messkammer = false;
let mikrocontroller = false;
let pcUndKalibriersoftware = false;

function Folie97() {
  if (hauptseite) {
    Hauptseite();
    stichpunkteAudecken.hide();
  } else if (gaskammer) {
    Gaskammer();
    if (numberAufgedeckt == 3) {
      stichpunkteAudecken.hide();
      zurück.show();
    } else {
      stichpunkteAudecken.show();
      zurück.hide();
    }
  } else if (messkammer) {
    Messkammer();
    if (numberAufgedeckt == 4) {
      stichpunkteAudecken.hide();
      zurück.show();
    } else {
      stichpunkteAudecken.show();
      zurück.hide();
    }
  } else if (mikrocontroller) {
    MC();
    if (numberAufgedeckt == 4) {
      stichpunkteAudecken.hide();
      zurück.show();
    } else {
      stichpunkteAudecken.show();
      zurück.hide();
    }
  } else if (pcUndKalibriersoftware) {
    PCUndKali();
    if (numberAufgedeckt == 4) {
      stichpunkteAudecken.hide();
      zurück.show();
    } else {
      stichpunkteAudecken.show();
      zurück.hide();
    }
  }
}




function MC() {

  if (mcSeite == 0) {
    textSize(20);
    image(mcBild, 750, 100);
    text("Der Mikrocontroller (" + numberAufgedeckt + "/4)", 550, 50);

    Mikrocontroller(250, 250, 100, 100, 30);

    strokeWeight(3);
    stroke(0);
    line(100, 250, 167, 250);
    line(250, 167, 250, 120);

    noStroke();
    strokeWeight(1);
    fill(0);
    textSize(20);
    text("Verbindung\nzum Sensor", 20, 243);
    text("USB-Kabel zum PC", 170, 105);
    translate(0, 50);
    if (numberAufgedeckt == 1) {
      fill(150);
      fill(0);
      text("→ Der Mikrocontroller ist vergleichbar mit einem Minicomputer.", 20, 400);
    }
    if (numberAufgedeckt == 2) {
      fill(150);
      text("→ Der Mikrocontroller ist vergleichbar mit einem Minicomputer.", 20, 400);
      fill(0);
      text("→ Zum einen dient der Mikrocontroller als Steuerelement für den Sensor. Über einen Programmcode versorgt er den Sensor mit\neiner veränderlichen Heizspannung", 20, 450);
    }
    if (numberAufgedeckt == 3) {
      fill(150);
      text("→ Der Mikrocontroller ist vergleichbar mit einem Minicomputer.", 20, 400);
      text("→ Zum einen dient der Mikrocontroller als Steuerelement für den Sensor. Über einen Programmcode versorgt er den Sensor mit\neiner veränderlichen Heizspannung", 20, 450);
      fill(0);
      text("→ Zum anderen ist der Mikrocontroller ein Zwischenspeicher für die vom Sensor gelieferten Widerstands-Zeit-Verläufe.", 20, 520);
      text("→ Die Widerstands-Zeit-Verläufe werden via USB-Kabel zu einem PC weitergeleitet und mit einer Software ausgewertet.", 50, 560);
    }
    if (numberAufgedeckt == 4) {
      fill(150);
      text("→ Der Mikrocontroller ist vergleichbar mit einem Minicomputer.", 20, 400);
      text("→ Zum einen dient der Mikrocontroller als Steuerelement für den Sensor. Über einen Programmcode versorgt er den Sensor mit\neiner veränderlichen Heizspannung", 20, 450);
      text("→ Zum anderen ist der Mikrocontroller ein Zwischenspeicher für die vom Sensor gelieferten Widerstands-Zeit-Verläufe.", 20, 520);
      text("→ Die Widerstands-Zeit-Verläufe werden via USB-Kabel zu einem PC weitergeleitet und mit einer Software ausgewertet.", 50, 560);
      fill(0);
      text("→ Der Mikrocontroller ermöglicht also eine Automatisierung der Messung und Kalibrierung. Das macht das Experimentieren nicht nur\nkomfortabler, sondern auch weniger fehleranfällig.", 20, 610);
    }

    textSize(16);
    text("Modell", 220, 350);
    text("realer Versuchsaufbau", 800, 350);

    textSize(20);
  } else if (mcSeite == 1) {
    textSize(20);
    text("Mit welcher Temperatur wird der Sensor betrieben?", 420, 50);
    text("Wie du im Theorieteil gesehen hast, zeigt der Sensor bei Temperatursprüngen, abhängig vom Gasangebot, ein charakteristisches\nVerhalten.", 20, 100);
    text("Aus diesem Grund setzen wir den Sensor – gesteuert über den Mikrocontroller – abrupten Temperaturänderungen aus. Prinzipiell\nkann man beliebige Temperatursprünge wählen. Zwischen welchen Temperaturen die abrupten Wechsel für unseren\nKalibrierversuch stattfinden und warum wir diese so gewählt haben, wird auf der nächsten Folie erklärt.", 20, 550);


    stroke(0);
    rect(299, 160, 678, 340);
    image(Kurven_Konzentration1, 300, 161);


  } else if (mcSeite == 2) {
    stroke(0);
    rect(49, 199, 694, 455);
    image(TZyklus, 50, 200);

    noStroke();
    textSize(20);
    text("Die Sensortemperatur springt zwischen den Temperaturen 450°C und 200°C, sowie zwischen 450°C und 250°C.", 20, 100);
    text("Es hat sich gezeigt, dass der im Experiment\nverwendete Sensor für Temperaturen zwischen\n200°C und 250°C gut auf Ethanol reagiert. Man\nsagt, der Sensor hat für diese Temperaturen eine\nhohe Sensitivität zur Erfassung von Ethanol.", 750, 380);
  } else if (mcSeite == 3) {
    stroke(0);
    rect(49, 199, 694, 455);
    image(TZyklus, 50, 200);

    noStroke();
    textSize(20);
    text("Die Sensortemperatur springt zwischen den Temperaturen 450°C und 200°C, sowie zwischen 450°C und 250°C.", 20, 100);
    text("Nach einiger Zeit würde sich der Widerstand\neinem konstanten Wert annähern. Um dieses\nVerhalten zu unterbinden, wird der Sensor auf\neine sehr hohe Temperatur (450 °C) geheizt. Dies\nwirkt wie ein Reset, also eine Art Neustart.", 750, 220);
  } else if (mcSeite == 4) {
    stroke(0);
    rect(49, 199, 694, 455);
    image(TZyklus, 50, 200);

    noStroke();
    textSize(20);
    text("Die Sensortemperatur springt zwischen den Temperaturen 450°C und 200°C, sowie zwischen 450°C und 250°C.", 20, 100);
    text("Tatsächlich variiert die Temperatur des Sensors\nimmer und immer wieder (zyklisch) nach diesem\nMuster. Man sagt: Der Gassensor arbeitet im\ntemperaturzyklischen Betrieb.", 750, 550);
  } else if (mcSeite == 5) {
    stroke(0);
    rect(4, 199, 1194, 380);
    image(TZyklus_lang, 5, 200);
    angeklickt[2] = true;
    noStroke();
    fill(0);
    textSize(20);
    text("Zur Verdeutlichung, was temperaturzyklischer Betrieb meint, zeigt die Abbildung unten vier solcher Zyklen von jeweils 15 s\nund insgesamt 60 s Dauer. Im Prinzip geht das in „Endlosschleife“ immer weiter.", 20, 100);
  }

}


function PCUndKali() {
  angeklickt[3] = true;
  textSize(20);
  text("PC und Kalibriersoftware (" + numberAufgedeckt + "/4)", 500, 50);
  image(sftw, 570, 120);
  PC(100, 150, 200, 100);
  stroke(0);
  strokeWeight(3);
  line(300, 225, 350, 225);
  line(350, 225, 350, 300);
  strokeWeight(1);
  noStroke();
  fill(0);
  text("USB-Kabel zum\n Mikrocontroller", 290, 335);

  if (numberAufgedeckt == 1) {
    fill(0);
    text("→ Auf dem PC ist eine Software installiert, die ihr für die Kalibrierung des Gassensors benötigt.", 20, 470);
  }
  if (numberAufgedeckt == 2) {
    fill(150);
    text("→ Auf dem PC ist eine Software installiert, die ihr für die Kalibrierung des Gassensors benötigt.", 20, 470);
    fill(0);
    text("→ Hierzu werden die Widerstands-Zeit-Verläufe via USB-Kabel vom Mikrocontroller gesendet. ", 20, 520);

  }
  if (numberAufgedeckt == 3) {
    fill(150);
    text("→ Auf dem PC ist eine Software installiert, die ihr für die Kalibrierung des Gassensors benötigt.", 20, 470);
    text("→ Hierzu werden die Widerstands-Zeit-Verläufe via USB-Kabel vom Mikrocontroller gesendet. ", 20, 520);
    fill(0);
    text("→ Die Software nutzt ein mathematisches Modell, um einen Zusammenhang zwischen den gewählten Ethanolkonzentrationen und\nden Merkmalen der resultierenden Widerstands-Zeit-Kurven zu gewinnen.", 20, 570);
  }
  if (numberAufgedeckt == 4) {
    fill(150);
    text("→ Auf dem PC ist eine Software installiert, die ihr für die Kalibrierung des Gassensors benötigt.", 20, 470);
    text("→ Hierzu werden die Widerstands-Zeit-Verläufe via USB-Kabel vom Mikrocontroller gesendet. ", 20, 520);
    text("→ Die Software nutzt ein mathematisches Modell, um einen Zusammenhang zwischen den gewählten Ethanolkonzentrationen und\nden Merkmalen der resultierenden Widerstands-Zeit-Kurven zu gewinnen.", 20, 570);
    fill(0);
    text("→ Im nächsten Kapitel steht euch ein Tutorial bereit, bei dem ihr die wesentlichen Elemente der Kalibriersoftware kennenlernt.", 20, 640);
  }
  textSize(16);

  text("Modell", 220, 420);
  text("realer Versuchsaufbau", 750, 420);

  textSize(20);
}

//102

function Messkammer() {
  textSize(20);
  text("Die Messkammer (" + numberAufgedeckt + "/4)", 580, 50);

  image(messkammerBild, 780, 60);
  //messkammer
  //Messkammer(550, 500, 150, 100, 0, 255, 0, 10);
  translate(-400, -250);
  fill(120, 80, 80, 10);
  beginShape();
  vertex(550, 525);
  vertex(700, 350);
  vertex(900, 350);
  vertex(900, 425);
  vertex(750, 600)
  vertex(550, 600)
  endShape();
  stroke(100, 100, 100);
  strokeWeight(1);
  rect(550, 525, 200, 75);
  line(550, 525, 700, 350);
  line(700, 350, 900, 350);
  line(900, 350, 750, 525);
  line(900, 350, 900, 425);
  line(750, 600, 900, 425);

  for (let i = 0; i < 20; i++) {
    line(550 + 7.5 * i, 600 - 8.75 * i, 550 + 7.5 * i + 15 / 4, 600 - 8.75 * i - 17.5 / 4);
    line(700 + 200 * i / 20, 425, 700 + 200 * i / 20 + 5, 425)
  }

  for (let i = 0; i < 10; i++) {
    line(700, 425 - 75 * i / 10, 700, 425 - 75 * i / 10 - 7.5 / 3);
  }


  //SENSOR
  translate(450, -50)
  fill(0, 150, 0);
  noStroke();
  rect(200, 560, 100, 10);
  fill(0, 200, 0);
  beginShape();
  vertex(300, 570);
  vertex(300, 560);
  vertex(325, 530);
  vertex(325, 540);
  endShape();
  fill(0, 100, 0);
  beginShape();
  vertex(200, 560);
  vertex(230, 530);
  vertex(325, 530);
  vertex(300, 560);
  endShape();
  translate(-450, 50);

  translate(+400, +250);
  fill(0, 40);
  stroke(0);
  ellipse(250, 310, 40, 40);
  line(240, 300, 260, 320);
  line(240, 320, 260, 300);

  fill(0);
  ellipse(410, 245, 20, 20);
  strokeWeight(3);
  line(370, 245, 480, 245);
  strokeWeight(1);
  noStroke();

  if (numberAufgedeckt == 1) {
    fill(0);
    text("→ Das aus der Gasvorratskammer entnommene Gemisch aus Ethanoldampf und Luft wird mit einer Spritze in die Messkammer\nüberführt. Auch an der Messkammer ist hierfür ein Septum angebracht.", 20, 450);
  }
  if (numberAufgedeckt == 2) {
    fill(150);
    text("→ Das aus der Gasvorratskammer entnommene Gemisch aus Ethanoldampf und Luft wird mit einer Spritze in die Messkammer\nüberführt. Auch an der Messkammer ist hierfür ein Septum angebracht.", 20, 450);
    fill(0);
    text("→ Da sich der Ethanoldampf aus der Spritze (Konzentration c  ) mit der Luft in der Messkammer vermischt, verdünnt sich\ndie Konzentration zunächst auf c  . Wiederholtes Einspritzen der selben Menge Ethanoldampf führt nacheinander zu 2c  , 3c   usw.", 20, 520);
    textSize(16);
    text("0", 567, 530);
    text("1", 310, 550);
    text("1        1", 1075, 550);
  }
  if (numberAufgedeckt == 3) {
    fill(150);
    text("→ Das aus der Gasvorratskammer entnommene Gemisch aus Ethanoldampf und Luft wird mit einer Spritze in die Messkammer\nüberführt. Auch an der Messkammer ist hierfür ein Septum angebracht.", 20, 450);
    text("→ Da sich der Ethanoldampf aus der Spritze (Konzentration c  ) mit der Luft in der Messkammer vermischt, verdünnt sich\ndie Konzentration zunächst auf c  . Wiederholtes Einspritzen der selben Menge Ethanoldampf führt nacheinander zu 2c  , 3c   usw.", 20, 520);
    fill(0);
    text("→ Die Messkammer enthält den Gassensor (BME680). Mithilfe des Mikrocontrollers wird der Sensor über eine veränderliche\nHeizspannung versorgt.", 20, 590);
    textSize(16);
    fill(150);
    text("0", 567, 530);
    text("1", 310, 550);
    text("1        1", 1075, 550);
  }
  if (numberAufgedeckt == 4) {
    fill(150);
    text("→ Das aus der Gasvorratskammer entnommene Gemisch aus Ethanoldampf und Luft wird mit einer Spritze in die Messkammer\nüberführt. Auch an der Messkammer ist hierfür ein Septum angebracht.", 20, 450);
    text("→ Da sich der Ethanoldampf aus der Spritze (Konzentration c  ) mit der Luft in der Messkammer vermischt, verdünnt sich\ndie Konzentration zunächst auf c  . Wiederholtes Einspritzen der selben Menge Ethanoldampf führt nacheinander zu 2c  , 3c   usw.", 20, 520);
    text("→ Die Messkammer enthält den Gassensor (BME680). Mithilfe des Mikrocontrollers wird der Sensor über eine veränderliche\nHeizspannung versorgt.", 20, 590);
    fill(0);
    text("→ In Abhängigkeit der Konzentration in der Messkammer wird der gemessene Widerstands-Zeit-Verlauf über den Mikrocontroller\nzum PC geleitet.", 20, 660);
    angeklickt[1] = true;
    textSize(16);
    fill(150);
    text("0", 567, 530);
    text("1", 310, 550);
    text("1        1", 1075, 550);
  }

  textSize(16);
  text("Modell", 300, 400);
  text("realer Versuchsaufbau", 830, 400);

}




function Gaskammer() {
  textSize(20);
  text("Die Gasvorratskammer mit Heizer und Ventilator (" + numberAufgedeckt + "/3)", 400, 50);
  Gasvorratskammer(50, 175, 300, 300, 255, 0, 0, 10);
  textSize(16);
  text("Modell", 180, 500);
  text("Realer Aufbau", 800, 500);
  textSize(20);
  image(gasVorratVorschau, 630, 60);

  //HEIZER
  translate(0, -125);
  noStroke();
  fill(150);
  rect(200, 560, 100, 10);
  fill(200);
  beginShape();
  vertex(300, 570);
  vertex(300, 560);
  vertex(330, 530);
  vertex(330, 540);
  endShape();
  fill(100);
  beginShape();
  vertex(200, 560);
  vertex(230, 530);
  vertex(330, 530);
  vertex(300, 560);
  endShape();

  fill(0, 40);
  strokeWeight(1);
  stroke(0);
  ellipse(200, 450, 80, 80);
  line(180, 430, 220, 470);
  line(180, 470, 220, 430);
  translate(0, 125);

  noStroke();

  if (numberAufgedeckt == 1) {
    fill(0);
    text("→ Die Gasvorratskammer steht mehreren Arbeitsgruppen zur Verfügung. Bereits zu Beginn befindet sich in ihr eine Konzentration c   \nan Ethanoldampf (ihr berechnet den genauen Wert gleich).", 20, 530);
  }

  if (numberAufgedeckt == 2) {
    fill(150);
    text("→ Die Gasvorratskammer steht mehreren Arbeitsgruppen zur Verfügung. Bereits zu Beginn befindet sich in ihr die Konzentration c   \nan Ethanoldampf (ihr berechnet den genauen Wert gleich).", 20, 530);
    fill(0);
    text("→ Erzeugt wurde der Ethanoldampf durch einen Tropfen Ethanol, der auf den Heizer geträufelt wurde. Dieser ließ den Tropfen ver-\ndampfen und der Ventilator sorgt für eine gleichmäßige Verteilung in der Kammer.", 20, 595);


    text("Heizer", 250, 400);

  }
  if (numberAufgedeckt == 3) {
    fill(150);
    text("→ Die Gasvorratskammer steht mehreren Arbeitsgruppen zur Verfügung. Bereits zu Beginn befindet sich in ihr die Konzentration c   \nan Ethanoldampf (ihr berechnet den genauen Wert gleich).", 20, 530);
    text("→ Erzeugt wurde der Ethanoldampf durch einen Tropfen Ethanol, der auf den Heizer geträufelt wurde. Dieser ließ den Tropfen ver-\ndampfen und der Ventilator sorgt für eine gleichmäßige Verteilung in der Kammer.", 20, 595);
    fill(0);
    text("→ Aus der Gasvorratskammer werden über das sogenannte Septum kleine Mengen des Ethanol-Luft-Gemisches mit einer Spritze\nentnommen und in die Messkammer überführt. Nach Entnahme verschließt sich das Septum wieder.", 20, 660);
    angeklickt[0] = true;
    text("Heizer", 250, 400);
    text("Septum", 160, 270);
  }

}


function Hauptseite() {
  zurück.show();
  textSize(20);
  text("Der Messaufbau besteht im Wesentlichen aus vier Komponenten. Klicke nacheinander auf die Symbole        ,         ,          und          ,\ndamit du nähere Informationen zu den Komponenten und ihrer Rolle bei der Kalibrierung erfährst.\nDanach gelangst du zur Versuchsdurchführung.", 20, 50);
  Gasvorratskammer(50, 300, 300, 300, 255, 0, 0, 10);


  //messkammer
  //Messkammer(550, 500, 150, 100, 0, 255, 0, 10);
  translate(-50, 50);
  fill(120, 80, 80, 10);
  beginShape();
  vertex(550, 525);
  vertex(700, 350);
  vertex(900, 350);
  vertex(900, 425);
  vertex(750, 600);
  vertex(550, 600)
  endShape();
  stroke(100, 100, 100);
  strokeWeight(1);
  rect(550, 525, 200, 75);
  line(550, 525, 700, 350);
  line(700, 350, 900, 350);
  line(900, 350, 750, 525);
  line(900, 350, 900, 425);
  line(750, 600, 900, 425);

  for (let i = 0; i < 20; i++) {
    line(550 + 7.5 * i, 600 - 8.75 * i, 550 + 7.5 * i + 15 / 4, 600 - 8.75 * i - 17.5 / 4);
    line(700 + 200 * i / 20, 425, 700 + 200 * i / 20 + 5, 425)
  }

  for (let i = 0; i < 10; i++) {
    line(700, 425 - 75 * i / 10, 700, 425 - 75 * i / 10 - 7.5 / 3);
  }

  translate(50, -50);

  //Messkammer Ende


  PC(900, 150, 200, 120);
  Mikrocontroller(1000, 550, 100, 100, 30);


  //HEIZER
  noStroke();
  fill(150);
  rect(200, 560, 100, 10);
  fill(200);
  beginShape();
  vertex(300, 570);
  vertex(300, 560);
  vertex(330, 530);
  vertex(330, 540);
  endShape();
  fill(100);
  beginShape();
  vertex(200, 560);
  vertex(230, 530);
  vertex(330, 530);
  vertex(300, 560);
  endShape();


  //SENSOR
  translate(400, 0)
  fill(0, 150, 0);
  noStroke();
  rect(200, 560, 100, 10);
  fill(0, 200, 0);
  beginShape();
  vertex(300, 570);
  vertex(300, 560);
  vertex(325, 530);
  vertex(325, 540);
  endShape();
  fill(0, 100, 0);
  beginShape();
  vertex(200, 560);
  vertex(230, 530);
  vertex(325, 530);
  vertex(300, 560);
  endShape();
  translate(-400, 0);



  fill(200);
  strokeWeight(1);
  stroke(0);
  ellipse(200, 450, 80, 80);
  line(180, 430, 220, 470);
  line(180, 470, 220, 430);
  ellipse(600, 610, 40, 40);
  line(590, 620, 610, 600);
  line(590, 600, 610, 620);

  fill(0)
  ellipse(750, 550, 20, 20);


  strokeWeight(4);
  line(720, 550, 920, 550);
  line(1000, 470, 1000, 295);
  strokeWeight(1);


  if (angeklickt[0]) {
    fill(0, 255, 0);
  } else {
    fill(255);
  }
  ellipse(265, 250, 50, 50);
  if (angeklickt[1]) {
    fill(0, 255, 0);
  } else {
    fill(255);
  }
  ellipse(650, 370, 50, 50);
  if (angeklickt[2]) {
    fill(0, 255, 0);
  } else {
    fill(255);
  }
  ellipse(1000, 690, 50, 50);
  if (angeklickt[3]) {
    fill(0, 255, 0);
  } else {
    fill(255);
  }
  ellipse(1000, 210, 50, 50);


  fill(255);
  strokeWeight(1);
  ellipse(960, 40, 30, 30);
  ellipse(1015, 40, 30, 30);
  ellipse(1070, 40, 30, 30);
  ellipse(1160, 40, 30, 30);
  fill(0);
  noStroke();
  textSize(20);
  text("1        2        3              4", 955, 47);


  textSize(40);
  text("1", 253, 263);
  text("2", 638, 383);
  text("3", 988, 703);
  text("4", 988, 223);

  textSize(24);
  text("Gasvorratskammer mit\n Heizer und Ventilator", 180, 160);
  text("Messkammer mit\n     Gassensor", 565, 295);
  text("Mikrocontroller", 920, 660);
  text("PC und Kalibriersoftware", 860, 140);


  let alleAngeklickt = 0;
  for (let i = 0; i < angeklickt.length; i++) {
    if (angeklickt[i]) {
      alleAngeklickt += 1;
    }
  }

  if (alleAngeklickt == 4) {
    weiter.show();
  } else {
    weiter.hide();
  }
}


function PC(x, y, w, h) {
  fill(100, 100, 255);
  noStroke();
  rect(x, y, w, h);
  rect(x + w / 2 - w / 10, y + h, w / 5, h / 10);
  rect(x + w / 2 - w / 3, y + h + h / 10, 2 * w / 3, h / 10);
  fill(255);
  rect(x + w / 10, y + h / 10, 8 * w / 10, 8 * h / 10)
}


function Mikrocontroller(x, y, w, h, br) {

  fill(205, 102, 29);
  rect(x - w / 2, y - h / 2, w, h);
  fill(255);
  rect(x - 3 * w / 10, y - 3 * h / 10, 6 * w / 10, 6 * h / 10);
  fill(205, 102, 29);
  rect(x - w / 5, y - h / 5, 2 * w / 5, 2 * w / 5);

  strokeWeight(5);
  stroke(205, 102, 29);
  for (let i = 1; i < 8; i++) {
    line(x + w / 2 + 10, y - h / 2 + i * h / 8, x + w / 2 + br, y - h / 2 + i * h / 8);
    line(x - w / 2 - 10, y - h / 2 + i * h / 8, x - w / 2 - br, y - h / 2 + i * h / 8);
    line(x - w / 2 + i * w / 8, y - w / 2 - 10, x - w / 2 + i * w / 8, y - w / 2 - br);
    line(x - w / 2 + i * w / 8, y + w / 2 + 10, x - w / 2 + i * w / 8, y + w / 2 + br);
  }
}

function Gasvorratskammer(x, y, w, h, r, g, b, alpha) {
  push();
  stroke(r, g, b);
  line(x, y, x + w, y);
  line(x, y, x, y + h);
  line(x, y + h, x + w, y + h);
  line(x + w, y, x + w, y + h);


  line(x, y, x + w / 3, y - h / 3);

  line(x + w, y, x + w + w / 3, y - h / 3);
  line(x + w / 3, y - h / 3, x + w + w / 3, y - h / 3);
  line(x + w, y + h, x + w + w / 3, y + h - h / 3);
  line(x + w + w / 3, y + h - h / 3, x + w + w / 3, y - h / 3);


  //dotted lines

  strokeWeight(1);
  for (let i = 0; i < 10; i++) {
    line(x + i * w / 30, y + h - i * h / 30, x + i * w / 30 + w / 60, y + h - i * h / 30 - h / 60);
  }
  for (let i = 0; i < 30; i++) {
    line(x + w / 3 + i * w / 30, y + h - h / 3, x + w / 3 + i * w / 30 + w / 60, y + h - h / 3);
    line(x + w / 3, y + h - h / 3 - i * h / 30, x + w / 3, y + h - h / 3 - i * h / 30 - h / 60);
  }


  fill(r, g, b, alpha);
  beginShape();
  vertex(x, y);
  vertex(x + w / 3, y - h / 3);
  vertex(x + w + w / 3, y - h / 3);
  vertex(x + w + w / 3, y + h - h / 3);
  vertex(x + w, y + h);
  vertex(x, y + h);
  endShape();

  pop();
}


function Spritze(x, y, fuellung) {
  stroke(0);
  fill(255);
  rect(x - 15, y, 30, 150);
  arc(x, y + 150, 30, 10, 0, 2 * PI / 2);
  fill(0, 206, 209);
  rect(x - 5, y + fuellung, 10, 150);
  rect(x - 15, y + fuellung, 30, 10);
  line(x - 15, y + 150, x + 15, y + 150);
  ellipse(x, y + 145 + fuellung, 50, 25);
  ellipse(x, y + 150 + fuellung, 30, 25);


  fill(255, 0, 0, 100);
  rect(x - 15, y, 30, fuellung);

  stroke(0);
  strokeWeight(4);
  line(x, y, x, y - 40);
  strokeWeight(1);
  for (let i = 0; i < 20; i++) {
    line(x + 5, y + 7 + 5 * i, x + 15, y + 7 + 5 * i);
  }
  for (let i = 0; i < 4; i++) {
    strokeWeight(1.4);
    line(x + 2, y + 7 + 25 * i + 20, x + 15, y + 7 + 25 * i + 20);
  }
}


function Folie98() {
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Gasvorratskammer mit Heizer\n            und Ventilator", 20, 550);
  text("Messkammer", 400, 550);
  text("Mikrocontroller", 1050, 655);
  Gasvorratskammer2(255, 0, 0, 5);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(120, 80, 80, 5);
  Pipette(195, pipY, 75);
  pipY = 20;

}

function Folie99() {
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Gasvorratskammer mit Heizer\n            und Ventilator", 20, 550);
  text("Messkammer", 400, 550);
  text("Mikrocontroller", 1050, 655);
  text("Ein Tropfen Ethanol wird mithilfe\neiner Pipette...", 300, 50);
  Gasvorratskammer2(255, 0, 0, 5);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(120, 80, 80, 5);
  Pipette(195, pipY, 75);
  pipY = 20;
  fuellung = 75;
}

let fuellung = 75;

function Folie100() {
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Gasvorratskammer mit Heizer\n            und Ventilator", 20, 550);
  text("Messkammer", 400, 550);
  text("Mikrocontroller", 1050, 655);
  text("Ein Tropfen Ethanol wird mithilfe\neiner Pipette...", 300, 50);
  Gasvorratskammer2(255, 0, 0, 5);
  Mikrocontroller(975, 650, 50, 50, 15);
  PC(750, 150, 450, 350);
  stroke(0);
  strokeWeight(3);
  line(975, 570, 975, 595);
  line(730, 650, 915, 650);
  line(730, 650, 730, 400);
  line(730, 400, 585, 400);
  Messkammer2(120, 80, 80, 5);

  if (pipY < 280) {
    pipY += 2;
  }
  if (pipY > 280) {
    pipY = 280;
  }
  weiter.hide();
  if (pipY == 280) {
    if (fuellung > 0) {
      fuellung -= 1;
    }
    fill(0);
    noStroke();
    text("... auf die Heizplatte\ngeträufelt.", 370, 115);
    noStroke();
    fill(255, 0, 0);
    ellipse(205, 450, 75 - fuellung, 25 - fuellung / 3);
    if (fuellung > 5) {
      weiter.hide();
    } else {
      weiter.show();
    }
  }
  Pipette(195, pipY, fuellung);
}



function Folie101() {

  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Gasvorratskammer mit Heizer\n            und Ventilator", 20, 550);
  text("Messkammer", 400, 550);
  text("Mikrocontroller", 1050, 655);
  Gasvorratskammer2(255, 0, 0, 5);
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
  ellipse(205, 450, 75 - fuellung, 25 - fuellung / 3);
  if (fuellung > 5) {
    weiter.hide();
  } else {
    weiter.show();
  }

  Pipette(195, pipY, fuellung);
}



let hitze = 5;

function Folie102() {
  weiter.hide();
  textSize(20);
  text("PC mit Kalibriersoftware", 880, 130);
  text("Gasvorratskammer mit Heizer\n            und Ventilator", 20, 550);
  text("Messkammer", 400, 550);
  text("Mikrocontroller", 1050, 655);
  text("Der Tropfen verdampft. Es bildet sich eine\n               Ethanol-Atmosphäre.", textX - 60, 110);
  if (textX < 100) {
    textX += 4;
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
  Messkammer2(120, 80, 80, 5);

  if (hitze < 150) {
    hitze += 1;
  } else {
    weiter.show();
  }
  noStroke();
  fill(255, 0, 0);
  ellipse(205, 450, 75 - fuellung - hitze / 2, 25 - fuellung / 3 - hitze / 6);


  Pipette(195, pipY, fuellung);
}



function Gasvorratskammer2(r, g, b, alpha) {
  Gasvorratskammer(30, 250, 250, 250, r, g, b, alpha);
  //Heizer
  translate(-60, -95);
  noStroke();
  fill(150);
  rect(200, 560, 100, 10);
  fill(200);
  beginShape();
  vertex(300, 570);
  vertex(300, 560);
  vertex(330, 530);
  vertex(330, 540);
  endShape();
  fill(220);
  beginShape();
  vertex(200, 560);
  vertex(230, 530);
  vertex(330, 530);
  vertex(300, 560);
  endShape();
  translate(60, 95);
  fill(200);
  stroke(0);
  ellipse(170, 370, 50, 50);
  line(160, 360, 180, 380);
  line(160, 380, 180, 360);
}

function Messkammer2(r, g, b, alpha) {
  noStroke();
  translate(-180, -100);
  fill(r, g, b, alpha);
  beginShape();
  vertex(550, 525);
  vertex(700, 350);
  vertex(900, 350);
  vertex(900, 425);
  vertex(750, 600);
  vertex(550, 600)
  endShape();
  stroke(r, g, b);
  strokeWeight(1);
  rect(550, 525, 200, 75);
  line(550, 525, 700, 350);
  line(700, 350, 900, 350);
  line(900, 350, 750, 525);
  line(900, 350, 900, 425);
  line(750, 600, 900, 425);

  for (let i = 0; i < 20; i++) {
    line(550 + 7.5 * i, 600 - 8.75 * i, 550 + 7.5 * i + 15 / 4, 600 - 8.75 * i - 17.5 / 4);
    line(700 + 200 * i / 20, 425, 700 + 200 * i / 20 + 5, 425)
  }

  for (let i = 0; i < 10; i++) {
    line(700, 425 - 75 * i / 10, 700, 425 - 75 * i / 10 - 7.5 / 3);
  }
  translate(180, 100);





  //SENSOR
  translate(270, -150)
  fill(0, 150, 0);
  noStroke();
  rect(200, 560, 100, 10);
  fill(0, 200, 0);
  beginShape();
  vertex(300, 570);
  vertex(300, 560);
  vertex(325, 530);
  vertex(325, 540);
  endShape();
  fill(0, 100, 0);
  beginShape();
  vertex(200, 560);
  vertex(230, 530);
  vertex(325, 530);
  vertex(300, 560);
  endShape();
  translate(-270, -150);
  translate(0, 300);
  fill(200);
  stroke(0);
  ellipse(475, 460, 50, 50);
  line(465, 450, 485, 470);
  line(465, 470, 485, 450);
}


let pipY = 20;

//Füllung 100 = voll, 0 = leer
function Pipette(x, y, fuellung) {
  fill(140, 70, 20);
  noStroke();
  beginShape();

  vertex(x - 20, y + 20);
  vertex(x, y + 20);
  vertex(x, y);
  vertex(x + 20, y);
  vertex(x + 20, y + 20);
  vertex(x + 40, y + 20);
  vertex(x + 40, y + 40);
  vertex(x, y + 40);
  vertex(x - 20, y + 40);


  endShape();
  stroke(0);
  strokeWeight(2);
  line(x, y, x, y + 20);
  line(x + 20, y, x + 20, y + 20);
  fill(140, 70, 20);
  arc(x + 10, y, 20, 20, PI, TWO_PI);
  line(x - 20, y + 20, x, y + 20);
  line(x + 20, y + 20, x + 40, y + 20);
  arc(x + 40, y + 30, 20, 20, 3 * PI / 2, 5 * PI / 2);
  arc(x - 20, y + 30, 20, 20, PI / 2, 3 * PI / 2);
  stroke(0);
  line(x - 20, y + 40, x + 40, y + 40);
  fill(255, 0, 0);
  noStroke();
  rect(x - 5, y + 140, 30, -fuellung);
  stroke(0);
  line(x - 5, y + 40, x - 5, y + 140);
  line(x + 25, y + 40, x + 25, y + 140);
  arc(x + 10, y + 140, 30, 20, 4 * PI / 2, 6 * PI / 2);
  noStroke();
  rect(x + 5, y + 150, 10, 5);
  stroke(0);
  line(x + 5, y + 150, x + 5, y + 155);
  line(x + 15, y + 150, x + 15, y + 155);
  arc(x + 10, y + 155, 10, 10, 4 * PI / 2, 6 * PI / 2);
}




//
//
// function Folie96() {
//   textSize(30);
//   text("Versuch: Ethanol-Kalibrierung", 20, 60);
//
//   textSize(20);
//   text("Du hast nun alle Grundlagen um selber eine Kalibrierung durchzuführen. Wir werden gemeinsam einen Halbleiter-Gassensor auf\nverschiedene Ethanol-Konzentrationen kalibrieren. Dazu werden wir zunächst eine Ethanol-Atmosphäre in einer Plexiglasbox er-\nzeugen.", 20, 120);
//   text("Mit einer Spritze können wir dann eine definierte Konzentration auf den Sensor geben und uns die Reaktion anschauen. Diese wird\nsich für verschiedene Konzentrationen unterscheiden.", 20, 340);
//
//   text("Deine Aufgabe wird es dann sein besondere Merkmale der Reaktionskurven für verschiedene Konzentration zu bestimmen, welche\nein neuronales Netz nutzt um ein mathematisches Modell zu erzeugen, das diese mit den Konzentrationen in Verbindung bringt.", 20, 570);
//
// }
//
// function Folie97() {
//
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Gaskonzentrationen können als Volumenanteil oder als Massenanteil angegeben werden. In SUSmobil werden wir meistens mit der\nKonzentration als Volumenanteil arbeiten.", 20, 120);
//   textSize(20);
//   text("Um sich ein Bild zu machen, was „Konzentration\nals Volumenanteil“ bedeutet, betrachten wir als\neinfaches Beispiel die Zusammensetzung der\n(trockenen) Luft. Diese besteht fast ausschließlich\naus Stickstoff (78 %) und Sauerstoff (21 %). \n\n\n\nNur etwa 1 von 100  Gasteilchen in trockener Luft,\nalso 1 % (auch Vol-%, sprich: Volumenprozent),\ngehört zu einem anderen Gas (z.B. Argon, Helium,\nWasserstoff, CO2).", 20, 250);
//   image(Zusammensetzung_Luft, 580, 250);
// }
//
// function Folie98() {
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Gerade, wenn wir uns für Luftschadstoffe interessieren, werden wir Konzentrationen vorfinden, die zumeist noch sehr viel kleiner sind\nals 1 Vol-%. In diesen Fällen ist es einfacher, wenn man anstelle des Volumenprozent kleinere Einheiten verwendet. Eine kleinere\nEinheit als das Prozent kennt ihr sicherlich: Das Promille.\nDaneben sind noch kleinere Konzentrationseinheiten üblich. Im folgenden Gedankenexperiment lernt Ihr sie kennen.", 20, 130);
//
// }
//
// function Folie99() {
//
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Gerade, wenn wir uns für Luftschadstoffe interessieren, werden wir Konzentrationen vorfinden, die zumeist noch sehr viel kleiner sind\nals 1 Vol-%. In diesen Fällen ist es einfacher, wenn man anstelle des Volumenprozent kleinere Einheiten verwendet. Eine kleinere\nEinheit als das Prozent kennt ihr sicherlich: Das Promille.\nDaneben sind noch kleinere Konzentrationseinheiten üblich. Im folgenden Gedankenexperiment lernt Ihr sie kennen.", 20, 130);
//
//   text("Stellt euch vor, das Blut eines angetrunkenen Autofahrers enthält 1 Promille Alkohol. Das bedeutet, dass auf 1000 Moleküle des Blu-\ntes im Mittel 1 Molekül Alkohol (Ethanol) kommt, also c = 1/1000 = 1 Vol ‰ = 0,1 Vol %.", 20, 290);
//
// }
//
// function Folie100() {
//
//   textSize(30);
//   text("Konzentrationen als Volumenanteil", 20, 60);
//   textSize(20);
//   text("Gerade, wenn wir uns für Luftschadstoffe interessieren, werden wir Konzentrationen vorfinden, die zumeist noch sehr viel kleiner sind\nals 1 Vol-%. In diesen Fällen ist es einfacher, wenn man anstelle des Volumenprozent kleinere Einheiten verwendet. Eine kleinere\nEinheit als das Prozent kennt ihr sicherlich: Das Promille.\nDaneben sind noch kleinere Konzentrationseinheiten üblich. Im folgenden Gedankenexperiment lernt Ihr sie kennen.", 20, 130);
//
//   text("Stellt euch vor, das Blut eines angetrunkenen Autofahrers enthält 1 Promille Alkohol. Das bedeutet, dass auf 1000 Moleküle des Blu-\ntes im Mittel 1 Molekül Alkohol (Ethanol) kommt, also c = 1/1000 = 1 Vol ‰ = 0,1 Vol %.", 20, 290);
//   image(Würfel, 600, 400);
//   textSize(23);
//   text("    Blutprobe mit einer\nAlkoholkonzentration von\n\n        c = 1 Vol-‰", 200, 500);
//
// }
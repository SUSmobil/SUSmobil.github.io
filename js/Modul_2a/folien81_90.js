function Folie81() {
  textSize(50);
  text("Theoretische Grundlagen", 400, 300);
  textSize(40);
  text("Zusammenfassung des\n      Messprozesses", 460, 500);
}

function Folie82() {
  textSize(30);
  text("    Verfeinerung des\nWandlungsprozesses", 100, 50);
  textSize(20);
  text("Mit dem Wissen der letzten Folien ergänzen\nbzw. verfeinern wir den bislang entwickelten\nWandlungsprozess des Halbleitergassensors an\nvier Stellen.", 50, 150);


  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);


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


  text("Gasart", 585, 100);
  text("Gaskonzen-\n    tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);

  text("Geschwindigkeit\n  der Elektronen", 870, 450);
  text("  Bedeckung der\nSensoroberfläche\n  mit Sauerstoff", 610, 250);
  text("Anzahl freier\n  Elektronen", 630, 450);

  text("  Sensor\nwiderstand", 752, 600);

}


function Folie83() {
  textSize(30);
  text("    Verfeinerung des\nWandlungsprozesses", 100, 50);
  textSize(20);
  fill(0);
  text("Mit dem Wissen der letzten Folien ergänzen\nbzw. verfeinern wir den bislang entwickelten\nWandlungsprozess des Halbleitergassensors an\nvier Stellen.", 50, 150);

  text("→ Anstelle mit einer konstanten Temperatur\n    betreibt man den Sensor mit\n    veränderlichen Temperaturen.", 50, 280);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);


  stroke(0);
  fill(200, 200, 255);
  rect(720, 570, 160, 75);
  fill(255, 197, 150);
  rect(550, 60, 130, 75);
  rect(710, 60, 170, 75);
  stroke(255, 0, 0);
  strokeWeight(5);
  rect(910, 60, 150, 75);
  stroke(0);
  strokeWeight(1);
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


  text("Gasart", 585, 100);
  text("Gaskonzen-\n    tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);

  text("Geschwindigkeit\n  der Elektronen", 870, 450);
  text("  Bedeckung der\nSensoroberfläche\n  mit Sauerstoff", 610, 250);
  text("Anzahl freier\n  Elektronen", 630, 450);

  text("  Sensor\nwiderstand", 752, 600);



}

function Folie84() {
  textSize(30);
  text("    Verfeinerung des\nWandlungsprozesses", 100, 50);
  textSize(20);
  fill(0);
  text("Mit dem Wissen der letzten Folien ergänzen\nbzw. verfeinern wir den bislang entwickelten\nWandlungsprozess des Halbleitergassensors an\nvier Stellen.", 50, 150);
  fill(200);
  text("→ Anstelle mit einer konstanten Temperatur\n    betreibt man den Sensor mit\n    veränderlichen Temperaturen.", 50, 280);
  fill(0);
  text("→ Die Geschwindigkeit der Elektronen wird\n    von einer Temperaturänderung sofort\n    beeinflusst.", 50, 380);
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);


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



  stroke(255, 0, 0);
  strokeWeight(3);
  line(985, 135, 940, 420);
  stroke(0);
  strokeWeight(1);
  line(940, 490, 800, 570);

  line(615, 135, 690, 220);
  line(795, 135, 690, 220);
  line(985, 135, 690, 220);

  line(690, 320, 690, 420);

  line(690, 490, 800, 570);



  textSize(20);
  noStroke();
  fill(0);


  text("Gasart", 585, 100);
  text("Gaskonzen-\n    tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);

  text("Geschwindigkeit\n  der Elektronen", 870, 450);
  text("  Bedeckung der\nSensoroberfläche\n  mit Sauerstoff", 610, 250);
  text("Anzahl freier\n  Elektronen", 630, 450);

  text("  Sensor\nwiderstand", 752, 600);


  translate(width / 2, height / 2);
  rotate(-PI / 2 + 0.15);
  fill(255, 0, 0);
  text("unmittelbar", 100, 270);

}

function Folie85() {
  textSize(30);
  text("    Verfeinerung des\nWandlungsprozesses", 100, 50);
  textSize(20);
  fill(0);
  text("Mit dem Wissen der letzten Folien ergänzen\nbzw. verfeinern wir den bislang entwickelten\nWandlungsprozess des Halbleitergassensors an\nvier Stellen.", 50, 150);
  fill(200);
  text("→ Anstelle mit einer konstanten Temperatur\n    betreibt man den Sensor mit\n    veränderlichen Temperaturen.", 50, 280);
  text("→ Die Geschwindigkeit der Elektronen wird\n    von einer Temperaturänderung sofort\n    beeinflusst.", 50, 380);
  fill(0);
  text("→ Die Bedeckung der Sensoroberfläche mit\n    Sauerstoff und folglich die Anzahl freier\n    Ladungsträger ändern sich dagegen allmählich.", 50, 470);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);


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



  stroke(255, 0, 0);
  strokeWeight(3);
  line(985, 135, 690, 220);

  stroke(0);
  strokeWeight(1);
  line(940, 490, 800, 570);
  line(985, 135, 940, 420);
  line(615, 135, 690, 220);
  line(795, 135, 690, 220);


  line(690, 320, 690, 420);

  line(690, 490, 800, 570);



  textSize(20);
  noStroke();
  fill(0);


  text("Gasart", 585, 100);
  text("Gaskonzen-\n    tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);

  text("Geschwindigkeit\n  der Elektronen", 870, 450);
  text("  Bedeckung der\nSensoroberfläche\n  mit Sauerstoff", 610, 250);
  text("Anzahl freier\n  Elektronen", 630, 450);

  text("  Sensor\nwiderstand", 752, 600);
  push();
  translate(width / 2, height / 2);
  rotate(-PI / 2 + 0.15);
  fill(0);
  text("unmittelbar", 100, 270);
  pop();


  push();
  translate(width / 2, height / 2);
  rotate(-0.29);
  fill(255, 0, 0);
  text("allmählich", 150, -130);
  pop();

}

function Folie86() {
  textSize(30);
  text("    Verfeinerung des\nWandlungsprozesses", 100, 50);
  textSize(20);
  fill(0);
  text("Mit dem Wissen der letzten Folien ergänzen\nbzw. verfeinern wir den bislang entwickelten\nWandlungsprozess des Halbleitergassensors an\nvier Stellen.", 50, 150);
  fill(200);
  text("→ Anstelle mit einer konstanten Temperatur\n    betreibt man den Sensor mit\n    veränderlichen Temperaturen.", 50, 280);
  text("→ Die Geschwindigkeit der Elektronen wird\n    von einer Temperaturänderung sofort\n    beeinflusst.", 50, 380);
  text("→ Die Bedeckung der Sensoroberfläche mit\n    Sauerstoff und folglich die Anzahl freier\n    Ladungsträger ändern sich dagegen allmählich.", 50, 470);
  fill(0);
  text("→ Bei gegebener Gasart und Konzentration\n    in der untersuchten Atmosphäre führt eine\n    Temperaturänderung zu einem charakteris-\n    tischen Verlauf des Sensorwiderstands.", 50, 570);
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);

  strokeWeight(5);
  stroke(255, 0, 0);
  fill(200, 200, 255);
  rect(720, 570, 160, 75);
  strokeWeight(1);
  stroke(0);
  fill(255, 197, 150);
  rect(550, 60, 130, 75);
  rect(710, 60, 170, 75);

  rect(910, 60, 150, 75);

  fill(50, 205, 50);
  rect(850, 420, 180, 70);
  rect(590, 220, 200, 100);
  rect(590, 420, 200, 70);




  line(985, 135, 690, 220);

  line(940, 490, 800, 570);
  line(985, 135, 940, 420);
  line(615, 135, 690, 220);
  line(795, 135, 690, 220);


  line(690, 320, 690, 420);

  line(690, 490, 800, 570);



  textSize(20);
  noStroke();
  fill(0);


  text("Gasart", 585, 100);
  text("Gaskonzen-\n    tration", 740, 90);
  text("  Sensor-\ntemperatur", 935, 90);

  text("Geschwindigkeit\n  der Elektronen", 870, 450);
  text("  Bedeckung der\nSensoroberfläche\n  mit Sauerstoff", 610, 250);
  text("Anzahl freier\n  Elektronen", 630, 450);

  text("  Sensor\nwiderstand", 752, 600);
  push();
  translate(width / 2, height / 2);
  rotate(-PI / 2 + 0.15);
  fill(0);
  text("unmittelbar", 100, 270);
  pop();


  push();
  translate(width / 2, height / 2);
  rotate(-0.29);
  fill(0);
  text("allmählich", 150, -130);
  pop();
}

function Folie87() {
  textSize(30);
  text("Zusammenfassung des gesamten\n              Messprozesses", 10, 50);
  textSize(20);
  text("Abschließend fassen wir den gesamten\nMessprozess einschließlich der Kalibrierung\nzusammen.", 50, 150);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);
}

function Folie88() {
  textSize(30);
  text("Zusammenfassung des gesamten\n              Messprozesses", 10, 50);
  textSize(20);
  fill(0);
  text("Abschließend fassen wir den gesamten\nMessprozess einschließlich der Kalibrierung\nzusammen.", 50, 150);
  textSize(16);
  text("→ Unser Ziel ist es, die Konzentration eines Zielgases zu\n    messen.", 30, 250);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);


  fill(255, 197, 150);
  rect(730, 100, 160, 75);



  fill(0);
  noStroke();
  textSize(20);
  text("  Konzentration\neines Zielgases", 740, 130);

}

function Folie89() {
  textSize(30);
  text("Zusammenfassung des gesamten\n              Messprozesses", 10, 50);
  textSize(20);
  fill(0);
  text("Abschließend fassen wir den gesamten\nMessprozess einschließlich der Kalibrierung\nzusammen.", 50, 150);
  textSize(16);
  fill(200);
  text("→ Unser Ziel ist es, die Konzentration eines Zielgases zu\n    messen.", 30, 250);
  fill(0);
  text("→ Im Allgemeinen ist das Zielgas Bestandteil eines Gasge-\n    misches (auch Untergrund, z.B. gewöhnliche Luft).", 30, 320);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);



  fill(255, 230, 230);
  rect(550, 80, 360, 115);


  fill(255, 197, 150);
  rect(730, 100, 160, 75);



  fill(0);
  noStroke();
  textSize(20);
  text("  Konzentration\neines Zielgases", 740, 130);
  text("Gasuntergrund", 560, 145);


}

function Folie90() {
  textSize(30);
  text("Zusammenfassung des gesamten\n              Messprozesses", 10, 50);
  textSize(20);
  fill(0);
  text("Abschließend fassen wir den gesamten\nMessprozess einschließlich der Kalibrierung\nzusammen.", 50, 150);
  textSize(16);
  fill(200);
  text("→ Unser Ziel ist es, die Konzentration eines Zielgases zu\n    messen.", 30, 250);
  text("→ Im Allgemeinen ist das Zielgas Bestandteil eines Gasge-\n    misches (auch Untergrund, z.B. gewöhnliche Luft).", 30, 320);
  fill(0);
  text("→ Der Gassensor wird mit einer veränderlichen Temperatur be-\n    trieben.", 30, 385);

  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(500, 50, 600, 650);



  fill(255, 230, 230);
  rect(550, 80, 360, 115);

  rect(930, 80, 160, 115);

  fill(255, 197, 150);
  rect(730, 100, 160, 75);



  fill(0);
  noStroke();
  textSize(20);
  text("  Konzentration\neines Zielgases", 740, 130);
  text("Gasuntergrund", 560, 145);
  text("  veränderliche\n    Temperatur\ndes Gassensors", 942, 120);

}
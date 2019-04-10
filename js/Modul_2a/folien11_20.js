function Folie11() {
  textSize(30);
  text("Willkommen", 180, 50);
  textSize(20);
  fill(200);
  text("Der Grund für die ausgesprochen vielfältigen\nAnwendungsmöglichkeiten von Smartphones liegt\nin ihrer Ausstattung mit einer hochentwickelten\nElektronik im Miniaturformat und einer Reihe von\ntechnischen Sensoren.", 50, 100);
  text("Aus dem Bild gewinnst du einen Eindruck vom\nkomplexen „Innenleben“ eines Smartphones.", 50, 250);
  image(Handy_innen_2, 600, 50);
  fill(0);
  text("Und die Rückseite mit ausgewählten Beschriftungen:\n\n1 … Rückseite des berührungssensitiven Displays\n2 … der Näherungssensor\n3 … der Taster für den „Home-Button“\n4 … das Mikrofon", 50, 350);


  text("... und vieles mehr...", 120, 600);

  fill(255);
  stroke(0);
  rect(790, 240, 40, 40);
  rect(1030, 150, 40, 40);

  rect(977, 420, 40, 40);


  rect(1050, 500, 40, 40);
  fill(0);
  text("1", 805, 267);
  text("2", 1045, 177);
  text("3", 992, 447);
  text("4", 1065, 527);

  stroke(255);
  strokeWeight(4);
  line(1050, 150, 1050, 100);
  line(997, 460, 997, 520);
  line(1053, 520, 1026, 555);
}

function Folie12() {
  textSize(30);
  text("Willkommen", 550, 50);
  textSize(20);
  text("Aber auch abgesehen von den Sensoren im Smartphone: Technische Sensoren sind aus unserer modernen Welt nicht mehr \nwegzudenken. \nSie dienen unter anderem der Messung und Überwachung. Zwei Beispiele gefällig?", 20, 100);
}

function Folie13() {
  textSize(30);
  text("Willkommen", 550, 50);
  textSize(20);
  fill(200);
  text("Aber auch abgesehen von den Sensoren im Smartphone: Technische Sensoren sind aus unserer modernen Welt nicht mehr \nwegzudenken. \nSie dienen unter anderem der Messung und Überwachung. Zwei Beispiele gefällig?", 20, 100);
  fill(0);
  text("Blitzer und Radarkontrolle", 145, 260);
  textSize(20);
  text("Zur Sicherheit der Verkehrsteilnehmer, aber auch zum\nSchutz vor Lärm werden Geschwindigkeitskontrollen\ndurchgeführt. Dies geschieht mit optischen Sensoren, die\ndie Laufzeit von Radarwellen analysieren können.", 50, 310);
  image(Blitzer, 55, 410);
}

function Folie14() {
  textSize(30);
  text("Willkommen", 550, 50);
  textSize(20);
  fill(200);
  text("Aber auch abgesehen von den Sensoren im Smartphone: Technische Sensoren sind aus unserer modernen Welt nicht mehr \nwegzudenken. \nSie dienen unter anderem der Messung und Überwachung. Zwei Beispiele gefällig?", 20, 100);
  text("Blitzer und Radarkontrolle", 145, 260);
  textSize(20);
  text("Zur Sicherheit der Verkehrsteilnehmer, aber auch zum\nSchutz vor Lärm werden Geschwindigkeitskontrollen\ndurchgeführt. Dies geschieht mit optischen Sensoren, die\ndie Laufzeit von Radarwellen analysieren können.", 50, 310);
  image(Blitzer, 55, 410);
  textSize(24);
  fill(0);
  text("Luftqualitätsmessung", 755, 260);
  textSize(20);
  text("Verschmutzte Luft macht krank. Zur Überprüfung der\nLuftqualität wird die Konzentration verschiedener\nLuftschadstoffe an vielen (und doch viel zu wenigen)\nMessstationen ermittelt.", 650, 310);
  image(Luftqualitätsmessung, 685, 410);
}

function Folie15() {
  textSize(30);
  text("Willkommen", 550, 50);
  textSize(20);
  text("Insbesondere wenn es darum geht, die Einhaltung von gesetzlichen Grenz- oder Richtwerten zu überwachen, reicht es nicht aus,\nwenn Sensoren physikalische oder chemische Daten der Umwelt nur grob erfassen.", 20, 100);
}

function Folie16() {
  textSize(30);
  text("Willkommen", 550, 50);
  textSize(20);
  fill(200);
  text("Insbesondere wenn es darum geht, die Einhaltung von gesetzlichen Grenz- oder Richtwerten zu überwachen, reicht es nicht aus,\nwenn Sensoren physikalische oder chemische Daten der Umwelt nur grob erfassen.", 20, 100);
  fill(0);
  text("Bei der Geschwindigkeitskontrolle interessiert\ndie exakte Geschwindigkeit des Fahrzeugs.", 100, 250);
  image(Sie_Fahren, 120, 350);
}

function Folie17() {
  textSize(30);
  text("Willkommen", 550, 50);
  textSize(20);
  fill(200);
  text("Insbesondere wenn es darum geht, die Einhaltung von gesetzlichen Grenz- oder Richtwerten zu überwachen, reicht es nicht aus,\nwenn Sensoren physikalische oder chemische Daten der Umwelt nur grob erfassen.", 20, 100);

  if (mouseX > 720 && mouseX < 1040 && mouseY > 350 && mouseY < 690) {
    image(NO2Groß, 300, 150);
  } else {
    textSize(20);
    text("Bei der Geschwindigkeitskontrolle interessiert\ndie exakte Geschwindigkeit des Fahrzeugs.", 100, 250);
    image(Sie_Fahren, 120, 350);


    textSize(20);
    fill(0);
    text("Bei der Überwachung der Luftqualität interessiert\ndie Konzentration eines Stoffes.", 700, 250);
    text("(Zum Vergößern mit der Maus über\ndas Bild fahren.)", 700, 700);
    image(NO2, 720, 350);

  }
  videos[0].time(0.1);

}

function Folie18() {
  textSize(30);
  text("Willkommen", 550, 50);
  textSize(20);
  text("Schaue dir das nachfolgende Video an und formuliere was hier nicht stimmt! Gebe anschließend deine Antwort ab.", 20, 100);
  textSize(20);
  videos[0].show();
  videos[0].position(20, 20);
  textSize(14);
  text(nf(videos[0].time(), 0, 1) + "s / " + nf(videos[0].duration(), 0, 1) + "s", 535, 140);
  minus10.position(20, 490);
  plus10.position(70, 490);
  stop.position(200, 490);
  play.position(270, 490);
  restart.position(340, 490);
  speed[0].position(470, 490);
  speed[1].position(520, 490);
  speed[2].position(570, 490);
  minus10.show();
  plus10.show();
  stop.show();
  play.show();
  restart.show();
  speed[0].show();
  speed[1].show();
  speed[2].show();
  fragenTextfeld[0].show();
  if (abgeschickt) {
    textSize(20);
    text("Antwort:\n\nAufgrund von Kontrollen können wir davon ausgehen, dass die Markierungen auf der Flasche richtig gesetzt sind.\nDie '0,5 l'-Striche an den Gläsern sind nicht richtig gesetzt. Anscheinend wurden die Gläser nicht richtig kalibriert. Dadurch zeigen\nsie einen falschen Wert an. Eine richtige Kalibrierung ist wichtig, um falsche Ergebnisse zu vermeiden.", 20, 570);
  } else if (abgeschickt == false) {
    fill(255, 0, 0);
    textSize(20);
    text("Überlege noch einmal genauer!", 770, 420);
  }
}

function Folie18b() {
  textSize(30);
  text("Willkommen", 550, 50);
  textSize(20);
  text("Antwort: Die Markierungen auf den Gläsern haben nicht gestimmt!", 20, 100);
  text("An diesem Beispiel kannst du sehen wie wichtig eine richtige Kalibrierung ist.", 20, 160);
}

function Folie19() {

  textSize(30);
  text("Willkommen", 550, 50);
  textSize(20);
  text("Um ein verlässliches Messergebnis zu erhalten, müssen Geräte vor dem Gebrauch kalibriert werden. Das heißt, sie werden mit\neinem anderen Messgerät, das normiert ist, in Übereinstimmung gebracht.", 20, 100);
  text("Du wirst im Laufe dieses Workshops nun selbst einen Gassensor kalibrieren. Für genauere Informationen, was dich erwartet, fahre\nmit der Maus über die Themenblöcke:", 20, 160);

  stroke(255, 0, 0);
  rect(149, 299, 222, 201);
  for (let i = 0; i < 200; i++) {
    stroke(255, 255 - i, 255 - i);
    line(150, 300 + i, 370, 300 + i);
  }

  stroke(100, 100, 255);
  rect(499, 299, 222, 201);
  for (let i = 0; i < 200; i++) {
    stroke(255 - i, 255 - i, 255);
    line(500, 300 + i, 720, 300 + i);
  }


  stroke(100, 255, 100);
  rect(849, 299, 222, 201);
  for (let i = 0; i < 200; i++) {
    stroke(255 - i, 255, 255 - i);
    line(850, 300 + i, 1070, 300 + i);
  }


  noStroke();
  textSize(30);
  text("Theoretische\n Grundlagen", 172, 390);
  text("Experimentelle\n      Basis", 516, 390);
  text("Durchführung\n       einer\n  Kalibrierung", 865, 365);


  if (mouseX > 150 && mouseX < 370 && mouseY > 300 && mouseY < 500) {
    stroke(255, 0, 0);
    rect(399, 519, 422, 50);
    rect(399, 589, 422, 50);
    rect(399, 659, 422, 50);
    for (let i = 0; i < 200; i++) {
      stroke(255, 255 - i, 255 - i);
      line(400, 520 + 50 * i / 200, 820, 520 + 50 * i / 200);
      line(400, 590 + 50 * i / 200, 820, 590 + 50 * i / 200);
      line(400, 660 + 50 * i / 200, 820, 660 + 50 * i / 200);
    }

    noStroke();
    fill(0);
    textSize(20);
    text("Kalibrierung am Beispiel eines Themometers", 410, 550);
    text("Funktionsweise von Halbleiter-Gassensoren\n           Wiederholung und Vertiefung", 413, 610);
    text("Zusammenfassung des Messprozesses", 428, 690);

  }


  if (mouseX > 500 && mouseX < 720 && mouseY > 300 && mouseY < 500) {
    stroke(0, 0, 255);
    rect(399, 519, 422, 50);
    rect(399, 589, 422, 50);
    rect(399, 659, 422, 50);

    for (let i = 0; i < 200; i++) {
      stroke(255 - i, 255 - i, 255);
      line(400, 520 + 50 * i / 200, 820, 520 + 50 * i / 200);
      line(400, 590 + 50 * i / 200, 820, 590 + 50 * i / 200);
      line(400, 660 + 50 * i / 200, 820, 660 + 50 * i / 200);
    }


    noStroke();
    fill(0);
    textSize(20);
    text("Versuchsaufbau und Durchführung", 455, 550);
    text("Konzentrationen - wie misst man das?", 450, 620);
    text("Bedienung der Kalibriersoftware", 465, 690);

  }


  if (mouseX > 850 && mouseX < 1070 && mouseY > 300 && mouseY < 500) {
    stroke(0, 255, 0);
    rect(399, 519, 422, 50);
    rect(399, 589, 422, 50);
    rect(399, 659, 422, 50);
    for (let i = 0; i < 200; i++) {
      stroke(255 - i, 255, 255 - i);
      line(400, 520 + 50 * i / 200, 820, 520 + 50 * i / 200);
      line(400, 590 + 50 * i / 200, 820, 590 + 50 * i / 200);
      line(400, 660 + 50 * i / 200, 820, 660 + 50 * i / 200);
    }
    noStroke();
    fill(0);
    textSize(20);
    text("Trainingsdaten aufnehmen", 500, 550);
    text("Modellerstellung", 543, 620);
    text("Bestimmung einer unbekannten Konzentration", 405, 690);
  }
}


function Folie20() {
  textSize(60);
  text("Theoretische Grundlagen", 300, 200);
  textSize(40);
  textAlign(CENTER);
  text("Kalibrierung am Beispiel eines\nThermometers", 650, 350);
}
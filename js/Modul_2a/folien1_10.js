function Folie1() {
  image(SUSmobil_Modul2, 0, 0);

}

function Folie2() {
  textSize(30);
  text("Willkommen", 500, 50);
  textSize(20);
  text("Bestimmt besitzt du oder ein Freund von dir ein Smartphone. Wahrscheinlich hast du ein solches Mobiltelefon in diesem Moment\nsogar dabei.", 20, 100);
  image(Smartphone, 200, 200);
}

function Folie3() {
  textSize(30);
  text("Willkommen", 500, 50);
  textSize(20);
  text("Bestimmt besitzt du oder ein Freund von dir ein Smartphone. Wahrscheinlich hast du ein solches Mobiltelefon in diesem Moment\nsogar dabei.", 20, 100);
  text('Nicht ohne Grund ist ein Smartphone „smart“ (also pfiffig, klug, gewitzt, fesch).\nSo erledigt es Aufgaben, für die früher mehrere Geräte benötigt wurden. Zum\nBeispiel kannst du damit telefonieren, Text- und Bildnachrichten versenden\nund empfangen, fotografieren, Videos drehen oder du hast einen Zugang zum\nInternet.', 500, 300);
  image(Smartphone, 200, 200);
  image(Telefon, 500, 120);
  image(Video, 50, 300);
  image(wlan, 500, 450);
  image(Mail, 850, 120);
  image(Kamera, 900, 480);
}

function Folie4() {
  textSize(30);
  text("Willkommen", 500, 50);
  textSize(20);
  text("Auch reagiert das Smartphone (scheinbar) intelligent auf Änderungen seiner Umgebung. Einige Beispiele sind dir bestimmt bekannt: ", 20, 100);
  fingerX = 170;
  fingerY = 600;
  timerApp = 0;
}

let fingerX = 170;
let fingerY = 600;

let timerApp = 0;

function Folie5() {
  textSize(30);
  text("Willkommen", 500, 50);
  textSize(20);
  text("Auch reagiert das Smartphone (scheinbar) intelligent auf Änderungen seiner Umgebung. Einige Beispiele sind dir bestimmt bekannt: ", 20, 100);
  text("Tippst du mit einem Finger auf den\nBildschirm, erkennt das Smartphone\nwohin und es wird zum Beispiel eine\nApp geöffnet oder ein Buchstabe\ngeschrieben.", 75, 200);
  image(smartphone, 150, 370);

  if (timerApp < 95) {
    fingerY -= 2;
    fingerX -= 0.13;
  }

  if (timerApp < 130) {
    image(SUSmobil_App, 165, 400);
  } else if (timerApp > 130) {
    image(SUSmobil_App_groß, 164, 420);

    if (timerApp < 200) {
      fingerX -= 1.5;
      fingerY += 2;
    } else if (timerApp > 350) {
      timerApp = 0;
      fingerX = 170;
      fingerY = 600;
    }
  }

  if (timerApp < 200) {
    image(finger, fingerX, fingerY);
  }
  timerApp += 1;
}

function Folie6() {
  fingerX = 170;
  fingerY = 600;
  textSize(30);
  text("Willkommen", 500, 50);
  textSize(20);
  text("Auch reagiert das Smartphone (scheinbar) intelligent auf Änderungen seiner Umgebung. Einige Beispiele sind dir bestimmt bekannt: ", 20, 100);
  text("Tippst du mit einem Finger auf den\nBildschirm, erkennt das Smartphone\nwohin und es wird zum Beispiel eine\nApp geöffnet oder ein Buchstabe\ngeschrieben.", 75, 200);
  text("Es erkennt, ob du es vertikal oder\nhorizontal hältst und passt den Bild-\nschirm darauf an.", 440, 550);
  image(smartphone, 150, 370);
  image(SUSmobil_App_groß, 164, 420);


  translate(width / 2, height / 2);
  imageMode(CENTER);

  if (timerApp < 90) {
    rotate(-(timerApp / 90) * PI / 2);
    image(smartphone, 0, -100);
    image(SUSmobil_App_groß, 0, -100);
  } else {
    rotate(-PI / 2);

    image(smartphone, 0, -100);
    rotate(PI / 2);
    image(SUSmobil_App_quer, -105, 0);
  }

  if (timerApp > 200) {
    timerApp = 0;

  }


  timerApp += 1;

}



function Folie7() {
  textSize(30);
  text("Willkommen", 500, 50);
  textSize(20);
  text("Auch reagiert das Smartphone (scheinbar) intelligent auf Änderungen seiner Umgebung. Einige Beispiele sind dir bestimmt bekannt: ", 20, 100);
  text("Tippst du mit einem Finger auf den\nBildschirm, erkennt das Smartphone\nwohin und es wird zum Beispiel eine\nApp geöffnet oder ein Buchstabe\ngeschrieben.", 75, 200);
  text("Es erkennt, ob du es vertikal oder\nhorizontal hältst und passt den Bild-\nschirm darauf an.", 440, 550);
  text("Näherst du es zum Telefonieren an\ndein Ohr, dann verringert sich die\nHelligkeit des Bildschirms (was Energie\nspart und die Dauer des Akkus erhöht).", 800, 200);



  image(smartphone, 150, 370);
  image(smartphone, 900, 370);
  image(SUSmobil_App_groß, 164, 420);
  image(SUSmobil_App_groß, 914, 420);
  fill(50, timerApp);
  rect(910, 392, 80, 142);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  rotate(-PI / 2);

  image(smartphone, 0, -100);
  rotate(PI / 2);
  image(SUSmobil_App_quer, -105, -0);

  if (timerApp > 2000) {
    timerApp = -1000;

  }


  timerApp += 10;

}

function Folie8() {
  textSize(30);
  text("Willkommen", 180, 50);
  textSize(20);
  text("Der Grund für die ausgesprochen vielfältigen\nAnwendungsmöglichkeiten von Smartphones liegt\nin ihrer Ausstattung mit einer hochentwickelten\nElektronik im Miniaturformat und einer Reihe von\ntechnischen Sensoren.", 50, 100);
}

function Folie9() {
  textSize(30);
  text("Willkommen", 180, 50);
  textSize(20);
  fill(200);
  text("Der Grund für die ausgesprochen vielfältigen\nAnwendungsmöglichkeiten von Smartphones liegt\nin ihrer Ausstattung mit einer hochentwickelten\nElektronik im Miniaturformat und einer Reihe von\ntechnischen Sensoren.", 50, 100);
  fill(0);
  text("Aus dem Bild gewinnst du einen Eindruck vom\nkomplexen „Innenleben“ eines Smartphones.", 50, 250);
  image(Handy_innen_1, 600, 50);
}

function Folie10() {
  textSize(30);
  text("Willkommen", 180, 50);
  textSize(20);
  fill(200);
  text("Der Grund für die ausgesprochen vielfältigen\nAnwendungsmöglichkeiten von Smartphones liegt\nin ihrer Ausstattung mit einer hochentwickelten\nElektronik im Miniaturformat und einer Reihe von\ntechnischen Sensoren.", 50, 100);
  text("Aus dem Bild gewinnst du einen Eindruck vom\nkomplexen „Innenleben“ eines Smartphones.", 50, 250);
  image(Handy_innen_1, 600, 50);
  fill(0);
  text("Die die ausgewählten Beschriftungen sind:\n\n1 … die Akkuladebuchse\n2 … der Lautsprecher\n3 … die Kopfhörerbuchse\n4 … der Kamerasensor\n5 … der Prozessor\n6 … der SD-Card-Leser\n7 … der Motor für den Vibrationsalarm", 50, 350);
}

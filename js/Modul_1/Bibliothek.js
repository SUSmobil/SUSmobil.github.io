function stats() {
  if (frameRate() != 0) {
    Statistik[Seite] += 1 / frameRate();
  }
  //    text(nf(Statistik[Seite], 0, 1), 50, 20);
}

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

//Koordinatenkreuz(x Position oben links, y Position oben links, Höhe, Breite, MinX, MinY, MaxX, MaxY, Gitter?, Anzahl Zwischenstriche,  logarithmische Skala?)
function Koordinatenkreuz(PosX, PosY, height, width, MinX, MinY, MaxX, MaxY, Gitter, AnzahlZwischenStricheX, AnzahlZwischenStricheY, Log) {
  push();
  fill(255);
  noStroke();
  rect(PosX, PosY, width, height);
  strokeWeight(1);
  fill(0);
  stroke(0);



  // Achsen und Achsenpfeile
  strokeWeight(2);
  line(PosX - 5, PosY + height, PosX + width, PosY + height);
  line(PosX, PosY, PosX, PosY + height + 5);
  line(PosX - 10, PosY + 10, PosX, PosY);
  line(PosX + 10, PosY + 10, PosX, PosY);
  line(PosX + width - 10, PosY + height + 10, PosX + width, PosY + height);
  line(PosX + width - 10, PosY + height - 10, PosX + width, PosY + height);
  strokeWeight(1);


  for (var i = 0; i < AnzahlZwischenStricheX; i++) {
    let a = (precisionRound(-(((-MaxX + MinX) * i / AnzahlZwischenStricheX) - MinX), 1)).toString();
    text(nf(a, 0, 1).replace(".", ","), PosX + (width) * i / AnzahlZwischenStricheX - 10, PosY + height + 20); //X
  }

  if (Log == false) {
    for (var i = 0; i < AnzahlZwischenStricheY; i++) {
      let b = (precisionRound(-(((MaxY - MinY) * i / AnzahlZwischenStricheY) - MaxY), 1)).toString();
      text(b.replace('.', ','), PosX - 40, (PosY + i * height / AnzahlZwischenStricheY) + 5);
    }
  }

  // Lineare Skala
  if (Log == false) {
    //Koordinatengitter
    if (Gitter) {
      for (var i = 0; i < AnzahlZwischenStricheX; i++) {
        line(PosX + width / AnzahlZwischenStricheX * (i), PosY, PosX + width / AnzahlZwischenStricheX * (i), PosY + height);
      }

      for (var i = 0; i < AnzahlZwischenStricheY; i++) {
        stroke(123);
        line(PosX, PosY + height / AnzahlZwischenStricheY * (i), PosX + width, PosY + height / AnzahlZwischenStricheY * (i));
      }
    }


    pop();
    // logarithmische Skala
  } else {


    //Koordinatengitter
    if (Gitter) {
      for (var i = 0; i < AnzahlZwischenStricheX; i++) {
        stroke(130);
        line(PosX + width / AnzahlZwischenStricheX * (i + 1), PosY, PosX + width / AnzahlZwischenStricheX * (i + 1), PosY + height);
      }

      stroke(0);
      if (MaxY < 250) {
        for (let i = 0; i < 3; i++) {
          stroke(0);

          line(PosX, PosY + (height / 3 * i), PosX + width, PosY + (height / 3 * i));
          strokeWeight(1);
          stroke(223);
          line(PosX, PosY + (height / 3 * (i + 0.7)), PosX + width, PosY + (height / 3 * (i + 0.7)));
          line(PosX, PosY + (height / 3 * (i + 0.53)), PosX + width, PosY + (height / 3 * (i + 0.53)));
          line(PosX, PosY + (height / 3 * (i + 0.4)), PosX + width, PosY + (height / 3 * (i + 0.4)));
          line(PosX, PosY + (height / 3 * (i + 0.31)), PosX + width, PosY + (height / 3 * (i + 0.31)));
          line(PosX, PosY + (height / 3 * (i + 0.22)), PosX + width, PosY + (height / 3 * (i + 0.22)));
          line(PosX, PosY + (height / 3 * (i + 0.155)), PosX + width, PosY + (height / 3 * (i + 0.155)));
          line(PosX, PosY + (height / 3 * (i + 0.1)), PosX + width, PosY + (height / 3 * (i + 0.1)));
          line(PosX, PosY + (height / 3 * (i + 0.045)), PosX + width, PosY + (height / 3 * (i + 0.045)));
        }

        text("0,1", PosX - 25, PosY + height);
        text("0,2", PosX - 25, PosY + height * 0.912)
        text("0,5", PosX - 25, PosY + height * 0.79)
        text("1", PosX - 25, PosY + 2 * height / 3);
        text("2", PosX - 25, PosY + height * 0.58)
        text("5", PosX - 25, PosY + height * 0.46)
        text("10", PosX - 25, PosY + height / 3);
        text("20", PosX - 25, PosY + height * 0.25)
        text("50", PosX - 25, PosY + height * 0.12)
        text("100", PosX - 25, PosY);
      } else {
        for (let i = 0; i < 4; i++) {
          stroke(0);

          line(PosX, PosY + (height / 4 * i), PosX + width, PosY + (height / 4 * i));
          strokeWeight(1);
          stroke(223);
          line(PosX, PosY + (height / 4 * (i + 0.7)), PosX + width, PosY + (height / 4 * (i + 0.7)));
          line(PosX, PosY + (height / 4 * (i + 0.53)), PosX + width, PosY + (height / 4 * (i + 0.53)));
          line(PosX, PosY + (height / 4 * (i + 0.4)), PosX + width, PosY + (height / 4 * (i + 0.4)));
          line(PosX, PosY + (height / 4 * (i + 0.31)), PosX + width, PosY + (height / 4 * (i + 0.31)));
          line(PosX, PosY + (height / 4 * (i + 0.22)), PosX + width, PosY + (height / 4 * (i + 0.22)));
          line(PosX, PosY + (height / 4 * (i + 0.155)), PosX + width, PosY + (height / 4 * (i + 0.155)));
          line(PosX, PosY + (height / 4 * (i + 0.1)), PosX + width, PosY + (height / 4 * (i + 0.1)));
          line(PosX, PosY + (height / 4 * (i + 0.045)), PosX + width, PosY + (height / 4 * (i + 0.045)));
        }
        text("0,1", PosX - 25, PosY + height);
        text("1", PosX - 25, PosY + 3 * height / 4);
        text("10", PosX - 25, PosY + 2 * height / 4);
        text("100", PosX - 25, PosY + height / 4);
        text("1000", PosX - 25, PosY);
      }
    }
    pop();
  }
}


let A4a1 = 0;
let A4a2 = 0;
let A4a3 = 0;
let A4b1 = 0;
let A4b2 = 0;
let A4b3 = 0;
let A4c1 = 0;
let A4c2 = 0;
let A4c3 = 0;



function mousePressed() {

  if (Seite == 22 && Unterseite == 7) {
    if (Theorie2bool) {
      Unterseite += 1;
    }
    Theorie2bool = false;
  }

  if (Seite == 26) {
    if (mouseX > 600 && mouseX < 760) {
      if (mouseY > 160 && mouseY < 310) {
        if (A4a1 == 255) {
          A4a1 = 0;
        } else {
          A4a1 = 255;
          A4b1 = 0;
          A4c1 = 0;
        }
      }

      if (mouseY > 340 && mouseY < 485) {
        if (A4a2 == 255) {
          A4a2 = 0;
        } else {
          A4a2 = 255;
          A4b2 = 0;
          A4c2 = 0;
        }
      }

      if (mouseY > 520 && mouseY < 665) {
        if (A4a3 == 255) {
          A4a3 = 0;
        } else {
          A4a3 = 255;
          A4b3 = 0;
          A4c3 = 0;
        }
      }

    } else if (mouseX > 800 && mouseX < 960) {
      if (mouseY > 160 && mouseY < 310) {
        if (A4b1 == 255) {
          A4b1 = 0;
        } else {
          A4b1 = 255;
          A4a1 = 0;
          A4c1 = 0;
        }
      }

      if (mouseY > 340 && mouseY < 485) {
        if (A4b2 == 255) {
          A4b2 = 0;
        } else {
          A4b2 = 255;
          A4a2 = 0;
          A4c2 = 0;
        }
      }

      if (mouseY > 520 && mouseY < 665) {
        if (A4b3 == 255) {
          A4b3 = 0;
        } else {
          A4b3 = 255;
          A4a3 = 0;
          A4c3 = 0;
        }
      }

    } else if (mouseX > 1000 && mouseX < 1160) {
      if (mouseY > 160 && mouseY < 310) {
        if (A4c1 == 255) {
          A4c1 = 0;
        } else {
          A4c1 = 255;
          A4a1 = 0;
          A4b1 = 0;
        }
      }

      if (mouseY > 340 && mouseY < 485) {
        if (A4c2 == 255) {
          A4c2 = 0;
        } else {
          A4c2 = 255;
          A4a2 = 0;
          A4b2 = 0;
        }
      }

      if (mouseY > 520 && mouseY < 665) {
        if (A4c3 == 255) {
          A4c3 = 0;
        } else {
          A4c3 = 255;
          A4a3 = 0;
          A4b3 = 0;
        }
      }

    }






    if (A4a1 == 255) {
      A4b1 = 0;
      A4c1 = 0;
    } else if (A4b1 == 255) {
      A4a1 = 0;
      A4c1 = 0;
    } else if (A4c1 == 255) {
      A4a1 = 0;
      A4b1 = 0;
    }


    if (A4a2 == 255) {
      A4b2 = 0;
      A4c2 = 0;
    } else if (A4b2 == 255) {
      A4a2 = 0;
      A4c2 = 0;
    } else if (A4c2 == 255) {
      A4a2 = 0;
      A4b2 = 0;
    }


    if (A4a3 == 255) {
      A4b3 = 0;
      A4c3 = 0;
    } else if (A4b3 == 255) {
      A4a3 = 0;
      A4c3 = 0;
    } else if (A4c3 == 255) {
      A4a3 = 0;
      A4b3 = 0;
    }
  }
}




function Rahmen() {
  push();
  stroke(0);
  strokeWeight(1);
  fill(0);
  line(1, 1, width - 1, 1);
  line(1, 1, 1, height - 1);
  line(1, height - 1, width - 1, height - 1);
  line(width - 1, 1, width - 1, height - 1);
  pop();
}

//text1 = textString, x = xPosition oben links, y = yPosition oben links, size = textSize
function textFormat(text1, x, y, size) {
  push();
  noStroke();
  textSize(size);
  var j = 0;
  var textZusammengesetzt = [];
  var textArray = split(text1, ' ');

  for (var i = 0; i < 30; i++) {
    textZusammengesetzt[i] = '';
  }

  for (var i = 0; i < textArray.length; i++) {
    textZusammengesetzt[j] = textZusammengesetzt[j] + textArray[i] + ' ';
    if (textWidth(textZusammengesetzt[j]) > width - x - 120) {
      j = j + 1;
    }
  }

  for (var i = 0; i < textZusammengesetzt[i].length; i++) {
    text(textZusammengesetzt[i], x, y + size * i);
  }
  pop();
}


function textFormat2(text3, x, y, size) {
  let textt = split(text3, '\n');
  noStroke();

  for (let k = 0; k < textt.length; k++) {
    var j = 0;
    var textZusammengesetzt = [];
    var textArray = split(textt[k], ' ');

    for (var i = 0; i < 30; i++) {
      textZusammengesetzt[i] = '';
    }

    for (var i = 0; i < textArray.length; i++) {
      textZusammengesetzt[j] = textZusammengesetzt[j] + textArray[i] + ' ';
      if (textWidth(textZusammengesetzt[j]) > width - x - 115) {
        j = j + 1;
      }
    }

    for (var i = 0; i < textZusammengesetzt[i].length; i++) {
      textSize(size);
      text(textZusammengesetzt[i], x, y + size * i + size * k);
    }
  }


}



function textFormat3(text3, x, y, size) {
  let textt = split(text3, '\n');
  noStroke();
  var m = 0;
  for (let k = 0; k < textt.length; k++) {
    var j = 0;
    var textZusammengesetzt = [];
    var textArray = split(textt[k], ' ');

    for (var i = 0; i < 500; i++) {
      textZusammengesetzt[i] = '';
    }

    for (var i = 0; i < textArray.length; i++) {
      textZusammengesetzt[j * (k + 1)] = textZusammengesetzt[j * (k + 1)] + textArray[i] + ' ';
      if (textWidth(textZusammengesetzt[j]) > width - x - 625) {
        j = (j + 1);
        m = m + 1;
      }
    }
    for (var i = 0; i < textZusammengesetzt[i].length; i++) {
      textSize(size);
      text(textZusammengesetzt[i], x, y + (size * i + size * m) * (k + 1));
    }
  }


}

function VorZurück() {

  vor.position(width - 70, 650);
  if (Seite == 100) {
    zurück.hide();
  }
  vor.mousePressed(Vor);
  if (Seite == 28) {
    vor.hide();
  } else {
    vor.show();
  }
  if (Seite == 22 && Unterseite == 7) {
    vor.hide()
  } else {
    vor.show();
  }
  zurück = createButton('');
  zurück.position(-120, 650);
  zurück.mousePressed(Zurück);

}






function Vor() {
  tempShow = true;
  if (Seite == 37) {
    aktuelleSpannung = 2.8;
    ZeitSekunden = 30;
    timer = false;
    Cycle = 20;
  }
  if (Seite == 35 && checkApfelsaft.checked() && checkAlkfrei.checked()) {
    // Wenn beide ausgewählt sind, gehts nicht weiter
  } else if (Seite == 35 && checkApfelsaft.checked() == false && checkAlkfrei.checked() == false) {
    // Wenn keins ausgewählt ist, gehts nicht weiter
  } else if (Seite == 3 || Seite == 3.5) {
    Seite += 0.5;
  } else if (Seite == 17 || Seite == 17.5) {
    Seite += 0.5;

  } else if (Seite == 41 || Seite == 41.5 || Seite == 7 || Seite == 7.5) {
    Seite += 0.5;
    SpannungMinimum = true;
    SpannungMaximum = true;
  } else if (Seite == 12 && SpannungMax.value().replace(',', '.') > 2.9 && SpannungMax.value().replace(',', '.') < 3.1 && SpannungMin.value().replace(',', '.') > 0.55 && SpannungMin.value().replace(',', '.') < 0.8) {
    Seite += 1;
    SpannungMinimum = true;
    SpannungMaximum = true;
  } else if (Seite == 15 && BegründungAufgabe1.value() != "") {
    Seite += 1;
  } else if (Seite == 17 && Begründung.value() != "") {
    Seite += 1;
  } else if (Seite == 22 && SelectFrage1.value() == "wird reduziert" && SelectFrage2.value() == "bleibt gleich" && SelectFrage3.value() == "wird reduziert" && SelectFrage4.value() == "wird erhöht") {
    Seite += 1;
  } else if (Seite == 23) {
    if (Unterseite == 1) {
      Seite += 1;
    }
    if (Unterseite == 0) {
      Unterseite = 1;
    }


  } else if (Seite == 24 && SelectFrage5.value() == "mehr" && SelectFrage6.value() == "kleineren") {
    Seite += 1;
  } else if (Seite == 25 && ReaktionsrateWasser.value() == "klein" && ReaktionsrateApfelsaft.value() == "groß" && ReaktionsrateAlkfrei.value() == "mittelgroß") {
    Seite += 1;
  } else if (Seite == 34) {
    Seite += 0.5;

  } else if (Seite == 34.5 && Temperatur16Volt.value() > 125 && Temperatur16Volt.value() < 135 && Temperatur26Volt.value() > 333 && Temperatur26Volt.value() < 345) {
    Seite += 0.5;
  } else if (Seite == 34.5) {
    //Nix
  } else if (Seite == 30) {
    Seite += 1;
  } else if (Seite == 44 && Theorie2_1.value() == "größer" && Theorie2_2.value() == "unverändert" && Theorie2_3.value() == "schneller" && Theorie2_4.value() == "größer" && Theorie2_5.value() == "kleiner") {
    Seite += 1;
  } else if (Seite == 45 && Theorie2_text1.value() != "") {
    Seite += 1;
  } else if (Seite == 46 && Theorie2_6.value() == "schneller" && Theorie2_7.value() == "größer" && Theorie2_8.value() == "größer" && Theorie2_9.value() == "kleiner") {
    Seite += 1;
  } else if (Seite == 47 && Theorie2_10.value() == "schneller" && Theorie2_11.value() == "größer" && Theorie2_12.value() == "kleiner" && Theorie2_13.value() == "größer") {
    Seite += 1;
  } else if (Seite == 49 && Theorie2Radio3.value() == "richtig") {
    Seite += 1;
  } else if (Seite == 50 && TempWasser.value() != "" && TempWasserU.value() != "") {
    Seite += 1;
  } else if (Seite == 51 && Theorie2Check2false.checked() == false && Theorie2Check2true.checked() && Theorie2Check3false.checked() == false && Theorie2Check3true.checked() && Theorie2Check4false.checked() && Theorie2Check4true.checked() == false) {
    Seite += 1;

  } else if (Seite != 12 && Seite != 15 && Seite != 17 && Seite != 22 && Seite != 24 && Seite != 25 && Seite != 34 && Seite != 44 && Seite != 45 && Seite != 46 && Seite != 47 && Seite != 49 && Seite != 50 && Seite != 51) { // Auf diesen Seiten kommt man erst weiter, wenn man das richtige eintippt
    Seite += 1;
  }

  Theorie2Check1false.position(1135, 445);
  Theorie2Check1true.position(1040, 445);
  Theorie2Check2false.position(1135, 495);
  Theorie2Check2true.position(1040, 495);
  Theorie2Check3false.position(1135, 545);
  Theorie2Check3true.position(1040, 545);
  Theorie2Check4false.position(1135, 595);
  Theorie2Check4true.position(1040, 595);

  hideAll();


}

let SpannungMinimum = true;
let SpannungMaximum = true;


function Zurück() {
  tempShow = true;
  if (Seite == 39) {
    Seite = 37;
    Cycle = 21;
  }
  if (Seite == 18 || Seite == 17.5 || Seite == 35 || Seite == 34.5 || Seite == 42 || Seite == 41.5 || Seite == 8 || Seite == 7.5 || Seite == 3.5 || Seite == 4) {
    Seite -= 0.5;
  } else {
    Seite -= 1;
  }
  hideAll();
}

function textUnderline(text1, xPosition, yPosition) {
  text(text1, xPosition, yPosition);
  push();
  stroke(0);
  line(xPosition - 5, yPosition + 5, xPosition + textWidth(text1) + 5, yPosition + 5);
  pop();
}

function Pfeil(Seite, x, y, width) {
  if (Seite == 1) {
    line(x, y, x, y + width);
    line(x - 20, y + width - 20, x, y + width);
    line(x + 20, y + width - 20, x, y + width);
  } else if (Seite == 0) {
    line(x, y, x + width, y);
    line(x + width - 20, y - 20, x + width, y);
    line(x + width - 20, y + 20, x + width, y);
  } else if (Seite == 2) {
    line(x, y, x, y + width);
    line(x - 20, y + 20, x, y);
    line(x + 20, y + 20, x, y);
  } else if (Seite == 3) {
    line(x, y, x + width, y);
    line(x + width - 20, y + 20, x, y);
    line(x + width + 20, y + 20, x, y);
  }
}

function LinAuswahl() {
  log = false;
}

function LogAuswahl() {
  log = true;
}

function NormalisierenJaNein() {
  if (normal) {
    normal = false;
  } else {
    normal = true;
  }
}

function DeineWerte() {
  if (DeinsBool) {
    DeinsBool = false;
  } else {
    DeinsBool = true;
  }
}

function Beer() {
  if (BierBool) {
    BierBool = false;
  } else {
    BierBool = true;
  }

}

function AlkfreiBeer() {
  if (AlkfreiBool) {
    AlkfreiBool = false;
  } else {
    AlkfreiBool = true;
  }
}

function LuftBeer() {
  if (LuftBool) {
    LuftBool = false;
  } else {
    LuftBool = true;
  }

}

function KontrolleSpannung() {
  SpannungMin.value().replace(',', '.');
  if (SpannungMax.value().replace(',', '.') > 2.8 && SpannungMax.value().replace(',', '.') < 3.05 && SpannungMin.value().replace(',', '.') > 0.59 && SpannungMin.value().replace(',', '.') < 0.8) {
    Seite = Seite + 1;
    Spannung = true;
  } else {
    Spannung = false;
  }

}

function Alkfrei() {
  AlkfreiBier = true;
  AlkBier = false;
  LuftGas = false;

}

function Bier() {
  AlkfreiBier = false;
  AlkBier = true;
  LuftGas = false;

}

function Luft() {
  AlkfreiBier = false;
  AlkBier = false;
  LuftGas = true;


}

function NextVoltage() {
  Hilfsbool = true;
  if (Cycle > 10 && Cycle < 21) {
    ZeitSekunden = 10;
    aktuelleSpannung -= 0.19999;
    Cycle += 1;

  }

  if (Cycle == 10) {
    ZeitSekunden = 30;
    aktuelleSpannung -= 0.19991;
    Cycle += 1;
  }

  if (Cycle < 10) {
    ZeitSekunden = 10;
    aktuelleSpannung -= 0.19991;
    Cycle += 1;
  }

  NächsteSpannung.hide();

  if (Cycle == 11) {
    NächsteSpannung.show();
  }
}


function Reset() {

  timer = false;
  if (Cycle < 11) {
    Cycle = 0;
    ZeitSekunden = 30;
    aktuelleSpannung2 = 0.8;
    aktuelleSpannung = 2.8;
  } else {
    Cycle = 11;
    ZeitSekunden = 30;
    aktuelleSpannung2 = 0.8;
    aktuelleSpannung = 2.8;
  }

}

function TimerStartet() {
  timer = true;
  Los.hide();
}

function wahr() {
  if (SimulationHeizdraht) {
    SimulationHeizdraht = false;
  } else {
    SimulationHeizdraht = true;
  }
}


function delay(ms) {
  var cur_d = new Date();
  var cur_ticks = cur_d.getTime();
  var ms_passed = 0;
  while (ms_passed < ms) {
    var d = new Date(); // Possible memory leak?
    var ticks = d.getTime();
    ms_passed = ticks - cur_ticks;
    d = null; // Prevent memory leak?
  }
}




function LuftSim() {
  for (let k = i; k < 25; k++) {
    if (k < 5) {
      ElektronenY[k] = 210;
    } else if (k < 10) {
      ElektronenY[k] = 230;
    } else if (k < 15) {
      ElektronenY[k] = 250;
    } else if (k < 20) {
      ElektronenY[k] = 270;
    } else if (k < 25) {
      ElektronenY[k] = 290;
    }
  }
  Elektronen();
  Bewegung();
  push();
  fill(0, 255, 255);
  rect(200, 50, 200, 150);
  pop();
  let rand = 0;
  let offset = 0;
  if (Temperatur % 20 == 0) {
    if (i > 4 && i < 9) {
      offset = random(0, 15);
    }
    ElektronenX[i] = 225 + offset + (60 * i) % 200;
    ElektronenY[i] = 205;
    ElektronenVX[i] = 0;
    i += i2;
    a -= i;
    if (i == 12) {
      i2 = -1;
      a = 12;
    }
    if (i == 0) {
      i2 = 1;
      a = 0;
    }
  }

  for (let k = i; k < 15; k++) {
    fill(0, 0, 255);
    LuftX[k] += LuftVX[k]
    LuftY[k] += LuftVY[k];
    if (LuftX[k] > 397 || LuftX[k] < 203) {
      LuftVX[k] = -LuftVX[k];
    }
    if (LuftY[k] > 197 || LuftY[k] < 53) {
      LuftVY[k] = -LuftVY[k];
    }
  }
  if (Temperatur % 20 == 0) {
    LuftX[i - 1] = 225 + offset + (60 * (i - 1)) % 200;
    LuftY[i - 1] = 195;
  }


  for (let k = 0; k < AnzahlTeilchen; k++) {
    ellipse(LuftX[k], LuftY[k], 10, 10);
  }
  noStroke();
  fill(240);
  rect(401, 100, 46, 200);
  fill(0);
  noStroke();
  text("Luft ohne Zielgas", 203, 63);
  text("ϑ = " + Math.round(Temperatur) + "°C", 203, 78);
  noFill();
  stroke(0);
  angleMode(DEGREES);
  arc(300, 375, 95, 95, -180, 0);
  fill(0);
  stroke(0);
  line(400, 250, 450, 250);
  angleMode(DEGREES);
  stroke(0);
  fill(0);
  if (Temperatur < 180) {
    Temperatur2 = Temperatur;
  } else {
    Temperatur2 = 360 - Temperatur;
  }
  line(300, 374, 300 - 48 * cos(0.0021 * (1.3 * Temperatur2 * Temperatur2)), 374 - 48 * sin(0.0021 * (1.3 * Temperatur2 * Temperatur2)));
}

let Temperatur2 = 40;

function Vakuum1() {
  stroke(0);
  angleMode(DEGREES);
  strokeWeight(1);
  // Anzeige
  line(300, 374, R * cos(170 * ((500 / Math.exp(2 / (0.01 * Temperatur)) + 0.1)) / 255 - 180) + 300, R * sin(170 * -((500 / Math.exp(2 / (0.01 * Temperatur)) + 0.1)) / 255 - 5) + 375);
  fill(200);
  noStroke();
  strokeWeight(1);
  rect(200, 50, 200, 150);
  fill(0);
  noStroke();
  text("Vakuum", 203, 63);
  text("ϑ = " + Math.round(Temperatur) + "°C", 203, 78);
  noFill();
  stroke(0);
  arc(300, 375, 95, 95, -180, 0);
  fill(r, g - (Temperatur - 20) / 1.5, 0);
  translate(0, 100);
  rect(200, 100, 200, 100);
  translate(0, -100);
  Elektronen();
  Bewegung();
}


function Aufbau() {
  push();
  // Vakuum, Luft
  stroke(0);
  fill(r, g - (Temperatur - 20) / 1.5, 0);
  translate(0, 100);
  rect(200, 100, 200, 100);
  line(200, 150, 150, 150);
  line(150, 150, 150, 250);
  line(150, 250, 250, 250);
  line(350, 250, 450, 250);
  line(450, 250, 450, 150);
  line(450, 150, 400, 150);
  fill(255);
  rect(250, 225, 100, 50);
  fill(240);
  noStroke();
  rect(265, 280, 100, 20);
  noStroke();
  fill(0);
  text("Strommesser", 270, 290);
  fill(240);
  noStroke();
  rect(265, 350, 100, 20);
  if (Temperatur == 40) {
    TempVar = 0.25;
  } else if (Temperatur == 275) {
    TempVar = -0.25;
  }
  Temperatur += TempVar;
  pop();
}

function Elektronen() {
  fill(0);
  noStroke();
  for (let i = 0; i < AnzahlTeilchen; i++) {
    ellipse(ElektronenX[i], ElektronenY[i], 6, 6);
    ElektronenX[i] += ElektronenVX[i];
    ElektronenY[i] += 0;
    if (ElektronenX[i] > 397) {
      ElektronenX[i] = 203.1;
    }
  }
  for (let k = i; k < AnzahlTeilchen; k++) {
    fill(0);
    stroke(0);
    line(ElektronenX[k], ElektronenY[k], ElektronenX[k] + 30 * (1 / Math.exp(2 / (0.01 * Temperatur))) + 5, ElektronenY[k]);
    line(ElektronenX[k] + 27 * (1 / Math.exp(2 / (0.01 * Temperatur))), ElektronenY[k] - 3, ElektronenX[k] + 30 * (1 / Math.exp(2 / (0.01 * Temperatur))) + 5, ElektronenY[k]);
    line(ElektronenX[k] + 27 * (1 / Math.exp(2 / (0.01 * Temperatur))), ElektronenY[k] + 3, ElektronenX[k] + 30 * (1 / Math.exp(2 / (0.01 * Temperatur))) + 5, ElektronenY[k]);
  }
  noStroke();
  fill(240);
  rect(401, 100, 16, 200);
  fill(0);
  stroke(0);
  line(400, 250, 450, 250);
}

function Bewegung() {
  for (let k = i; k < AnzahlTeilchen; k++) {
    ElektronenVX[k] = (1 / Math.exp(2 / (0.01 * Temperatur)) + 0.1);
  }
}




let Sensor_Bild_Klein;
let Taschenrechner;
let Zeit = 0;
let Sekunde = 0;
let aktuelleSpannung2 = 0.8;
let MaximumWasser = 1;
let MaximumAlkfrei = 1;
let MaximumApfelsaft = 1;
let MaximumDeineMessung = 1;
let WerteBier = [];
let WerteAlkfreiBier = [];
let WerteLuft = [];
let ZeitSekunden = 30;
let aktuelleSpannung = 2.8;
let Cycle = 0;
let FalscheEingabe = "";
let AlkfreiBier = false;
let AlkBier = false;
let LuftGas = false;
let zoom = 1.625;
let timer = false;
let Spannung = null;
let log = false;
let normal = false;
let KlammerAnzahl = 0;
let Operator = '';
let ZweiteZahl = false;
let plus = false;
let minus = false;
let mal = false;
let geteilt = false;
let BierBool = true;
let AlkfreiBool = false;
let LuftBool = false;
let DeinsBool = false;
let Unterseite = 0;
let Statistik = [];
let SUSmobil;
let Aufgabe1Bier, Aufgabe1Alkfrei;
let Aufgabe2Bier, Aufgabe2Alkfrei;
let SimulationStart;
let SimulationHeizdraht = false;
let sliderSpannung;
let SpannungMin;
let SpannungMax;
let Ergebnis = 0;
let Sensor;
let Platine_oben;
let Platine_unten;
let Sensor_klein;
let Multimeter1;
let MultimeterWiderstand;
let MultimeterSpannung;
let AufbauGesamt;
let Bierglas;
let BierAnPlatine;
let sliderSeite16;
let Abweichung;
let NormalisierButton;
let AuswahlBier;
let AuswahlAlkoholfrei;
let AuswahlLuft;
let Begründung;
let Temperatur16Volt;
let Temperatur26Volt;
let BierButton;
let AlkfreiBierButton;
let ApfelsaftButton;
let DeineMessung;
let Log;
let Linear;
let zoomButton;
let Los;
let Restart;
let Interpretation;
let Widerstand = [];
let Vakuum;
let ohneZielgas;
let mitZielgas;
let Legende;
let Legende1;
let Legende2;
let Graph;
let Kontrast1 = 240;
let Kontrast2 = 240;
let Kontrast3 = 240;
let sliderSpannung2 = 0;
let Aufgabe4;
let txt1 = '';
let txt2 = '';
let ErgebnisseSpeichern;
let Aufgabe4Text1;
let Aufgabe4Text2;
let Aufgabe4Text3;
let NächsteSpannung;
let TMin;
let TMax;
let Interpretation2;
let doc;
let Graph1;
let Graph2;
let Graph3;
let Graph4;
let Graph5;
let Graph6;
let Graph7;
let Graph8;
let Graph9;
let Graph10;
let Vakuum3;
let OhneZielgas3;
let mitZielgas3;
let Heizdraht;
let Hysterese;
let HystereseVermutung;
let BegründungAufgabe1;
let Aufgabe4Interpretation1;
let Aufgabe4Interpretation2;
let Aufgabe4Interpretation3;
let TheorieBeschriftung1;
let TheorieBeschriftung2;
let TheorieBeschriftung3;
let Vakuum2;
let ohneZielgas2;
let mitZielgas2;
let Aufgabe1bWasser;
let Aufabe1bSaft;
let Sensor_Detail;
let BierAnPlatine_klein;
let Theorie1;
let Exp1;
let Theorie2;




let WasserWerte = [265, 140, 116, 105, 110, 133, 175, 243, 322, 390, 415];
let alkoholfreiesBierWerte = [141, 90, 49, 27, 18, 15, 12.5, 11, 12.7, 19, 35];


let ApfelsaftWerte = [53, 17.8, 7.7, 4.7, 3.4, 2.8, 2.8, 3.1, 4, 6, 7.8];


let SUSmobilPDF = 'data:';
let Theorie_PDF = '';
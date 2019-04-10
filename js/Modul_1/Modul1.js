let Seite = 1;
let Hilfsbutton;
let Hilfsbool = true;


let weiterZurUmfrage;

function setup() {
  let cnv = createCanvas(1200, 750); // Erstellt die Leinwand
  cnv.parent('modul1');
  //cnv.position(300+0, 0);
  sliderSeite16 = createSlider(10, 500, 200, 10);
  sliderSeite16.style('width', '110px');
  //doc = new jsPDF();
  //
  Musterlösung = createButton('Musterlösung');
  Name1 = createInput('Vorname');
  Name2 = createInput('Vorname');

  weiterZurUmfrage = createButton('Weiter zur Umfrage');
  weiterZurUmfrage.size(100, 50);
  weiterZurUmfrage.position(300 + 550, 250 + 75);
  weiterZurUmfrage.hide();
  weiterZurUmfrage.mousePressed(function() {

    vor.hide();
    zurück.hide();
    weiterZurUmfrage.hide();
    hideAll();
    cnv.hide();
    Seite = 100;
  });

  Hilfsbutton = createButton('ok');
  Hilfsbutton.position(300 + 850, 480 + 75);
  Hilfsbutton.hide();
  Hilfsbutton.style('font-size', 30 + 'px');

  Hilfsbutton.mousePressed(function() {
    Hilfsbool = false;
  });

  TempWasser = createInput('');
  TempWasser.size(50, 25);

  TempApfel = createInput('');
  TempApfel.size(50, 25);

  TempAlkfrei = createInput('');
  TempAlkfrei.size(50, 25);

  TempWasserU = createInput('');
  TempWasserU.size(50, 25);

  TempApfelU = createInput('');
  TempApfelU.size(50, 25);

  TempAlkfreiU = createInput('');
  TempAlkfreiU.size(50, 25);

  Sensitivität = createButton('Messdaten ein-/ausblenden');
  Klasse = createInput('Klasse');
  HinweisReaktionsrate = createButton('Kausalkette ein-/ausblenden');
  SelectFrage1 = createSelect();
  SelectFrage2 = createSelect();
  SelectFrage3 = createSelect();
  SelectFrage4 = createSelect();
  SelectFrage5 = createSelect();
  SelectFrage6 = createSelect();

  SelectFrage1.option('...');
  SelectFrage1.option('wird erhöht');
  SelectFrage1.option('wird reduziert');
  SelectFrage1.option('bleibt gleich');
  SelectFrage2.option('...');
  SelectFrage2.option('wird erhöht');
  SelectFrage2.option('wird reduziert');
  SelectFrage2.option('bleibt gleich');
  SelectFrage3.option('...');
  SelectFrage3.option('wird erhöht');
  SelectFrage3.option('wird reduziert');
  SelectFrage3.option('bleibt gleich');
  SelectFrage4.option('...');
  SelectFrage4.option('wird erhöht');
  SelectFrage4.option('wird reduziert');
  SelectFrage4.option('bleibt gleich');

  SelectFrage5.option('...');
  SelectFrage5.option('weniger');
  SelectFrage5.option('mehr');
  SelectFrage6.option('...');
  SelectFrage6.option('kleineren');
  SelectFrage6.option('größeren');


  Theorie2_1 = createSelect();
  Theorie2_2 = createSelect();
  Theorie2_3 = createSelect();
  Theorie2_4 = createSelect();
  Theorie2_5 = createSelect();
  Theorie2_6 = createSelect();
  Theorie2_7 = createSelect();
  Theorie2_8 = createSelect();
  Theorie2_9 = createSelect();
  Theorie2_10 = createSelect();
  Theorie2_11 = createSelect();
  Theorie2_12 = createSelect();
  Theorie2_13 = createSelect();

  Theorie2_1.option('...');
  Theorie2_1.option('größer');
  Theorie2_1.option('gleich');
  Theorie2_1.option('kleiner');



  Theorie2_2.option('...');
  Theorie2_2.option('höher');
  Theorie2_2.option('unverändert');
  Theorie2_2.option('niedriger');

  Theorie2_3.option('...');
  Theorie2_3.option('schneller');
  Theorie2_3.option('gleichschnell');
  Theorie2_3.option('langsamer');

  Theorie2_4.option('...');
  Theorie2_4.option('größer');
  Theorie2_4.option('unverändert');
  Theorie2_4.option('kleiner');

  Theorie2_5.option('...');
  Theorie2_5.option('größer');
  Theorie2_5.option('unverändert');
  Theorie2_5.option('kleiner');

  Theorie2_6.option('...');
  Theorie2_6.option('schneller');
  Theorie2_6.option('unverändert');
  Theorie2_6.option('langsamer');

  Theorie2_7.option('...');
  Theorie2_7.option('größer');
  Theorie2_7.option('unverändert');
  Theorie2_7.option('kleiner');

  Theorie2_8.option('...');
  Theorie2_8.option('größer');
  Theorie2_8.option('unverändert');
  Theorie2_8.option('kleiner');

  Theorie2_9.option('...');
  Theorie2_9.option('größer');
  Theorie2_9.option('unverändert');
  Theorie2_9.option('kleiner');


  Theorie2_10.option('...');
  Theorie2_10.option('schneller');
  Theorie2_10.option('unverändert');
  Theorie2_10.option('langsamer');

  Theorie2_11.option('...');
  Theorie2_11.option('größer');
  Theorie2_11.option('unverändert');
  Theorie2_11.option('kleiner');

  Theorie2_12.option('...');
  Theorie2_12.option('größer');
  Theorie2_12.option('unverändert');
  Theorie2_12.option('kleiner');

  Theorie2_13.option('...');
  Theorie2_13.option('größer');
  Theorie2_13.option('unverändert');
  Theorie2_13.option('kleiner');

  ReaktionsrateWasser = createSelect();
  ReaktionsrateApfelsaft = createSelect();
  ReaktionsrateAlkfrei = createSelect();
  ReaktionsrateWasser.option('...');
  ReaktionsrateWasser.option('groß');
  ReaktionsrateWasser.option('mittelgroß');
  ReaktionsrateWasser.option('klein');

  ReaktionsrateApfelsaft.option('...');
  ReaktionsrateApfelsaft.option('groß');
  ReaktionsrateApfelsaft.option('mittelgroß');
  ReaktionsrateApfelsaft.option('klein');

  ReaktionsrateAlkfrei.option('...');
  ReaktionsrateAlkfrei.option('groß');
  ReaktionsrateAlkfrei.option('mittelgroß');
  ReaktionsrateAlkfrei.option('klein');



  BegründungReaktionsrate = createElement('textarea', 'Begründung: ');
  BegründungReaktionsrate.size(300, 300);

  Theorie2Radio1 = createRadio('#fffff', 'color');
  Theorie2Radio2 = createRadio('#fffff', 'color');
  Theorie2Radio3 = createRadio('#fffff', 'color');
  Theorie2Radio4 = createRadio('#fffff', 'color');
  Theorie2Check1true = createCheckbox();
  Theorie2Check1false = createCheckbox();
  Theorie2Check2true = createCheckbox();
  Theorie2Check2false = createCheckbox();
  Theorie2Check3true = createCheckbox();
  Theorie2Check3false = createCheckbox();
  Theorie2Check4true = createCheckbox();
  Theorie2Check4false = createCheckbox();

  Theorie2Radio1.option('', 'falsch');
  Theorie2Radio2.option('', 'falsch');
  Theorie2Radio3.option('', 'richtig');
  Theorie2Radio4.option('', 'falsch');


  Theorie2Radio1.position(300 + 370, 450 + 75);
  Theorie2Radio2.position(300 + 520, 450 + 75);
  Theorie2Radio3.position(300 + 670, 450 + 75);
  Theorie2Radio4.position(300 + 820, 450 + 75);


  HinweisSeite11 = createButton('Hinweis ein-/ausblenden');

  Hinweis = createButton('Hinweis ein-/ausblenden');
  //Bilder werden auf die richtige Größe gebracht
  SUSmobil.resize(width - 500, height - 300);
  Sensor_klein.resize(370, 336);

  //Aufgabe 1
  Aufgabe1Button = createButton('Timer starten');
  Aufgabe1Button.size(75, 45);
  SpannungMin = createInput('');
  SpannungMax = createInput('');
  TMin = createInput('');
  TMax = createInput('');
  TMin.size(50, 25);
  TMax.size(50, 25);

  Aufgabe1Bier = createInput('');
  Aufgabe1Alkfrei = createInput('');
  Aufgabe1bWasser = createInput('');
  Aufgabe1bSaft = createInput('');
  Aufgabe2Bier = createInput('');
  Aufgabe2Alkfrei = createInput('');
  Abweichung = createInput('');

  Begründung = createElement('textarea', '');
  Gedankenkette = createElement('textarea', '');
  Gedankenkette.size(1000, 120);
  Aufgabe4Interpretation1 = createElement('textarea', '');
  Aufgabe4Interpretation2 = createElement('textarea', '');
  Aufgabe4Interpretation3 = createElement('textarea', '');
  Theorie2_text1 = createElement('textarea', '');
  Theorie2_text1.size(1000, 200);
  BegründungTheorie2 = createElement('textarea', 'Begründung: ');
  BegründungAufgabe1 = createElement('textarea', '');
  NächsteSpannung = createButton('ok');

  checkWasser = createCheckbox('\nWasser');
  checkApfelsaft = createCheckbox('\nApfelsaft');
  checkAlkfrei = createCheckbox('\nalkoholfreies Bier');

  vor = createButton('');
  ErgebnisseSpeichern = createButton('Ergebnisse speichern');
  WasserButton = createButton('Wasser');
  AlkfreiBierButton = createButton('alkoholfreies Bier');
  ApfelsaftButton = createButton('Apfelsaft');
  Log = createButton('Logarithmische Darstellung');
  Linear = createButton('Lineare Darstellung');
  zoomButton = createButton('Zoom');
  NormalisierButton = createButton('Normalisieren');
  Interpretation1 = createElement('textarea', '1. Lineare Darstellung \nVorteile: \n-\n-\n\nNachteile:\n-\n-\n\n2.Logarithmische Darstellung\nVorteile:\n-\n-\n\nNachteile:\n-\n-');
  Interpretation2 = createElement('textarea', '');
  Aufgabe4Text1 = createElement('textarea', '');
  Aufgabe4Text2 = createElement('textarea', '');
  Aufgabe4Text3 = createElement('textarea', '');
  HystereseVermutung = createElement('textarea', '');
  HystereseVermutung.size(1000, 120);
  Aufgabe4Text1.size(300, 100);
  Aufgabe4Text2.size(300, 100);
  Aufgabe4Text3.size(300, 100);
  Interpretation1.size(1000, 325);
  Interpretation2.size(1000, 125);
  Los = createButton('Los');

  Restart = createButton('Reset');
  Restart.hide();
  for (let i = 0; i < 23; i++) {
    Widerstand[i] = createInput('');
    Widerstand[i].hide();
    Widerstand[i].size(100, 30);
    Widerstand[i].style('font-size', 20 + "px");
  }
  Temperatur16Volt = createInput('');
  Temperatur26Volt = createInput('');
  AuswahlBier = createButton('Wasser');;
  AuswahlAlkoholfrei = createButton('Alkoholfreies Bier');
  AuswahlLuft = createButton('Apfelsaft');
  Temperatur16Volt.size(50, 30);
  Temperatur26Volt.size(50, 30);
  sliderSpannung = createSlider(0.6, 3, 0, 0.01);
  for (let i = 0; i < 36; i++) {
    Statistik[i] = 0;
  }
  VorZurück();


  // Style Optionen
  ReaktionsrateWasser.style('font-size', '20px');
  ReaktionsrateApfelsaft.style('font-size', '20px');
  ReaktionsrateAlkfrei.style('font-size', '20px');
  TMin.style('font-size', 25 + "px");
  TMax.style('font-size', 25 + "px");
  Abweichung.style('font-size', 20 + "px");
  checkWasser.style('font-size', 40 + "px");
  checkApfelsaft.style('font-size', 40 + "px");
  checkAlkfrei.style('font-size', 40 + "px");
  AuswahlBier.style('font-size', 30 + "px");
  AuswahlAlkoholfrei.style('font-size', 30 + "px");
  AuswahlLuft.style('font-size', 30 + "px");
  Temperatur16Volt.style('font-size', 25 + "px");
  Temperatur26Volt.style('font-size', 25 + "px");
  Theorie2_1.style('font-size', '20px');
  Theorie2_2.style('font-size', '20px');
  Theorie2_3.style('font-size', '20px');
  Theorie2_4.style('font-size', '20px');
  Theorie2_5.style('font-size', '20px');
  Theorie2_5.style('font-size', '20px');
  Theorie2_6.style('font-size', '20px');
  Theorie2_7.style('font-size', '20px');
  Theorie2_8.style('font-size', '20px');
  Theorie2_9.style('font-size', '20px');
  Theorie2_10.style('font-size', '20px');
  Theorie2_11.style('font-size', '20px');
  Theorie2_12.style('font-size', '20px');
  Theorie2_13.style('font-size', '20px');
  // Zu Beginn werden alle Buttons und Inputs nicht angezeigt
  hideAll();

  vor.style("background-color", "transparent");
  vor.style("border-top", "20px solid transparent");
  vor.style("border-left", "70px solid lightblue");
  vor.style("border-right", "transparent");
  vor.style("border-bottom: 20px solid transparent");
  vor.style("width: 100px");
  vor.mouseOver(onTopWeiter).mouseOut(outsideWeiter);

  function onTopWeiter() {
    vor.style("border-left", "70px solid #3399ff");
  }

  function outsideWeiter() {
    vor.style("border-left", "70px solid #99ccff");
  }

  zurück.style("background-color", "transparent");
  zurück.style("border-top", "20px solid transparent");
  zurück.style("border-right", "70px solid lightblue");
  zurück.style("border-left", "transparent");
  zurück.style("border-bottom: 20px solid transparent");
  zurück.style("width: 100px");
  zurück.mouseOver(onTopZurück).mouseOut(outsideZurück);

  function onTopZurück() {
    zurück.style("border-right", "70px solid #3399ff");
  }

  function outsideZurück() {
    zurück.style("border-right", "70px solid #99ccff");
  }
}


// noStroke();
// fill(0);
// translate(0, 600);
// push();
// fill(255);
// noStroke();
// rect(0, 30, 300, 208);
// pop();
// push();
// fill(255);
// stroke(0);
// rect(10, 60, 1180, 555);



function Ergebnisse() {

}




//
// function Ergebnisse() {
//   push();
//   let cnv = createCanvas(1200, 1400);
//   cnv;
//   background(255);
//   push();
//   textSize(46);
//   fill(0);
//   text("Modul 1: Funktonsweise eines Halbleiter-Gassensors", 65, 650);
//   textSize(36);
//   if (Name2.value() == '' || Name2.value() == 'Vorname') {
//     text("Zusammenfassung deiner Ergebnisse", 295, 700);
//     text(Name1.value(), 600 - textWidth(Name1.value()) / 2, 800);
//   } else {
//     text("Zusammenfassung eurer Ergebnisse", 295, 700);
//     let a = Name1.value() + " und " + Name2.value();
//     text(a, 600 - textWidth(a) / 2, 800);
//   }
//   let b = "Klasse " + Klasse.value();
//   text(b, 600 - textWidth(b) / 2, 850);
//   image(DBU, 500, 900);
//   //    image(AMS, 600, 900);
//   push();
//   image(SUSmobil, 245, 100);
//   pop();
//   pop();
//   cnv.loadPixels();
//   doc.addImage(cnv.canvas.toDataURL(), 'PNG', 5, 0, 200, 320, undefined, 'FAST');
//   // SEITE 2
//
//   doc.addPage();
//   push();
//   MusterloesungSeite1();
//   noStroke();
//   text("Seite 1/4", 580, 1270);
//   text(day() + "." + month() + "." + year(), 1127, 1270);
//   cnv.loadPixels();
//   doc.addImage(cnv.canvas.toDataURL(), 'PNG', 5, 0, 200, 320, undefined, 'FAST');
//
//
//   //
//
//   doc.addPage();
//   push();
//   fill(0);
//   stroke(0);
//   MusterloesungSeite2();
//   noStroke();
//   text("Seite 2/4", 580, 1270);
//   text(day() + "." + month() + "." + year(), 1127, 1270);
//   cnv.loadPixels();
//   doc.addImage(cnv.canvas.toDataURL(), 'PNG', 5, 0, 200, 320, undefined, 'FAST');
//   //
//   doc.addPage();
//   push();
//   MusterloesungSeite3();
//   noStroke();
//   text("Seite 3/4", 580, 1270);
//   text(day() + "." + month() + "." + year(), 1127, 1270);
//   cnv.loadPixels();
//   doc.addImage(cnv.canvas.toDataURL(), 'PNG', 5, 0, 200, 320, undefined, 'FAST');
//   //
//   doc.addPage();
//   push();
//   MusterloesungSeite4();
//   noStroke();
//   text("Seite 4/4", 580, 1270);
//   text(day() + "." + month() + "." + year(), 1127, 1270);
//   cnv.loadPixels();
//   doc.addImage(cnv.canvas.toDataURL(), 'PNG', 5, 0, 200, 320, undefined, 'FAST');
//
//
//   doc.save('Zusammenfassung');
//   hideAll();
//   zurück.hide();
//   Seite = 100;
//   ErgebnisseSpeichern.hide();
//   cnv.hide();
// }


// Diese Funktion zeigt den Fortschrittsbalken am unteren Ende an
function Fortschritt() {
  push();
  textSize(14);
  fill(0);
  text("Fortschritt:", 20, 735);
  for (let i = 0; i < 4; i++) {
    line(100 + 275 * i, 700, 100 + 275 * i, 800);
  }

  line(0, 715, 1200, 715);

  textAlign(CENTER);
  text("Experimentelle Phase 1", 237, 712);
  text("Theoretische Phase 1", 512, 712);
  text("Experimentelle Phase 2", 782, 712);
  text("Theoretische Phase 2", 1062, 712);

  for (let i = 0; i < 13; i++) {
    fill(255);
    ellipse(113 + 21 * i, 731, 5, 5);
  }

  for (let i = 0; i < 12; i++) {
    fill(255);
    ellipse(402 + 19.667 * i, 731, 5, 5);
  }

  for (let i = 0; i < 11; i++) {
    fill(255);
    ellipse(676 + 22.72 * i, 731, 5, 5);
  }

  for (let i = 0; i < 11; i++) {
    fill(255);
    ellipse(951 + 22.7 * i, 731, 5, 5);
  }
  if (Seite < 17.5) {
    for (let i = 0; i < Seite - 4; i++) {
      fill(0);
      ellipse(113 + 21 * i, 731, 5, 5);
    }
  } else {
    for (let i = 0; i < 13; i++) {
      fill(0);
      ellipse(113 + 21 * i, 731, 5, 5);
    }
  }

  if (Seite > 17.5 && Seite < 30.0) {
    for (let i = 0; i < Seite - 17; i++) {
      fill(0);
      ellipse(402 + 19.667 * i, 731, 5, 5);
    }

  } else if (Seite >= 30) {
    for (let i = 0; i < 12; i++) {
      fill(0);
      ellipse(402 + 19.667 * i, 731, 5, 5);
    }
  }

  if (Seite >= 30 && Seite < 41.5) {
    for (let i = 0; i < Seite - 30; i++) {
      fill(0);
      ellipse(676 + 22.72 * i, 731, 5, 5);
    }
  } else if (Seite > 41.0) {
    for (let i = 0; i < 11; i++) {
      fill(0);
      ellipse(676 + 22.72 * i, 731, 5, 5);
    }
  }


  if (Seite > 41) {
    for (let i = 0; i < Seite - 41; i++) {
      fill(0);
      ellipse(951 + 22.7 * i, 731, 5, 5);
    }
  }


  pop();

}

function draw() {

  angleMode(RADIANS);
  Musterlösung.hide();
  if (Seite == 100) {
    zurück.hide();
  }
  if (Seite == 99) {
    MusterloesungSeite1();

  } else if (Seite < 4) {
    background(240);
  } else if (Seite > 3 && Seite < 17.5) {
    push();
    background(230, 230, 255);
    for (let i = 0; i < 750; i++) {
      stroke(255 - 30 * i / 750, 255, 255);
      line(0, i, 1200, i);
    }
    pop();

  } else if (Seite >= 17.5 && Seite < 30) {
    push();
    background(230, 230, 255);
    for (let i = 0; i < 750; i++) {
      stroke(255, 255 - 30 * i / 750, 255 - 30 * i / 750);
      line(0, i, 1200, i);
    }
    pop();
  } else if (Seite >= 30 && Seite < 41.5) {
    push();
    background(230, 230, 255);
    for (let i = 0; i < 750; i++) {
      stroke(255 - 30 * i / 750, 255, 255);
      line(0, i, 1200, i);
    }
    pop();
  } else if (Seite < 53) {
    push();
    background(230, 230, 255);
    for (let i = 0; i < 750; i++) {
      stroke(255, 255 - 30 * i / 750, 255 - 30 * i / 750);
      line(0, i, 1200, i);
    }
    pop();
  } else {
    background(240);
  }

  push();
  fill(255);
  stroke(0)
  rect(-50, 701, 1300, 200);
  pop();
  Rahmen();
  stats();
  if (Seite > 3 && Seite < 99) {
    Fortschritt();
  }
  //    text("Seite " + Seite, width - 60, height - 55);
  if (Seite == -15) {

  }



  if (Seite == 1) {

    Seite1();
    zurück.hide();
  } else if (Seite != 99) {
    zurück.show();
  }
  if (Seite == 2) {
    Seite2();
  }
  if (Seite == 3) {
    Seite3();
  }
  if (Seite == 3.5) {
    Seite3Punkt5();
  }
  if (Seite == 4) {
    Seite4();
  }
  if (Seite == 5) {
    Seite5();
  }
  if (Seite == 6) {
    Seite6();
  }
  if (Seite == 7) {
    Seite7();
  }
  if (Seite == 7.5) {
    Seite75();
  }
  if (Seite == 8) {
    Seite8();
  }
  if (Seite == 9) {
    Seite9();
  }
  if (Seite == 10) {
    Seite10();
  }
  if (Seite == 11) {
    Seite11();
  }
  if (Seite == 12) {
    Seite12();
  }
  if (Seite == 13) {
    Seite13();
  }
  if (Seite == 14) {
    Seite14();
  }
  if (Seite == 15) {
    Seite15();
  }
  if (Seite == 16) {
    Seite16();
  }
  if (Seite == 17) {
    Seite17();
  }
  if (Seite == 17.5) {
    Seite175();
  }
  if (Seite == 18) {
    Seite18();
  }
  if (Seite == 19) {
    Seite19();
  }
  if (Seite == 20) {
    Seite20();
  }
  if (Seite == 21) {
    Seite21();
  }
  if (Seite == 22) {
    Seite22();
  }
  if (Seite == 23) {
    Seite23();
  }
  if (Seite == 24) {
    Seite24();
  }
  if (Seite == 25) {
    Seite25();
  }
  if (Seite == 26) {
    Seite26();
  }
  if (Seite == 27) {
    Seite27();
  }
  if (Seite == 28) {
    Seite28();
  }
  if (Seite == 29) {
    Seite29();
  }
  if (Seite == 30) {
    Seite345();

  }

  if (Seite == 31) {
    Seite30();

  }
  if (Seite == 32) {
    Seite31();

  }
  if (Seite == 33) {
    Seite32();

  }
  if (Seite == 34) {
    Seite33();

  }
  if (Seite == 34.5) {
    Seite34();

  }
  if (Seite == 35) {
    Seite35();
    vor.show();
  }
  if (Seite == 36) {
    Seite36();
    vor.show();
  }
  if (Seite == 37) {
    Seite37();
    if (Cycle >= 21) {
      vor.show();
    } else {
      vor.hide();
    }

  }
  if (Seite == 38) {
    Seite38();
    Seite = 39
  }
  if (Seite == 39) {
    Seite39();
  }
  if (Seite == 40) {
    Seite40();
  }
  if (Seite == 41) {
    Seite41();
  }
  if (Seite == 41.5) {
    Seite415();
  }
  if (Seite == 42) {
    Seite42();
  }
  if (Seite == 43) {
    Seite43();
  }
  if (Seite == 44) {
    Seite44();
  }
  if (Seite == 45) {
    Seite45();
  }
  if (Seite == 46) {
    Seite46();
  }
  if (Seite == 47) {
    Seite47();
  }
  if (Seite == 48) {
    Seite48();
  }
  if (Seite == 49) {
    Seite49();
  }
  if (Seite == 50) {
    Seite50();
  }
  if (Seite == 51) {
    Seite51();
  }
  if (Seite == 52) {
    Seite52();
  }
  if (Seite == 53) {
    Seite53();
    vor.show();
  }
  if (Seite == 54) {
    Seite54();
    vor.show();
  }
  if (Seite == 55) {
    Seite55();
    vor.show();
  }

  if (Seite == 56) {
    vor.hide();
    textFormat("Vielen Dank für deine Teilnahme an dem Modul! ", 290, 100, 30);
    textFormat("Melde dich nun bei deinem Betreuer, um eine Zusammenfassung zu erhalten.", 90, 150, 30);


    weiterZurUmfrage.show();
  }

  if (Seite == 4 || Seite == 17.5 || Seite == 30 || Seite == 41.5) {
    zurück.position(480 + 300, 450 + 75);
    vor.position(620 + 300, 450 + 75);
  } else {
    vor.position(1425, 725);
    zurück.position(-20 + 300, 650 + 75);
  }


}

function hideAll() {
  Name1.hide();
  Name2.hide();
  Klasse.hide();
  SpannungMax.hide();
  SpannungMin.hide();
  Aufgabe1Bier.hide();
  Aufgabe1Alkfrei.hide();
  Aufgabe1Button.hide();
  Aufgabe1bSaft.hide();
  Aufgabe1bWasser.hide();
  Abweichung.hide();
  BegründungAufgabe1.hide();
  Aufgabe2Bier.hide();
  Aufgabe2Alkfrei.hide();
  Begründung.hide();
  ReaktionsrateWasser.hide();
  ReaktionsrateApfelsaft.hide();
  ReaktionsrateAlkfrei.hide();
  BegründungReaktionsrate.hide();
  HinweisReaktionsrate.hide();
  SelectFrage5.hide();
  SelectFrage6.hide();
  SelectFrage1.hide();
  SelectFrage2.hide();
  SelectFrage3.hide();
  SelectFrage4.hide();
  HinweisSeite11.hide();
  Gedankenkette.hide();
  Begründung.hide();
  SelectFrage1.hide();
  SelectFrage2.hide();
  SelectFrage3.hide();
  SelectFrage4.hide();
  Gedankenkette.hide();
  SelectFrage5.hide();
  SelectFrage6.hide();
  HinweisSeite11.hide();
  HinweisReaktionsrate.hide();
  BegründungReaktionsrate.hide();
  ReaktionsrateWasser.hide();
  ReaktionsrateApfelsaft.hide();
  ReaktionsrateAlkfrei.hide();
  sliderSpannung.hide();
  TMin.hide();
  TMax.hide();
  Temperatur16Volt.hide();
  Temperatur26Volt.hide();
  AuswahlBier.hide();
  AuswahlAlkoholfrei.hide();
  AuswahlLuft.hide();
  checkWasser.hide();
  checkApfelsaft.hide();
  checkAlkfrei.hide();
  sliderSeite16.hide();
  for (let i = 0; i < 22; i++) {
    Widerstand[i].hide();
  }
  Los.hide();
  Restart.hide();
  NächsteSpannung.hide();
  if (Cycle == 22) {
    NächsteSpannung.hide();
  }
  HystereseVermutung.hide();
  WasserButton.hide();
  AlkfreiBierButton.hide();
  ApfelsaftButton.hide();
  Log.hide();
  Linear.hide();
  zoomButton.hide();
  NormalisierButton.hide();

  Interpretation2.hide();
  Interpretation1.hide();
  Theorie2_1.hide();
  Theorie2_2.hide();
  Theorie2_3.hide();
  Theorie2_4.hide();
  Theorie2_5.hide();
  Theorie2_6.hide();
  Theorie2_7.hide();
  Theorie2_8.hide();
  Theorie2_9.hide();
  Theorie2_10.hide();
  Theorie2_11.hide();
  Theorie2_12.hide();
  Theorie2_13.hide();
  Theorie2Radio1.hide();
  Theorie2Radio2.hide();
  Theorie2Radio3.hide();
  Theorie2Radio4.hide();
  Sensitivität.hide();
  TempWasser.hide();
  TempApfel.hide();
  TempAlkfrei.hide();
  TempWasserU.hide();
  TempApfelU.hide();
  TempAlkfreiU.hide();
  TempWasser.hide();
  TempApfel.hide();
  TempAlkfrei.hide();
  TempWasserU.hide();
  TempApfelU.hide();
  TempAlkfreiU.hide();
  Sensitivität.hide();
  Theorie2_text1.hide();
  Theorie2Check1false.hide();
  Theorie2Check1true.hide();
  Theorie2Check2false.hide();
  Theorie2Check2true.hide();
  Theorie2Check3false.hide();
  Theorie2Check3true.hide();
  Theorie2Check4false.hide();
  Theorie2Check4true.hide();
  BegründungTheorie2.hide();
  Aufgabe4Text1.hide();
  Aufgabe4Text2.hide();
  Aufgabe4Text3.hide();
  Hinweis.hide();
  Aufgabe4Interpretation1.hide();
  Aufgabe4Interpretation2.hide();
  Aufgabe4Interpretation3.hide();
  ErgebnisseSpeichern.hide();
}

function Seite1() {
  push();
  textSize(40);
  textAlign(CENTER);
  //    SUSmobil.resize(700, 400);
  image(SUSmobil, 250, 10);
  text("Modul 1", 600, 700 - 200);
  line(600 - 80, 700 - 195, 600 + 80, 700 - 195);
  textSize(28);
  text("Herzlich Willkommen zum Workshop: Funktionsweise und Nutzung eines Gassensors", 600, 545);
  text("Bitte gebt eure Namen und eure Klasse ein:", 600, 600);
  Name1.show();
  Name2.show();
  Klasse.show();
  Name1.position(300 + 420, 630 + 75);
  Name2.position(300 + 620, 630 + 75);
  Klasse.position(300 + 520, 660 + 75);
  pop();
}

function Seite2() {
  push();
  textSize(25);
  textUnderline("Einleitung", 20, 50);
  textFormat("Du kennst das sicher. Man betritt einen Schulraum, in dem vorher eine Klasse Unterricht hatte und dabei nicht gelüftet wurde. Es „mieft“. Die Schülerinnen und Schüler, die herauskommen, haben das nicht bemerkt. ", 20, 100, 20);
  image(Motivation, 200, 150);
  pop();
}

function Seite3() {
  push();
  textSize(25);
  textUnderline("Sensor", 20, 50);
  textFormat("Um die subjektive Wahrnehmung von Gerüchen zu objektivieren, kann man Gassensoren nutzen.", 20, 100, 20);
  textFormat("In diesem Workshop beschäftigen wir uns mit der Anwendung und Funktionsweise dieser kleinen 'technischen Sinnesorgane' und schnuppern gemeinsam mit ihnen.", 20, 150, 20);
  image(Sensor, 400, 200);
  textSize(15);
  pop();
}


function Seite3Punkt5() {
  push();
  textSize(20);
  text("Was dich in diesem Workshop erwartet:", 20, 50);

  for (let i = 0; i < 5; i++) {
    line(20, 100 + 125 * i, 1180, 100 + 125 * i);
  }
  line(400, 100, 400, 600);
  line(700, 100, 700, 600);

  fill(255, 250, 250);
  rect(50, 237.5, 300, 100);
  rect(50, 487.5, 300, 100);
  fill(200, 200, 255);
  rect(50, 112.5, 300, 100);
  rect(50, 362.5, 300, 100);
  image(Theorie1, 780, 237.5);
  image(Exp2, 845, 362.5);
  image(Theo2, 850, 487.5);
  textSize(20);
  fill(0);
  text("Experimentelle \n       Phase 1", 130, 160);
  text("Theoretische \n     Phase 1", 135, 285);
  text("Experimentelle \n       Phase 2", 130, 410);
  text("Theoretische \n     Phase 2", 135, 535);


  textSize(14);
  text("Messaufbau und Sensor kennenlernen", 410, 130);
  text("Kann der Sensor Wasser von Apfelsaft und \nalkoholfreiem Bier unterscheiden?", 410, 180);


  text("Einführung eines Funktionsmodells des\nSensors", 410, 250);
  text("Grundlegende Funktionsweise des Sensors\nnachvollziehen und Temperaturabhängigkeit \ndes Sensorwiderstandes untersuchen", 410, 300);

  text("'Fingerabdruck' von Wasser, Apfelsaft und\nalkoholfreiem Bier", 410, 380);
  text("Temperaturabhängigkeit des Sensor-\nwiderstandes untersuchen", 410, 430);


  text("Temperaturabhängigkeit des Sensor-\nwiderstandes am Funktionsmodell nach\nTheorieteil 1 nachvollziehen", 410, 500);
  text("Der „Fingerabdruck“ von Gasen als \nGrundlage für die Kalibrierung", 410, 570);




  fill(255, 0, 0);
  triangle(50, 237.5, 50, 277.5, 100, 237.5);
  triangle(50, 337.5, 50, 297.5, 100, 337.5);
  triangle(350, 237.5, 300, 237.5, 350, 277.5);
  triangle(350, 297.5, 350, 337.5, 300, 337.5);
  image(BierAnPlatine_klein, 830, 112.5);

  translate(0, 250);
  triangle(50, 237.5, 50, 277.5, 100, 237.5);
  triangle(50, 337.5, 50, 297.5, 100, 337.5);
  triangle(350, 237.5, 300, 237.5, 350, 277.5);
  triangle(350, 297.5, 350, 337.5, 300, 337.5);

  fill(0, 0, 255);
  translate(0, -125);
  triangle(50, 237.5, 50, 277.5, 100, 237.5);
  triangle(50, 337.5, 50, 297.5, 100, 337.5);
  triangle(350, 237.5, 300, 237.5, 350, 277.5);
  triangle(350, 297.5, 350, 337.5, 300, 337.5);

  translate(0, -250);
  triangle(50, 237.5, 50, 277.5, 100, 237.5);
  triangle(50, 337.5, 50, 297.5, 100, 337.5);
  triangle(350, 237.5, 300, 237.5, 350, 277.5);
  triangle(350, 297.5, 350, 337.5, 300, 337.5);
  pop();
}

function Seite4() {
  push();
  fill(230, 230, 255);
  stroke(0);
  rect(0, 0, 1200, 700);
  textSize(40);
  fill(0);
  text("Teil 1", 550, 300);
  text("Experimentelle Phase", 420, 400);
  fill(50, 50, 255);
  noStroke();
  triangle(0, 0, 325, 0, 0, 325);
  triangle(0, 700, 325, 700, 0, 375);
  triangle(1200, 0, 850, 0, 1200, 325);
  triangle(1200, 700, 825, 700, 1200, 375);
  pop();
}

function Seite5() {
  push();
  textSize(25);
  textUnderline("Aufbau Platine", 20, 50);
  textFormat("In der folgenden Abbildung ist die Platine, mit der wir in diesem Workshop arbeiten, von oben und von unten dargestellt.", 20, 100, 20);
  textSize(20);
  text("Platine von oben", 220, 270);
  text("Platine von unten", 750, 270);
  image(Platine_oben, 120, 300);
  image(Platine_unten, 630, 300);
  textSize(20);
  text("Beginnen wir unten.", 500, 650);
  pop();
}

function Seite6() {
  push();
  image(Sensor_klein, 450, 200);
  textSize(20);
  text("Hier ist der Gassensor noch einmal vergrößert dargestellt.", 20, 100);
  pop();
}

function Seite7() {
  push();
  image(Sensor_klein, 450, 200);
  textFormat("Er hat auf der Oberseite eine Membran, die das empfindliche Innere vor Flüssigkeiten schützt. Das Gasgemisch kann diese Membran allerdings durchdringen.", 20, 100, 20);
  line(897, 100, 1012, 100);
  textSize(25);
  textUnderline("Membran", 220, 388);
  noFill();
  stroke(255, 0, 0);
  strokeWeight(6);
  Pfeil(0, 350, 380, 250);

  if (mouseX > 890 && mouseX < 1020 && mouseY > 80 && mouseY < 100) {
    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(870, 150, 300, 105);
    noStroke();
    textSize(18);
    fill(0);
    text("So nennen wir in diesem Workshop", 875, 175);
    text("die Luft, die eventuell weitere Kom-", 875, 210);
    text("ponenten als die üblichen enthält.", 875, 245);
  }
  pop();
}

function Seite75() {
  push();
  image(Sensor_Detail, 250, 200);
  image(Sensor_Bild_Klein, 600, 230);
  textFormat("So sieht der Sensor ohne seine Schutzkappe aus. Er besteht aus einer sensitiven Schicht, die mit dem Gasgemisch interagieren kann. Was dort genau passiert, erfährst du gleich.", 20, 100, 20);
  noStroke();
  textSize(25);
  textUnderline("sensitive Schicht", 470, 620);
  stroke(255, 0, 0);
  strokeWeight(2);
  line(405, 360, 405, 550);
  line(405, 550, 765, 550);
  line(765, 360, 765, 550);
  line(580, 550, 580, 590);
  strokeWeight(6);
  stroke(255, 0, 0);
  //Pfeil(0, 200, 350, 250);

  pop();
}

function Seite8() {
  push();
  image(Sensor_klein, 450, 200);
  textSize(25);
  textFormat("An den Seiten des Sensors siehst du vier Lötstellen. Das sind die Anschlüsse des Sensors. Zwei dieser Anschlüsse dienen zur Energieversorgung, die anderen beiden zum Anschluss eines Messgeräts. Dazu später mehr.", 20, 100, 20);
  noFill();
  stroke(255, 0, 0);
  strokeWeight(8);
  ellipse(560, 300, 100, 100);
  ellipse(710, 450, 100, 100);
  stroke(0, 0, 255);
  ellipse(710, 300, 100, 100);
  ellipse(560, 450, 100, 100);
  strokeWeight(1);
  stroke(255, 0, 0);
  fill(255, 0, 0);
  text("Energieversorgung", 150, 400);
  stroke(0, 0, 255);
  fill(0, 0, 255);
  text("Messwerte auslesen", 900, 400);
  pop();
}

function Seite9() {
  push();
  image(Platine_oben, 450, 300);
  textFormat("Auf der Oberseite sieht man den Anschluss für die USB-Energieversorgung. Sobald der Sensor betrieben wird, leuchtet die rote LED.", 20, 100, 20);
  strokeWeight(8);
  stroke(255, 0, 0);
  Pfeil(1, 650, 245, 100);
  pop();
}

function Seite10() {
  push();
  image(Platine_oben, 450, 300);
  strokeWeight(8);
  stroke(255, 0, 0);
  textFormat("Die USB-Versorgung ist allerdings nicht direkt am Gassensor angeschlossen. Es sind zusätzlich zwei regelbare Widerstände mit der Energieversorgung und dem Sensor verbunden. Den Grund dafür wirst du im ersten Experiment selbst erkennen.", 20, 100, 20);
  Pfeil(2, 615, 530, 50);
  Pfeil(2, 690, 530, 50);
  noStroke();
  fill(0);
  textSize(20);
  text("Einstellbare Widerstände", 535, 600);
  textFormat("Schließe die Platine nun mit einem Mikro-USB-Kabel an eine Stromquelle (PC) an.", 250, 650, 20);
  pop();

}

function Seite11() {
  push();
  textSize(25);
  textUnderline("Multimeter anschließen und bedienen", 20, 50);
  textFormat("Schließe eines der beiden Multimeter mit zwei Bananensteckern an die Anschlüsse auf der linken Seite, wie auf dem Bild gezeigt, an. Stelle den Messbereich auf Spannungsmessung ein. (Für eine Vergrößerung des Multimeter-Messbereichs, fahre mit der Maus über das Bild)", 20, 100, 20);
  image(Multimeter1, 420, 250);
  textFormat("Lies die Spannung ab und drehe nun an den einstellbaren Widerständen. Was fällt dir auf?", 240, 600, 20);
  // if (mouseX > 400 && mouseX < 575 && mouseY > 250 && mouseY < 450) {
  //   image(MultimeterSpannung, 400, 250);
  //   noFill();
  //   strokeWeight(15);
  //   stroke(255, 0, 0);
  //   ellipse(590, 320, 175, 100);
  // }
  pop();
}

function Seite12() {
  push();
  textSize(25);
  textFormat("Mit den einstellbaren Widerständen, den sogenannten Potentiometern, kannst du die Spannung, die an zwei der vier Anschlüssen anliegt, regeln. Gib in die unteren beiden Felder den Bereich an, in dem sich die Spannung am Sensor regeln lässt.", 20, 100, 20);

  text("Minimum der Spannung: ", 350, 300);
  text("Maximum der Spannung: ", 350, 400);
  text("Volt", 770, 300);
  text("Volt", 770, 400);
  if (SpannungMax.value() != "") {
    if (SpannungMax.value().replace(',', '.') < 2.9 || SpannungMax.value().replace(',', '.') > 3.1) {
      push();
      fill(255, 0, 0);
      textSize(20);
      text("Kontrolliere das Maximum \n      noch einmal!", 850, 380);
      pop();
    }
  }
  if (SpannungMax.value() != "") {
    if (SpannungMin.value().replace(',', '.') < 0.55 || SpannungMin.value().replace(',', '.') > 0.8 && SpannungMin.value() != "") {
      push();
      fill(255, 0, 0);
      textSize(20);
      text("Kontrolliere das Minumum \n      noch einmal!", 850, 280);
      pop();
    }
  }

  SpannungMax.show();
  SpannungMin.show();
  SpannungMax.position(650 + 300, 365 + 75);
  SpannungMin.position(650 + 300, 265 + 75);
  SpannungMax.size(100, 50);
  SpannungMin.size(100, 50);
  SpannungMin.style('font-size', 32 + 'px');
  SpannungMax.style('font-size', 32 + 'px');
  push();
  fill(255, 0, 0);
  text(FalscheEingabe, 450, 550);
  pop();
  if (Spannung == false) {
    FalscheEingabe = "Kontrolliere bitte noch einmal!";
  } else {
    FalscheEingabe = "";
  }
  textSize(20);
  text("Stelle nun in etwa eine Spannung von 1,2 Volt mithilfe des Potentiometers ein.", 310, 650);
  pop();
}

function Seite13() {
  push();
  textFormat("Bevor wir klären, wofür es denn gut sein soll, die Spannung in diesem Bereich variieren zu können, schauen wir uns die beiden anderen Anschlüsse an. Die beiden Buchsen, rechts auf der Platine, sind direkt mit den beiden anderen Anschlüssen des Sensors verbunden. Hier kann man den elektrischen Widerstand des Sensors messen, welcher in diesem Workshop die wichtigste Messgröße sein wird. (Für eine Vergrößerung des Multimeter-Messbereichs, fahre mit der Maus über das Bild)", 20, 50, 20);
  textFormat("Schließe dort nun das andere Multimeter mit zwei Bananensteckern an und stelle des Messbereich Widerstand ein.", 20, 160, 20);
  image(AufbauGesamt, 420, 200);

  push();
  if (mouseX > 370 && mouseX < 880 && mouseY > 200 && mouseY < 550) {
    image(MultimeterWiderstand, 370, 200);
    noFill();
    stroke(255, 0, 0);
    strokeWeight(15);
    ellipse(680, 420, 190, 130);
  }
  pop();
  Pfeil(0, 200, 400, 100);

  line(950, 400, 1050, 400);
  line(950, 400, 970, 420);
  line(950, 400, 970, 380);
  fill(255, 0, 0);
  textSize(20);
  text("Spannung\n  auslesen", 70, 390);
  fill(0, 0, 255);
  text("Widerstand\n   auslesen", 1070, 390);
  pop();

}
let TimerA1 = false;
let timeA1 = 60;

function TimerAufgabe1() {
  if (TimerA1) {
    TimerA1 = false;
  } else {
    TimerA1 = true;
    timeA1 = 60;
  }
}
let millis2;

function Seite14() {
  push();
  textSize(25);
  textUnderline("Aufgabe 1", 20, 50);
  text('Wasser', 470, 525);
  text('Apfelsaft', 672, 525);
  text('Widerstand \n      [kΩ]', 315, 595);
  textSize(12);
  textFormat('Für das erste Experiment wollen wir das Sensorverhalten bei Wasser und Apfelsaft untersuchen. Nimm ein Schraubglas mit der Aufschrift "Wasser", öffne es und schraube es vorsichtig unter der Platine an. Achte darauf, dass der Sensor nicht nass wird, da er sonst beschädigt werden könnte! (Erinnerung: Stelle die Spannung auf ca. 1,2 V)', 20, 100, 20);
  Aufgabe1Bier.show();
  Aufgabe1Alkfrei.show();
  Aufgabe1Button.show();
  Aufgabe1Bier.position(300 + 450, 550 + 75);
  Aufgabe1Alkfrei.position(300 + 650, 550 + 75);
  Aufgabe1Button.position(300 + 480, 440 + 75);
  Aufgabe1Bier.size(150, 100);
  Aufgabe1Alkfrei.size(150, 100);
  Aufgabe1Bier.style('font-size', '35px', 'text-align', 'CENTER');
  Aufgabe1Alkfrei.style('font-size', '35px', 'text-align', 'CENTER');
  Aufgabe1Button.mousePressed(TimerAufgabe1);
  image(Bierglas, 250, 155);
  image(BierAnPlatine, 625, 155);


  if (TimerA1) {
    millis2 = millis() - millis2;
    if (timeA1 < 0) {
      TimerA1 = false;
      timeA1 = 0;
    } else {
      timeA1 -= millis2 / 1000;
    }
  }
  textSize(20);
  text(nf(timeA1, 0, 1).replace('.', ',') + ' s', 600, 470);
  textFormat('Warte dann 60 Sekunden und lies den gemessenen Widerstand auf dem Multimeter ab. Wenn du auf "Timer starten" klickst läuft ein Timer für diese Zeit. Wiederhole den Versuch mit "Apfelsaft" und trage beide Messwerte in die untere Tabelle ein', 20, 400, 20);
  pop();
  millis2 = millis();
}

function Seite15() {
  push();
  Aufgabe1Button.position(300 + 80, 120 + 75);
  Aufgabe1Button.show();
  Aufgabe1bWasser.position(300 + 458, 280 + 75);
  Aufgabe1bWasser.show();
  Aufgabe1bSaft.position(300 + 650, 280 + 75);
  Aufgabe1bSaft.show();
  Aufgabe1bWasser.style('font-size', '40px');
  Aufgabe1bWasser.size(150, 100);
  Aufgabe1bSaft.size(150, 100);
  Aufgabe1bSaft.style('font-size', '40px');
  BegründungAufgabe1.position(300 + 100, 540 + 75);
  BegründungAufgabe1.show();
  BegründungAufgabe1.size(1000, 120);
  textSize(20);
  text(nf(timeA1, 0, 1).replace('.', ',') + ' s', 180, 150);
  textSize(25);
  textFormat("Stelle nun die Spannung auf ca. 2,6 Volt und miss erneut Wasser und Apfelsaft. Trage deine Ergebnisse in die freien Felder ein.", 20, 50, 20);
  textFormat("Begründe, inwiefern es dir nun möglich ist mithilfe des Sensors Wasser von Apfelsaft zu unterscheiden!", 50, 510, 20);
  translate(0, -170);
  text('Wasser', 475, 325);
  text('Apfelsaft', 672, 325);
  text(' bei U = 1,2 Volt', 850, 405);
  text(' bei U = 2,6 Volt', 850, 510);
  text('Widerstand \n      [kΩ]', 310, 395);
  text('Widerstand \n      [kΩ]', 310, 500);
  line(300, 350, 1000, 350);
  line(448, 300, 448, 600);
  line(625, 300, 625, 600);
  line(820, 300, 820, 600);
  textSize(40);
  text(Aufgabe1Bier.value(), 500, 400);
  text(Aufgabe1Alkfrei.value(), 690, 400);
  Aufgabe1Button.mousePressed(TimerAufgabe1);

  if (TimerA1) {
    if (timeA1 < 0) {
      TimerA1 = false;
      timeA1 = 0;
    } else {
      timeA1 -= 1 / frameRate();
    }
  }

  textSize(20);
  pop();
}

function Seite16() {
  push();
  Aufgabe1Button.position(300 + 550, 120 + 75);
  Aufgabe1Button.show();
  Aufgabe2Bier.position(300 + 700, 300 + 75);
  Aufgabe2Bier.show();
  Aufgabe2Alkfrei.position(300 + 700, 450 + 75);
  Aufgabe2Alkfrei.show();
  textSize(25);
  textUnderline("Aufgabe 2", 20, 50);
  textFormat("Wiederhole das Experiment nun mit alkoholfreiem Bier. Was stellst du fest?", 20, 100, 20);

  textSize(25);
  line(100, 295, 1100, 295);
  line(100, 425, 1100, 425);
  line(325, 250, 325, 550);
  line(480, 250, 480, 550);
  line(660, 250, 660, 550);
  line(915, 250, 915, 550);
  text("U = 1,2 Volt", 950, 355);
  text("U = 2,6 Volt", 950, 495);
  text('Wasser', 350, 275);
  text('Apfelsaft', 515, 275);
  text('alkoholfreies Bier', 680, 275);
  text('Widerstand \n     [kΩ]', 165, 345);
  text('Widerstand \n     [kΩ]', 165, 495);
  textSize(40);
  text(Aufgabe1Bier.value(), 370, 355);
  text(Aufgabe1Alkfrei.value(), 535, 355);
  text(Aufgabe1bWasser.value(), 370, 495);
  text(Aufgabe1bSaft.value(), 535, 495);
  Aufgabe2Bier.size(150, 100);
  Aufgabe2Alkfrei.size(150, 100);
  Aufgabe2Bier.style('font-size', '40px', 'text-align', 'CENTER');
  Aufgabe2Alkfrei.style('font-size', '40px', 'text-align', 'CENTER');
  Aufgabe1Button.mousePressed(TimerAufgabe1);
  if (TimerA1) {
    if (timeA1 < 0) {
      TimerA1 = false;
      timeA1 = 0;
    } else {
      timeA1 -= 1 / frameRate();
    }
  }

  textSize(20);
  text(nf(timeA1, 0, 1).replace('.', ',') + ' s', 640, 150);
  pop();

}

function Seite17() {
  push();
  Begründung.position(300 + 175, 585 + 75);
  Begründung.show();
  Begründung.size(850, 100);

  translate(0, -30);

  fill(0, 0, 255);
  stroke(255);
  rect(150, 100, 950, 50);
  fill(150, 150, 255);
  rect(150, 150, 950, 100);
  rect(150, 300, 950, 50);
  fill(200, 200, 255);
  rect(150, 250, 950, 50);
  rect(150, 350, 950, 50);

  stroke(255);
  strokeWeight(2);
  line(350, 100, 350, 400);
  line(720, 100, 720, 400);
  line(730, 100, 730, 400);

  line(535, 151, 535, 400);
  line(915, 151, 915, 400);




  strokeWeight(1);

  noStroke();
  fill(255);
  textSize(24);
  text("Spannung U = 1,2 V", 420, 135);
  text("Spannung U = 2,6 V", 820, 135);

  textSize(24);
  fill(0);
  text("Widerstand [kΩ]", 358, 200);
  text("Relativer Wert\nzu Wasser [%]", 555, 190);

  text("Widerstand [kΩ]", 740, 200);
  text("Relativer Wert\nzu Wasser [%]", 930, 190);

  text("Wasser", 208, 285);
  text("Apfelsaft", 200, 335);
  text("Alkoholfr. Bier", 170, 385);




  textAlign(CENTER);
  text(Aufgabe1Bier.value().replace('.', ','), 450, 285);
  text(Aufgabe1Alkfrei.value().replace('.', ','), 450, 335);
  text(Aufgabe2Bier.value().replace('.', ','), 450, 385);


  text(Aufgabe1bSaft.value().replace('.', ','), 830, 335);
  text(Aufgabe1bWasser.value().replace('.', ','), 830, 285);
  text(Aufgabe2Alkfrei.value().replace('.', ','), 830, 385);


  text("100", 625, 285);
  text("100", 1000, 285);

  let apfel12rel = Aufgabe1Alkfrei.value().replace(',', '.') / (Aufgabe1Bier.value().replace(',', '.'));
  let alkfrei12rel = Aufgabe2Bier.value().replace(',', '.') / (Aufgabe1Bier.value().replace(',', '.'));

  let apfel26rel = Aufgabe1bSaft.value().replace(',', '.') / (Aufgabe1bWasser.value().replace(',', '.'));
  let alkfrei26rel = Aufgabe2Alkfrei.value().replace(',', '.') / (Aufgabe1bWasser.value().replace(',', '.'));
  text(nf(100 * apfel12rel, 0, 1).replace('.', ','), 625, 335);
  text(nf(100 * alkfrei12rel, 0, 1).replace('.', ','), 625, 385);

  text(nf(100 * apfel26rel, 0, 1).replace('.', ','), 1000, 335);
  text(nf(100 * alkfrei26rel, 0, 1).replace('.', ','), 1000, 385);

  stroke(0);
  fill(255);
  rect(350, 415, 370, 130);
  rect(730, 415, 370, 130);



  noStroke();
  fill(0);

  textSize(16);
  for (let i = 0; i < 6; i++) {
    text(20 * i, 350 + 74 * i, 565);
    text(20 * i, 720 + 74 * i, 565);
  }
  stroke(200);
  for (let i = 0; i < 4; i++) {
    line(424 + 74 * i, 415, 424 + 74 * i, 545);
    line(794 + 74 * i, 415, 794 + 74 * i, 545);
  }

  let balkenSaftA = apfel12rel * 370;
  let balkenAlkfreiA = alkfrei12rel * 370;

  let balkenSaftB = apfel26rel * 370;
  let balkenAlkfreiB = alkfrei26rel * 370;

  fill(0, 0, 255);
  text("Wasser", 280, 453);
  fill(255, 0, 0);
  text("Apfelsaft", 280, 490);
  fill(200, 200, 0);
  text("Alkoholfreies\nBier", 280, 522);

  fill(0);


  stroke(0, 0, 255);


  strokeWeight(2);
  line(350, 447.5, 720, 447.5);
  line(730, 447.5, 1100, 447.5);
  stroke(255, 0, 0);
  line(350, 480, 350 + balkenSaftA, 480);
  line(730, 480, 730 + balkenSaftB, 480);
  stroke(200, 200, 0);
  line(350, 512.5, 350 + balkenAlkfreiA, 512.5);
  line(730, 512.5, 730 + balkenAlkfreiB, 512.5);


  noStroke();
  textAlign(LEFT);
  textSize(20);
  text("Welche Betriebsspannung ist deiner Meinung nach besser geeignet um diese 3 Stoffe zu unterscheiden? Begründe deine Ent-\nscheidung.", 20, 600);

  Kontrast1 = 240;
  Kontrast2 = 240;
  Kontrast3 = 240;
  textAlign(CORNER);
  textSize(30);
  text("Zusammenfassung", 20, 80);
  textSize(14);
  text("[%]", 1107, 563);
  text("[%]", 737, 563);
  pop();

}

function Seite175() {
  push();
  textSize(40);
  fill(0);
  text("Teil 2", 550, 300);
  text("Theoretische Phase", 420, 400);
  fill(255, 0, 0);
  noStroke();
  triangle(0, 0, 325, 0, 0, 325);
  triangle(0, 700, 325, 700, 0, 375);
  triangle(1200, 0, 850, 0, 1200, 325);
  triangle(1200, 700, 825, 700, 1200, 375);
  pop();
}

function Seite345() {
  push();
  textSize(40);
  fill(0);
  text("Teil 3", 550, 300);
  text("Experimentelle Phase", 420, 400);
  fill(50, 50, 255);
  noStroke();
  triangle(0, 0, 325, 0, 0, 325);
  triangle(0, 700, 325, 700, 0, 375);
  triangle(1200, 0, 850, 0, 1200, 325);
  triangle(1200, 700, 825, 700, 1200, 375);
  pop();
}

function Seite415() {
  push();
  textSize(40);
  fill(0);
  text("Teil 4", 550, 300);
  text("Theoretische Phase", 420, 400);
  fill(255, 0, 0);
  noStroke();
  triangle(0, 0, 325, 0, 0, 325);
  triangle(0, 700, 325, 700, 0, 375);
  triangle(1200, 0, 850, 0, 1200, 325);
  triangle(1200, 700, 825, 700, 1200, 375);
  pop();
}

function Seite18() {
  push();
  textFormat("Um die nach euren ersten Messungen beobachtete Widerstandsänderung bei Angebot eines gasförmigen Stoffes (Luft mit und ohne „Zielgase“) besser zu verstehen, werden wir uns auf den folgenden Seiten die Funktionsweise des Sensors einmal etwas genauer ansehen. Wir nutzen dabei ein schematisches Modell, dass uns im Laufe des Workshops noch ein weiteres Mal begegnen wird. ", 20, 50, 20);
  textFormat("Zunächst zu den wichtigsten Komponenten des Modells.", 20, 200, 20);
  image(TheorieBeschriftung1, 520, 320);
  pop();
}

function Seite19() {
  push();
  image(TheorieBeschriftung1, 520, 320);
  textSize(20);
  textFormat("Um die nach euren ersten Messungen beobachtete Widerstandsänderung bei Angebot eines gasförmigen Stoffes (Luft mit und ohne „Zielgase“) besser zu verstehen, werden wir uns auf den folgenden Seiten die Funktionsweise des Sensors einmal etwas genauer ansehen. Wir nutzen dabei ein schematisches Modell, dass uns im Laufe des Workshops noch ein weiteres Mal begegnen wird. ", 20, 50, 20);
  textFormat("Zunächst zu den wichtigsten Komponenten des Modells.", 20, 200, 20);
  push();
  fill(255);
  stroke(0);
  rect(85, 335, 355, 50);
  rect(410, 220, 400, 50);
  rect(785, 400, 270, 50);
  pop();

  text("Atmosphäre der äußeren Umgebung", 100, 370);
  line(440, 365, 590, 365);
  text("Leitendes Sensormaterial", 800, 430);
  line(665, 425, 785, 425);
  text("Sensoroberfläche", 530, 240);
  text("(Übergang von Sensor und Atmosphäre)", 430, 260);
  line(600, 270, 600, 390);
  pop();
}

function Seite20() {
  push();
  image(TheorieBeschriftung1, 520, 320);
  textSize(20);
  textFormat("Um die nach euren ersten Messungen beobachtete Widerstandsänderung bei Angebot eines gasförmigen Stoffes (Luft mit und ohne „Zielgase“) besser zu verstehen, werden wir uns auf den folgenden Seiten die Funktionsweise des Sensors einmal etwas genauer ansehen. Wir nutzen dabei ein schematisches Modell, dass uns im Laufe des Workshops noch ein weiteres Mal begegnen wird. ", 20, 50, 20);
  textFormat("Zunächst zu den wichtigsten Komponenten des Modells.", 20, 200, 20);

  push();
  fill(255);
  stroke(0);
  rect(80, 390, 320, 70);
  rect(780, 390, 280, 50);
  strokeWeight(3);
  stroke(255, 0, 0);
  noFill();
  rect(545, 418, 25, 20);
  pop();
  text("Elektronen (Punkte) und \nGeschwindigkeit (Pfeillänge)", 100, 420);
  line(400, 428, 545, 428);
  text("Messung des Stromflusses", 800, 420);
  line(780, 415, 643, 480);
  pop();
}

function Seite21() {
  push();
  textFormat("Wir gehen zunächst von der Situation aus, dass sich der Sensor in einer Umgebung ohne Gasmoleküle befindet. In dieser Situation trägt eine gewisse Anzahl freier Elektronen zum Ladungstransport bei. Nicht nur die Anzahl der Elektronen, sondern auch deren kinetische Energie beeinflusst den Stromfluss positiv.", 20, 400, 20);
  image(TheorieBeschriftung1, 520, 100);
  Hinweisbool = false;
  pop();
}

let tempShow = true;

function Seite22() {
  push();

  if (tempShow) {
    SelectFrage1.style('font-size', '20px');
    SelectFrage2.style('font-size', '20px');
    SelectFrage3.style('font-size', '20px');
    SelectFrage4.style('font-size', '20px');
    SelectFrage1.position(300 + 660, 430 + 75);
    SelectFrage2.position(300 + 660, 470 + 75);
    SelectFrage3.position(300 + 660, 510 + 75);
    SelectFrage4.position(300 + 660, 550 + 75);
    SelectFrage1.show();
    SelectFrage2.show();
    SelectFrage3.show();
    SelectFrage4.show();
    tempShow = false;
  }

  HinweisSeite11.position(300 + 720, 382 + 75);
  HinweisSeite11.show();
  image(TheorieBeschriftung1, 420, 50);
  image(LuftEinzeln, 620, 50);
  textFormat("Befindet sich der Sensor in gewöhnlicher Luft (blaue Färbung der Umgebung im rechten Bild), so kommt es zu einer Bedeckung seiner Oberfläche mit Luftsauerstoff (blaue Kreise). Der Sauerstoff bindet einige ursprünglich freie Elektronen, die nun nicht mehr zum Ladungstransport beitragen können.", 20, 300, 20);
  textFormat("Wähle aus, was die Bedeckung der Sensoroberfläche mit Sauerstoff bewirkt.", 20, 400, 20);
  textFormat("1) Die Anzahl freier Ladungsträger ", 300, 450, 20);
  textFormat("2) Die Geschwindigkeit der Elektronen  ", 300, 490, 20);
  textFormat("3) Der Gesamtstrom ", 300, 530, 20);
  textFormat("4) Der Sensorwiderstand  ", 300, 570, 20);
  HinweisSeite11.mousePressed(function() {
    if (Hinweisbool) {
      Hinweisbool = false;
    } else {
      Hinweisbool = true;
    }
  });
  if (Hinweisbool) {
    push();
    fill(255);
    rect(900, 370, 270, 240);
    fill(0);
    textSize(14);
    text("- Die Geschwindigkeit wird durch die \nPfeillänge symbolisiert", 910, 400);
    text("- Der Strommesser zeigt den Gesamt- \nstrom", 910, 475);
    text("- Strom und Widerstand haben nach \ndem Ohm'schen Gesetz folgenden \nZusammenhang R = U/I ", 910, 550);
    pop();
  }
  if (falscheAntwort) {
    push();
    textSize(20);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    text("Kontrolliere deine Antworten noch einmal!", 450, 650);
    pop();
  }
  pop();
}

function Seite23() {
  push();

  Hinweisbool = false;
  image(TheorieBeschriftung1, 320, 50);
  image(LuftEinzeln, 520, 50);
  image(ZielgasEinzeln, 720, 50);
  textFormat("Enthält die Luft einen besonderen, zu messenden gasförmigen Stoff („Zielgas“, angedeutet durch rote Kugeln bzw. einen violetten Hintergrund im rechten Bild), so kann dieser mit dem Sauerstoff an der Oberfläche reagieren. Von der Oberfläche gelöster Sauerstoff lässt die eben noch gebundenen Elektronen frei, die fortan wieder zum Ladungstransport im Sensor beitragen können.", 20, 300, 20);
  if (Unterseite == 1) {
    textFormat("Vergleicht die verschiedenen Variablen des Sensorverhaltens (Geschwindigkeit die Elektronen, Anzahl freier Elektronen, Gesamtstrom und Widerstand) beim Betrieb des Sensors in bloßer Luft und in Luft bei zusätzlicher Anwesenheit eines Zielgases. Formuliert dazu eine analoge Gedankenkette wie bei der vorherigen Folie (stichpunktartig).", 20, 420, 20);
  }
  pop();
}


function Seite24() {
  push();

  if (tempShow) {
    SelectFrage5.show();
    SelectFrage6.show();
    SelectFrage5.style('font-size', '20px');
    SelectFrage6.style('font-size', '20px');
    SelectFrage5.position(300 + 20, 205 + 75);
    SelectFrage6.position(300 + 260, 246 + 75);
    tempShow = false;
  }

  push();
  fill(255);
  stroke(0);
  rect(10, 150, 1180, 150);
  pop();
  textSize(24);
  text("Eine höhere Reaktionsrate eines Zielgases mit dem Sauerstoff auf der Sensoroberfläche führt dazu, dass", 20, 190);
  text("ehemals gebundene Elektronen wieder frei sind, somit zum Ladungstransport beitragen können", 120, 230);
  text("und schließlich einen", 20, 270);
  text("Sensorwiderstand zur Folge haben.", 390, 270);
  textFormat("Der Stromfluss (und damit der gemessene Widerstand) hängt maßgeblich von der Reaktionsrate des Zielgases mit dem Oberflächensauerstoff ab. Ergänze den folgenden Lückentext.", 20, 50, 20);

  if (falscheAntwort) {
    push();
    textSize(20);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    text("Kontrolliere deine Antworten noch einmal!", 450, 650);
    pop();
  }


  pop();
}

function Seite25() {
  push();
  if (tempShow) {
    ReaktionsrateWasser.position(300 + 450, 230 + 75);
    ReaktionsrateWasser.show();
    ReaktionsrateApfelsaft.position(300 + 450, 330 + 75);
    ReaktionsrateApfelsaft.show();
    ReaktionsrateAlkfrei.position(300 + 450, 430 + 75);
    ReaktionsrateAlkfrei.show();
    BegründungReaktionsrate.position(300 + 600, 200 + 75);
    BegründungReaktionsrate.show();

    HinweisReaktionsrate.position(300 + 600, 150 + 75);
    HinweisReaktionsrate.show();
    tempShow = false;
  }
  textFormat("Ordne die Reaktionsraten der Gasatmosphären bei den drei gemessenen Stoffen Wasser, Apfelsaft und alkoholfreiem Bier und der Spannung von 1,2 Volt. Reproduziere die Kausalkette!", 20, 50, 20);
  textSize(20);
  text("Stoff", 80, 200);
  text("Reaktionsrate", 450, 200);
  line(0, 220, 600, 220);
  text("Wasser ", 50, 250);
  text("Apfelsaft ", 50, 350);
  text("alkoholfreies Bier ", 50, 450);

  text(Aufgabe1Bier.value() + " kOhm", 300, 250);
  text(Aufgabe1Alkfrei.value() + " kOhm", 300, 350);
  text(Aufgabe2Bier.value() + " kOhm", 300, 450);

  text("Dein Messwert", 270, 200);
  line(250, 180, 250, 500);
  line(420, 180, 420, 500);
  HinweisReaktionsrate.mousePressed(function() {
    if (Hinweisbool) {
      Hinweisbool = false;
    } else {
      Hinweisbool = true;
    }
  });
  if (Hinweisbool) {
    push();
    fill(255);
    rect(795, 200, 200, 40);
    rect(705, 255, 75, 35);
    rect(700, 325, 80, 35);
    rect(700, 440, 80, 35);
    rect(700, 585, 60, 35);



    rect(1015, 255, 75, 35);
    rect(1015, 325, 75, 35);
    rect(1015, 440, 75, 35);
    rect(1028, 585, 60, 35);

    rect(750, 370, 290, 58);
    rect(740, 490, 315, 78);

    fill(0);
    //Linke Seite
    line(795, 240, 780, 255);
    line(743, 290, 743, 325);
    line(743, 360, 750, 370);
    line(750, 428, 740, 440);
    line(740, 475, 740, 490);
    line(740, 568, 730, 585);


    //Rechte Seite
    line(995, 240, 1015, 255);
    line(1051, 290, 1051, 325);
    line(1051, 360, 1038, 370);
    line(1038, 428, 1051, 440);
    line(1055, 475, 1055, 490);
    line(1055, 568, 1063, 585);





    textSize(20);
    fill(0);
    text("Reaktionsrate", 830, 225);
    text("groß", 1030, 280);
    text("klein", 720, 280);
    text("viele", 1030, 350);
    text("wenige", 710, 350);
    text("Sauerstoffmoleküle werden\nvon der Oberfläche gelöst", 775, 395);
    text("viele", 1030, 465);
    text("wenige", 710, 465);
    text("Elektronen werden freigegeben\nund stehen für den Stromfluss zur \nVerfügung und der Widerstand ist", 750, 510);
    text("groß", 708, 610);
    text("klein", 1038, 610);

    BegründungReaktionsrate.hide();
    pop();
  } else {
    BegründungReaktionsrate.show();
    BegründungReaktionsrate.position(300 + 700, 250 + 75);
  }
  pop();

}

function Seite26() {
  push();
  textFormat("Die Reaktionsrate selbst wird schließlich von vier Faktoren beeinflusst.", 20, 50, 20);
  push();

  push();
  fill(255);
  rect(10, 130, 1180, 50);
  pop();
  textSize(20);
  textStyle(BOLD);
  text("1) der Konzentrationdes Zielgases", 70, 120);
  pop();
  textFormat("Je mehr Zielgas in einem Volumen enthalten ist (Einheit z.B. g/cm³), desto wahrscheinlicher finden Reaktionen mit dem Sauerstoff auf der Oberfläche statt.", 20, 150, 20);

  pop();
}

function Seite27() {
  push();
  textFormat("Die Reaktionsrate selbst wird schließlich von vier Faktoren beeinflusst.", 20, 50, 20);
  push();
  push();
  fill(255);
  rect(10, 130, 1180, 50);
  rect(10, 260, 1180, 30);
  pop();
  textSize(20);
  textStyle(BOLD);

  text("1) der Konzentrationdes Zielgases", 70, 120);
  text("2) der Sauerstoffbedeckung auf der Sensoroberfläche", 70, 250);
  pop();
  textFormat("Je mehr Zielgas in einem Volumen enthalten ist (Einheit z.B. g/cm³), desto wahrscheinlicher finden Reaktionen mit dem Sauerstoff auf der Oberfläche statt.", 20, 150, 20);
  textFormat("Je stärker die Oberfläche mit Sauerstoff bedeckt ist, desto wahrscheinlicher finden Reaktionen mit dem Zielgas statt.", 20, 280, 20);
  pop();
}

function Seite28() {
  push();
  textFormat("Die Reaktionsrate selbst wird schließlich von vier Faktoren beeinflusst.", 20, 50, 20);
  push();

  push();
  fill(255);
  rect(10, 130, 1180, 50);
  rect(10, 260, 1180, 30);
  rect(10, 380, 1180, 50);
  pop();
  textSize(20);
  textStyle(BOLD);
  text("1) der Konzentrationdes Zielgases", 70, 120);
  text("2) der Sauerstoffbedeckung auf der Sensoroberfläche", 70, 250);
  text("3) der Art des Zielgases ", 70, 370);
  pop();
  textFormat("Je mehr Zielgas in einem Volumen enthalten ist (Einheit z.B. g/cm³), desto wahrscheinlicher finden Reaktionen mit dem Sauerstoff auf der Oberfläche statt.", 20, 150, 20);
  textFormat("Je stärker die Oberfläche mit Sauerstoff bedeckt ist, desto wahrscheinlicher finden Reaktionen mit dem Zielgas statt.", 20, 280, 20);
  textFormat("Bei gleicher Konzentration und Sauerstoffbedeckung, besitzen reaktionsfreudigere Zielgase (mit dem Oberflächensauerstoff) eine höhere Reaktionsrate.", 20, 400, 20);
  pop();
}

function Seite29() {
  push();
  textFormat("Die Reaktionsrate selbst wird schließlich von vier Faktoren beeinflusst.", 20, 50, 20);
  push();

  push();
  fill(255);
  rect(10, 130, 1180, 50);
  rect(10, 260, 1180, 30);
  rect(10, 380, 1180, 50);
  rect(10, 510, 1180, 90);
  pop();
  textSize(20);
  textStyle(BOLD);
  text("1) der Konzentrationdes Zielgases", 70, 120);
  text("2) der Sauerstoffbedeckung auf der Sensoroberfläche", 70, 250);
  text("3) der Art des Zielgases ", 70, 370);
  text("4) der Temperatur des Sensormaterials", 70, 500);
  pop();

  textFormat("Je mehr Zielgas in einem Volumen enthalten ist (Einheit z.B. g/cm³), desto wahrscheinlicher finden Reaktionen mit dem Sauerstoff auf der Oberfläche statt.", 20, 150, 20);
  textFormat("Je stärker die Oberfläche mit Sauerstoff bedeckt ist, desto wahrscheinlicher finden Reaktionen mit dem Zielgas statt.", 20, 280, 20);
  textFormat("Bei gleicher Konzentration und Sauerstoffbedeckung, besitzen reaktionsfreudigere Zielgase (mit dem Oberflächensauerstoff) eine höhere Reaktionsrate.", 20, 400, 20);
  textFormat("Der Einfluss der Temperatur des Sensormaterials ist sehr komplex. Nicht nur gibt es einen direkten Einfluss auf die Reaktionsrate (bei höheren Temperaturen finden Reaktionen wahrscheinlicher statt). Dazu kommt, dass die Temperatur auch Auswirkungen auf die Sauerstoffbedeckung und die Anzahl freier Ladungsträger hat. Nähern wir uns dem Einfluss der Temperatur wieder experimentell…", 20, 530, 20);
  pop();
}

function Seite30() {
  push();

  fill(0);
  textFormat("Im letzten Experiment hat sich gezeigt, dass die Betriebsspannung einen großen Einfluss auf den Widerstand des Sensors hat. Aber was ändert sich eigentlich durch die Änderung der Betriebsspannung?", 20, 50, 20);
  pop();
}

function Seite31() {
  push();
  push();
  fill(0);
  textFormat("Im letzten Experiment hat sich gezeigt, dass die Betriebsspannung einen großen Einfluss auf den Widerstand des Sensors hat. Aber was ändert sich eigentlich durch die Änderung der Betriebsspannung?", 20, 50, 20);
  fill(Kontrast1);
  textFormat("Unter dem eigentlichen Sensor, dessen Widerstand wir messen, befindet sich ein Heizelement, das direkt mit den beiden Anschlüssen des Sensors verbunden ist. Das Heizelement ist nichts anderes als ein langer, dünner Platindraht der sehr eng gewickelt ist. Wegen der angelegten Spannung fließt ein elektrischer Strom durch den Draht.", 20, 150, 20);
  Kontrast1 -= 2;
  image(Heizdraht, 400, 200);
  Draht();
  pop();
}

function Seite32() {
  push();

  fill(0);
  textFormat("Im letzten Experiment hat sich gezeigt, dass die Betriebsspannung einen großen Einfluss auf den Widerstand des Sensors hat. Aber was ändert sich eigentlich durch die Änderung der Betriebsspannung?", 20, 50, 20);
  fill(Kontrast1);
  textFormat("Unter dem eigentlichen Sensor, dessen Widerstand wir messen, befindet sich ein Heizelement, das direkt mit den beiden Anschlüssen des Sensors verbunden ist. Das Heizelement ist nichts anderes als ein langer, dünner Platindraht der sehr eng gewickelt ist. Wegen der angelegten Spannung fließt ein elektrischer Strom durch den Draht.", 20, 150, 20);
  Kontrast1 -= 2;
  image(Heizdraht, 400, 200);
  Draht();
  fill(Kontrast2);
  textFormat("Elektrischer Strom hat allerdings die Eigenschaft, Dinge zu erwärmen, wenn er durch diese fließt. Das nennt man 'Wärmewirkung des elektrischen Stroms'. Der Platindraht, und damit das Heizelement, wird also erwärmt.", 20, 475, 20);
  Kontrast2 -= 2;
  pop();
}

function Seite33() {
  push();
  sliderSpannung.show();
  push();
  fill(0);
  textFormat("Im letzten Experiment hat sich gezeigt, dass die Betriebsspannung einen großen Einfluss auf den Widerstand des Sensors hat. Aber was ändert sich eigentlich durch die Änderung der Betriebsspannung?", 20, 50, 20);
  fill(Kontrast1);
  textFormat("Unter dem eigentlichen Sensor, dessen Widerstand wir messen, befindet sich ein Heizelement, das direkt mit den beiden Anschlüssen des Sensors verbunden ist. Das Heizelement ist nichts anderes als ein langer, dünner Platindraht der sehr eng gewickelt ist. Wegen der angelegten Spannung fließt ein elektrischer Strom durch den Draht.", 20, 150, 20);
  Kontrast1 -= 2;
  image(Heizdraht, 400, 200);
  Draht();
  fill(Kontrast2);
  textFormat("Elektrischer Strom hat allerdings die Eigenschaft, Dinge zu erwärmen, wenn er durch diese fließt. Das nennt man 'Wärmewirkung des elektrischen Stroms'. Der Platindraht, und damit das Heizelement, wird also erwärmt.", 20, 475, 20);
  Kontrast2 -= 2;
  fill(Kontrast3)
  textFormat("Ergebnis: Aus der Erhöhung der Betriebsspannung erfolgt eine Erhöhung der Temperatur des Heizelements. Deshalb nennen wir die Betriebsspannung in Zukunft nur noch Heizspannung! Du kannst die Wirkung der Heizspannung in der oberen Abbildung sehen. Variiere die Heizspannung  mit dem Regler.", 20, 550, 20);
  Kontrast3 -= 2;
  Draht();
  sliderSpannung.position(300 + 100, 310 + 75);
  noStroke();
  fill(0);
  text("U = " + nf(sliderSpannung.value(), 1, 1).replace('.', ',') + " V", 105, 300);
  push();

  textSize(16);
  fill(0);
  noStroke();
  text("Heizdraht", 270, 265);
  pop();

  pop();

}

function Seite34() {
  push();
  TMin.position(300 + 740, 503 + 75);
  TMax.position(300 + 740, 603 + 75);
  TMin.show();
  TMax.show();
  Temperatur16Volt.show();
  Temperatur26Volt.show();
  Temperatur16Volt.position(300 + 740, 203 + 75);
  Temperatur26Volt.position(300 + 740, 303 + 75);

  fill(0);
  textSize(25);
  textUnderline("Zusammenhang Spannung - Temperatur", 20, 50);
  textSize(14);
  Koordinatenkreuz(100, 175, 400, 400, 0.6, 0, 3.2, 430, true, 13, 10.75, false);
  textSize(20);
  text("Heizspannung U [V]", 210, 620);
  textSize(14);
  textFormat("In diesem Diagramm ist näherungsweise der Zusammenhang zwischen der angelegten Heizspannung und der Temperatur des Heizelements dargestellt.", 20, 100, 20);
  textFormat("a) Bei welchen Temperaturen wurden die ersten beiden Experimente durchgeführt?", 550, 150, 20);
  textSize(20);
  text("ϑ      =", 675, 225);
  text("ϑ      =", 675, 325);
  text("°C, bei U = 1,2 V", 800, 225);
  text("°C, bei U = 2,6 V", 800, 325);
  textSize(14);
  text("1", 687, 230);
  text("2", 687, 330);
  textSize(20);
  textFormat("b) Bestimme aus diesem Diagramm die minimale und maximale Temperatur, die du mit der Platine einstellen kannst!", 550, 450, 20);
  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  text("Heiztemperatur ϑ [°C]", -150, -550);
  pop();
  line(100, 545, 500, 173);
  if (mouseX > 100 && mouseX < 500 && mouseY > 175 && mouseY < 545) {
    line(100, mouseY, mouseY * (-400 / 372) + 685, mouseY);
    line(mouseY * (-400 / 372) + 685, mouseY, mouseY * (-400 / 372) + 685, 575);
    var Temp = ((mouseY * (-400 / 372) + 685 - 100) * 0.0065 + 0.6) * 153 - 57;
    var U = (mouseY * (-400 / 372) + 685 - 100) * 0.0065 + 0.6;
    textSize(16);
    stroke(0);
    text("ϑ = " + Math.round(Temp) + " °C", mouseX, mouseY - 25);
    text("U = " + nf(U, 0, 2).replace('.', ',') + " V", mouseX, mouseY - 5);
  }
  translate(0, 150);
  noStroke();
  fill(0);
  textSize(20);
  text("ϑ      =", 675, 375);
  text("ϑ      =", 675, 475);
  textSize(14);
  text("Min", 687, 380);
  text("Max", 687, 480);
  textSize(20);
  text("°C, bei U = " + SpannungMin.value().replace('.', ',') + " V", 800, 375);
  text("°C, bei U = " + SpannungMax.value().replace('.', ',') + " V", 800, 475);
  pop();
}

function Draht() {
  angleMode(DEGREES);
  stroke(0);
  strokeWeight(1);
  fill(0);
  strokeWeight(3);
  stroke((sliderSpannung.value() - 0.6) * 255 / 2.6, 0, 0);
  line(200, 280, 550, 280);
  line(200, 355, 550, 355);
  line(200, 280, 200, 300);
  line(200, 355, 200, 335);
  line(193, 335, 207, 335);
  line(185, 300, 215, 300);
  noFill();
  for (let i = 0; i < 3; i++) {
    arc(550, 288 + 30 * i, 15, 15, -90, 90);
  }
  for (let i = 0; i < 2; i++) {
    arc(500, 303 + 30 * i, 15, 15, 90, -90);
  }

  for (let i = 0; i < 5; i++) {
    line(500, 295 + 15 * i, 550, 295 + 15 * i);
  }
  noStroke();
  fill((sliderSpannung.value() - 0.6) * 255 / 2.6 + 100, 100, 100, 100);
  rect(456, 255, 132, 132);
}

function Seite35() {
  push();
  textSize(25);
  textUnderline("Aufgabe 3", 20, 50);
  textFormat("Wir wollen im nächsten Experiment den Einfluss der Temperatur auf den Widerstand untersuchen.", 20, 100, 20);
  textFormat("Dazu messen wir den Widerstand des Sensors bei verschiedenen Heizspannungen, also verschiedenen Temperaturen, aber bei dem gleichen Gas. Suche dir, neben Wasser, einen weiteren Stoff aus, den du genauer untersuchen möchtest.", 20, 175, 20);


  checkApfelsaft.show();
  checkAlkfrei.show();
  checkApfelsaft.position(300 + 500, 400 + 75);
  checkAlkfrei.position(300 + 500, 500 + 75);

  if (checkApfelsaft.checked() && checkAlkfrei.checked()) {
    push();
    textSize(25);
    fill(255, 0, 0);
    text("Bitte nur eine Option auswählen!", 450, 300);
    pop();
  }
  pop();
}

function Seite36() {
  push();
  textSize(14);
  if (checkAlkfrei.checked()) {
    text("Du hast Wasser und alkoholfreies Bier gewählt.", 900, 50);
  }
  if (checkApfelsaft.checked()) {
    text("Du hast Wasser und Apfelsaft gewählt.", 900, 50);
  }


  textFormat("Für den folgenden Versuch musst du schnell sein!", 20, 50, 20);
  textFormat("Damit alles glatt geht, fange erst mit der Messung an, wenn du die folgenden Schritte der Durchführung verinnerlicht hast. Klicke dann auf weiter. ", 20, 125, 20);
  push();
  fill(255);
  rect(150, 220, 900, 320);

  pop();
  translate(50, -100);
  textFormat("1) Stelle die Heizspannung auf ca. 2,8 Volt.", 200, 350, 25);
  textFormat("2) Schraube dein Glas mit Wasser an die Halterung unter den Sensor.", 200, 400, 25);
  textFormat("3) Warte 30 Sekunden.", 200, 450, 25);
  textFormat("4) Nimm den Widerstandswert auf und schreibe ihn in die Tabelle.", 200, 500, 25);
  textFormat("5) Verringere die Heizspannung um 0,2 Volt.", 200, 550, 25);
  textFormat("6) Warte 10 Sekunden.", 200, 600, 25);

  push();
  fill(0);
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  textSize(16);
  stroke(0);
  text("Bis 0,8 Volt \nerreicht sind", -230, -480);

  pop();
  line(180, 590, 150, 590);
  line(150, 590, 150, 490);
  line(150, 490, 180, 490);
  line(170, 480, 180, 490);
  line(180, 490, 170, 500);


  pop();
}

let Losgedrückt = false;

function Seite37() {
  push();
  if (Cycle < 23) {
    for (let i = 0; i < Cycle + 1; i++) {
      Widerstand[i].show();
      Widerstand[i].position(300 + 320, 202 + 75 + 20 * (i));
      Widerstand[i].size(75, 14);
      Widerstand[i].style('font-size', 18 + "px");
    }
    for (let i = Cycle + 1; i < 22; i++) {
      Widerstand[i].hide();
    }
  } else {
    for (let i = 0; i < 22; i++) {
      Widerstand[i].show();
      Widerstand[i].position(300 + 320, 202 + 75 + 20 * (i));
    }
  }

  Los.position(300 + 60, 100 + 75);
  Los.style('font-size', 30 + 'px');

  sliderSeite16.show();
  sliderSeite16.position(300 + 550, 650 + 75);

  NächsteSpannung.style('font-size', 30 + 'px');
  Restart.position(300 + 160, 100 + 75);
  Restart.show();
  Restart.style('font-size', 30 + 'px');
  if (checkApfelsaft.checked()) {
    Messung2 = "Apfelsaft";
  } else {
    Messung2 = "alkoholfreiem Bier";
  }

  textFormat("Sobald du auf 'Los' klickst, läuft die Zeit. Zunächst gibt es eine 30 sekündige Einlaufphase. In dieser Zeit sollte das Glas mit Wasser bereits unter dem Sensor sein. Anschließend laufen jeweils 10 Sekunden. Mit dem Slider kannst du den Graphen skalieren.", 20, 50, 20);
  textSize(20);
  line(100, 210, 100, 670);
  line(90, 660, 100, 670);
  line(110, 660, 100, 670);
  push();
  fill(255);
  stroke(0);
  rect(550, 645, 132, 50);
  fill(0);
  noStroke();
  text("Skalierung", 570, 690);
  pop();
  text("Widerstand [kΩ]", 270, 190);
  text("Heizpannung [V]", 70, 190);
  line(100, 422, 450, 422);
  line(50, 200, 450, 200);
  line(250, 170, 250, 700);

  push();
  stroke(0);
  fill(255);
  rect(650, 100, 540, 80);
  pop();
  for (let i = 0; i < 11; i++) {
    text(nfc(2.8 - 0.1999 * i, 1).replace('.', ','), 130, 220 + 20 * i);
  }
  for (let i = 0; i < 11; i++) {
    text(nfc(2.8 - 0.199999 * i, 1).replace('.', ','), 130, 440 + 20 * i);
  }
  textSize(14);
  push();
  textSize(20);
  text("Heizspannung [V]", 800, 650);
  translate(width / 2, height / 2);

  rotate(3 * PI / 2);
  text("Widerstand [kΩ]", -110, -100);
  pop();
  Koordinatenkreuz(550, 200, 400, 600, 0.6, 0, 3.2, sliderSeite16.value(), true, 13, 10, false);
  fill(255);

  for (let i = 0; i < 11; i++) {
    if (Widerstand[i].value().replace(',', '.') != 0 && Widerstand[i].value().replace(',', '.') < sliderSeite16.value()) {
      stroke(0, 0, 255);
      fill(0, 0, 255);
      strokeWeight(4);
      ellipse(550 + 23.076 * (22 - (2 * i)), 600 - 400 / sliderSeite16.value() * Widerstand[i].value().replace(',', '.'), 10, 10);
    }
  }


  for (let i = 11; i < 22; i++) {
    if (Widerstand[i].value().replace(',', '.') != 0 && Widerstand[i].value().replace(',', '.') < sliderSeite16.value()) {
      stroke(255, 0, 0);
      fill(255, 0, 0);
      strokeWeight(4);
      ellipse(550 + 23.076 * (33 - (2 * i - 11)), 600 - 400 / sliderSeite16.value() * Widerstand[i].value().replace(',', '.'), 10, 10);
    }
  }

  fill(0);
  Los.show();

  Los.mousePressed(TimerStartet);

  Restart.mousePressed(Reset);
  noStroke();
  textSize(20);
  text("Zeit [s]", 680, 120);
  text("Spannung einstellen [V]", 810, 120);
  text("Stoff", 1110, 120);
  if (Cycle < 11) {
    text("Wasser", 1100, 170);
  }

  if (Cycle > 10) {
    if (checkAlkfrei.checked()) {
      textSize(12);
      text("alkoholfreies Bier", 1088, 167);
    } else {
      textSize(16);
      text("Apfelsaft", 1100, 167);
    }

  }

  textSize(20);
  stroke(0);
  strokeWeight(1);
  line(650, 140, 1190, 140);
  line(780, 100, 780, 180);
  line(1075, 100, 1075, 180);
  textSize(20);
  text(nf(ZeitSekunden, 0, 1).toString().replace('.', ','), 710, 170);
  NächsteSpannung.mousePressed(NextVoltage);

  if (timer) {
    millis2 = millis() - millis2;
    ZeitSekunden -= millis2 / 1000;
    if (ZeitSekunden < 0.1) {
      ZeitSekunden = 0;
    }

    if (ZeitSekunden > -1.1 && ZeitSekunden < 2.1 && Cycle < 10) {
      if (Hilfsbool) {
        push();
        noStroke();
        fill(255, 0, 0);
        textSize(40);
        text("MESSWERT AUFNEHMEN!", 620, 400);
        Hilfsbutton.show();
        pop();
      }
      if (Hilfsbool == false) {
        textSize(16);
        fill(0);
        stroke(0);
        text("Spannung auf " + nf(aktuelleSpannung - 0.199999, 1, 1).toString().replace('.', ',') + " Volt stellen, klicke dann auf ok", 700, 440);

        NächsteSpannung.position(300 + 850, 480 + 75);
        NächsteSpannung.show();
        Hilfsbutton.hide();
      }
    }
    if (ZeitSekunden > 2.1 && Cycle == 11) {
      NächsteSpannung.hide();
    }

    if (ZeitSekunden > -1.1 && ZeitSekunden < 2.1 && Cycle > 10 && Cycle < 21) {
      if (Hilfsbool) {
        push();
        noStroke();
        fill(255, 0, 0);
        textSize(40);
        text("MESSWERT AUFNEHMEN!", 620, 400);
        Hilfsbutton.show();
        pop();
      }
      if (Hilfsbool == false) {
        textSize(16);
        fill(0);
        stroke(0);
        text("Spannung auf " + nf(aktuelleSpannung - 0.199999, 1, 1).toString().replace('.', ',') + " Volt stellen, klicke dann auf ok", 700, 440);

        NächsteSpannung.position(300 + 850, 480 + 75);
        NächsteSpannung.show();
        Hilfsbutton.hide();
      }
    }

    if (Cycle == 21 && ZeitSekunden < 2) {
      textSize(16);
      fill(0);
      stroke(0);
      text("Klicke nun auf 'weiter'.", 810, 440);
      pop();
      NächsteSpannung.position(300 + 850, 480 + 75);
      NächsteSpannung.hide();
    }

    if (Cycle == 10 && checkApfelsaft.checked() && ZeitSekunden < 2) {
      push();
      noStroke();
      fill(255, 0, 0);
      textSize(40);
      text("MESSWERT AUFNEHMEN!", 620, 400);
      textSize(16);
      fill(0);
      stroke(0);
      text("Schraube nun das Glas mit Apfelsaft unter den Sensor, stelle die Heiz-\n               spannung erneut auf 2,8 Volt und klicke auf 'ok'.", 600, 440);
      pop();
      NächsteSpannung.position(300 + 850, 480 + 75);
      NächsteSpannung.show();
      aktuelleSpannung = 3;
    }

    if (Cycle == 10 && checkAlkfrei.checked() && ZeitSekunden < 2) {
      push();
      textSize(16);
      fill(0);
      stroke(0);

      text("Schraube nun das Glas mit alkoholfreies Bier unter den Sensor, stelle die Heiz-\n                   spannung erneut auf 2,8 Volt und klicke auf 'ok'.", 590, 440);
      pop();
      NächsteSpannung.position(300 + 850, 480 + 75);
      NächsteSpannung.show();
      aktuelleSpannung = 3;
    }



    if (ZeitSekunden > -1.1 && ZeitSekunden < 2.1 && Cycle == 22) {
      push();
      noStroke();
      fill(255, 0, 0);
      textSize(40);
      text("MESSWERT AUFNEHMEN!", 620, 400);
      textSize(16);
      fill(0);
      stroke(0);
      text("Klicke nun auf 'weiter'.", 800, 440);
      pop();
    }


  }
  if (aktuelleSpannung != 3) {
    textSize(20);
    text(nf(aktuelleSpannung, 1, 1).toString().replace('.', ','), 900, 170);
  } else {
    textSize(20);
    text("2,8", 900, 170);
  }

  pop();
  if (Cycle == 0 || Cycle == 11) {
    push();
    angleMode(DEGREES);
    translate(width / 2, height / 2);
    stroke(0);
    rotate(-90);
    noFill();
    ellipse(215, 80, 30, 30);
    fill(255 - 255 / 30 * ZeitSekunden, 255 / 30 * ZeitSekunden, 0);
    noStroke();
    arc(215, 80, 30, 30, -ZeitSekunden * 360 / 30, 0.1);
    pop();
  } else {
    push();
    angleMode(DEGREES);
    translate(width / 2, height / 2);
    stroke(0);
    rotate(-90);
    noFill();
    ellipse(215, 80, 30, 30);
    fill(255 - 255 / 10 * ZeitSekunden, 255 / 10 * ZeitSekunden, 0);
    arc(215, 80, 30, 30, -ZeitSekunden * 360 / 10, 0.1);
    pop();
  }
  pop();
  millis2 = millis();
}

function Seite38() {
  // push();
  //
  // if (Cycle < 41) {
  //   for (let i = 22; i < Cycle + 2; i++) {
  //     Widerstand[i].show();
  //     Widerstand[i].position(300+320, 202 + 20 * (i - 21));
  //     Widerstand[i].size(75, 14);
  //     Widerstand[i].style('font-size', 18 + "px");
  //   }
  // } else {
  //   for (let i = 21; i < 41; i++) {
  //     Widerstand[i].show();
  //     Widerstand[i].position(300+320, 202 + 20 * (i - 21));
  //   }
  // }
  // sliderSeite16.position(300+550, 650);
  //
  // textFormat("Wiederhole den Versuch nun mit " + Messung2 + ".", 20, 50, 20);
  // textSize(20);
  // line(100, 210, 100, 670);
  // line(90, 660, 100, 670);
  // line(110, 660, 100, 670);
  // push();
  // fill(255);
  // stroke(0);
  // rect(550, 645, 132, 50);
  // fill(0);
  // noStroke();
  // text("Skalierung", 570, 690);
  // pop();
  // text("Widerstand [kΩ]", 270, 190);
  // text("Heizpannung [V]", 70, 190);
  // line(50, 200, 450, 200);
  // line(250, 170, 250, 700);
  //
  // push();
  // stroke(0);
  // fill(255);
  // rect(650, 100, 400, 80);
  // pop();
  // for (let i = 0; i < 21; i++) {
  //   text(nfc(2.8 - 0.0999 * i, 1).replace('.', ','), 130, 220 + 20 * i);
  // }
  //
  // textSize(14);
  // push();
  // textSize(20);
  // text("Heizspannung [V]", 800, 650);
  // translate(width / 2, height / 2);
  //
  // rotate(3 * PI / 2);
  // text("Widerstand [kΩ]", -140, -100);
  // pop();
  // Koordinatenkreuz(550, 200, 400, 600, 0.6, 0, 3.2, sliderSeite16.value(), true, 13, 10, false);
  // fill(255);
  //
  //
  //
  //
  // for (let i = 0; i < 11; i++) {
  //   if (Widerstand[i].value().replace(',', '.') != 0 && Widerstand[i].value().replace(',', '.') < sliderSeite16.value()) {
  //     stroke(200, 200);
  //     fill(200, 200);
  //     strokeWeight(4);
  //     ellipse(550 + 23.076 * (22 - (2 * i)), 600 - 400 / sliderSeite16.value() * Widerstand[i].value().replace(',', '.'), 10, 10);
  //   }
  // }
  //
  // for (let i = 21; i < 42; i++) {
  //   if (Widerstand[i].value().replace(',', '.') != 0 && Widerstand[i].value().replace(',', '.') < sliderSeite16.value()) {
  //     if (checkApfelsaft.checked()) {
  //       stroke(0, 255, 0, 200);
  //       fill(0, 255, 0, 200);
  //     } else {
  //       stroke(255, 0, 255, 200);
  //       fill(255, 0, 255, 200);
  //     }
  //     strokeWeight(4);
  //     ellipse(550 + 23.076 * (43 - (2 * i)), 600 - 400 / sliderSeite16.value() * Widerstand[i].value().replace(',', '.'), 10, 10);
  //   }
  // }
  //
  // sliderSeite16.show();
  // fill(0);
  // Los.show();
  // Restart.show();
  // Los.mousePressed(TimerStartet);
  // Restart.mousePressed(Reset);
  // noStroke();
  // textSize(20);
  // text("Zeit [s]", 680, 120);
  // text("Spannung einstellen [V]", 810, 120);
  // stroke(0);
  // strokeWeight(1);
  // line(650, 140, 1050, 140);
  // line(780, 100, 780, 180);
  // text(nf(ZeitSekunden, 0, 1).toString().replace('.', ','), 710, 170);
  // NächsteSpannung.mousePressed(NextVoltage);
  // if (timer) {
  //   ZeitSekunden -= 1 / (frameRate() - 1)
  //   if (ZeitSekunden < 0.1) {
  //     ZeitSekunden = 0;
  //   }
  //
  //   if (ZeitSekunden > -1.1 && ZeitSekunden < 2.1 && Cycle < 40) {
  //     push();
  //     noStroke();
  //     fill(255, 0, 0);
  //     textSize(40);
  //     text("MESSWERT AUFNEHMEN!", 620, 400);
  //     textSize(16);
  //     fill(0);
  //     stroke(0);
  //     text("Spannung auf " + nf(aktuelleSpannung - 0.09999, 1, 1).toString().replace('.', ',') + " Volt stellen, klicke dann auf ok", 700, 440);
  //     pop();
  //     NächsteSpannung.show();
  //     NächsteSpannung.position(300+850, 480);
  //   } else {
  //     NächsteSpannung.hide();
  //   }
  //
  //   if (ZeitSekunden > -1.1 && ZeitSekunden < 2.1 && Cycle == 40) {
  //     push();
  //     noStroke();
  //     fill(255, 0, 0);
  //     textSize(40);
  //     text("MESSWERT AUFNEHMEN!", 620, 400);
  //     textSize(16);
  //     fill(0);
  //     stroke(0);
  //     text("Klicke nun auf 'weiter'", 800, 440);
  //     pop();
  //   }
  //
  //
  //
  //   if (Cycle == 42) {
  //     NächsteSpannung.hide();
  //   }
  // }
  //
  // text(nf(aktuelleSpannung, 1, 1).toString().replace('.', ','), 900, 170);
  //
  // pop();
  // if (Cycle == 0 || Cycle == 20) {
  //   push();
  //   angleMode(DEGREES);
  //   translate(width / 2, height / 2);
  //   stroke(0);
  //   rotate(-90);
  //   noFill();
  //   ellipse(215, 80, 30, 30);
  //   fill(255 - 255 / 30 * ZeitSekunden, 255 / 30 * ZeitSekunden, 0);
  //   noStroke();
  //   arc(215, 80, 30, 30, -ZeitSekunden * 360 / 30, 0.1);
  //   pop();
  // } else {
  //   push();
  //   angleMode(DEGREES);
  //   translate(width / 2, height / 2);
  //   stroke(0);
  //   rotate(-90);
  //   noFill();
  //   ellipse(215, 80, 30, 30);
  //   fill(255 - 255 / 10 * ZeitSekunden, 255 / 10 * ZeitSekunden, 0);
  //   arc(215, 80, 30, 30, -ZeitSekunden * 360 / 10, 0.1);
  //   pop();
  // }
  // pop();
}

function Seite39() {
  push();

  sliderSeite16.show();

  fill(0);
  textFormat("Wenn du die Messwerte miteinander vergleichst, stellst du fest, dass es Temperaturen gibt, bei denen sich die Messwerte stark unterscheiden. Die Messkurve ist für jeden Stoff charakteristisch. In der Gasmesstechnik wird ein sogenannter temperaturzyk- lischer Betrieb verwendet, bei dem die Heiztemperatur schnell variiert wird. So ist es möglich eine höhere Genauigkeit und Sensitivität zu erreichen.", 20, 50, 20);
  push();
  fill(255);
  translate(0, 50);
  stroke(0);
  rect(910, 345, 132, 50);
  fill(0);
  noStroke();
  textSize(20);
  text("Skalierung", 930, 391);
  pop();
  push();
  fill(255);
  stroke(0);
  translate(0, 50);
  strokeWeight(1);
  rect(910, 170, 170, 100);
  fill(0, 0, 255);
  ellipse(930, 190, 10, 10);
  noStroke();
  fill(255, 0, 0);
  ellipse(930, 245, 10, 10);
  fill(0);
  strokeWeight(1);
  pop();
  sliderSeite16.position(300 + 910, 400 + 75);
  push();
  translate(0, 100);
  textSize(20);
  text("Heizspannung [V]", 600, 450);
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  text("Widerstand [kΩ]", 70, -210);
  pop();
  translate(0, 100);
  textSize(16);
  Koordinatenkreuz(450, 100, 300, 400, 0, 0, 3.2, sliderSeite16.value(), true, 8, 10, false);
  stroke(0);
  strokeWeight(3);
  for (let i = 0; i < 11; i++) {
    fill(0, 0, 255);
    noStroke();
    if (Widerstand[i].value().replace(',', '.') < sliderSeite16.value() + 1) {
      ellipse(800 - 12.5 * (2 * i), 400 - 300 / sliderSeite16.value() * Widerstand[i].value().replace(',', '.'), 6, 6);
    }
  }


  for (let i = 11; i < 22; i++) {
    fill(255, 0, 0);
    noStroke();
    if (Widerstand[i].value().replace(',', '.') < sliderSeite16.value() + 1) {
      ellipse(800 - 12.5 * (2 * (i - 11)), 400 - 300 / sliderSeite16.value() * Widerstand[i].value().replace(',', '.'), 6, 6);
    }
  }

  textSize(14);

  fill(0, 0, 255);
  text("Wasser", 950, 145);
  if (checkApfelsaft.checked()) {
    fill(255, 0, 0);
    text("Apfelsaft", 950, 200);
  } else {
    fill(255, 0, 0);
    text("Alkoholfreies Bier", 950, 200);
  }

  pop();
}


let WasserAnzeigen = true;
let ApfelsaftAnzeigen = true;
let AlkfreiAnzeigen = true;

let WasserSeite40 = [];
let ApfelsaftSeite40 = [];
let AlkfreiSeite40 = [];

function Seite40() {
  push();
  ellipseMode(CENTER);
  textSize(25);
  textUnderline("Darstellungen der Daten", 20, 50);
  textFormat("In diesem Graphen kannst du deine Messergebnisse mit anderen Daten vergleichen. Du hast die Auswahl zwischen linearer und logarithmischer Darstellung. Entscheide dich für eine, deiner Meinung nach, sinnvolle Darstellung der Messergebnisse und begründe deine Wahl auf der nächsten Seite.", 20, 100, 20);
  push();
  fill(255);
  stroke(0);
  rect(50, 400, 132, 50);
  fill(0);
  noStroke();
  textSize(20);
  text("Skalierung", 72, 440);
  pop();
  textSize(14);
  text("Heizspannung [V]", 450, 550);

  strokeWeight(2);
  Koordinatenkreuz(250, 175, 325, 500, 0.6, 0, 3.0001, sliderSeite16.value(), true, 12, 10, log);
  push();
  translate(width / 2, height / 2);
  rotate(3 * PI / 2);
  text("Widerstand [kΩ]", -00, -400);
  pop();
  rectMode(CENTER);
  fill(255);

  for (let i = 0; i < 11; i++) {
    WasserSeite40[i] = Widerstand[i].value().replace(',', '.');
  }
  if (checkApfelsaft.checked() == true) {
    for (let i = 11; i < 22; i++) {
      ApfelsaftSeite40[i - 11] = Widerstand[i].value().replace(',', '.');
    }
    for (let i = 0; i < 11; i++) {
      AlkfreiSeite40[i] = alkoholfreiesBierWerte[i];
    }
  } else {
    for (let i = 11; i < 22; i++) {
      AlkfreiSeite40[i - 11] = Widerstand[i].value().replace(',', '.');
    }
    for (let i = 0; i < 11; i++) {
      ApfelsaftSeite40[i] = ApfelsaftWerte[i];
    }
  }



  WasserButton.position(300 + 850, 180 + 75);
  WasserButton.show();
  WasserButton.mousePressed(function() {
    if (WasserAnzeigen == true) {
      WasserAnzeigen = false;
    } else {
      WasserAnzeigen = true;
    }
  });

  ApfelsaftButton.show();
  ApfelsaftButton.mousePressed(function() {
    if (ApfelsaftAnzeigen == true) {
      ApfelsaftAnzeigen = false;
    } else {
      ApfelsaftAnzeigen = true;
    }
  });


  AlkfreiBierButton.show();
  AlkfreiBierButton.mousePressed(function() {
    if (AlkfreiAnzeigen == true) {
      AlkfreiAnzeigen = false;
    } else {
      AlkfreiAnzeigen = true;
    }
  });
  if (log) {
    let slidervalue;
    if (sliderSeite16.value() > 248) {
      slidervalue = 4;
    } else {
      slidervalue = 3;
    }
    //WASSER
    if (WasserAnzeigen) {
      fill(0, 0, 255);
      stroke(0, 0, 255);
      for (let i = 0; i < 11; i++) {
        if (sliderSeite16.value() < 248 && Widerstand[i].value().replace(',', '.') <= 100) {
          ellipse(687.5 - 20.83333 * (2 * i) + 20.83333, 500 - 325 / slidervalue - (325 / slidervalue) * Math.log(Widerstand[i].value().replace(',', '.')) / 2.3, 5, 5);
        } else if (sliderSeite16.value() >= 248) {
          ellipse(687.5 - 20.83333 * (2 * i) + 20.83333, 500 - 325 / slidervalue - (325 / slidervalue) * Math.log(Widerstand[i].value().replace(',', '.')) / 2.3, 5, 5);
        }
      }
    }
    //2. Stoff der Person
    if (ApfelsaftAnzeigen) { //Apfelsaft
      fill(0, 200, 0);
      stroke(0, 200, 0);
      for (let i = 0; i < 11; i++) {
        if (slidervalue == 3 && ApfelsaftWerte[i] < 100) {
          let x = 708.333 - 41.666 * (i);
          let y = 500 - 325 / slidervalue - (325 / slidervalue) * Math.log(ApfelsaftSeite40[i]) / 2.3;
          ellipse(x, y, 5, 5);
        } else if (slidervalue == 4) {
          let x = 708.333 - 41.666 * (i);
          let y = 500 - 325 / slidervalue - (325 / slidervalue) * Math.log(ApfelsaftSeite40[i]) / 2.3;
          ellipse(x, y, 5, 5);
        }
      }

    }

    if (AlkfreiAnzeigen) {
      fill(200, 0, 0);
      stroke(200, 0, 0);
      for (let i = 0; i < 11; i++) {
        if (slidervalue == 3 && AlkfreiSeite40[i] < 100) {
          let x = 708.333 - 41.666 * (i);
          let y = 500 - 325 / slidervalue - (325 / slidervalue) * Math.log(AlkfreiSeite40[i]) / 2.3;
          ellipse(x, y, 5, 5);
        } else if (slidervalue == 4) {
          let x = 708.333 - 41.666 * (i);
          let y = 500 - 325 / slidervalue - (325 / slidervalue) * Math.log(AlkfreiSeite40[i]) / 2.3;
          ellipse(x, y, 5, 5);
        }
      }

    }

  } else { //Lineare Darstellung
    fill(0, 0, 255);
    stroke(0, 0, 255);
    for (let i = 0; i < 11; i++) {
      if (WasserAnzeigen && WasserSeite40[i] <= sliderSeite16.value()) {
        let x = 708.333 - 41.666 * i;
        let y = 500 - 325 * WasserSeite40[i] / (sliderSeite16.value());
        ellipse(x, y, 5, 5);
      }
    }
    fill(0, 200, 0);
    stroke(0, 200, 0);
    for (let i = 0; i < 11; i++) {
      if (ApfelsaftAnzeigen && ApfelsaftSeite40[i] <= sliderSeite16.value()) {
        let x = 708.333 - 41.666 * i;
        let y = 500 - 325 * ApfelsaftSeite40[i] / (sliderSeite16.value());
        ellipse(x, y, 5, 5);
      }
    }

    fill(255, 0, 0);
    stroke(255, 0, 0);
    for (let i = 0; i < 11; i++) {
      if (AlkfreiAnzeigen && AlkfreiSeite40[i] <= sliderSeite16.value()) {
        let x = 708.333 - 41.666 * i;
        let y = 500 - 325 * AlkfreiSeite40[i] / (sliderSeite16.value());
        ellipse(x, y, 5, 5);
      }
    }
  }


  rectMode(CORNER);

  fill(0, 0, 200);
  noStroke();
  rect(840, 170, 120, 70);
  fill(200, 0, 0);
  rect(840, 270, 120, 70);

  fill(0, 200, 0);
  rect(840, 370, 120, 70);



  if (mouseX > 70 && mouseX < 170 && mouseY > 180 && mouseY < 230) {
    stroke(0);
    strokeWeight(1);
    fill(255);
    rect(250, 575, 700, 100);
    fill(0);
    noStroke();
    textUnderline('Logarithmische Darstellung', 260, 595);
    text("Bei dieser Darstellungsweise wird der Logarithmus des Widerstands gegen die Heizspannung aufgetragen.", 260, 630);
    text("Das führt dazu, dass Unterschiede bei kleinen Messwerten stärker sichtbar sind als bei großen.", 260, 650);
  }



  if (mouseX > 70 && mouseX < 170 && mouseY > 280 && mouseY < 330) {
    stroke(0);
    strokeWeight(1);
    fill(255);
    rect(250, 575, 700, 100);
    fill(0);
    noStroke();
    textUnderline("Lineare Darstellung", 260, 595);
    text("Bei dieser Darstellungsweise werden Widerstand und Heizspannung gleich gewichtet. Das führt dazu, dass\nUnterschiede überall gleich stark sichtbar sind.", 260, 630);
  }

  if (mouseX > 70 && mouseX < 170 && mouseY > 380 && mouseY < 430) {
    stroke(0);
    strokeWeight(1);
    fill(255);
    rect(250, 575, 700, 100);
    fill(0);
    noStroke();
    textUnderline("Skalierung", 260, 595);
    text("Hier kannst du den angezeigten Wertebereich variieren.", 260, 630);

  }
  Log.position(300 + 70, 180 + 75);
  sliderSeite16.position(300 + 50, 400 + 75);
  Linear.position(300 + 70, 280 + 75);
  Log.size(100, 50);
  Linear.size(100, 50);
  //  WasserButton.position(300+850, 180);
  AlkfreiBierButton.position(300 + 850, 280 + 75);
  ApfelsaftButton.position(300 + 850, 380 + 75);
  WasserButton.size(100, 50);
  AlkfreiBierButton.size(100, 50);
  ApfelsaftButton.size(100, 50);



  sliderSeite16.show();
  Log.show();
  Linear.show();



  Linear.mousePressed(LinAuswahl);
  Log.mousePressed(LogAuswahl);

  pop();

}

function Seite41() {
  push();
  textSize(25);
  textUnderline("Interpretation der Daten", 20, 50);
  textFormat("Benenne stichpunktartig jeweils 2 Vor- und Nachteile der logarithmischen und linearen Darstellungsweise!", 20, 100, 20);
  textFormat("Inwiefern ist es dir nun möglich Wasser, Apfelsaft und alkoholfreies Bier voneinander zu unterscheiden?", 20, 500, 20);
  Interpretation1.position(300 + 100, 120 + 75);
  Interpretation1.show();
  Interpretation2.show();
  Interpretation2.position(300 + 100, 520 + 75);
  pop();
}
// THEORIEPHASE 2

function Seite42() {
  push();
  textFormat("In den zurückliegenden Minuten habt ihr Abhängigkeit des Sensorwiderstandes von der Sensortemperatur bei mehreren Flüssigkeiten (bei mehreren Gasen, die die Flüssigkeiten aussenden) untersucht.", 20, 50, 20);
  textFormat("Um das beobachtete Verhalten besser zu verstehen, verwenden wir wieder das vorhin eingeführte schematische Modell des Gassensors und seiner Umgebung. ", 20, 150, 20);
  pop();

}

function Seite43() {
  push();
  image(TheorieBeschriftung1, 520, 250);

  textSize(20);
  textFormat("Hier siehst du eine schematische Abbildung des Sensors und der Umgebung.", 20, 50, 20);
  push();
  fill(255);
  rect(790, 320, 340, 75);
  pop();
  text("        Leitendes Sensormaterial \nTemperatur durch Farbe angedeutet", 800, 350);
  line(665, 355, 790, 355);
  pop();
}

function Seite44() {
  push();
  textSize(20);
  image(TheorieTeil2_1, 400, 30);
  textFormat("Wie vorhin gehen wir wieder von der Situation aus, dass sich der Sensor in Vakuum befindet. Das Material des Sensors wird aber auf zwei verschiedene Temperaturen gebracht. Betrachtet die beiden Bilder sorgfältig und kreuzt die richtigen Lösungen an.", 20, 320, 20);

  textFormat("Die Temperatur des Sensors im rechten Bild ist im Vergleich zum linken ", 150, 400, 20);
  textFormat("Bei höheren Temperaturen ist die Anzahl der Ladungsträger ", 150, 450, 20);
  textFormat("Bei höheren Temperaturen bewegen sich die Elektronen ", 150, 500, 20);
  textFormat("Der Gesamtstrom ist bei höherer Sensortemperatur ", 150, 550, 20);
  textFormat("Entsprechend ist der Sensorwiderstand bei höherer Sensortemperatur ", 150, 600, 20);
  if (tempShow) {
    Theorie2_1.position(300 + 800, 380 + 75);
    Theorie2_2.position(300 + 800, 430 + 75);
    Theorie2_3.position(300 + 800, 480 + 75);
    Theorie2_4.position(300 + 800, 530 + 75);
    Theorie2_5.position(300 + 800, 580 + 75);
    Theorie2_1.show();
    Theorie2_2.show();
    Theorie2_3.show();
    Theorie2_4.show();
    Theorie2_5.show();

    tempShow = false;
  }
  pop();
}

function Seite45() {
  push();
  image(TheorieTeil2_2, 300, 30);
  textFormat("Der Sensor wird nun auf eine noch höhere Temperatur erhitzt (T3 = sehr heiß). Formuliere deine Beobachtungen mit eigenen Worten.", 20, 300, 20);
  Theorie2_text1.position(300 + 100, 400 + 75);
  Theorie2_text1.show();
  pop();
}

function Seite46() {
  push();
  if (tempShow) {
    Theorie2_6.position(300 + 780, 480 + 75);
    Theorie2_7.position(300 + 780, 530 + 75);
    Theorie2_8.position(300 + 780, 580 + 75);
    Theorie2_9.position(300 + 780, 630 + 75);
    Theorie2_6.show();
    Theorie2_7.show();
    Theorie2_8.show();
    Theorie2_9.show();
    tempShow = false;
  }
  image(TheorieTeil2_3, 400, 30);
  textFormat("Anstatt mit Vakuum führen wir das Gedankenexperiment mit Luft durch. Wie du schon weißt, kommt es beim Betrieb des Sensors in Luft dazu, dass sich Sauerstoff an die Oberfläche andockt und dabei Elektronen bindet. Diese stehen dann nicht mehr zum Ladungstransport zur Verfügung.", 20, 300, 20);
  textFormat("Betrachtet die beiden Bilder sorgfältig. Wählt aus, welchen Einfluss die Erhöhung der Temperatur von T1 (gelb, warm) auf T2 (orange, heiß, aber noch nicht extrem) hat.", 20, 400, 20);

  textFormat("Die Elektronen bewegen sich", 250, 500, 20);
  textFormat("Die Sauerstoffbedeckung wird/bleibt", 250, 550, 20);
  textFormat("In der Summe beider Effekte wird der Gesamtstrom ", 250, 600, 20);
  textFormat("In der Summe beider Effekte wird der Sensorwiderstand ", 250, 650, 20);
  pop();
}

function Seite47() {
  push();
  vor.show();
  if (tempShow) {
    Theorie2_10.position(300 + 780, 480 + 75);
    Theorie2_11.position(300 + 780, 530 + 75);
    Theorie2_12.position(300 + 780, 580 + 75);
    Theorie2_13.position(300 + 780, 630 + 75);
    Theorie2_10.show();
    Theorie2_11.show();
    Theorie2_12.show();
    Theorie2_13.show();
    tempShow = false;
  }
  image(TheorieTeil2_4, 300, 30);
  textFormat("Der Sensor wird erneut weiter von der Temperatur T2 (orange, heiß) auf T3 (rot, sehr heiß) erhöht. Kreuze an, was diese Temperaturerhöhung bewirkt.", 20, 300, 20);
  textFormat("Die Elektronen bewegen sich", 250, 500, 20);
  textFormat("Die Sauerstoffbedeckung wird/bleibt", 250, 550, 20);
  textFormat("In der Summe beider Effekte wird der Gesamtstrom ", 250, 600, 20);
  textFormat("In der Summe beider Effekte wird der Sensorwiderstand ", 250, 650, 20);
  pop();
}

function Seite48() {
  push();
  vor.show();
  image(TheorieTeil2_4, 300, 30);
  textFormat("Wie im Vakuum erhöht sich durch die Erhöhung der Temperatur die Geschwindigkeit der Elektronen. ABER: Infolge der Temperatur- erhöhung dockt auch immer mehr Sauerstoff an, sodass immer weniger Elektronen zum Ladungstransport beitragen können. Beide Effekte sind gegensinnig.", 20, 300, 20);
  textFormat("Bei sehr hohen Temperaturen sind nur noch so wenige freie Elektronen vorhanden, dass der Stromfluss sogar wieder sinkt, obwohl die Elektronen besonders schnell sind. Mit anderen Worten: Bei hohen Temperaturen dominiert der Effekt der Sauerstoff- bedeckung den Effekt der erhöhten kinetischen Energie der Elektronen.", 20, 400, 20);
  textFormat("Bei „mittleren“ (heiß, aber nicht extrem) erreicht der Stromfluss ein Maximum, und also der Widerstand ein Minimum. Man sagt: Der Sensor hat hier die höchste Sensitivität.", 20, 500, 20);
  pop();
}

function Seite49() {
  push();
  vor.hide();
  image(TheorieTeil2_4, 300, 30);
  image(Graph1, 300, 300);
  image(Graph4, 450, 300);
  image(Graph5, 600, 300);
  image(Graph7, 750, 300);
  if (tempShow) {
    Theorie2Radio1.position(300 + 370, 450 + 75);
    Theorie2Radio2.position(300 + 520, 450 + 75);
    Theorie2Radio3.position(300 + 670, 450 + 75);
    Theorie2Radio4.position(300 + 820, 450 + 75);
    Theorie2Radio1.show();
    Theorie2Radio2.show();
    Theorie2Radio3.show();
    Theorie2Radio4.show();
    tempShow = false
  }
  if (Theorie2Radio1.value() == "falsch" || Theorie2Radio2.value() == "falsch" || Theorie2Radio4.value() == "falsch") {
    push();
    fill(255, 0, 0);
    textSize(20);
    text("Versuche es noch einmal", 500, 650);
    pop();
  }
  if (Theorie2Radio3.value() == "richtig" && mouseX > 670 && mouseX < 700 && mouseY > 390 && mouseY < 420) {
    if (mouseIsPressed) {
      Seite += 1;
      Hinweisbool = false;
      Theorie2Radio1.hide();
      Theorie2Radio2.hide();
      Theorie2Radio3.hide();
      Theorie2Radio4.hide();
    }
  }

  textFormat("Die vier Diagramme zeigen verschiedene Abhängigkeiten des Sensorwiderstands von seiner Temperatur. Kreuze an, welches Diagramm dem Sensorbetrieb in Luft am ehesten entspricht. Markiere im korrekten Diagramm mit einem Mausklick die ungefähre Temperatur, bei dem der Sensor die maximale Sensitivität besitzt. (Hierdurch kommst du zur nächsten Folie.)", 20, 550, 20);
  pop();
}

function Seite50() {
  push();
  Sensitivität.show();
  Sensitivität.mousePressed(function() {
    if (Hinweisbool) {
      Hinweisbool = false;
    } else {
      Hinweisbool = true;
    }
  });


  if (Hinweisbool) {
    push();
    fill(0);
    noStroke();
    textSize(25);
    textUnderline("Zusammenhang Spannung - Temperatur", 20, 50);
    textSize(14);
    stroke(0);
    Koordinatenkreuz(100, 175, 400, 400, 0.6, 0, 3.2, 430, true, 13, 10.75, false);
    textSize(20);
    noStroke();
    text("Heizspannung U [V]", 210, 620);
    text("Heizspannung U [V]", 800, 620);
    push();
    translate(width / 2, height / 2);
    rotate(3 * PI / 2);
    text("Heiztemperatur ϑ [°C]", -100, -550);
    text("Widerstand  [kOhm]", -100, 30);
    pop();
    stroke(0);
    line(100, 545, 500, 173);
    if (mouseX > 100 && mouseX < 500 && mouseY > 175 && mouseY < 545) {
      line(100, mouseY, mouseY * (-400 / 372) + 685, mouseY);
      line(mouseY * (-400 / 372) + 685, mouseY, mouseY * (-400 / 372) + 685, 575);
      var Temp = ((mouseY * (-400 / 372) + 685 - 100) * 0.0065 + 0.6) * 153 - 57;
      var U = (mouseY * (-400 / 372) + 685 - 100) * 0.0065 + 0.6;
      textSize(16);
      stroke(0);
      text("ϑ = " + Math.round(Temp) + " °C", mouseX, mouseY - 25);
      text("U = " + nf(U, 0, 2).replace('.', ',') + " V", mouseX, mouseY - 5);
    }

    Sensitivität.position(300 + 520, 30 + 75);
    Sensitivität.show();
    pop();
    //////// MESSWERTE ////////

    //    Koordinatenkreuz(PosX, PosY, height, width, MinX, MinY, MaxX, MaxY, Gitter, AnzahlZwischenStricheX, AnzahlZwischenStricheY, Log)
    textSize(14);
    Koordinatenkreuz(670, 175, 400, 400, 0, 0, 3.2, 1000, true, 8, 20, true);
    push();
    fill(0, 0, 255);
    noStroke();
    text("Wasser", 700, 100);
    if (checkApfelsaft.checked()) {
      fill(0, 255, 0);
      text("Apfelsaft", 800, 100);
    } else {
      fill(255, 0, 0);
      text("Alkoholfreies Bier", 800, 100);
    }
    pop();
    push();
    rectMode(CENTER);
    for (let i = 0; i < 11; i++) {
      stroke(0, 0, 255);
      fill(0, 0, 255);

      if (Widerstand[i].value().replace(',', '.') / MaximumDeineMessung < 1000) {
        ellipse(1020 - 12.5 * 2 * i, 610 - 400 / 3 - (400 / 4) * Math.log(Widerstand[i].value().replace(',', '.')) / 2.3, 5, 5);
      }
    }
    for (let i = 11; i < 22; i++) {
      if (checkApfelsaft.checked()) {
        stroke(0, 255, 0);
        fill(0, 255, 0);
      } else {
        stroke(255, 0, 0);
        fill(255, 0, 0);

      }
      if (Widerstand[i].value().replace(',', '.') / MaximumDeineMessung < 1000) {
        ellipse(1020 - 2 * 12.5 * (i - 11), 610 - 400 / 3 - (400 / 4) * Math.log(Widerstand[i].value().replace(',', '.')) / 2.3, 5, 5);
      }
    }

    TempWasser.hide();
    TempWasserU.hide();
    TempApfel.hide();
    TempApfelU.hide();
    TempAlkfrei.hide();
    TempAlkfreiU.hide();
    pop();
  } else {
    Sensitivität.position(300 + 20, 340 + 75);
    image(Graph5, 575, 50);
    push();
    stroke(255, 0, 0);
    noFill();
    strokeWeight(3);
    ellipse(657, 170, 30, 30);
    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(745, 90, 450, 50);
    line(745, 115, 672, 170);
    pop();
    textSize(20);
    text("Temperatur der höchsten Sensitivität des Sensors", 750, 120);
    textFormat("Genau!", 608, 250, 20);
    textFormat("Bestimme aus deinen Messungen die (ungefähre) Temperatur, bei der der Sensor jeweils die maximale Sensitivität besitzt. ", 20, 300, 20);

    textFormat("Der Sensor hat für die Messung in Wasser bei U = ", 20, 500, 20);
    textFormat("[V] eine Temperatur von               °C", 532, 500, 20);
    TempWasser.position(300 + 760, 480 + 75);
    TempWasserU.position(300 + 470, 480 + 75);
    TempWasser.show();
    TempWasserU.show();
    if (TempWasser.value() != "" && TempWasserU.value() != "") {
      vor.show();
    }
    if (checkApfelsaft.checked()) {
      textFormat("Der Sensor hat für die Messung in Apfelsaft bei U = ", 20, 600, 20);
      textFormat("[V] eine Temperatur von             °C", 542, 600, 20);
      TempApfel.position(300 + 770, 580 + 75);
      TempApfelU.position(300 + 480, 580 + 75);
      TempApfel.show();
      TempApfelU.show();
    } else {
      textFormat("Der Sensor hat für die Messung in alkoholfreiem Bier bei U = ", 20, 600, 20);
      textFormat("[V] eine Temperatur von             °C", 622, 600, 20);
      TempAlkfrei.position(300 + 840, 580 + 75);
      TempAlkfreiU.position(300 + 560, 580 + 75);
      TempAlkfrei.show();
      TempAlkfreiU.show();
    }
    pop();
  }
}

function Seite51() {
  push();
  fill(255);
  rect(10, 370, 1180, 250);
  //line(10, 430, 1190, 430);
  line(10, 445, 1190, 450);
  line(10, 515, 1190, 515);
  line(10, 575, 1190, 575);
  line(1000, 370, 1000, 620);
  line(1095, 370, 1095, 620);
  //Theorie2Check1false.position(300+1135, 445);
  //Theorie2Check1true.position(300+1040, 445);
  Theorie2Check2false.position(300 + 1135, 475 + 75);
  Theorie2Check2true.position(300 + 1040, 475 + 75);
  Theorie2Check3false.position(300 + 1135, 535 + 75);
  Theorie2Check3true.position(300 + 1040, 535 + 75);
  Theorie2Check4false.position(300 + 1135, 590 + 75);
  Theorie2Check4true.position(300 + 1040, 590 + 75);
  BegründungTheorie2.position(300 + 100, 630 + 75);
  BegründungTheorie2.size(1000, 50);
  Theorie2Check1false.hide();
  Theorie2Check1true.hide();

  BegründungTheorie2.show();
  //Theorie2Check1false.show();
  //Theorie2Check1true.show();
  Theorie2Check2false.show();
  Theorie2Check2true.show();
  Theorie2Check3false.show();
  Theorie2Check3true.show();
  Theorie2Check4false.show();
  Theorie2Check4true.show();


  pop();
  image(mitZielgas3, 350, 30);
  textFormat("Abschließend betrachten wir noch kurz den Fall variabler Sensortemperatur bei einer Messung in Luft, die zusätzlich Zielgase enthält (hier nur eines, angedeutet durch einen violetten Hintergrund und rote Punkte).", 20, 300, 20);
  textFormat("Entscheide bei den folgenden Aussagen, ob Sie wahr oder falsch sind. Begründe die letzte Aussage!", 20, 400, 20);
  textFormat("Das Zielgas löst den Sauerstoff von der Oberfläche. Ehemals gebundene Elektronen werden so wieder ", 20, 470, 20);
  textFormat("frei und können zum Ladungstransport wieder beitragen.", 20, 510, 20);
  textFormat("Die Reaktionsrate des Zielgases mit dem Sauerstoff steigt mit der Temperatur.", 20, 550, 20);
  textFormat("Der Sensorwiderstand ist bei den Messungen mit Zielgas bei allen Temperaturen größer als in bloßer Luft.", 20, 600, 20);
  textSize(20);
  text("wahr          falsch", 1020, 400);
  vor.show();
  pop();
}

function Seite52() {
  push();
  vor.show();
  image(R_T_Diagramm_Luft_Zielgas1, 300, 30);
  image(R_T_Diagramm_Luft_Zielgas2, 500, 30);
  image(R_T_Diagramm_Luft_Zielgas3, 700, 30);
  textFormat("Der konkrete Widerstand-Temperatur-Verlauf ist, wie ihr im Experiment festgestellt habt, für verschiedene Zielgase unterschiedlich (gleich einem Fingerabdruck). Das zeigt sich etwa bei der Temperatur des größten Sensitivität (Minimum der Widerstands- Temperatur-Kurve) Die drei schematischen Diagramme oben deuten diesen Sachverhalt an. Zum Vergleich ist jeweils die Kurve für bloße Luft eingezeichnet.", 20, 250, 20);
  textFormat("Hinzu kommt ein Effekt, demnach der bei einer Temperatur gemessene Widerstand davon abhängt, wie man auf diese Temperatur gelangt ist (z.B. macht es einen Unterschied, ob man bei Einstellung der Temperatur auf 300 °C von 350 °C oder von 250°C ausgeht). Das liegt daran, dass Reaktionen bei unterschiedlichen Temperaturen unterschiedlich schnell ablaufen. So befindet sich das System dann noch nicht im Gleichgewicht.", 20, 400, 20);
  textFormat("Genau solche charakteristischen temperaturabhängigen Sensorreaktionen ermöglichen uns, Gase (1) voneinander zu unterscheiden und (2) deren Konzentration zu ermitteln. Im zweiten Workshop des Projekts SUSmobil erfahrt ihr mehr darüber.", 20, 530, 20);

  pop();
}

function Seite54() {
  push();
  vor.show();
  translate(0, -30);

  fill(0, 0, 255);
  stroke(255);
  rect(150, 100, 950, 50);
  fill(150, 150, 255);
  rect(150, 150, 950, 100);
  rect(150, 300, 950, 50);
  fill(200, 200, 255);
  rect(150, 250, 950, 50);
  rect(150, 350, 950, 50);

  stroke(255);
  strokeWeight(2);
  line(350, 100, 350, 400);
  line(720, 100, 720, 400);
  line(730, 100, 730, 400);

  line(535, 151, 535, 400);
  line(915, 151, 915, 400);




  strokeWeight(1);

  noStroke();
  fill(255);
  textSize(24);
  text("Spannung U = 1,2 V", 420, 135);
  text("Spannung U = 2,6 V", 820, 135);

  textSize(24);
  fill(0);
  text("Widerstand [kΩ]", 358, 200);
  text("Relativer Wert\nzu Wasser [%]", 555, 190);

  text("Widerstand [kΩ]", 740, 200);
  text("Relativer Wert\nzu Wasser [%]", 930, 190);

  text("Wasser", 208, 285);
  text("Apfelsaft", 200, 335);
  text("Alkoholfr. Bier", 170, 385);




  textAlign(CENTER);
  text(Aufgabe1Bier.value().replace('.', ','), 450, 285);
  text(Aufgabe1Alkfrei.value().replace('.', ','), 450, 335);
  text(Aufgabe2Bier.value().replace('.', ','), 450, 385);


  text(Aufgabe1bSaft.value().replace('.', ','), 830, 335);
  text(Aufgabe1bWasser.value().replace('.', ','), 830, 285);
  text(Aufgabe2Alkfrei.value().replace('.', ','), 830, 385);


  text("100", 625, 285);
  text("100", 1000, 285);

  let apfel12rel = Aufgabe1Alkfrei.value().replace(',', '.') / (Aufgabe1Bier.value().replace(',', '.'));
  let alkfrei12rel = Aufgabe2Bier.value().replace(',', '.') / (Aufgabe1Bier.value().replace(',', '.'));

  let apfel26rel = Aufgabe1bSaft.value().replace(',', '.') / (Aufgabe1bWasser.value().replace(',', '.'));
  let alkfrei26rel = Aufgabe2Alkfrei.value().replace(',', '.') / (Aufgabe1bWasser.value().replace(',', '.'));
  text(nf(100 * apfel12rel, 0, 1).replace('.', ','), 625, 335);
  text(nf(100 * alkfrei12rel, 0, 1).replace('.', ','), 625, 385);

  text(nf(100 * apfel26rel, 0, 1).replace('.', ','), 1000, 335);
  text(nf(100 * alkfrei26rel, 0, 1).replace('.', ','), 1000, 385);

  stroke(0);
  fill(255);
  rect(350, 415, 370, 130);
  rect(730, 415, 370, 130);



  noStroke();
  fill(0);

  textSize(16);
  for (let i = 0; i < 6; i++) {
    text(20 * i, 350 + 74 * i, 565);
    text(20 * i, 720 + 74 * i, 565);
  }
  stroke(200);
  for (let i = 0; i < 4; i++) {
    line(424 + 74 * i, 415, 424 + 74 * i, 545);
    line(794 + 74 * i, 415, 794 + 74 * i, 545);
  }

  let balkenSaftA = apfel12rel * 370;
  let balkenAlkfreiA = alkfrei12rel * 370;

  let balkenSaftB = apfel26rel * 370;
  let balkenAlkfreiB = alkfrei26rel * 370;

  fill(0, 0, 255);
  text("Wasser", 280, 453);
  fill(255, 0, 0);
  text("Apfelsaft", 280, 490);
  fill(200, 200, 0);
  text("Alkoholfreies\nBier", 280, 522);

  fill(0);


  stroke(0, 0, 255);


  strokeWeight(2);
  line(350, 447.5, 720, 447.5);
  line(730, 447.5, 1100, 447.5);
  stroke(255, 0, 0);
  line(350, 480, 350 + balkenSaftA, 480);
  line(730, 480, 730 + balkenSaftB, 480);
  stroke(200, 200, 0);
  line(350, 512.5, 350 + balkenAlkfreiA, 512.5);
  line(730, 512.5, 730 + balkenAlkfreiB, 512.5);

  textSize(20);
  textAlign(LEFT);
  textFormat("Bei unterschiedlichen Temperaturen sind die absoluten Widerstandswerte verschieden. Manche Betriebstemperaturen des Sensors sind besser geeignet um Stoffe voneinander zu unterscheiden.", 20, 600, 20);

  Kontrast1 = 240;
  Kontrast2 = 240;
  Kontrast3 = 240;
  pop();
}

function Seite55() {
  for (let i = 0; i < 11; i++) {
    WasserSeite40[i] = Widerstand[i].value().replace(',', '.');
  }
  if (checkApfelsaft.checked() == true) {
    for (let i = 11; i < 22; i++) {
      ApfelsaftSeite40[i - 11] = Widerstand[i].value().replace(',', '.');
    }
    for (let i = 0; i < 11; i++) {
      AlkfreiSeite40[i] = alkoholfreiesBierWerte[i];
    }
  } else {
    for (let i = 11; i < 22; i++) {
      AlkfreiSeite40[i - 11] = Widerstand[i].value().replace(',', '.');
    }
    for (let i = 0; i < 11; i++) {
      ApfelsaftSeite40[i] = ApfelsaftWerte[i];
    }
  }

  push();
  fill(255);
  stroke(0);
  rect(10, 60, 1180, 555);
  noStroke();
  fill(0);

  textFormat("→ Der Widertsands-Temperatur-Verlauf ist charakteristisch für jeden Stoff!", 300, 600, 20);

  //    Koordinatenkreuz(PosX, PosY, height, width, MinX, MinY, MaxX, MaxY, Gitter, AnzahlZwischenStricheX, AnzahlZwischenStricheY, Log)
  Koordinatenkreuz(70, 200, 300, 315, 0, 0, 3.2, 1000, true, 8, 20, true);
  Koordinatenkreuz(870, 200, 300, 315, 0, 0, 3.2, 1000, true, 8, 20, true);
  Koordinatenkreuz(470, 200, 300, 315, 0, 0, 3.2, 1000, true, 8, 20, true);
  textSize(20);

  text("Apfelsaft", 200, 150);
  text("alkoholfreies Bier", 540, 150);
  text("Wasser", 1000, 150);

  rectMode(CENTER);

  for (let i = 0; i < 23; i++) {
    stroke(0, 0, 255);
    fill(0, 0, 255);
    if (WasserSeite40[i] / MaximumWasser < 1000) {
      ellipse(949 + 2 * 9.84375 * i, 500 - 300 / 4 - (300 / 4) * Math.log(WasserWerte[i]) / 2.3, 5, 5);
    }
  }
  //for (let i = 23; i < 46; i++) {
  //  stroke(0, 0, 255);
  //  noFill();
  //  if (WasserWerte[i] / MaximumWasser < 1000) {
  //    rect(939.0626 + 9.84375 * (i - 23), 500 - 300 / 4 - (300 / 4) * Math.log(WasserWerte[i]) / 2.3, 5, 5);
  //  }
  //}

  for (let i = 0; i < 23; i++) {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    if (AlkfreiSeite40[i] / MaximumAlkfrei < 1000) {
      ellipse(549 + 2 * 9.84375 * i, 500 - 300 / 4 - (300 / 4) * Math.log(alkoholfreiesBierWerte[i]) / 2.3, 5, 5);
    }
  }

  //for (let i = 23; i < 46; i++) {
  //  stroke(255, 0, 0);
  //  noFill();
  //  if (alkoholfreiesBierWerte[i] / MaximumAlkfrei < 1000) {
  //    rect(539.0626 + 9.84375 * (i - 23), 500 - 300 / 4 - (300 / 4) * Math.log(alkoholfreiesBierWerte[i]) / 2.3, 5, 5);
  //  }
  //}


  for (let i = 0; i < 23; i++) {
    stroke(0, 100, 0);
    fill(0, 100, 0);
    if (ApfelsaftSeite40[i] / MaximumApfelsaft < 1000) {
      ellipse(149 + 2 * 9.84375 * i, 500 - 300 / 4 - (300 / 4) * Math.log(ApfelsaftWerte[i]) / 2.3, 5, 5);
    }

  }
  //for (let i = 23; i < 46; i++) {
  //  stroke(0, 100, 0);
  //  noFill();
  //  if (ApfelsaftWerte[i] / MaximumApfelsaft < 1000) {
  //    rect(139.0625 + 9.84375 * (i - 23), 500 - 300 / 4 - (300 / 4) * Math.log(ApfelsaftWerte[i]) / 2.3, 5, 5);
  //  }
  //}

  //
  // for (let i = 0; i < 11; i++) {
  //   stroke(0);
  //   fill(0);
  //   if (Widerstand[i].value().replace(',', '.') / MaximumDeineMessung < 1000) {
  //     ellipse(1155.625 - 2 * 9.84375 * i - 9.84375, 500 - 300 / 3 - (300 / 4) * Math.log(Widerstand[i].value().replace(',', '.')) / 2.3, 5, 5);
  //   }
  // }
  //
  //
  // if (checkApfelsaft.checked()) {
  //   for (let i = 11; i < 22; i++) {
  //     stroke(0);
  //     fill(0);
  //     if (Widerstand[i].value().replace(',', '.') / MaximumDeineMessung < 1000) {
  //       ellipse(356.285 - 2 * 9.84375 * (i - 11) - 9.84375, 500 - 300 / 3 - (300 / 4) * Math.log(Widerstand[i].value().replace(',', '.')) / 2.3, 5, 5);
  //     }
  //   }
  // } else {
  //
  //   for (let i = 11; i < 22; i++) {
  //     stroke(0);
  //     fill(0);
  //     if (Widerstand[i].value().replace(',', '.') / MaximumDeineMessung < 1000) {
  //       ellipse(755.625 - 2 * 9.84375 * (i - 11) - 9.84375, 500 - 300 / 3 - (300 / 4) * Math.log(Widerstand[i].value().replace(',', '.')) / 2.3, 5, 5);
  //     }
  //   }
  //
  // }
  textSize(14);
  noStroke();
  fill(0);
  text("Heizspannung [V]", 170, 550);
  text("Heizspannung [V]", 574, 550);
  text("Heizspannung [V]", 978, 550);
  pop();
  push();
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(270);
  text("Widerstand [kΩ]", -10, -560);
  text("Widerstand [kΩ]", -10, -170);
  text("Widerstand [kΩ]", -10, 240);
  pop();
  pop();
}

function Seite53() {
  push();
  vor.show();
  textSize(50);
  text("Zusammenfassung", 400, 400);

  pop();
}

function MusterloesungSeite4() {
  hideAll();
  vor.hide();
  zurück.hide();
  background(255);
  image(TheorieTeil2_4, 300, 50);
  textSize(20);
  textUnderline("Änderung von Bild 1 auf Bild 2", 20, 400);
  textFormat("Durch die Temperaturerhöhung, erhöht sich auch die durchschnittliche Geschwindigkeit der Elektronen. Dies führt zu einer Stromerhöhung. Die Reaktionsrate des Sauerstoffs mit der Sensoroberfläche, und damit eine Stromverringerung, erhöht sich nur wenig. Der Strom steigt.", 20, 450, 20);
  textUnderline("Änderung von Bild 2 auf Bild 3", 20, 600);
  textFormat("Durch die weitere Temperaturerhöhung, erhöht sich weiter die durchschnittliche Geschwindigkeit der Elektronen. Dies führt zu einer Stromerhöhung. Die Reaktionsrate des Sauerstoffs mit der Sensoroberfläche, und damit eine Stromverringerung, erhöht dieses Mal aber stark, sodass dieser Faktor überwiegt. Der Strom fällt wieder.", 20, 650, 20);
  textFormat("Nach dem Ohm'schen Gesetz ist die Sensorreaktion (der elektrische Widerstand) antiproportional zur Stromstärke (R ~ 1/I)", 20, 720, 20);

  Graph5.resize(300, 300);
  textFormat("Der Widerstands-Temperatur-Verlauf sieht prinzipiell wie folgt aus:", 20, 780, 20);
  image(Graph5, 440, 850);


}



function MusterloesungSeite3() {
  hideAll();
  vor.hide();
  zurück.hide();
  background(255);
  push();
  noStroke();
  fill(0);
  textFormat("In der zweiten experimentellen Phase habt ihr den Zusammenhang zwischen Sensorreaktion und Sensortemperatur untersucht. Dabei habt ihr folgende Messkurven aufgenommen:", 20, 100, 20);
  textFormat("→ Der Widertsands-Temperatur-Verlauf ist charakteristisch für jeden Stoff!", 300, 600, 20);

  //    Koordinatenkreuz(PosX, PosY, height, width, MinX, MinY, MaxX, MaxY, Gitter, AnzahlZwischenStricheX, AnzahlZwischenStricheY, Log)
  Koordinatenkreuz(70, 200, 300, 315, 0, 0, 3.2, 1000, true, 8, 20, true);
  Koordinatenkreuz(870, 200, 300, 315, 0, 0, 3.2, 1000, true, 8, 20, true);
  Koordinatenkreuz(470, 200, 300, 315, 0, 0, 3.2, 1000, true, 8, 20, true);
  textSize(20);

  text("Apfelsaft", 200, 150);
  text("alkoholfreies Bier", 540, 150);
  text("Wasser", 1000, 150);

  rectMode(CENTER);

  for (let i = 0; i < 23; i++) {
    stroke(0, 0, 255);
    fill(0, 0, 255);
    if (WasserWerte[i] / MaximumWasser < 1000) {
      ellipse(939.0626 + 9.84375 * i, 500 - 300 / 4 - (300 / 4) * Math.log(WasserWerte[i]) / 2.3, 5, 5);
    }
  }

  for (let i = 0; i < 23; i++) {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    if (alkoholfreiesBierWerte[i] / MaximumAlkfrei < 1000) {
      ellipse(539.0626 + 9.84375 * i, 500 - 300 / 4 - (300 / 4) * Math.log(alkoholfreiesBierWerte[i]) / 2.3, 5, 5);
    }
  }
  for (let i = 0; i < 23; i++) {
    stroke(0, 100, 0);
    fill(0, 100, 0);
    if (ApfelsaftWerte[i] / MaximumApfelsaft < 1000) {
      ellipse(139.0625 + 9.84375 * i, 500 - 300 / 4 - (300 / 4) * Math.log(ApfelsaftWerte[i]) / 2.3, 5, 5);
    }

  }
  for (let i = 0; i < 11; i++) {
    stroke(0);
    fill(0);
    if (Widerstand[i].value().replace(',', '.') / MaximumDeineMessung < 1000) {
      ellipse(1155.625 - 2 * 9.84375 * i - 9.84375, 500 - 300 / 3 - (300 / 4) * Math.log(Widerstand[i].value().replace(',', '.')) / 2.3, 5, 5);
    }
  }


  if (checkApfelsaft.checked()) {
    for (let i = 11; i < 22; i++) {
      stroke(0);
      fill(0);
      if (Widerstand[i].value().replace(',', '.') / MaximumDeineMessung < 1000) {
        ellipse(356.285 - 2 * 9.84375 * (i - 11) - 9.84375, 500 - 300 / 3 - (300 / 4) * Math.log(Widerstand[i].value().replace(',', '.')) / 2.3, 5, 5);
      }
    }
  } else {

    for (let i = 11; i < 22; i++) {
      stroke(0);
      fill(0);
      if (Widerstand[i].value().replace(',', '.') / MaximumDeineMessung < 1000) {
        ellipse(755.625 - 2 * 9.84375 * (i - 11) - 9.84375, 500 - 300 / 3 - (300 / 4) * Math.log(Widerstand[i].value().replace(',', '.')) / 2.3, 5, 5);
      }
    }

  }
  textSize(14);
  noStroke();
  fill(0);
  text("Heizspannung [V]", 170, 550);
  text("Heizspannung [V]", 574, 550);
  text("Heizspannung [V]", 978, 550);
  pop();
  push();

  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(270);
  translate(320, 0);
  text("Widerstand [kΩ]", -10, -560);
  text("Widerstand [kΩ]", -10, -170);
  text("Widerstand [kΩ]", -10, 240);
  pop();
  textSize(20);
  textUnderline('Logarithmische Darstellung', 50, 795);
  textFormat("Bei dieser Darstellungsweise wird der Logarithmus des Widerstands gegen die Heizspannung aufgetragen. Das führt dazu, dass Unterschiede bei kleinen Messwerten stärker sichtbar sind als bei großen.", 20, 830, 20);
  pop();
}

function MusterloesungSeite2() {
  push();
  hideAll();
  vor.hide();
  zurück.hide();
  background(255);
  noStroke();
  image(TheorieBeschriftung1, 320, 50);
  image(LuftEinzeln, 520, 50);
  image(ZielgasEinzeln, 720, 50);
  textFormat("Sauerstoffmoleküle können eine Bindung mit der Oberfläche des Sensors eingehen. Dabei nehmen sie ein freies Elektron in der Sensorschicht auf. Dieses steht nun nicht mehr zum Ladungstransport zur Verfügung und der Strom sinkt.", 20, 300, 20);
  textFormat("Abhängig von der Reaktionsrate können zu messende Gasmoleküle nun eine Bindung mit dem gebundenen Sauerstoff eingehen. Geschieht dies, entfernt sich das Sauerstoffmolekül von der Oberfläche und gibt das ehemals gebundene Elektron wieder frei. Dieses steht nun wieder zum Ladungstransport zur Verfügung und der Strom steigt an.", 20, 400, 20);
  translate(0, 500);

  push();
  textFormat("Die Reaktionsrate selbst wird schließlich von vier Faktoren beeinflusst.", 20, 50, 20);
  push();

  push();
  fill(255);
  stroke(0);
  rect(10, 130, 1180, 50);
  rect(10, 260, 1180, 30);
  rect(10, 380, 1180, 50);
  rect(10, 510, 1180, 90);
  pop();
  textSize(20);
  textStyle(BOLD);

  text("1) der Konzentrationdes Zielgases", 70, 120);
  text("2) der Sauerstoffbedeckung auf der Sensoroberfläche", 70, 250);
  text("3) der Art des Zielgases ", 70, 370);
  text("4) der Temperatur des Sensormaterials", 70, 500);
  pop();
  noStroke();
  textFormat("Je mehr Zielgas in einem Volumen enthalten ist (Einheit z.B. g/cm³), desto wahrscheinlicher finden Reaktionen mit dem Sauerstoff auf der Oberfläche statt.", 20, 150, 20);
  textFormat("Je stärker die Oberfläche mit Sauerstoff bedeckt ist, desto wahrscheinlicher finden Reaktionen mit dem Zielgas statt.", 20, 280, 20);
  textFormat("Bei gleicher Konzentration und Sauerstoffbedeckung, besitzen reaktionsfreudigere Zielgase (mit dem Oberflächensauerstoff) eine höhere Reaktionsrate.", 20, 400, 20);
  textFormat("Der Einfluss der Temperatur des Sensormaterials ist sehr komplex. Nicht nur gibt es einen direkten Einfluss auf die Reaktionsrate (bei höheren Temperaturen finden Reaktionen wahrscheinlicher statt). Dazu kommt, dass die Temperatur auch Auswirkungen auf die Sauerstoffbedeckung und die Anzahl freier Ladungsträger hat. Nähern wir uns dem Einfluss der Temperatur wieder experimentell…", 20, 530, 20);
  pop();
  pop();
}

function MusterloesungSeite1() {
  push();
  hideAll();
  vor.hide();
  zurück.hide();
  background(255);
  push();
  textFormat("In der 1. Aufgabe habt ihr die Sensorreaktion von Wasser, Apfelsaft und alkoholfreiem Bier bei zwei unterschiedlichen Heizspannungen untersucht. Hier sind eure Ergebnisse:", 20, 100, 20);
  translate(0, 200);
  textFormat("Deine Begründung: " + Begründung.value(), 20, 480, 20)
  textFormat("Wissenschaftliche Begründung: Eine Spannung von 2,6V ist besser geeignet, da es dort größere relative Unterschiede gibt.", 20, 630, 20);

  push();
  fill(255);
  noStroke();
  translate(0, -90);
  rect(180, 85, 930, 275);
  stroke(0);
  rect(180, 360, 930, 100);
  pop();
  translate(0, -180);


  textSize(25);
  text('Spannung U = 1,2 V', 295, 225);
  text('Spannung U = 2,6 V', 765, 225);

  text('Wasser', 200, 300);
  text('Apfelsaft', 310, 300);
  text('alkoholfreies Bier', 440, 300);
  text('Wasser', 670, 300);
  text('Apfelsaft', 790, 300);
  text('alkoholfreies Bier', 910, 300);
  text('[kΩ]', 120, 410);
  textSize(20);
  text('   relativer Wert \nbezüglich Wasser \n            [%]', 20, 475);
  textSize(25);
  text('100', 220, 500);
  text(Math.round(nf(100 * Aufgabe1Alkfrei.value().replace(',', '.') / Aufgabe1Bier.value().replace(',', '.'), 0, 0)), 355, 500);
  text(Math.round(nf(100 * Aufgabe2Bier.value().replace(',', '.') / Aufgabe1Bier.value().replace(',', '.'), 0, 0)), 510, 500);

  text(Aufgabe1Bier.value().replace(',', '.'), 220, 400); // WASSER
  text(Aufgabe1Alkfrei.value().replace(',', '.'), 355, 400); // APFELSAFT
  text(Aufgabe2Bier.value().replace(',', '.'), 510, 400); // ALKFREI
  text('100', 690, 500);
  text(Math.round(nf(100 * Aufgabe1bSaft.value().replace(',', '.') / Aufgabe1bWasser.value().replace(',', '.'), 0, 0)), 820, 500);
  text(Math.round(nf(100 * Aufgabe2Alkfrei.value().replace(',', '.') / Aufgabe1bWasser.value().replace(',', '.'), 0, 0)), 980, 500);

  text(Aufgabe1bWasser.value().replace(',', '.'), 690, 400);
  text(Aufgabe1bSaft.value().replace(',', '.'), 820, 400);
  text(Aufgabe2Alkfrei.value().replace(',', '.'), 980, 400);
  line(300, 250, 300, 550);
  line(430, 250, 430, 550);
  line(645, 180, 645, 550);
  line(770, 250, 770, 550);
  line(900, 250, 900, 550);
  line(1110, 180, 1110, 550);


  line(180, 175, 1110, 175);
  line(180, 250, 1110, 250);
  line(180, 325, 1110, 325);
  line(180, 175, 180, 450);
  line(180, 450, 1110, 450);
  textSize(20);
  textFormat("Welche Betriebsspannung ist deiner Meinung nach besser geeignet um diese 3 Stoffe zu unterscheiden? Begründe deine Entscheidung.", 20, 600, 20);

  Kontrast1 = 240;
  Kontrast2 = 240;
  Kontrast3 = 240;
  pop();
  pop();


}


function Musterloesung() {
  Theorie2_1.elt.value = "größer";
  Theorie2_2.elt.value = "unverändert";
  Theorie2_3.elt.value = "schneller";
  Theorie2_4.elt.value = "größer";
  Theorie2_5.elt.value = "kleiner";
  Theorie2_6.elt.value = "schneller";
  Theorie2_7.elt.value = "größer";
  Theorie2_8.elt.value = "größer";
  Theorie2_9.elt.value = "kleiner";
  Theorie2_10.elt.value = "schneller";
  Theorie2_11.elt.value = "größer";
  Theorie2_12.elt.value = "kleiner";
  Theorie2_13.elt.value = "größer";
  TempWasser.elt.value = "1";
  TempWasserU.elt.value = "1";
  TempApfel.elt.value = "1";
  TempApfelU.elt.value = "1";
  Theorie2Check1false.elt.value = true;
  Theorie2Check2true.elt.value = true;
  Theorie2Check3true.elt.value = true;
  Theorie2Check4false.elt.value = true;
  Theorie2Check1true.elt.value = false;
  Theorie2Check2false.elt.value = false;
  Theorie2Check3false.elt.value = false;
  Theorie2Check4true.elt.value = false;
  SelectFrage5.elt.value = "mehr";
  SelectFrage6.elt.value = "kleineren";
  SelectFrage1.elt.value = "wird reduziert";
  SelectFrage2.elt.value = "bleibt gleich";
  SelectFrage3.elt.value = "wird reduziert";
  SelectFrage4.elt.value = "wird erhöht";
  Temperatur16Volt.elt.value = 128;
  Temperatur26Volt.elt.value = 340;
  SpannungMax.elt.value = 3;
  SpannungMin.elt.value = 0.7;
  ReaktionsrateWasser.elt.value = "klein";
  ReaktionsrateApfelsaft.elt.value = "groß";
  ReaktionsrateAlkfrei.elt.value = "mittelgroß";

  BegründungAufgabe1.elt.value = "Der Widerstand des Sensors hat bei Wasser einen höheren Wert, als bei Apfelsaft";
  Begründung.elt.value = "Die Spannung U = 2.6 Volt ist besser geeignet, da dort der relative Unterschied zwischen den 3 Werten am größten ist.";
  Theorie2_text1.elt.value = "- Die Temperatur wird erhöht\n- Bei höheren Temperaturen bewegen sich die Elektronen schneller\n- Die Anzahl der Ladungsträger bleibt unverändert\n- Strom wird erhöht\n- Der Widerstand wird verringert";


  //    Theorie2Check1false.checked() && Theorie2Check1true.checked() == false && Theorie2Check2false.checked() == false && Theorie2Check2true.checked() && Theorie2Check3false.checked() == false && Theorie2Check3true.checked() && Theorie2Check4false.checked() && Theorie2Check4true.checked() == false
  //
}



let DBU;
let AMS;
let falscheAntwort = false;
let Motivation;

let r = 255;
let g = 255;
let Temperatur = 50;
let R = 47;
let alpha = -170;

let TempWasser;
let TempApfel;
let TempAlkfrei;

let TempWasserU;
let TempApfelU;
let TempAlkfreiU;

let ElektronenX = [];
let ElektronenY = [];
let ElektronenVX = []
let ElektronenVY = [];
let AnzahlTeilchen = 25;
let LuftX = [];
let LuftY = [];
let LuftVX = [];
let LuftVY = [];
let LuftVX2 = [];
let LuftVY2 = [];
let TempVar = 0.25;
let a1 = 0;
let i = 0;
let i2 = 1;
let a = 0;
let Hinweis;
let HinweisSeite11;
let Hinweisbool = false;

let SelectFrage1;
let SelectFrage2;
let SelectFrage3;
let SelectFrage4;

let SelectFrage5;
let SelectFrage6;

let Stromgross;
let Stromklein;

let Gedankenkette;

let ZielgasEinzeln;
let Name1;
let Name2;

let Messung11 = true;
let Messung22 = true;

let DeineMessung1;

let checkWasser;
let checkApfelsaft;
let checkAlkfrei;

let LuftEinzeln;

let TheorieTeil2_1;
let TheorieTeil2_2;
let TheorieTeil2_3;
let TheorieTeil2_4;

let Theorie2_1;
let Theorie2_2;
let Theorie2_3;
let Theorie2_4;
let Theorie2_5;

let Theorie2_6;
let Theorie2_7;
let Theorie2_8;
let Theorie2_9;

let Theorie2_10;
let Theorie2_11;
let Theorie2_12;
let Theorie2_13;

let Theorie2Radio1;
let Theorie2Radio2;
let Theorie2Radio3;
let Theorie2Radio4;


let Theorie2Check1true;
let Theorie2Check1false;
let Theorie2Check2true;
let Theorie2Check2false;
let Theorie2Check3true;
let Theorie2Check3false;
let Theorie2Check4true;
let Theorie2Check4false;

let ReaktionsrateWasser;
let ReaktionsrateApfelsaft;
let ReaktionsrateAlkfrei;

let BegründungReaktionsrate;

let BegründungTheorie2;

let R_T_Diagramm_Luft_Zielgas1;
let R_T_Diagramm_Luft_Zielgas2;
let R_T_Diagramm_Luft_Zielgas3;

let HinweisReaktionsrate;

let Theorie2_text1;
let Aufgabe1Button;
let Klasse;
let aufgabe3;
let min;
let max;
let mw1;
let mw2;
let st1;
let st2;
let antwortGeben;
let prozent;
let promille;
let ppm;
let ppb;
let berechnungEthanolDichte;
let berechnungEthanolMasse;
let berechnungEthanolVerhältnis;
let länge, breite, höhe;
let längeMesskammer, breiteMesskammer, höheMesskammer;
let moleküle = [];
let abgeschickt = undefined;
let GasTeilchen = [];


function input() {
  for (let i = 0; i < 11; i++) {
    GasTeilchen[i] = createInput('');
    GasTeilchen[i].size(60, 22);
    GasTeilchen[i].style('font-size', '20px');
    GasTeilchen[i].hide();
  }
  GasTeilchen[7].size(67, 22);

  antwortGeben = createButton('Antwort abgeben!');
  antwortGeben.hide();
  antwortGeben.position(880, 320);
  antwortGeben.size(100, 50);
  antwortGeben.mousePressed(function() {
    if (folie == 21) {
      if (fragenTextfeld[0].value().length > 10) {
        abgeschickt = true;
        weiter.show();
      } else {
        abgeschickt = false;
      }
    }
    if (folie == 25) {
      if (tempOrdnen[0].value() == "2" && tempOrdnen[1].value() == "1" && tempOrdnen[2].value() == "3") {
        falscheAntwort = false;
        hideAll();
      } else {
        falscheAntwort = true;
      }


      if (fragenTextfeld[1].value().length > 10 && falscheAntwort == false) {
        abgeschickt = true;
        weiter.show();
      } else {
        abgeschickt = false;
      }
    }
  });


  for (let i = 0; i < 7; i++) {
    moleküle[i] = createInput('');
    moleküle[i].hide();
  }

  moleküle[0].size(70, 30);
  moleküle[1].size(15, 15);
  moleküle[2].size(70, 30);
  moleküle[3].size(70, 30);
  moleküle[4].size(15, 15);
  moleküle[5].size(70, 30);
  moleküle[6].size(15, 15);

  moleküle[0].position(670, 558);
  moleküle[1].position(780, 560);
  moleküle[2].position(520, 600);
  moleküle[3].position(649, 600);
  moleküle[4].position(750, 600);
  moleküle[5].position(908, 600);
  moleküle[6].position(1018, 600);

  moleküle[0].style('font-size', '20px');

  moleküle[2].style('font-size', '20px');
  moleküle[3].style('font-size', '20px');

  moleküle[5].style('font-size', '20px');




  länge = createInput('40');
  breite = createInput('40');
  höhe = createInput('40');

  länge.size(70, 30);
  breite.size(70, 30);
  höhe.size(70, 30);

  länge.position(210, 350);
  breite.position(580, 350);
  höhe.position(950, 350);

  länge.style('font-size', '20px');
  breite.style('font-size', '20px');
  höhe.style('font-size', '20px');

  länge.hide();
  breite.hide();
  höhe.hide();


  längeMesskammer = createInput('');
  breiteMesskammer = createInput('');
  höheMesskammer = createInput('');

  längeMesskammer.size(70, 30);
  breiteMesskammer.size(70, 30);
  höheMesskammer.size(70, 30);

  längeMesskammer.position(210, 450);
  breiteMesskammer.position(580, 450);
  höheMesskammer.position(950, 450);

  längeMesskammer.style('font-size', '20px');
  breiteMesskammer.style('font-size', '20px');
  höheMesskammer.style('font-size', '20px');

  längeMesskammer.hide();
  breiteMesskammer.hide();
  höheMesskammer.hide();


  berechnungEthanolDichte = createInput('');
  berechnungEthanolMasse = createInput('');
  berechnungEthanolVerhältnis = createInput('');

  berechnungEthanolDichte.size(70, 30);
  berechnungEthanolMasse.size(70, 30);
  berechnungEthanolVerhältnis.size(70, 30);

  berechnungEthanolDichte.position(470, 495);
  berechnungEthanolMasse.position(470, 540);
  berechnungEthanolVerhältnis.position(285, 635);

  berechnungEthanolDichte.style('font-size', '20px');
  berechnungEthanolMasse.style('font-size', '20px');
  berechnungEthanolVerhältnis.style('font-size', '20px');

  berechnungEthanolDichte.hide();
  berechnungEthanolMasse.hide();
  berechnungEthanolVerhältnis.hide();

  prozent = createInput('');
  prozent.size(160, 25);
  prozent.style('font-size', '20px');
  prozent.position(80, 610);
  prozent.hide();

  promille = createInput('');
  promille.size(160, 25);
  promille.style('font-size', '20px');
  promille.position(350, 610);
  promille.hide();

  ppm = createInput('');
  ppm.size(160, 25);
  ppm.style('font-size', '20px');
  ppm.position(640, 610);
  ppm.hide();

  ppb = createInput('');
  ppb.size(160, 25);
  ppb.style('font-size', '20px');
  ppb.position(950, 610);
  ppb.hide();



  min = createInput('');
  min.size(50, 25);
  min.style('font-size', '20px');
  min.position(350, 285);
  min.hide();
  max = createInput('');
  max.size(50, 25);
  max.hide();
  max.position(350, 185);
  max.style('font-size', '20px');
  mw1 = createInput('');
  mw1.size(50, 25);
  mw1.hide();
  mw1.position(160, 420);
  mw1.style('font-size', '20px');
  mw2 = createInput('');
  mw2.size(50, 25);
  mw2.hide();
  mw2.position(260, 420);
  mw2.style('font-size', '20px');
  st1 = createInput('');
  st1.size(50, 25);
  st1.hide();
  st1.position(160, 580);
  st1.style('font-size', '20px');
  st2 = createInput('');
  st2.position(260, 580);
  st2.style('font-size', '20px');
  st2.size(50, 25);
  st2.hide();



  tempOrdnen[0] = createInput('');
  tempOrdnen[1] = createInput('');
  tempOrdnen[2] = createInput('');
  for (let i = 0; i < 3; i++) {
    tempOrdnen[i].size(25, 25);
    tempOrdnen[i].position(150 + 100 * i, 300);
    tempOrdnen[i].style('font-size', "20px");
    tempOrdnen[i].hide();
  }

  for (let i = 0; i < 3; i++) {
    temperaturGläser[i] = createInput('');
    temperaturGläser[i].size(40, 30);
    temperaturGläser[i].position(793, 100 + 50 * i);
    temperaturGläser[i].style('font-size', '20px');
    temperaturGläser[i].hide();
  }

  temperaturGläser[0].value('');
  temperaturGläser[1].value('');
  temperaturGläser[2].value('');


  for (let i = 0; i < 7; i++) {
    thermometerBeschriftung[i] = createInput('');
    thermometerBeschriftung[i].size(35, 25);
    thermometerBeschriftung[i].position(940, 215 + 50 * i);
    thermometerBeschriftung[i].style('font-size', '20px');
    thermometerBeschriftung[i].hide();
  }

  //
  thermometerBeschriftung[0].value('');
  thermometerBeschriftung[1].value('');
  thermometerBeschriftung[2].value('');
  thermometerBeschriftung[3].value('');
  thermometerBeschriftung[4].value('');
  thermometerBeschriftung[5].value('');
  thermometerBeschriftung[6].value('');



  //


  aufgabe3 = createElement('textarea', '');
  aufgabe3.size(420, 100);
  aufgabe3.position(50, 500);
  aufgabe3.hide();
  aufgabe3.value('');
  fragenTextfeld[0] = createElement('textarea', '');
  fragenTextfeld[0].value('');
  fragenTextfeld[0].size(500, 150);
  fragenTextfeld[0].position(650, 150);

  fragenTextfeld[1] = createElement('textarea', '');
  fragenTextfeld[1].size(500, 100);
  fragenTextfeld[1].position(20, 420);
  fragenTextfeld[1].value('');
  for (let i = 0; i < fragenTextfeld.length; i++) {
    fragenTextfeld[i].hide();
  }

}
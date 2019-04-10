let database;
let daten;
let Seite = 0;
let vor;
let zurück;
let code = [];
let Klassenstufe = [];
let abstand = 0;
let Geschlecht = [];
let AntwortUV = [];
let AntwortNP = [];
let AntwortRA = [];
let abgeschickt = false;
let NoteMathe = [];
let NoteChemie = [];
let NoteBio = [];
let NoteNaWi = [];
let NotePhysik = [];
let l1 = "";
let l2 = "";
let l3 = "";
let l4 = "";
let l5 = "";
let l1k = "";
let l2k = "";
let l3k = "";
let l4k = "";
let l5k = "";
let InteressePhysik = [];
let InteresseBio = [];
let InteresseChemie = [];
let Label = [];
let UV = [];
let NP = [];
let RA = [];
let NaturUndIch = [];
let submit;

let AllesAusgefuellt = true;


let kompletterCode = "";

let GeschlechtAntwort = "";
let KlassenstufeAntwort = "";
let NotePhysikAntwort = "";
let NoteMatheAntwort = "";
let NoteChemieAntwort = "";
let NoteBioAntwort = "";
let NoteNaWiAntwort = "";
let InteresseChemieAntwort = "";
let InteressePhysikAntwort = "";
let InteresseBioAntwort = "";
let NaturUndIchAntwort = "";


function setup() {
  let cnv = createCanvas(1550, 1000);
  submit = createButton('Daten abschicken');
  vor = createButton('Weiter');
  zurück = createButton('Zurück');
  vor.position(1450, 940);
  zurück.position(40, 940);
  cnv.position(0, 0);



  BlauerEngel.resize(120, 120);
  GruenerStern.resize(150, 80);
  Fairtrade.resize(125, 150);
  EuroBlume.resize(130, 150);
  Bio.resize(130, 130);


  vor.mousePressed(function() {
    if (AllesAusgefuellt) {
      Seite += 1;
      AllesAusgefuellt = false;
    }
  });
  for (let i = 0; i < 40; i++) {
    AntwortUV[i] = "";
  }
  for (let i = 0; i < 7; i++) {
    AntwortNP[i] = "";
  }
  for (let i = 0; i < 6; i++) {
    AntwortRA[i] = "";
  }
  Label[0] = createCheckbox('', 'Noch nie gesehen');
  Label[1] = createCheckbox('', 'Gesehen');
  Label[2] = createCheckbox('', 'Wissen');
  Label[3] = createCheckbox(' Ja', 'Ja');
  Label[4] = createCheckbox(' Nein', 'Nein');
  Label[5] = createCheckbox('', 'Noch nie gesehen');
  Label[6] = createCheckbox('', 'Gesehen');
  Label[7] = createCheckbox('', 'Wissen');
  Label[8] = createCheckbox(' Ja', 'Ja');
  Label[9] = createCheckbox(' Nein', 'Nein');
  Label[10] = createCheckbox('', 'Noch nie gesehen');
  Label[11] = createCheckbox('', 'Gesehen');
  Label[12] = createCheckbox('', 'Wissen');
  Label[13] = createCheckbox(' Ja', 'Ja');
  Label[14] = createCheckbox(' Nein', 'Nein');
  Label[15] = createCheckbox('', 'Noch nie gesehen');
  Label[16] = createCheckbox('', 'Gesehen');
  Label[17] = createCheckbox('', 'Wissen');
  Label[18] = createCheckbox(' Ja', 'Ja');
  Label[19] = createCheckbox(' Nein', 'Nein');
  Label[20] = createCheckbox('', 'Noch nie gesehen');
  Label[21] = createCheckbox('', 'Gesehen');
  Label[22] = createCheckbox('', 'Wissen');
  Label[23] = createCheckbox(' Ja', 'Ja');
  Label[24] = createCheckbox(' Nein', 'Nein');
  Label[3].style('font-size', 25 + "px");
  Label[4].style('font-size', 25 + "px");
  Label[8].style('font-size', 25 + "px");
  Label[9].style('font-size', 25 + "px");
  Label[13].style('font-size', 25 + "px");
  Label[14].style('font-size', 25 + "px");
  Label[18].style('font-size', 25 + "px");
  Label[19].style('font-size', 25 + "px");
  Label[23].style('font-size', 25 + "px");
  Label[24].style('font-size', 25 + "px");

  for (let i = 0; i < Label.length; i++) {
    Label[i].checked(false);
  }
  submit.style('text-font', 1000 + 'px');
  zurück.mousePressed(function() {
    if (Seite > 0) {
      Seite -= 1;
    }
  });
  submit.position(750, 500);
  submit.size(150, 70);
  submit.mousePressed(sendData);
  ///
  NaturUndIch[0] = createCheckbox('', '0');
  NaturUndIch[1] = createCheckbox('', '1');
  NaturUndIch[2] = createCheckbox('', '2');
  NaturUndIch[3] = createCheckbox('', '3');
  NaturUndIch[4] = createCheckbox('', '4');

  NaturUndIch[0].position(180, 400);
  NaturUndIch[1].position(516, 400);
  NaturUndIch[2].position(850, 400);
  NaturUndIch[3].position(1120, 400);
  NaturUndIch[4].position(1350, 400);

  for (let i = 0; i < NaturUndIch.length; i++) {
    NaturUndIch[i].checked(false);
  }
  for (let i = 0; i < 8; i++) {
    code[i] = createInput('');
    //        code[i].hide();
    if (i % 2 == 0) {
      abstand += 30;
    }
    code[i].position(450 + 50 * i + abstand, 240);
    code[i].size(40, 50);
    code[i].style('font-size', '30px');
  }
  Klassenstufe[0] = createCheckbox(' 7');
  Klassenstufe[1] = createCheckbox(' 8');
  Klassenstufe[2] = createCheckbox(' 9');
  Klassenstufe[3] = createCheckbox(' 10');
  for (let i = 0; i < Klassenstufe.length; i++) {
    Klassenstufe[i].position(650 + 100 * i, 180);
    Klassenstufe[i].style('font-size', '30px');
  }

  Geschlecht[0] = createCheckbox(' weiblich');
  Geschlecht[1] = createCheckbox(' männlich');

  for (let i = 0; i < Geschlecht.length; i++) {
    Geschlecht[i].position(700 + 150 * i, 280);
    Geschlecht[i].style('font-size', '30px');
  }


  NoteMathe[0] = createCheckbox(" 1+", '15');
  NoteMathe[1] = createCheckbox(" 1", '14');
  NoteMathe[2] = createCheckbox(" 1-", '13');
  NoteMathe[3] = createCheckbox(" 2+", '12');
  NoteMathe[4] = createCheckbox(" 2", '11');
  NoteMathe[5] = createCheckbox(" 2-", '10');
  NoteMathe[6] = createCheckbox(" 3+", '9');
  NoteMathe[7] = createCheckbox(" 3", '8');
  NoteMathe[8] = createCheckbox(" 3-", '7');
  NoteMathe[9] = createCheckbox(" 4+", '6');
  NoteMathe[10] = createCheckbox(" 4", '5');
  NoteMathe[11] = createCheckbox(" 4-", '4');
  NoteMathe[12] = createCheckbox(" 5", '3');
  for (let i = 0; i < NoteMathe.length; i++) {
    NoteMathe[i].position(430 + 69 * i, 490);
    NoteMathe[i].checked(false);
  }
  NotePhysik[0] = createCheckbox(" 1+", '15');
  NotePhysik[1] = createCheckbox(" 1", '14');
  NotePhysik[2] = createCheckbox(" 1-", '13');
  NotePhysik[3] = createCheckbox(" 2+", '12');
  NotePhysik[4] = createCheckbox(" 2", '11');
  NotePhysik[5] = createCheckbox(" 2-", '10');
  NotePhysik[6] = createCheckbox(" 3+", '9');
  NotePhysik[7] = createCheckbox(" 3", '8');
  NotePhysik[8] = createCheckbox(" 3-", '7');
  NotePhysik[9] = createCheckbox(" 4+", '6');
  NotePhysik[10] = createCheckbox(" 4", '5');
  NotePhysik[11] = createCheckbox(" 4-", '4');
  NotePhysik[12] = createCheckbox(" 5", '3');
  for (let i = 0; i < NotePhysik.length; i++) {
    NotePhysik[i].position(430 + 69 * i, 540);
    NotePhysik[i].checked(false);
  }

  NoteChemie[0] = createCheckbox(" 1+", '15');
  NoteChemie[1] = createCheckbox(" 1", '14');
  NoteChemie[2] = createCheckbox(" 1-", '13');
  NoteChemie[3] = createCheckbox(" 2+", '12');
  NoteChemie[4] = createCheckbox(" 2", '11');
  NoteChemie[5] = createCheckbox(" 2-", '10');
  NoteChemie[6] = createCheckbox(" 3+", '9');
  NoteChemie[7] = createCheckbox(" 3", '8');
  NoteChemie[8] = createCheckbox(" 3-", '7');
  NoteChemie[9] = createCheckbox(" 4+", '6');
  NoteChemie[10] = createCheckbox(" 4", '5');
  NoteChemie[11] = createCheckbox(" 4-", '4');
  NoteChemie[12] = createCheckbox(" 5", '3');
  for (let i = 0; i < NoteChemie.length; i++) {
    NoteChemie[i].position(430 + 69 * i, 590);
    NoteChemie[i].checked(false);
  }
  NoteBio[0] = createCheckbox(" 1+", '15');
  NoteBio[1] = createCheckbox(" 1", '14');
  NoteBio[2] = createCheckbox(" 1-", '13');
  NoteBio[3] = createCheckbox(" 2+", '12');
  NoteBio[4] = createCheckbox(" 2", '11');
  NoteBio[5] = createCheckbox(" 2-", '10');
  NoteBio[6] = createCheckbox(" 3+", '9');
  NoteBio[7] = createCheckbox(" 3", '8');
  NoteBio[8] = createCheckbox(" 3-", '7');
  NoteBio[9] = createCheckbox(" 4+", '6');
  NoteBio[10] = createCheckbox(" 4", '5');
  NoteBio[11] = createCheckbox(" 4-", '4');
  NoteBio[12] = createCheckbox(" 5", '3');
  for (let i = 0; i < NoteBio.length; i++) {
    NoteBio[i].position(430 + 69 * i, 640);
    NoteBio[i].checked(false);
  }

  NoteNaWi[0] = createCheckbox(" 1+", '15');
  NoteNaWi[1] = createCheckbox(" 1", '14');
  NoteNaWi[2] = createCheckbox(" 1-", '13');
  NoteNaWi[3] = createCheckbox(" 2+", '12');
  NoteNaWi[4] = createCheckbox(" 2", '11');
  NoteNaWi[5] = createCheckbox(" 2-", '10');
  NoteNaWi[6] = createCheckbox(" 3+", '9');
  NoteNaWi[7] = createCheckbox(" 3", '8');
  NoteNaWi[8] = createCheckbox(" 3-", '7');
  NoteNaWi[9] = createCheckbox(" 4+", '6');
  NoteNaWi[10] = createCheckbox(" 4", '5');
  NoteNaWi[11] = createCheckbox(" 4-", '4');
  NoteNaWi[12] = createCheckbox(" 5", '3');

  for (let i = 0; i < NoteNaWi.length; i++) {
    NoteNaWi[i].position(430 + 69 * i, 690);
    NoteNaWi[i].checked(false);
  }



  for (let i = 0; i < 212; i++) {
    UV[i] = createCheckbox('');
  }

  for (let i = 0; i < 42; i++) {
    NP[i] = createCheckbox('');
  }

  for (let i = 0; i < 36; i++) {
    RA[i] = createCheckbox('');
  }


  for (let i = 0; i < 21; i++) {
    InteressePhysik[i] = createCheckbox(" " + (5 * i).toString());
    InteressePhysik[i].position(45 + 70 * i, 275);
    InteresseChemie[i] = createCheckbox(" " + (5 * i).toString());
    InteresseChemie[i].position(45 + 70 * i, 475);
    InteresseBio[i] = createCheckbox(" " + (5 * i).toString());
    InteresseBio[i].position(45 + 70 * i, 675);
  }

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAP6xC_Nd4grBXktEhOcGRI1oSpj8kz6vg",
    authDomain: "susmobil-e69d0.firebaseapp.com",
    databaseURL: "https://susmobil-e69d0.firebaseio.com",
    projectId: "susmobil-e69d0",
    storageBucket: "susmobil-e69d0.appspot.com",
    messagingSenderId: "15397633220"
  };
  firebase.initializeApp(config);
  database = firebase.database;
}




function sendData() {
  for (let i = 0; i < NaturUndIch.length; i++)
    if (NaturUndIch[i].checked()) {
      NaturUndIchAntwort = i.toString();
    }

  for (let i = 0; i < code.length; i++) {
    kompletterCode += code[i].value();
  };

  data[0] = {
    Code: kompletterCode,
    Klassenstufe: KlassenstufeAntwort,
    Geschlecht: GeschlechtAntwort,
    InteressePhysik: InteressePhysikAntwort,
    InteresseChemie: InteresseChemieAntwort,
    InteresseBio: InteresseBioAntwort,
    NoteMathe: NoteMatheAntwort,
    NoteChemie: NoteChemieAntwort,
    NoteBio: NoteBioAntwort,
    NoteNaWi: NoteNaWiAntwort,
    NotePhysik: NotePhysikAntwort,
    Label1: l1,
    Label1Kaufverhalten: l1k,
    Label2: l2,
    Label2Kaufverhalten: l2k,
    Label3: l3,
    Label3Kaufverhalten: l3k,
    Label4: l4,
    Label4Kaufverhalten: l4k,
    Label5: l5,
    Label5Kaufverhalten: l5k,


    UV1: AntwortUV[0],
    UV2: AntwortUV[1],
    UV3: AntwortUV[2],
    UV4: AntwortUV[3],
    UV5: AntwortUV[4],
    UV6: AntwortUV[5],
    UV7: AntwortUV[6],
    UV8: AntwortUV[7],
    UV9: AntwortUV[8],
    UV10: AntwortUV[9],
    UV11: AntwortUV[10],
    UV12: AntwortUV[11],
    UV13: AntwortUV[12],
    UV14: AntwortUV[13],
    UV15: AntwortUV[14],
    UV16: AntwortUV[15],
    UV17: AntwortUV[16],
    UV18: AntwortUV[17],
    UV19: AntwortUV[18],
    UV20: AntwortUV[19],
    UV21: AntwortUV[20],
    UV22: AntwortUV[21],
    UV23: AntwortUV[22],
    UV24: AntwortUV[23],
    UV25: AntwortUV[24],
    UV26: AntwortUV[25],
    UV27: AntwortUV[26],
    UV28: AntwortUV[27],
    UV29: AntwortUV[28],
    UV30: AntwortUV[29],
    UV31: AntwortUV[30],
    UV32: AntwortUV[31],
    UV33: AntwortUV[32],
    UV34: AntwortUV[33],
    UV35: AntwortUV[34],
    UV36: AntwortUV[35],
    UV37: AntwortUV[36],
    UV38: AntwortUV[37],
    UV39: AntwortUV[38],
    UV40: AntwortUV[39],

    NP1: AntwortNP[0],
    NP2: AntwortNP[1],
    NP3: AntwortNP[2],
    NP4: AntwortNP[3],
    NP5: AntwortNP[4],
    NP6: AntwortNP[5],
    NP7: AntwortNP[6],

    RA1: AntwortRA[0],
    RA2: AntwortRA[1],
    RA3: AntwortRA[2],
    RA4: AntwortRA[3],
    RA5: AntwortRA[4],
    RA6: AntwortRA[5],
    NaturUndIch: NaturUndIchAntwort
  };
  let referenz = "Umweltbewusstsein" + day() + month() + year();
  let Umweltbewusstsein = database().ref(referenz);
  let test = Umweltbewusstsein.push(data[0], finished);
  console.log("Firebase key: " + test.key);
  // Reload tha data from page
  function finished(err) {
    if (err) {
      console.error("Da lief was falsch");
      console.error(err);
    } else {
      console.log("Daten gespeichert");
      abgeschickt = true;
    }
  }
}

function Ausgefuellt() {
  // Seite 0;
  if (Seite == 0) {
    AllesAusgefuellt = true;
  }


  // Seite 1;
  //Klasse, Alter, Note: Bio, Mathe, Physik, Chemie, NaWi
  if (Seite == 1) {
    let temp1 = false;
    let temp2 = false;
    let temp3 = false;
    let temp4 = false;
    let temp5 = false;
    let temp6 = false;
    let temp7 = false;

    if (Geschlecht[0].checked() || Geschlecht[1].checked()) {
      temp1 = true;
    }
    if (Klassenstufe[0].checked() || Klassenstufe[1].checked() || Klassenstufe[2].checked() || Klassenstufe[3].checked()) {
      temp2 = true;
    }
    let temp = 0;
    for (let i = 0; i < NoteMathe.length; i++) {
      if (NoteMathe[i].checked()) {
        temp += 1;
      }
      if (temp == 1) {
        temp3 = true;
      }
    }
    temp = 0;

    for (let i = 0; i < NoteChemie.length; i++) {
      if (NoteChemie[i].checked()) {
        temp += 1;
      }
      if (temp == 1) {
        temp4 = true;
      }
    }


    temp = 0;

    for (let i = 0; i < NoteBio.length; i++) {
      if (NoteBio[i].checked()) {
        temp += 1;
      }
      if (temp == 1) {
        temp5 = true;
      }
    }



    temp = 0;

    for (let i = 0; i < NotePhysik.length; i++) {
      if (NotePhysik[i].checked()) {
        temp += 1;
      }
      if (temp == 1) {
        temp6 = true;
      }
    }
    temp = 0;
    if (Klassenstufe[0].checked()) {
      for (let i = 0; i < NoteNaWi.length; i++) {
        if (NoteNaWi[i].checked()) {
          temp += 1;
        }
        if (temp == 1) {
          temp7 = true;
        }
      }
    } else {
      temp7 = true;
    }
    if (temp1 && temp2 && temp3 && temp4 && temp5 && temp6 && temp7) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }

  // Seite 2;

  if (Seite == 2) {
    let temp1 = false;
    let temp2 = false;
    let temp3 = false;

    let temp = 0;
    for (let i = 0; i < InteressePhysik.length; i++) {
      if (InteressePhysik[i].checked()) {
        temp += 1;
      }
      if (temp == 1) {
        temp1 = true;
      }
    }

    temp = 0;
    for (let i = 0; i < InteresseChemie.length; i++) {
      if (InteresseChemie[i].checked()) {
        temp += 1;
      }
      if (temp == 1) {
        temp2 = true;
      }
    }


    temp = 0;
    for (let i = 0; i < InteresseBio.length; i++) {
      if (InteresseBio[i].checked()) {
        temp += 1;
      }
      if (temp == 1) {
        temp3 = true;
      }
    }
    if (temp1 && temp2 && temp3) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }


  }

  // Seite 3;

  if (Seite == 3) {
    let temp = 0;

    for (let i = 0; i < Label.length; i++) {
      if (Label[i].checked()) {
        temp += 1;
      }

    }
    if (temp == 10) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }



  }

  // Seite 4; Nix

  if (Seite == 4) {
    AllesAusgefuellt = true;
  }

  // Seite 5;
  if (Seite == 5) {
    let temp = 0;
    for (let i = 0; i < 4 * 6; i++) {
      if (UV[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 4) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }
  //Seite 6

  if (Seite == 6) {
    let temp = 0;
    for (let i = 4 * 6; i < 10 * 6; i++) {
      if (UV[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 6) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }


  // Seite 7;

  if (Seite == 7) {
    let temp = 0;
    for (let i = 10 * 6; i < 15 * 6; i++) {
      if (UV[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 5) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }


  // Seite 8;

  if (Seite == 8) {
    let temp = 0;
    for (let i = 15 * 6; i < 19 * 6; i++) {
      if (UV[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 4) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }

  //Seite 9

  if (Seite == 9) {
    let temp = 0;
    for (let i = 19 * 6; i < 23 * 6; i++) {
      if (UV[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 4) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }

  // Seite 10

  if (Seite == 10) {
    let temp = 0;
    for (let i = 23 * 6; i < 28 * 6; i++) {
      if (UV[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 5) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }

  // Seite 11

  if (Seite == 11) {
    let temp = 0;
    for (let i = 28 * 6; i < 33 * 6; i++) {
      if (UV[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 5) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }

  //Seite 12

  if (Seite == 12) {
    let temp = 0;
    for (let i = 33 * 6; i < 212; i++) {
      if (UV[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 7) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }

  //Seite 13

  if (Seite == 13) {
    let temp = 0;
    for (let i = 0; i < NaturUndIch.length; i++) {
      if (NaturUndIch[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 1) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }


  if (Seite == 14) {
    AllesAusgefuellt = true;
  }

  if (Seite == 15) {
    let temp = 0;
    for (let i = 0; i < 7 * 6; i++) {
      if (NP[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 7) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }



  if (Seite == 16) {
    let temp = 0;
    for (let i = 0; i < 6 * 6; i++) {
      if (RA[i].checked()) {
        temp += 1;
      }
    }
    if (temp == 6) {
      AllesAusgefuellt = true;
    } else {
      AllesAusgefuellt = false;
    }
  }


  if (Seite == 17) {
    AllesAusgefuellt = true;
  }
}

function Checkboxen() {


  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 5; j++) {
      if (NaturUndIch[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 5; k++) {
        NaturUndIch[6 * i + k].checked(false);
      }

    }
  }


  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 21; j++) {
      if (InteressePhysik[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 21; k++) {
        InteressePhysik[6 * i + k].checked(false);
      }

    }
  }
  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 21; j++) {
      if (InteresseBio[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 21; k++) {
        InteresseBio[6 * i + k].checked(false);
      }

    }
  }

  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 21; j++) {
      if (InteresseChemie[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 21; k++) {
        InteresseChemie[6 * i + k].checked(false);
      }

    }
  }





  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 2; j++) {
      if (Geschlecht[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 2; k++) {
        Geschlecht[6 * i + k].checked(false);
      }

    }
  }

  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 4; j++) {
      if (Klassenstufe[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 4; k++) {
        Klassenstufe[6 * i + k].checked(false);
      }

    }
  }
  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 13; j++) {
      if (NoteMathe[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 13; k++) {
        NoteMathe[6 * i + k].checked(false);
      }

    }
  }

  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 13; j++) {
      if (NoteBio[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 13; k++) {
        NoteBio[6 * i + k].checked(false);
      }

    }
  }

  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 13; j++) {
      if (NotePhysik[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 13; k++) {
        NotePhysik[6 * i + k].checked(false);
      }

    }
  }

  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 13; j++) {
      if (NoteChemie[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 13; k++) {
        NoteChemie[6 * i + k].checked(false);
      }

    }
  }
  for (let i = 0; i < 1; i++) {
    let temp = 0;
    for (let j = 0; j < 13; j++) {
      if (NoteNaWi[j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 13; k++) {
        NoteNaWi[6 * i + k].checked(false);
      }

    }
  }



  for (let i = 0; i < 33; i++) {
    let temp = 0;
    for (let j = 0; j < 6; j++) {
      if (UV[i * 6 + j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 6; k++) {
        UV[6 * i + k].checked(false);
      }

    }
  }

  for (let i = 0; i < 7; i++) {
    let temp = 0;
    for (let j = 0; j < 2; j++) {
      if (UV[198 + i * 2 + j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 2; k++) {
        UV[198 + 2 * i + k].checked(false);
      }

    }
  }

  for (let i = 0; i < 7; i++) {
    let temp = 0;
    for (let j = 0; j < 6; j++) {
      if (NP[i * 6 + j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 6; k++) {
        NP[6 * i + k].checked(false);
      }

    }
  }

  for (let i = 0; i < 6; i++) {
    let temp = 0;
    for (let j = 0; j < 6; j++) {
      if (RA[i * 6 + j].checked()) {
        temp += 1;
      }
    }
    if (temp > 1) {
      for (let k = 0; k < 6; k++) {
        RA[6 * i + k].checked(false);
      }

    }
  }
}



function Antworten() {

  if (Geschlecht[0].checked()) {
    GeschlechtAntwort = "0";
  } else if (Geschlecht[1].checked()) {
    GeschlechtAntwort = "1";
  }


  if (Klassenstufe[0].checked()) {
    KlassenstufeAntwort = Klassenstufe[0].value();
  } else if (Klassenstufe[1].checked()) {
    KlassenstufeAntwort = Klassenstufe[1].value();
  } else if (Klassenstufe[2].checked()) {
    KlassenstufeAntwort = Klassenstufe[2].value();
  } else if (Klassenstufe[3].checked()) {
    KlassenstufeAntwort = Klassenstufe[3].value();
  } else {
    KlassenstufeAntwort = "Keine Angabe";
  }


  if (NotePhysik[0].checked()) {
    NotePhysikAntwort = 15;
  } else if (NotePhysik[1].checked()) {
    NotePhysikAntwort = 14;
  } else if (NotePhysik[2].checked()) {
    NotePhysikAntwort = 13;
  } else if (NotePhysik[3].checked()) {
    NotePhysikAntwort = 12;
  } else if (NotePhysik[4].checked()) {
    NotePhysikAntwort = 11;
  } else if (NotePhysik[5].checked()) {
    NotePhysikAntwort = 10;
  } else if (NotePhysik[6].checked()) {
    NotePhysikAntwort = 9;
  } else if (NotePhysik[7].checked()) {
    NotePhysikAntwort = 8;
  } else if (NotePhysik[8].checked()) {
    NotePhysikAntwort = 7;
  } else if (NotePhysik[9].checked()) {
    NotePhysikAntwort = 6;
  } else if (NotePhysik[10].checked()) {
    NotePhysikAntwort = 5;
  } else if (NotePhysik[11].checked()) {
    NotePhysikAntwort = 4;
  } else if (NotePhysik[12].checked()) {
    NotePhysikAntwort = 3;
  }


  if (NoteMathe[0].checked()) {
    NoteMatheAntwort = 15;
  } else if (NoteMathe[1].checked()) {
    NoteMatheAntwort = 14;
  } else if (NoteMathe[2].checked()) {
    NoteMatheAntwort = 13;
  } else if (NoteMathe[3].checked()) {
    NoteMatheAntwort = 12;
  } else if (NoteMathe[4].checked()) {
    NoteMatheAntwort = 11;
  } else if (NoteMathe[5].checked()) {
    NoteMatheAntwort = 10;
  } else if (NoteMathe[6].checked()) {
    NoteMatheAntwort = 9;
  } else if (NoteMathe[7].checked()) {
    NoteMatheAntwort = 8;
  } else if (NoteMathe[8].checked()) {
    NoteMatheAntwort = 7;
  } else if (NoteMathe[9].checked()) {
    NoteMatheAntwort = 6;
  } else if (NoteMathe[10].checked()) {
    NoteMatheAntwort = 5;
  } else if (NoteMathe[11].checked()) {
    NoteMatheAntwort = 4;
  } else if (NoteMathe[12].checked()) {
    NoteMatheAntwort = 3;
  }


  for (let i = 0; i < NoteChemie.length; i++) {
    if (NoteChemie[i].checked()) {
      NoteChemieAntwort = (15 - i).toString();

    }
  }

  for (let i = 0; i < NoteBio.length; i++) {
    if (NoteBio[i].checked()) {
      NoteBioAntwort = (15 - i).toString();

    }
  }

  for (let i = 0; i < NoteNaWi.length; i++) {
    if (NoteNaWi[i].checked()) {
      NoteNaWiAntwort = (15 - i).toString();

    }
  }
  for (let i = 0; i < InteresseChemie.length; i++) {
    if (InteresseChemie[i].checked()) {
      InteresseChemieAntwort = InteresseChemie[i].value();

    }
  }
  for (let i = 0; i < InteressePhysik.length; i++) {
    if (InteressePhysik[i].checked()) {
      InteressePhysikAntwort = InteressePhysik[i].value();

    }
  }
  for (let i = 0; i < InteresseBio.length; i++) {
    if (InteresseBio[i].checked()) {
      InteresseBioAntwort = InteresseBio[i].value();

    }
  }




  if (Label[0].checked()) {
    l1 = "0";
  } else if (Label[1].checked()) {
    l1 = "1";
  } else if (Label[2].checked()) {
    l1 = "2";
  }

  if (Label[5].checked()) {
    l2 = "0";
  } else if (Label[6].checked()) {
    l2 = "1";
  } else if (Label[7].checked()) {
    l2 = "2";
  }

  if (Label[10].checked()) {
    l3 = "0";
  } else if (Label[11].checked()) {
    l3 = "1";
  } else if (Label[12].checked()) {
    l3 = "2";
  }

  if (Label[15].checked()) {
    l4 = "0";
  } else if (Label[16].checked()) {
    l4 = "1";
  } else if (Label[17].checked()) {
    l4 = "2";
  }

  if (Label[20].checked()) {
    l5 = "0";
  } else if (Label[21].checked()) {
    l5 = "1";
  } else if (Label[22].checked()) {
    l5 = "2";
  }

  if (Label[3].checked()) {
    l1k = "1";
  } else if (Label[4].checked()) {
    l1k = "0";
  }
  if (Label[8].checked()) {
    l2k = "1";
  } else if (Label[9].checked()) {
    l2k = "0";
  }
  if (Label[13].checked()) {
    l3k = "1";
  } else if (Label[14].checked()) {
    l3k = "0";
  }
  if (Label[18].checked()) {
    l4k = "1";
  } else if (Label[19].checked()) {
    l4k = "0";
  }

  if (Label[23].checked()) {
    l5k = "1";
  } else if (Label[24].checked()) {
    l5k = "0";
  }

  for (let i = 0; i < 33; i++) {
    if (UV[6 * i].checked()) {
      AntwortUV[i] = "6";
    }
    if (UV[6 * i + 1].checked()) {
      AntwortUV[i] = "5";
    }
    if (UV[6 * i + 2].checked()) {
      AntwortUV[i] = "4";
    }
    if (UV[6 * i + 3].checked()) {
      AntwortUV[i] = "3";
    }
    if (UV[6 * i + 4].checked()) {
      AntwortUV[i] = "2";
    }
    if (UV[6 * i + 5].checked()) {
      AntwortUV[i] = "1";
    }
  }

  for (let i = 0; i < 7; i++) {
    if (UV[198 + 2 * i].checked()) {
      AntwortUV[33 + i] = "1";
    }
    if (UV[198 + 2 * i + 1].checked()) {
      AntwortUV[33 + i] = "0";
    }
  }


  for (let i = 0; i < 7; i++) {
    if (NP[6 * i].checked()) {
      AntwortNP[i] = "1";
    }
    if (NP[6 * i + 1].checked()) {
      AntwortNP[i] = "2";
    }
    if (NP[6 * i + 2].checked()) {
      AntwortNP[i] = "3";
    }
    if (NP[6 * i + 3].checked()) {
      AntwortNP[i] = "4";
    }
    if (NP[6 * i + 4].checked()) {
      AntwortNP[i] = "5";
    }
    if (NP[6 * i + 5].checked()) {
      AntwortNP[i] = "6";
    }
  }


  for (let i = 0; i < 6; i++) {
    if (RA[6 * i].checked()) {
      AntwortRA[i] = "1";
    }
    if (RA[6 * i + 1].checked()) {
      AntwortRA[i] = "2";
    }
    if (RA[6 * i + 2].checked()) {
      AntwortRA[i] = "3";
    }
    if (RA[6 * i + 3].checked()) {
      AntwortRA[i] = "4";
    }
    if (RA[6 * i + 4].checked()) {
      AntwortRA[i] = "5";
    }
    if (RA[6 * i + 5].checked()) {
      AntwortRA[i] = "6";
    }
  }
}




function Datenschutz() {}




function draw() {

  background(230);
  push();
  for (let i = 0; i < 1000; i++) {
    stroke(200 + 55 * i / 1000, 200 + 55 * i / 1000, 255);
    line(0, i, 1800, i);
  }
  pop();
  hideAll();

  if (Seite == 0) {
    Seite0();
  } else if (Seite == 1) {
    Seite1();
  } else if (Seite == 2) {
    Seite2();
  } else if (Seite == 3) {
    Seite3();
    for (let i = 0; i < Label.length; i++) {
      Label[i].show();
    }
  } else if (Seite == 4) {
    Seite4();
  } else if (Seite == 5) {
    Seite5();
  } else if (Seite == 6) {
    Seite6();
  } else if (Seite == 7) {
    Seite7();
  } else if (Seite == 8) {
    Seite8();
  } else if (Seite == 9) {
    Seite9();
  } else if (Seite == 10) {
    Seite10();
  } else if (Seite == 11) {
    Seite11();
  } else if (Seite == 12) {
    Seite12();
  } else if (Seite == 13) {
    Seite13();
    for (let i = 0; i < NaturUndIch.length; i++) {
      NaturUndIch[i].show();
    }
  } else if (Seite == 14) {
    Seite14();
  } else if (Seite == 15) {
    Seite15();
  } else if (Seite == 16) {
    Seite16();
  } else if (Seite == 17) {
    Seite17();
  }
  Antworten();
  Checkboxen();
  Ausgefuellt();

  if (AllesAusgefuellt) {
    vor.show();
  } else {
    vor.hide();
  }


  if (Seite == 0) {
    let filled = 0;
    for (let i = 0; i < code.length; i++) {
      if (code[i].value().length > 1) {
        code[i].value(code[i].value().substring(0, 1));
      }
      //code[i].value = code[i].value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
      if (code[i].value().length == 1) {
        filled += 1;
      }
    }
    if (filled == 8) {
      vor.show();
    } else {
      vor.hide();
    }
  }



  push();
  textSize(20);
  fill(0);
  if (Seite != 4 && Seite != 14 && Seite != 16) {
    text("Folie " + (Seite + 1) + "/18", 1400, 50);
  }
  pop();

  if (Seite > 17) {
    Seite = 17;
  }


}


function Seite0() {
  push();
  for (let i = 0; i < code.length; i++) {
    code[i].show();
    if (code.length > 1) {
      code[i].value().elt = "";
    }
  }
  textSize(25);
  fill(0);
  stroke(0);
  text('Liebe Schülerin, lieber Schüler,', 20, 50);
  textFormat('danke, dass du den folgenden Fragebogen beantwortest. Wir möchten hiermit einige deiner Gewohnheiten des täglichen Lebens erfassen. Außerdem interessiert uns, wie neugierig du bist und wie du dem naturwissenschaftlichen Unterricht, den du bislang erlebt hast, gegenüberstehst. ', 20, 100, 20);
  textFormat('Bitte beantworte alle Fragen sehr ehrlich (stelle dich z.B. nicht besser oder schlechter dar). Alle Angaben sind anonym, sodass wir deine Antworten nicht auf dich zurückverfolgen können und werden. Trage bitte deinen Code ein.', 20, 170, 20);

  translate(150, 0);
  text("A", 362, 350);
  text("B", 492, 350);
  text("C", 622, 350);
  text("D", 752, 350);
  translate(70, 20);
  text("A:", 200, 400);
  textUnderline("erste zwei", 250, 400);
  text("Buchstaben des Vornamens der Mutter,", 375, 400);
  text("B:", 200, 450);
  textUnderline("erste zwei", 250, 450);
  text("Buchstaben des Geburtsmonats,", 375, 450);
  text("C:", 200, 500);
  textUnderline("erste zwei", 250, 500);
  text("Buchstaben der Straße deiner Wohnung,", 375, 500);
  text("D:", 200, 550);
  text("Anzahl der Buchstaben des ersten Vornamens", 250, 550);


  pop();
}


function Seite1() {
  push();
  for (let i = 0; i < Klassenstufe.length; i++) {
    Klassenstufe[i].show();
  }
  for (let i = 0; i < Geschlecht.length; i++) {
    Geschlecht[i].show();
  }

  for (let i = 0; i < NoteMathe.length; i++) {
    NoteMathe[i].show();
    NoteChemie[i].show();
    NoteBio[i].show();
    NoteNaWi[i].show();
    NotePhysik[i].show();
  }


  textSize(30);
  translate(150, 0);
  text("Persönliche Angaben", 500, 50);
  fill(255);
  stroke(0);
  rect(0, 475, 1157, 265);
  rect(100, 150, 800, 175);
  fill(0);
  noStroke();
  text("Klassenstufe:", 150, 200);
  text("Geschlecht:", 150, 300);
  textFormat("Letzte Zeugnisnote (ungefährer Notendurchschnitt). Bitte ehrlich antworten!", -120, 400, 20);
  textSize(20);
  text("Mathematik", 50, 505);
  text("Physik", 50, 555);
  text("Chemie", 50, 605);
  text("Biologie", 50, 655);
  text("Naturwissenschaften\n(nur Klasse 7)", 50, 700);
  for (let i = 0; i < 5; i++) {
    line(0, 475 + 50 * i, 1158, 475 + 50 * i);
  }
  line(0, 740, 1158, 740);

  for (let i = 0; i < 14; i++) {
    line(260 + 69 * i, 475, 260 + 69 * i, 740);
  }
  pop();
}


function Seite2() {
  push();
  fill(255);
  stroke(0);
  rect(10, 240, 1520, 100);
  rect(10, 440, 1520, 100);
  rect(10, 640, 1520, 100);
  fill(0);
  for (let i = 0; i < 21; i++) {
    InteressePhysik[i].show();

    InteresseChemie[i].show();

    InteresseBio[i].show();

  }

  textFormat("Gibt für Physik, Chemie und Biologie an, wie sehr dich die Naturwissenschaften interessieren. 100 bedeutet extrem hohes Interesse.", 20, 50, 20);
  textSize(30);
  text("Physik", 50, 200);
  text("Chemie", 50, 400);
  text("Biologie", 50, 600);
  pop();
}


function Seite3() {
  push();
  fill(255);
  //    Frage1a.position(300, 300);
  rect(250, 140, 940, 850);
  for (let i = 0; i < 4; i++) {
    stroke(0);
    line(250 + i * 940 / 4, 140, 250 + i * 940 / 4, 990);
    line(255 + 3 * 940 / 4, 140, 255 + 3 * 940 / 4, 990);
  }
  let temp = [];
  temp[0] = 0;
  temp[1] = 0;
  temp[2] = 0;
  temp[3] = 0;
  temp[4] = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      if (Label[5 * j + i].checked()) {
        temp[j] += 1;
      }
    }
  }


  for (let j = 0; j < 5; j++) {
    if (Label[5 * j + 3].checked() && Label[5 * j + 4].checked()) {
      Label[5 * j + 3].checked(false);
      Label[5 * j + 4].checked(false);
    }

  }

  for (let j = 0; j < 5; j++) {
    if (temp[j] > 1) {
      for (let i = 0; i < 3; i++) {
        Label[5 * j + i].checked(false);
      }
    }
  }

  Label[0].position(370, 310);
  Label[1].position(600, 310);
  Label[2].position(830, 310);
  Label[3].position(1020, 310);
  Label[4].position(1080, 310);

  Label[5].position(370, 440);
  Label[6].position(600, 440);
  Label[7].position(830, 440);
  Label[8].position(1020, 440);
  Label[9].position(1080, 440);


  Label[10].position(370, 570);
  Label[11].position(600, 570);
  Label[12].position(830, 570);
  Label[13].position(1020, 570);
  Label[14].position(1080, 570);

  Label[15].position(370, 720);
  Label[16].position(600, 720);
  Label[17].position(830, 720);
  Label[18].position(1020, 720);
  Label[19].position(1080, 720)

  Label[20].position(370, 890);
  Label[21].position(600, 890);
  Label[22].position(830, 890);
  Label[23].position(1020, 890);
  Label[24].position(1080, 890);

  line(0, 235, 1190, 235);
  line(0, 390, 1190, 390);
  line(0, 490, 1190, 490);
  line(0, 650, 1190, 650);
  line(0, 790, 1190, 790);

  fill(0);
  noStroke();
  textFormat('Siegel und Labels', 20, 50, 25);
  textFormat("Auf vielen Produkten finden sich verschiedene Siegel, die dem Kunden bei seiner Kaufentscheidung unterstützen und leiten sollen. Hier siehst du eine Übersicht von fünf Siegeln. Kennst du sie und haben sie einen Einfluss auf dein Kaufverhalten?", 20, 100, 20);

  textSize(20);
  text("\nnoch nie gesehen", 290, 170);
  text("             gesehen - \nweiss aber nicht, was es \n              bedeutet", 495, 170);
  text("\nich weiss, was es \n        bedeutet", 760, 170);
  text("\nEinfluss auf mein \n   Kaufverhalten", 1000, 170);

  translate(0, 50);
  image(BlauerEngel, 68, 200);
  image(GruenerStern, 50, 350);
  image(Fairtrade, 66, 445);
  image(Bio, 60, 610);
  image(EuroBlume, 53, 750);
  pop();
}


function Seite4() {
  push();
  fill(255);
  stroke(0);
  rect(325, 275, 875, 40);
  fill(0);
  line(475, 275, 475, 315);
  line(600, 275, 600, 315);
  line(780, 275, 780, 315);
  line(950, 275, 950, 315);
  line(1070, 275, 1070, 315);
  noStroke();
  textSize(20);
  textFormat("Auf den folgenden Seiten findest du eine Liste von Handlungen. Bitte gib an, wie häufig du diese Handlungen ausführst. Entscheide dich dabei zwischen folgenden sechs Angaben zwischen nie und immer. Je Handlung kannst du nur ", 50, 50, 20);
  text("machen.", 855, 70);
  translate(100, 0);
  text("nie", 290, 300);
  text("selten", 407, 300);
  text("eher selten", 535, 300);
  text("eher öfter", 715, 300);
  text("oft", 900, 300);
  text("immer", 1000, 300);
  translate(-100, 0);
  textStyle(BOLD);
  text("genau eine Angabe", 665, 70);
  pop();
}



function UVFrage(AnzahlFragen) {
  push();
  if (AnzahlFragen != 6) {
    translate(150, 100 - (AnzahlFragen - 4) * 100);
  } else {
    translate(150, 0);
  }

  if (Seite == 10 || Seite == 7 || Seite == 11) {
    translate(0, 100);
  }
  fill(255);
  stroke(0);
  rect(75, 100, 1120, 150 + AnzahlFragen * 100);
  fill(0);
  line(75, 250, 1195, 250);
  line(850, 100, 850, 250 + AnzahlFragen * 100);
  line(905, 100, 905, 250 + AnzahlFragen * 100);
  line(963, 100, 963, 250 + AnzahlFragen * 100);
  line(1021, 100, 1021, 250 + AnzahlFragen * 100);
  line(1079, 100, 1079, 250 + AnzahlFragen * 100);
  line(1137, 100, 1137, 250 + AnzahlFragen * 100);

  for (let i = 0; i < AnzahlFragen; i++) {
    line(75, 350 + (i) * 100, 1195, 350 + (i) * 100);
  }
  noStroke();
  textSize(20);
  translate(width / 2, height / 2);
  rotate(PI / 2);
  text("nie", -330, -100);
  text("selten", -350, -158);
  text("eher selten", -370, -216);
  text("eher öfter", -360, -274);
  text("oft", -330, -332);
  text("immer", -350, -390);
  pop();
}


function Seite5() {
  push();
  for (let i = 0; i < 24; i++) {
    UV[i].show();
  }
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      UV[i + j * 6].position(1020 + 58 * i, 400 + 100 * j);
    }
  }

  UVFrage(4);
  translate(150, 100);
  textSize(30);
  text("UV1", 100, 300);
  text("UV2", 100, 400);
  text("UV3", 100, 500);
  text("UV4", 100, 600);
  textSize(20);
  text("Pullover oder Hosen gebe ich in die Wäsche, wenn ich sie\neinen Tag lang getragen habe.", 220, 282);
  text("Beim Verlassen eines leeren Raumes, schalte ich das Licht\naus.", 220, 382);
  text("Elektrische Geräte (Fernseher, Musikanlage, Drucker) lasse\nich auf Stand-by stehen", 220, 482);
  text("Im Winter drehe ich meine Heizung herunter, wenn ich\nmein Zimmer mehr als 4 Stunden verlasse.", 220, 582);
  pop();
}


function Seite6() {
  push();
  for (let i = 24; i < 60; i++) {
    UV[i].show();
  }

  for (let i = 4; i < 10; i++) {
    for (let j = 0; j < 6; j++) {
      UV[i * 6 + j].position(1020 + 58 * (j), 300 + 100 * (i - 4));
    }
  }
  UVFrage(6);
  translate(150, 100);
  textSize(30);
  text("UV5", 100, 200);
  text("UV6", 100, 300);
  text("UV7", 100, 400);
  text("UV8", 100, 500);
  text("UV9", 100, 600);
  text("UV10", 100, 700);
  textSize(20);
  text("Ich kaufe Getränke in Dosen.", 220, 202);
  text("Ich kaufe Getränke in Mehrwegflaschen.", 220, 302);
  text("Wenn mir im Geschäft eine Plastiktüte angeboten wird,\nnehme ich sie.", 220, 392);
  text("Auf Ausflügen nehme ich Getränke in Einmalverpackungen\n(z.B. Sunkist, Capri-Sonne o.ä.) mit.", 220, 492);
  text("Ich kaufe Artikel in Nachfüllverpackungen.", 220, 602);
  text("Auf meinen Partys/ Feten trinken wir aus Plastik- oder Pappbechern.", 220, 702);
  pop();
}


function Seite7() {
  push();
  for (let i = 60; i < 90; i++) {
    UV[i].show();
  }

  for (let i = 10; i < 15; i++) {
    for (let j = 0; j < 6; j++) {
      UV[i * 6 + j].position(1020 + 58 * (j), 400 + 100 * (i - 10));
    }
  }

  UVFrage(5);
  translate(150, 200);
  textSize(30);
  text("UV11", 100, 200);
  text("UV12", 100, 300);
  text("UV13", 100, 400);
  text("UV14", 100, 500);
  text("UV15", 100, 600);

  textSize(20);
  text("Ich sammle Altpapier und gebe es zum Recycling.", 220, 202);
  text("Altglas bringe ich zum Sammelcontainer.", 220, 302);
  text("Ich trenne meinen Müll.", 220, 402);
  text("Gebrauchtes Geschenkpapier hebe ich auf, um es wieder- \nzuverwenden.", 220, 492);
  text("Wenn ich mir Notizen mache, benutze ich gebrauchtes\nPapier, das auf einer Seite schon bedruckt ist.", 220, 602);
  pop();
}

function Seite8() {
  push();
  for (let i = 90; i < 114; i++) {
    UV[i].show();
  }

  for (let i = 15; i < 19; i++) {
    for (let j = 0; j < 6; j++) {
      UV[i * 6 + j].position(1020 + 58 * (j), 400 + 100 * (i - 15));
    }
  }

  UVFrage(4);
  translate(150, 100);
  textSize(30);
  text("UV16", 100, 300);
  text("UV17", 100, 400);
  text("UV18", 100, 500);
  text("UV19", 100, 600);
  textSize(20);
  text("Ich kaufe Lebensmittel aus kontrolliert biologischem Anbau.", 220, 302);
  text("Ich esse Obst und Gemüse der Jahreszeit entsprechend.", 220, 402);
  text("Beim Einkaufen bevorzuge ich Produkte mit Umweltzeichen.", 220, 502);
  text("Insekten bekämpfe ich mit einem Spray.", 220, 592);
  pop();
}

function Seite9() {
  push();
  for (let i = 114; i < 138; i++) {
    UV[i].show();
  }

  for (let i = 19; i < 24; i++) {
    for (let j = 0; j < 6; j++) {
      UV[i * 6 + j].position(1020 + 58 * (j), 400 + 100 * (i - 19));
    }
  }
  UVFrage(4);
  translate(150, 100);
  textSize(30);
  text("UV20", 100, 300);
  text("UV21", 100, 400);
  text("UV22", 100, 500);
  text("UV23", 100, 600);
  textSize(20);
  text("Ich esse bei McDonald‘s, Burger King oder ähnlichen \nSchnellrestaurants.", 220, 292);
  text("Ich benutze Hefte und Schreibblöcke aus Recyclingpapier.", 220, 402);
  text("Ich benutze Filzstifte und keine Buntstifte zum Malen.", 220, 502);
  text("Ich bin für Pizza vom Pizzaservice zu haben.", 220, 592);
  pop();
}

function Seite10() {
  push();
  for (let i = 138; i < 168; i++) {
    UV[i].show();
  }

  for (let i = 24; i < 29; i++) {
    for (let j = 0; j < 6; j++) {
      UV[i * 6 + j].position(1020 + 58 * (j), 400 + 100 * (i - 24));
    }
  }

  UVFrage(5);
  translate(150, 200);
  textSize(30);
  text("UV24", 100, 200);
  text("UV25", 100, 300);
  text("UV26", 100, 400);
  text("UV27", 100, 500);
  text("UV28", 100, 600);
  textSize(20);
  text("Für den Schulweg benutze ich das Fahrrad, öffentliche \nVerkehrsmittel oder gehe zu Fuß.", 220, 192);
  text("Ich lasse mich im Auto herumfahren.", 220, 302);
  text("Für kürzere Wege (10 bis 15 Minuten) laufe ich oder be- \nnutze das Fahrrad.", 220, 392);
  text("Ich versuche, meine Eltern davon zu überzeugen, ein Auto \nmit möglichst wenig Benzinverbrauch zu kaufen.", 220, 492);
  text("Wenn es um unseren Urlaub geht, setze ich mich dafür ein, \nmöglichst nicht weit weg zu fahren", 220, 592);
  pop();
}

function Seite11() {
  push();
  for (let i = 168; i < 198; i++) {
    UV[i].show();
  }

  for (let i = 29; i < 34; i++) {
    for (let j = 0; j < 6; j++) {
      UV[i * 6 + j].position(1020 + 58 * (j), 400 + 100 * (i - 29));
    }
  }

  UVFrage(5);
  translate(150, 200);
  textSize(30);
  text("UV29", 100, 200);
  text("UV30", 100, 300);
  text("UV31", 100, 400);
  text("UV32", 100, 500);
  text("UV33", 100, 600);
  textSize(20);
  text("Wenn sich jemand umweltschädigend verhält, mache ich\nihn/ sie darauf aufmerksam.", 220, 192);
  text("Ich spende Geld für Umweltorganisationen.", 220, 302);
  text("Ich fordere meine Eltern auf, Obst und Gemüse der Jahres-\nzeit entsprechend zu kaufen.", 220, 392);
  text("Ich besorge mir Bücher, Informationsschriften oder andere \nMaterialien, die sich mit Umweltproblemen befassen.", 220, 492);
  text("Ich informiere mich in den Medien (Internet, Zeitung, Zeit-\nschriften, Bücher, Fernsehen) über aktuelle Umweltfragen.", 220, 592);
  pop();
}

function Seite12() {
  push();
  for (let i = 198; i < 212; i++) {
    UV[i].show();
  }

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 2; j++) {
      UV[198 + i * 2 + j].position(1185 + 50 * (j), 220 + 100 * (i));
    }
  }

  fill(255);
  translate(250, -75);
  rect(75, 100, 943, 150 + 7 * 100);
  fill(0);
  line(75, 250, 1018, 250);
  line(1018, 100, 1018, 250 + 7 * 100);
  line(905, 100, 905, 250 + 7 * 100);
  line(963, 100, 963, 250 + 7 * 100);
  for (let i = 0; i < 7; i++) {
    line(75, 250 + 100 * i, 1018, 250 + 100 * i);
  }

  textSize(30);
  text("UV34", 100, 300);
  text("UV35", 100, 400);
  text("UV36", 100, 500);
  text("UV37", 100, 600);
  text("UV38", 100, 700);
  text("UV39", 100, 800)
  text("UV40", 100, 900)
  textSize(20);
  text("Im Winter ist es in meinem Zimmer so warm, dass man auch im T-Shirt\nnicht friert.", 220, 290);
  text("Im Hotel lasse ich täglich die Handtücher wechseln.", 220, 402)
  text("Ich verwende Einkaufstüten oder –taschen mehrfach.", 220, 502);
  text("Ich verzichte auf batterie- / akkubetriebene Geräte", 220, 602);
  text("Leere Batterien werfe ich in den Hausmüll.", 220, 702);
  text("Ich bin Mitglied einer Umweltschutzorganisation", 220, 802);
  text("Ich verlasse nach einem Picknick den Platz genauso, wie ich ihn angetroffen\nhabe.", 220, 892);
  translate(width / 2, height / 2);
  rotate(PI / 2);
  text("nein", -330, -216);
  text("ja", -320, -156);
  pop();
}

function Seite13() {
  push();

  textSize(20)
  fill(0);
  translate(0, 140);
  text("Wie verbunden fühlst du dich zur Natur? Entscheide dich für genau eines der folgenden Bilder.", 220, 50);
  fill(0);
  text("Ich                       Natur", 85, 407);
  text("Ich             Natur", 465, 407);
  text("Ich             Natur", 785, 407);
  text("Ich              Natur", 1060, 407);
  text("Ich  Natur", 1320, 407);
  noFill();
  ellipse(100, 400, 120, 120);
  ellipse(260, 400, 120, 120);

  ellipse(480, 400, 120, 120);
  ellipse(560, 400, 120, 120);

  ellipse(820, 400, 120, 120);
  ellipse(880, 400, 120, 120);

  ellipse(1120, 400, 120, 120);
  ellipse(1140, 400, 120, 120);

  ellipse(1360, 400, 120, 120);

  pop();
}

function Seite14() {
  push();
  fill(255);
  rect(325, 275, 925, 60);
  fill(0);
  textSize(20);
  line(475, 275, 475, 335);
  line(600, 275, 600, 335);
  line(780, 275, 780, 335);
  line(950, 275, 950, 335);
  line(1100, 275, 1100, 335);
  translate(100, 0);
  text("   Trifft voll \nund ganz zu", 250, 300);
  text("Trifft zu", 407, 310);
  text("Trifft eher zu", 535, 310);
  text("Trifft eher \n nicht zu", 715, 300);
  text("Trifft nicht zu", 870, 310);
  text("Trifft überhaupt \n      nicht zu", 1012, 300);
  text("Auf den folgenden Seiten findest du eine Liste von Aussagen. Bitte gib an, wie sehr du ihnen zustimmst. Entscheide dich dabei zwischen folgenden sechs Angaben\nzwischen „trifft voll und ganz zu“ und  „trifft überhaupt nicht zu“. Je Aussage kannst du nur", -80, 50);
  text("machen.", 915, 75);
  textStyle(BOLD);
  text("genau eine Angabe", 720, 75);
  pop();
}

function NPFrage(AnzahlFragen) {
  push();
  if (AnzahlFragen != 6) {
    translate(150, 125 - (AnzahlFragen - 5) * 100);

  } else {
    translate(150, 0);
  }

  fill(255);
  rect(75, 100, 1120, 150 + AnzahlFragen * 100);
  fill(0);
  line(75, 250, 1195, 250);
  line(850, 100, 850, 250 + AnzahlFragen * 100);
  line(905, 100, 905, 250 + AnzahlFragen * 100);
  line(963, 100, 963, 250 + AnzahlFragen * 100);
  line(1021, 100, 1021, 250 + AnzahlFragen * 100);
  line(1079, 100, 1079, 250 + AnzahlFragen * 100);
  line(1137, 100, 1137, 250 + AnzahlFragen * 100);

  for (let i = 0; i < AnzahlFragen; i++) {
    line(75, 350 + (i) * 100, 1195, 350 + (i) * 100);
  }

  textSize(20);
  translate(width / 2, height / 2);
  rotate(PI / 2);
  text("  Trifft voll \nund ganz zu", -372, -105);
  text("Trifft zu", -350, -153);
  text("Trifft eher zu", -375, -211);
  text("Trifft eher \n nicht zu", -364, -279);
  text("Trifft nicht zu", -375, -328);
  text("Trifft überhaupt \n      nicht zu", -388, -395);
  pop();
}


function Seite15() {
  push();
  for (let i = 0; i < 42; i++) {
    NP[i].show();
  }

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
      NP[i * 6 + j].position(1025 + 58 * (j), 220 + 100 * (i));
    }
  }

  NPFrage(7);
  translate(150, 125);
  textSize(30);
  text("NP1", 100, 100);
  text("NP2", 100, 200);
  text("NP3", 100, 300);
  text("NP4", 100, 400);
  text("NP5", 100, 500);
  text("NP6", 100, 600);
  text("NP7", 100, 700);
  textSize(20);
  text("Neues zu lernen fasziniert mich. ", 220, 102);
  text("Ich bin neugierig auf neue Dinge oder Erfahrungen.", 220, 202);
  text("Es macht mir Spaß, bisherige Vorstellungen zu überdenken.", 220, 302);
  text("Ich erfahre gerne etwas über Themen zu lernen, die mir unbekannt \nsind.", 220, 392);
  text("Neue Ideen regen meine Phantasie an.", 220, 502);
  text("Wenn ich etwas Neues erfahre, möchte ich dem gerne nachgehen.", 220, 602);
  text("Ich gehe Dingen, die ich nicht verstehe, auf den Grund.", 220, 702);
  pop();
}

function Seite16() {
  push();
  for (let i = 0; i < 36; i++) {
    RA[i].show();
  }

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      RA[i * 6 + j].position(1025 + 58 * (j), 300 + 100 * (i));
    }
  }

  textFormat("Bestimmt beurteilst du den Unterricht in Physik, Chemie und Biologie unterschiedlich.  Bilde für deine Beurteilungen zu den folgenden Aussagen in etwa den Durschnitt der drei naturwissenschaftlichen Fächer.", 20, 50, 20);
  NPFrage(6);
  translate(150, 225);
  textSize(30);
  text("RA1", 100, 85);
  text("RA2", 100, 185);
  text("RA3", 100, 285);
  text("RA4", 100, 385);
  text("RA5", 100, 485);
  text("RA6", 100, 585);
  textSize(20);
  text("Die Themen (Unterrichtsstoff) in Physik, Chemie und Biologie \nsind hilfreich für das tägliche Leben.", 220, 74);
  text("Die Experimente in den Fächern Physik, Chemie und Biologie \nsind für Dinge interessant, mit denen ich außerhalb der Schu-\nle zu tun habe.", 220, 160);
  text("Was wir in Physik, Chemie und Biologie lernen, ist im Alltag \nnützlich.", 220, 274);
  text("In Physik, Chemie und Biologie geht es um Dinge, die mit dem \ntäglichen Leben zu tun haben.", 220, 374);
  text("Die Themen (Unterrichtsstoff) in Physik, Chemie und Biologie \nsind für Dinge interessant, mit denen ich außerhalb der Schu-\nle zu tun habe.", 220, 462);
  text("Die Experimente, die wir in Physik, Chemie und Biologie be-\narbeiten, sind nützlich für das tägliche Leben.", 220, 572);
  vor.show();
  pop();
}

function Seite17() {
  push();
  submit.show();
  textFormat("Vielen Dank für dein Mitarbeit! Wenn du mit deinen Antworten zufrieden bist, klicke auf 'Daten abschicken'.", 100, 400, 30);
  if (abgeschickt) {
    submit.hide();
    textSize(30);
    text("Deine Angaben wurden erfolgreich abgeschickt!", 510, 700);
  }
  pop();
  vor.hide();
}


function Visualisation() {

  for (let i = 0; i < 6; i++) {
    Q1[i] = 0;
  }

  for (let i = 0; i < AntwortFrage1a.length; i++) {
    if (AntwortFrage1a[i] == "sehr gut") {
      Q1[0] += 1;
    }
    if (AntwortFrage1a[i] == "gut") {
      Q1[1] += 1;
    }
    if (AntwortFrage1a[i] == "befriedigend") {
      Q1[2] += 1;
    }
    if (AntwortFrage1a[i] == "ausreichend") {
      Q1[3] += 1;
    }
    if (AntwortFrage1a[i] == "mangelhaft") {
      Q1[4] += 1;
    }
    if (AntwortFrage1a[i] == "ungenügend") {
      Q1[5] += 1;
    }
  }

  for (let i = 0; i < Q1.length; i++) {
    fill(0);
    rect(250 + 50 * i, 300, 50, -10 * Q1[i]);
  }


}
let key;
let snap1;
let Database = [0];
let data = [0];
let Q1 = [0];

function Datenerhebung() {
  //firebase.database().ref('Frage1a/').once('value', function(snap) {
  //  snap1 = snap.val();
  //  key = Object.keys(snap1);
  //  for (let i = 0; i < key.length; i++) {
  //    if (snap1[key[i]].label)
  //      AntwortFrage1[i] = snap1[key[i]].label;
  //  }
  //});

}

function textUnderline(text1, xPosition, yPosition) {
  text(text1, xPosition, yPosition);
  push();
  stroke(0);
  line(xPosition - 5, yPosition + 5, xPosition + textWidth(text1) + 5, yPosition + 5);
  pop();
}







function hideAll() {
  for (let i = 0; i < code.length; i++) {
    code[i].hide();

  }


  for (let i = 0; i < Label.length; i++) {
    Label[i].hide();

  }

  for (let i = 0; i < NoteMathe.length; i++) {
    NoteMathe[i].hide();

    NoteChemie[i].hide();
    NoteBio[i].hide();
    NoteNaWi[i].hide();
    NotePhysik[i].hide();

  }

  for (let i = 0; i < Klassenstufe.length; i++) {
    Klassenstufe[i].hide();
  }
  for (let i = 0; i < Geschlecht.length; i++) {
    Geschlecht[i].hide();
  }
  for (let i = 0; i < 21; i++) {
    InteressePhysik[i].hide();

    InteresseChemie[i].hide();

    InteresseBio[i].hide();

  }

  for (let i = 0; i < NaturUndIch.length; i++) {
    NaturUndIch[i].hide();
  }


  for (let i = 0; i < UV.length; i++) {
    UV[i].hide();
  }

  for (let i = 0; i < NP.length; i++) {
    NP[i].hide();
  }

  for (let i = 0; i < RA.length; i++) {
    RA[i].hide();
  }

  submit.hide();

}

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
let BlauerEngel;
let Bio;
let Fairtrade;
let EuroBlume;
let GruenerStern;




function preload() {
  EuroBlume = loadImage("data:image/png;base64,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");

  Bio = loadImage("data:image/png;base64,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");

  Fairtrade = loadImage("data:image/png;base64,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");

  BlauerEngel = loadImage("data:image/png;base64,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");

  GruenerStern = loadImage("data:image/png;base64,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");

}
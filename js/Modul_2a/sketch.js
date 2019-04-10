let weiter;
let zurück;
let videos = [];
let test;
let folie = 1;
let stop;
let play;
let restart;
let minus10;
let plus10;
let thermometerBeschriftung = [];
let temperaturGläser = [];
let falscheAntwort = false;
let tempOrdnen = [];
//nThermometer
let xTherm = 570;
let yTherm = 180;
let temperatur = 420;
let fragenTextfeld = [];
let speed = [];


let antwortenA2 = [];

let sprung;
let page;

let videoPlayed = [false, false, false, false];

function setup() {
  let cnv = createCanvas(1400, 750);
  cnv.parent('modul2a');
  videoBefehle();
  button();
  input();
  sftw.resize(482, 225);
  software.resize(400, 550);
  messkammerBild.resize(251, 300)
  videos[0].time(0.1);
  videos[1].time(0.1);
  videos[2].time(0.1);

  // sprung = createButton('Bring mich auf Seite:');
  // sprung.mousePressed(function() {
  //   folie = parseInt(page.value());
  // });
  // page = createInput('');


  //Größe der Bilder anpassen
  SUSmobil_Modul2.resize(1200, 750);
  Handy_innen_2.resize(550, 550);
  NO2.resize(320, 320);
  Erinnerung.resize(680, 600);
  Kurven_Konzentration3.resize(440, 210);
  Kurven_Konzentration2.resize(450, 140);
  Würfel.resize(350, 300);
  Würfel_groß.resize(620, 600);
  Würfel_groß_wenig_Konzentration.resize(620, 600);
  Würfel_klein_wenig_Konzentration.resize(73, 73);
  Zusammensetzung_Luft.resize(420, 300);
  NO2_Jahresmittel.resize(330, 330);

  Einheiten.resize(983, 377);
  SUSmobil_App.resize(30, 30);
  finger.resize(50, 50);
  SUSmobil_App_quer.resize(130, 67);
  //Widerstand_Zeit.resize(1100, 250);

  for (let i = 0; i < 6; i++) {
    antwortenA2[i] = -1;
  }
}


function draw() {
  push();
  //folie = slider.value();

  //fadender blauer Hintergrund
  for (let i = 0; i < 750; i++) {
    stroke(255 - 30 * i / 750, 255, 255);
    line(0, i, 1200, i);
  }
  push();
  fill(0);
  text(folie, 5, 10);
  pop();

  //Array mit Funktionen. Die Position im Array entspricht der Folie -1
  for (let i = 1; i < arrayOfFunctions.length + 1; i++) {
    if (folie == i) {
      arrayOfFunctions[i - 1]();
    }
  }
  if (folie == 1) {
    zurück.hide();
  } else {
    zurück.show();
  }
  if (folie == 21 || folie == 23) {
    weiter.show();
  }

  if (folie == 21) {
    antwortGeben.position(880, 320);
    if (videos[0].time() > (videos[0].duration() - 1)) {
      videoPlayed[0] = true;
    }
    if (abgeschickt) {
      weiter.show();
    } else {
      weiter.hide();
    }
    antwortGeben.show();
  } else {
    antwortGeben.hide();
  }

  if (folie == 25) {
    antwortGeben.show();
    antwortGeben.position(220, 530);
    if (abgeschickt) {
      weiter.show();
    } else {
      weiter.hide();
    }
  }

  if (folie == 27) {
    if (temperaturGläser[0].value() > 54 && temperaturGläser[0].value() < 65 && temperaturGläser[1].value() > 5 && temperaturGläser[1].value() < 15 && temperaturGläser[2].value() > 90 && temperaturGläser[2].value() < 100) {
      weiter.show();
    } else {
      weiter.hide();
    }
  }

  if (folie == 58) {
    if (videos[1].time() > (videos[1].duration() - 1)) {
      videoPlayed[1] = true;
    }
  }
  if (folie == 59) {
    if (videos[2].time() > (videos[2].duration() - 1)) {
      videoPlayed[2] = true;
    }
    if (videoPlayed[2]) {
      weiter.show();
    } else {
      weiter.hide();
    }
  }


  if (folie == 50) {
    if (antwortenA2[0] == -1 || antwortenA2[1] == -1 || antwortenA2[2] == -1 || antwortenA2[3] == -1 || antwortenA2[4] == -1 || antwortenA2[5] == -1) {
      weiter.hide();
    } else {
      weiter.show();
    }
  }
  Navigation();
  if (mikrocontroller) {
    mcWeiter.show();
  } else {
    mcWeiter.hide();
  }

  if (folie == 106) {
    if (pipY > -170) {
      pipY -= 5;
      weiter.hide();
    } else {
      weiter.show();
    }
  }

  pop();
}


let arrayOfFunctions = [
  function() {
    Folie1('a string')
  },
  function() {
    SensorenImSmartphone()
  },
  function() {
    Folie2('a string')
  },
  function() {
    Folie3('a string')
  },
  function() {
    Folie4('a string')
  },
  function() {
    Folie5('a string')
  },
  function() {
    Folie6('a string')
  },
  function() {
    Folie7('a string')
  },
  function() {
    Folie8('a string')
  },
  function() {
    Folie9('a string')
  },
  function() {
    Folie10('a string')
  },
  function() {
    Folie11('a string')
  },
  function() {
    SensorenImAlltag()
  },

  function() {
    Folie12('a string')
  },
  function() {
    Folie13('a string')
  },
  function() {
    Folie14('a string')
  },
  function() {
    Folie15('a string')
  },
  function() {
    Folie16('a string')
  },
  function() {
    Folie17('a string')
  },
  function() {
    WasIstHierFalsch()
  },
  function() {
    Folie18('a string')
  },
  function() {
    Uebersicht()
  },
  // function() {
  //   Folie18b('a string')
  // },
  function() {
    Folie19('a string')
  },
  function() {
    Folie20('a string')
  },
  function() {
    Folie21('a string')
  },
  function() {
    Folie22('a string')
  },
  function() {
    Folie23('a string')
  },
  function() {
    WandlungUndZuordnung()
  },
  // function() {
  //   Folie24('a string')
  // },
  // function() {
  //   Folie25('a string')
  // },
  // function() {
  //   Folie26('a string')
  // },
  function() {
    Folie27('a string')
  },
  function() {
    VomThermoZumGassensor()
  },
  // function() {
  //   Folie28('a string')
  // },
  // function() {
  //   Folie29('a string')
  // },
  function() {
    Folie30('a string')
  },
  function() {
    Folie31('a string')
  },
  function() {
    Folie32('a string')
  },
  function() {
    Folie33('a string')
  },
  function() {
    Folie34('a string')
  },
  function() {
    Folie35('a string')
  },
  function() {
    Folie36('a string')
  },
  function() {
    Folie36a('a string')
  },
  function() {
    Folie36b('a string')
  },
  function() {
    Folie36c('a string')
  },
  function() {
    Folie37('a string')
  },
  function() {
    Folie38('a string')
  },
  function() {
    Folie39('a string')
  },
  function() {
    Folie40('a string')
  },
  function() {
    Folie41('a string')
  },
  function() {
    Folie42('a string')
  },
  function() {
    Folie43('a string')
  },
  function() {
    Folie44('a string')
  },
  function() {
    Folie45('a string')
  },
  function() {
    Folie46('a string')
  },
  function() {
    Folie47('a string')
  },
  function() {
    Folie48('a string')
  },
  function() {
    Folie49('a string')
  },
  function() {
    Folie50('a string')
  },
  function() {
    Folie51('a string')
  },
  function() {
    Folie52('a string')
  },
  function() {
    Folie53('a string')
  },
  function() {
    Folie54('a string')
  },
  function() {
    Folie55('a string')
  },
  function() {
    Folie56('a string')
  },
  function() {
    Folie57('a string')
  },
  function() {
    Folie58('a string')
  },
  function() {
    Folie59('a string')
  },
  function() {
    Folie60('a string')
  },
  function() {
    Folie61('a string')
  },
  function() {
    Folie62('a string')
  },
  function() {
    MusterloesungAufgabe3()
  },
  function() {
    Folie63('a string')
  },
  function() {
    Folie64('a string')
  },
  function() {
    Folie65('a string')
  },
  function() {
    Folie66('a string')
  },
  function() {
    Folie67('a string')
  },
  function() {
    Folie68('a string')
  },
  function() {
    Folie69('a string')
  },
  function() {
    Folie70('a string')
  },
  function() {
    Folie71('a string')
  },
  function() {
    Folie72('a string')
  },
  function() {
    Folie73('a string')
  },
  function() {
    Folie74('a string')
  },
  function() {
    Folie75('a string')
  },
  function() {
    Folie76('a string')
  },
  function() {
    Folie77('a string')
  },
  function() {
    Folie78('a string')
  },
  function() {
    Folie79('a string')
  },
  function() {
    Folie80('a string')
  },
  function() {
    Folie81('a string')
  },
  function() {
    Folie82('a string')
  },
  function() {
    Folie83('a string')
  },
  function() {
    Folie84('a string')
  },
  function() {
    Folie85('a string')
  },
  function() {
    Folie86('a string')
  },
  function() {
    Folie87('a string')
  },
  function() {
    Folie88('a string')
  },
  function() {
    Folie89('a string')
  },
  function() {
    Folie90('a string')
  },
  function() {
    Folie91('a string')
  },
  function() {
    Folie92('a string')
  },
  function() {
    Folie93('a string')
  },
  function() {
    Folie94('a string')
  },
  function() {
    Folie95('a string')
  },
  function() {
    Folie96('a string')
  },
  function() {
    Folie97('a string')
  },
  function() {
    Folie98('a string')
  },
  function() {
    Folie99('a string')
  },
  function() {
    Folie100('a string')
  },
  function() {
    Folie101('a string')
  },
  function() {
    Folie102('a string')
  },
  function() {
    Folie103('a string')
  },
  function() {
    Folie104('a string')
  },
  function() {
    Folie105('a string')
  },
  function() {
    Folie106('a string')
  },
  function() {
    Folie107('a string')
  },
  function() {
    Folie108('a string')
  },
  function() {
    Folie109('a string')
  },
  function() {
    Folie110('a string')
  },
  function() {
    Folie111('a string')
  },
  function() {
    Folie112('a string')
  },
  function() {
    Folie113('a string')
  },
  function() {
    Folie114('a string')
  },
  function() {
    Folie115('a string')
  },
  function() {
    Folie116('a string')
  },
  function() {
    Folie117('a string')
  },
  function() {
    Folie118('a string')
  },
  function() {
    Folie119('a string')
  },
  function() {
    Folie120('a string')
  },
  function() {
    Folie121('a string')
  },
  function() {
    Folie122('a string')
  },
  function() {
    Folie123('a string')
  },
  function() {
    Folie124('a string')
  },
  function() {
    Folie125('a string')
  },
  function() {
    Folie126('a string')
  },
  function() {
    Folie127('a string')
  },
  function() {
    Folie128('a string')
  },
  function() {
    Folie129('a string')
  },
  function() {
    Folie130('a string')
  },
  function() {
    Folie131('a string')
  },
  function() {
    Folie132('a string')
  },
  function() {
    Folie133('a string')
  },
  function() {
    Folie134('a string')
  },
  function() {
    Folie135('a string')
  },
  function() {
    Folie136('a string')
  },
  function() {
    Folie137('a string')
  },
  function() {
    Folie138('a string')
  },
  function() {
    Folie139('a string')
  },
  function() {
    Folie140('a string')
  },
  function() {
    Folie141('a string')
  },
  function() {
    Folie142('a string')
  },
  function() {
    Folie143('a string')
  },
  function() {
    Folie144('a string')
  },
  function() {
    Folie145('a string')
  },
  function() {
    Folie146('a string')
  },
  function() {
    Folie147('a string')
  },
  function() {
    Folie148('a string')
  },
  function() {
    Folie149('a string')
  },
  function() {
    Folie150('a string')
  },
];




function mouseReleased() {
  temp = false;
  if (folie == 26) {
    if (mouseX > 700 && mouseX < 850) {
      xTherm = 725;
      yTherm = 235;
    }
    if (mouseX > 1000 && mouseX < 1100 && mouseY < 650) {
      xTherm = 1025;
      yTherm = 235;
    }
  }


  if (folie == 27) {
    if (mouseX > 700 && mouseX < 800) {
      xTherm = 725;
      yTherm = 350;
    }
    if (mouseX > 850 && mouseX < 950) {
      xTherm = 875;
      yTherm = 350;
    }
    if (mouseX > 1000 && mouseX < 1150) {
      xTherm = 1025;
      yTherm = 350;
    }
  }

  if (folie == 25) {
    if (mouseX > 700 && mouseX < 800) {
      xTherm = 725;
      yTherm = 150;
    }
    if (mouseX > 850 && mouseX < 950) {
      xTherm = 875;
      yTherm = 150;
    }
    if (mouseX > 1000 && mouseX < 1150 && mouseY < 650) {
      xTherm = 1025;
      yTherm = 150;
    }
  }

  if (folie == 58 && mouseX > 90 && mouseX < 280 && mouseY > 470 && mouseY < 675) {
    folie += 1;
    abgeschickt = false;
  }

}




function mousePressed() {
  if (folie == 102) {
    if (hauptseite) {
      numberAufgedeckt = 0;
      if (mouseX > 215 && mouseX < 315 && mouseY > 200 && mouseY < 300) {
        hauptseite = false;
        gaskammer = true;
        messkammer = false;
        mikrocontroller = false;
        pcUndKalibriersoftware = false;

      }
      if (mouseX > 600 && mouseX < 700 && mouseY > 320 && mouseY < 420) {
        hauptseite = false;
        gaskammer = false;
        messkammer = true;
        mikrocontroller = false;
        pcUndKalibriersoftware = false;
      }
      if (mouseX > 975 && mouseX < 1025 && mouseY > 665 && mouseY < 715) {
        hauptseite = false;
        gaskammer = false;
        messkammer = false;
        mikrocontroller = true;
        pcUndKalibriersoftware = false;
      }

      if (mouseX > 975 && mouseX < 1025 && mouseY > 185 && mouseY < 235) {
        hauptseite = false;
        gaskammer = false;
        messkammer = false;
        mikrocontroller = false;
        pcUndKalibriersoftware = true;
      }




    }
  }




  if (mouseX > (xTherm) && mouseX < (xTherm + 50) && mouseY > (yTherm + 290) && mouseY < (yTherm + 360)) {
    temp = true;
  }

  if (folie == 50) {
    if (mouseX > 630 && mouseX < 670 && mouseY > 155 && mouseY < 195) {
      antwortenA2[0] += 1;
    }
    if (mouseX > 725 && mouseX < 765 && mouseY > 155 && mouseY < 195) {
      antwortenA2[1] += 1;
    }
    if (mouseX > 830 && mouseX < 870 && mouseY > 155 && mouseY < 195) {
      antwortenA2[2] += 1;
    }
    if (mouseX > 940 && mouseX < 985 && mouseY > 255 && mouseY < 300) {
      antwortenA2[3] += 1;
    }
    if (mouseX > 670 && mouseX < 710 && mouseY > 350 && mouseY < 390) {
      antwortenA2[4] += 1;
    }
    if (mouseX > 850 && mouseX < 890 && mouseY > 510 && mouseY < 550) {
      antwortenA2[5] += 1;
    }
  }
  for (let i = 0; i < antwortenA2.length; i++) {
    if (antwortenA2[i] == 4) {
      antwortenA2[i] = 0;
    }
  }

}


let zeit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360];
let video_Daten = [61.7, 61.7, 61.7, 61.7, 61.7, 61.7, 18.5, 21.1, 23.7, 26.2, 27.5, 28.6, 29.6, 30.8, 31.6, 32.5, 33.1, 33.8, 34.3, 34.8, 35.2, 35.8, 36.1, 36.8, 36.9, 37.1, 37.5, 37.8, 38, 38.3, 38.5, 38.7, 39, 39.1, 39.3, 39.5, 39.7, 39.8, 40, 40.1, 40.3, 40.3, 40.5, 40.6, 40.7, 40.8, 40.9, 41, 41.1, 41.2, 41.3, 41.4, 41.4, 41.5, 41.6, 41.6, 41.7, 41.7, 41.8, 41.8, 41.9, 41.9, 42, 42, 42.1, 42.1, 42.3, 42.4, 42.4, 42.5, 42.5, 42.5, 42.5, 42.5, 42.5, 42.5, 42.5, 42.4, 42.3, 42.3, 42.2, 42.1, 197.8, 196.4, 191.4, 188.8, 180.4, 178.9, 170.7, 167.1, 162, 158.8, 155.8, 151.4, 148.7, 144.8, 142.3, 140, 137.7, 134.4, 132.4, 129.5, 127.6, 125.9, 123.3, 121.6, 120.1, 117.8, 116.4, 115, 113, 111.7, 110.5, 108.7, 107.6, 106.5, 104.9, 103.9, 102.4, 101.5, 100.1, 99.3, 98.4, 97.2, 96.4, 95.3, 94.6, 93.8, 93.2, 92.1, 91.5, 90.5, 89.9, 89.3, 88.8, 88, 87.4, 86.9, 86.2, 85.7, 85, 84.6, 84.1, 81.7, 79.5, 77.6, 76, 74.6, 73.3, 72.3, 71.2, 70.3, 69.5, 68.8, 68, 67.4, 66.9, 66.3, 65.8, 65.3, 64.9, 64.4, 64.1, 63.7, 63.4, 63, 62.7, 62.5, 62.3, 62, 61.7, 61.5, 61.1];


let aktualisierteVideoDaten = [42.2, 42.2, 42.2, 42.2, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 197.8, 196.4, 191.4, 188.8, 180.4, 178.9, 170.7, 167.1, 162, 158.8, 155.8, 151.4, 148.7, 144.8, 142.3, 140, 137.7, 134.4, 132.4, 129.5, 127.6, 125.9, 123.3, 121.6, 120.1, 117.8, 116.4, 115, 113, 111.7, 110.5, 108.7, 107.6, 106.5, 104.9, 103.9, 102.4, 101.5, 100.1, 99.3, 98.4, 97.2, 96.4, 95.3, 94.6, 93.8, 93.2, 92.1, 91.5, 90.5, 89.9, 89.3, 88.8, 88, 87.4, 86.9, 86.2, 85.7, 85, 84.6, 84.1, 83.9, 83.4, 82.8, 82.4, 82, 81.5, 81.1, 80.6, 80.2, 79.7, 79.3, 79, 78.7, 78.2, 77.9, 77.5, 77.2, 76.9, 76.5, 76.3, 76, 75.8, 75.4, 75.1, 74.8, 74.6, 74.3, 74, 73.8, 73.6, 73.3, 73, 72.8, 72.6, 72.4, 72.2, 72, 71.7, 71.6, 71.3, 71.2, 71, 70.8, 70.6, 70.4, 70.3, 70.1, 70, 69.8, 69.6, 69.4, 69.3, 69.2, 69, 68.8, 68.7, 68.5, 68.4, 68.3, 68.2, 68, 67.9, 67.7, 67.6, 67.5, 67.4, 67.3, 67.2, 67, 66.9, 66.8, 66.7, 66.6, 66.4, 66.3, 66.2, 66.1, 66, 65.9, 65.8, 65.8, 65.6, 65.6, 65.5, 65.4, 65.3, 65.2, 65.1, 65, 64.9];

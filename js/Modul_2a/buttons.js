let mcWeiter;
let mcSeite = 0;
let numberAufgedeckt = 0;
let streitButton;

let stichpunkteAudecken;
let streitShow = 0;
let streitWeiter;


let buttonAufgabe;
let animationStarten = false;

function button() {
  //CreateButtons
  weiter = createButton('');
  zurück = createButton('');


  buttonAufgabe = createButton('Animation starten/beenden');

  mcWeiter = createButton('');
  stichpunkteAudecken = createButton('');
  stichpunkteAudecken.hide();


  streitWeiter = createButton('');
  streitWeiter.size(100, 30);
  streitWeiter.position(1130, 700);
  streitWeiter.mousePressed(function() {
    streitShow += 1;
  });
  streitWeiter.hide();


  //size
  weiter.size(100, 30);
  zurück.size(60, 30);
  mcWeiter.size(100, 30);
  stichpunkteAudecken.size(100, 30);
  buttonAufgabe.size(150, 50);

  //position
  weiter.position(1130, 700);
  zurück.position(-10, 700);
  mcWeiter.position(1130, 700);
  stichpunkteAudecken.position(1130, 700);
  buttonAufgabe.position(1060, 30);
  buttonAufgabe.hide();

  //style
  streitWeiter.style("background-color", "transparent");
  streitWeiter.style("border-top", "20px solid transparent");
  streitWeiter.style("border-left", "70px solid lightblue");
  streitWeiter.style("border-right", "transparent");
  streitWeiter.style("border-bottom: 20px solid transparent");
  streitWeiter.style("width: 100px");
  streitWeiter.mouseOver(onTopWeiter).mouseOut(outsideWeiter);
  buttonAufgabe.style('font-size', '16px')

  function onTopWeiter() {
    streitWeiter.style("border-left", "70px solid #3399ff");
  }

  function outsideWeiter() {
    streitWeiter.style("border-left", "70px solid #99ccff");
  }


  weiter.style("background-color", "transparent");
  weiter.style("border-top", "20px solid transparent");
  weiter.style("border-left", "70px solid lightblue");
  weiter.style("border-right", "transparent");
  weiter.style("border-bottom: 20px solid transparent");
  weiter.style("width: 100px");
  weiter.mouseOver(onTopWeiter).mouseOut(outsideWeiter);

  function onTopWeiter() {
    weiter.style("border-left", "70px solid #3399ff");
  }

  function outsideWeiter() {
    weiter.style("border-left", "70px solid #99ccff");
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


  mcWeiter.style("background-color", "transparent");
  mcWeiter.style("border-top", "20px solid transparent");
  mcWeiter.style("border-left", "70px solid lightblue");
  mcWeiter.style("border-right", "transparent");
  mcWeiter.style("border-bottom: 20px solid transparent");
  mcWeiter.style("width: 100px");
  mcWeiter.mouseOver(onTopWeiter).mouseOut(outsideWeiter);

  function onTopWeiter() {
    mcWeiter.style("border-left", "70px solid #3399ff");
  }

  function outsideWeiter() {
    mcWeiter.style("border-left", "70px solid #99ccff");
  }



  stichpunkteAudecken.style("background-color", "transparent");
  stichpunkteAudecken.style("border-top", "20px solid transparent");
  stichpunkteAudecken.style("border-left", "70px solid lightblue");
  stichpunkteAudecken.style("border-right", "transparent");
  stichpunkteAudecken.style("border-bottom: 20px solid transparent");
  stichpunkteAudecken.style("width: 100px");
  stichpunkteAudecken.mouseOver(onTopWeiter).mouseOut(outsideWeiter);

  function onTopWeiter() {
    stichpunkteAudecken.style("border-left", "70px solid #3399ff");
  }

  function outsideWeiter() {
    stichpunkteAudecken.style("border-left", "70px solid #99ccff");
  }

  //Function

  mcWeiter.mousePressed(function() {
    if (mcSeite == 5) {
      mcSeite = 0;
      hauptseite = true;
      mikrocontroller = false;
    } else {
      mcSeite += 1;
    }
  });


  buttonAufgabe.mousePressed(function() {
    if (animationStarten) {
      animationStarten = false;
    } else {
      animationStarten = true;
    }
  })


  stichpunkteAudecken.mousePressed(function() {
    numberAufgedeckt += 1;
  })



  weiter.mousePressed(function() {
    temperatur = 420;
    timerSpritze = 0;
    abgeschickt = undefined;
    if (folie == 39) {
      folie += 1;
    }


    if (folie == 113) {
      spritzeFuellung = 0;
      spritzeX = 170;
      spritzeY = 550;
    }

    if (folie == 134) {
      spritzeFuellung = 0;
      spritzeX = 650;
      spritzeY = 550;
    }

    if (folie < 9999) {

      if (folie == 107 || folie == 108 || folie == 110 || folie == 115 || folie == 116 || folie == 117 || folie == 119) {
        textX = -100;
      }

      if (folie == 111 || folie == 112) {
        textX = -80;
      }

      if (folie == 114) {
        spritzeFuellung = 27;
        spritzeX = 170;
        spritzeY = 410;
      }

      if (folie == 25) {
        xTherm = 570;
        yTherm = 180;
        folie += 1;
        hideAll();
      } else {
        xTherm = 570;
        yTherm = 180;
        hideAll();
        falscheAntwort = false;
        // if (folie == 31) {
        //   folie = 32;
        // }
        folie += 1;
        for (let i = 0; i < videos.length; i++) {
          videos[i].time(0);
          videos[i].pause(0);
        }
      }
    }
    timerApp = 0;
    timer = 0;
    arrX = [650, 650];
    arrY = [0, 700];



  });

  zurück.mousePressed(function() {
    temperatur = 420;

    if (folie == 41) {
      folie -= 1;
    }

    if (folie == 50) {
      weiter.show();
    }
    if (folie == 30) {
      streitShow = 0;
    }
    if (folie == 29) {
      weiter.show();
      streitShow = 0;
    }
    if (folie == 136) {
      weiter.show();
    }

    if (folie == 110) {
      textX = -80;
    }

    if (folie == 115) {

      spritzeFuellung = 0;
      spritzeX = 170;
      spritzeY = 550;
      timerSpritze = 0;
      konzMesskammer2 = 20;
    }

    if (folie == 120) {
      konzMesskammer2 = 95;
    }

    if (folie == 105) {
      weiter.show();
    }
    if (folie == 108) {
      hitze = 5;
    }
    if (folie == 102) {
      if (gaskammer) {
        gaskammer = false;
        messkammer = false;
        hauptseite = true;
        pcUndKalibriersoftware = false;
        mikrocontroller = false;
      } else if (messkammer) {
        gaskammer = false;
        messkammer = false;
        hauptseite = true;
        pcUndKalibriersoftware = false;
        mikrocontroller = false;
      } else if (pcUndKalibriersoftware) {
        gaskammer = false;
        messkammer = false;
        hauptseite = true;
        pcUndKalibriersoftware = false;
        mikrocontroller = false;
      } else if (mikrocontroller) {
        if (mcSeite == 0) {
          gaskammer = false;
          messkammer = false;
          hauptseite = true;
          pcUndKalibriersoftware = false;
          mikrocontroller = false;
        } else {
          mcSeite -= 1;
        }
      } else {
        folie -= 1;
      }

    } else {

      if (folie == 106) {
        fuellung = 75;
        pipY = 20;
      }
      if (folie == 107) {
        hitze = 5;
      }


      if (folie == 25 || folie == 21) {
        weiter.show();
      }
      abgeschickt = undefined;
      if (folie > 1) {
        hideAll();

        folie -= 1;
        for (let i = 0; i < videos.length; i++) {
          videos[i].time(0);
          videos[i].pause(0);
        }
      }
      timerApp = 0;
      timer = 0;
      arrX = [650, 650];
      arrY = [0, 700];
    }
  });
}
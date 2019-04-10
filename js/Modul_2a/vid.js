function videoBefehle() {
  videos[0] = createVideo("vid/Falsche Kalibrierung.mp4");
  videos[0].size(600, 600);
  //videos[0].loop();

  videos[1] = createVideo("vid/Abrupte T Sprünge Teil1.mp4");
  videos[1].size(660, 660);

  videos[2] = createVideo("vid/Abrupte T Sprünge Teil2.mp4");
  videos[2].size(620, 620);
  //videos[2].showControls();
  minus10 = createButton("-10s");
  plus10 = createButton("+10s");
  stop = createButton("Stopp");
  play = createButton("Abspielen");
  restart = createButton("Neustart");
  speed[0] = createButton("50%");
  speed[1] = createButton("100%");
  speed[2] = createButton("200%");
  speed[0].mousePressed(function() {
    for (let i = 0; i < videos.length; i++) {
      videos[0].speed(0.5);
    }
  });
  speed[1].mousePressed(function() {
    for (let i = 0; i < videos.length; i++) {
      videos[i].speed(1);
    }
  });
  speed[2].mousePressed(function() {
    for (let i = 0; i < videos.length; i++) {
      videos[i].speed(2);
    }
  });
  plus10.mousePressed(function() {
    if (folie == 21) {
      let t = videos[0].time();
      videos[0].time(t + 10);
    }
    if (folie == 58) {
      let t = videos[1].time();
      videos[1].time(t + 10);
    }
    if (folie == 59) {
      let t = videos[2].time();
      videos[2].time(t + 10);
    }
  });
  minus10.mousePressed(function() {
    if (folie == 21) {
      let t = videos[0].time();
      videos[0].time(t - 10);
    }
    if (folie == 58) {
      let t = videos[1].time();
      videos[1].time(t - 10);
    }
    if (folie == 59) {
      let t = videos[2].time();
      videos[2].time(t - 10);
    }

  });
  stop.mousePressed(function() {
    for (let i = 0; i < videos.length; i++) {
      let t = videos[i].time();
      videos[i].pause();
    }
  });
  play.mousePressed(function() {
    if (folie == 21) {
      videos[0].play();
    }
    if (folie == 58) {
      videos[1].play();
    }
    if (folie == 59) {
      videos[2].play();
    }
  });
  restart.mousePressed(function() {
    if (folie == 21) {
      videos[0].time(0.1);
    }
    if (folie == 58) {
      videos[1].time(0.1);
    }
    if (folie == 59) {
      videos[2].time(0.1);
    }
  });

  for (let i = 0; i < videos.length; i++) {
    videos[i].hide();
  }


  minus10.position(800, 300);
  plus10.position(800, 330);
  stop.position(500, 420);
  play.position(600, 420);
  restart.position(700, 420);
  speed[0].position(800, 150);
  speed[1].position(800, 180);
  speed[2].position(800, 210);

  minus10.size(50, 30);
  plus10.size(50, 30);
  stop.size(70, 30);
  play.size(70, 30);
  restart.size(70, 30);
  speed[0].size(50, 30);
  speed[1].size(50, 30);
  speed[2].size(50, 30);

  minus10.hide();
  plus10.hide();
  stop.hide();
  play.hide();
  restart.hide();
  speed[0].hide();
  speed[1].hide();
  speed[2].hide();
}



function hideAll() {
  min.hide();
  max.hide();
  mw1.hide();
  mw2.hide();
  st1.hide();
  st2.hide();
  prozent.hide();
  promille.hide();
  ppm.hide();
  ppb.hide();
  aufgabe3.hide();
  minus10.hide();
  plus10.hide();
  stop.hide();
  play.hide();
  restart.hide();
  speed[0].hide();
  speed[1].hide();
  speed[2].hide();
  for (let i = 0; i < videos.length; i++) {
    videos[i].hide();
  }
  for (let i = 0; i < fragenTextfeld.length; i++) {
    fragenTextfeld[i].hide();
  }
  for (let i = 0; i < tempOrdnen.length; i++) {
    tempOrdnen[i].hide();
  }

  for (let i = 0; i < 7; i++) {
    thermometerBeschriftung[i].hide();
  }

  for (let i = 0; i < 3; i++) {
    temperaturGläser[i].hide();
  }
}

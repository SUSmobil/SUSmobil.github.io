//lat: Latitude
//lon: Longitude
//radius: Radius of Heatcircle or Square
//weight: value
//min: normal min. If value == min --> green
//max: normal max. if value == max --> red
//form: "Circle": Kreis; "Square": Quadrat,
//gradient: true or false
//Sensor: Sensornummer
function addMarker(lat, lon, radius, weight, min, max, form, gradient, einheit, infos, Sensor) {
  //1. lat und lon in Pixelpositionen umrechnen
  let x = map(lon, 7.3269, 7.4285, 0, zw.height);
  let y = map(lat, 49.2640, 49.2266, 0, zw.width);

  let factor = (weight - min) / (max - min);
  let r, g, b;
  if (factor < 0) {
    r = 0;
    g = 0;
    b = 255;
  }
  if (factor >= 1) {
    r = 255;
    g = 0;
    b = 0;
  }

  if (factor >= 0 && factor <= 0.5) {
    b = 2 * (0.5 - factor) * 255;
    g = 255 - b;
    r = 0;
  } else if (factor > 0.5 && factor < 1) {
    b = 0;
    g = 255 - 2 * (factor - 0.5) * 255;
    r = Math.abs(g - 255);
  }
  let rotWert = 255 * factor;
  noStroke();
  if (gradient) {
    for (let i = radius; i > 0; i--) {
      let temp = rotWert - i * rotWert / radius
      stroke(temp, 255 - temp, 0, (factor + 0.1) * (2 * factor + 1.1));
      fill(temp, 255 - temp, 0, (factor + 0.1) * (2 * factor + 1.1));
      if (form == "Circle") {
        ellipse(x, y, i, i);
      } else if (form == "Square") {
        rect(x - i / 2, y - i / 2, i, i);
      }
    }
  } else {
    fill(r, g, b, 100);
    if (form == "Circle") {
      ellipse(x, y, radius, radius);
    } else {
      rect(x - radius / 2, y - radius / 2, radius, radius);
    }
  }

  textAlign(CENTER);

  fill(0);
  textSize(24);
  text(String(nf(weight, 0, 2)).replace('.', ',') + einheit, x, y);
}
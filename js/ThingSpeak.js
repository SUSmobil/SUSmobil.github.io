let api_key = ["OPDQ0ZDNC24Q70BG", "TFI7GWITQC4Q6E2T"];
let channel_id = ["697239", "736508"];
let anzahlSensoren = channel_id.length;
let allData = [];
let absoluteTime = [];


//Für die Umrechnung von Zeit in absolute Zeit:
let year = [];
let createdAt = [];
let month = [];
let day = [];
let hour = [];
let minute = [];
let second = [];
////


function getPoints() {
  //Lade alle Daten herunter
  for (let j = 0; j < anzahlSensoren; j++) {
    allData[j] = [];
    year[j] = [];
    createdAt[j] = [];
    month[j] = [];
    day[j] = [];
    hour[j] = [];
    minute[j] = [];
    second[j] = [];
    absoluteTime[j] = [];
    for (let k = 0; k < 8; k++) {
      allData[j][k] = [];
    }
    let temp;
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id[j] + '/fields/1.json?results=' + 8000, function(data) {
      for (let i = 0; i < data.feeds.length; i++) {
        allData[j][0].push(data.feeds[i].field1);
        year[j][i] = data.feeds[i].created_at.substring(0, 4);
        month[j][i] = data.feeds[i].created_at.substring(5, 7);
        day[j][i] = data.feeds[i].created_at.substring(8, 10);
        hour[j][i] = data.feeds[i].created_at.substring(11, 13);
        minute[j][i] = data.feeds[i].created_at.substring(14, 16);
        second[j][i] = data.feeds[i].created_at.substring(17, 19);
        createdAt[j][i] = data.feeds[i].created_at;
        let mon = 0;
        if (month[j][i] == "01" || month[j][i] == "03" || month[j][i] == "05" || month[j][i] == "07" || month[j][i] == "08" || month[j][i] == "10" || month[j][i] == "12") {
          mon = 31;
        } else if (month[j][i] == "04" || month[j][i] == "06" || month[j][i] == "09" || month[j][i] == "11") {
          mon = 30;
        } else {
          mon = 28;
        }
        absoluteTime[j][i] = parseInt(second[j][i]) + 60 * parseInt(minute[j][i]) + 3600 * parseInt(hour[j][i]) + 86400 * parseInt(day[j][i]) + mon * 86400 + (parseInt(year[j][i])) * 365 * 24 * 60 * 60;
      }
    });
    allData[j].push(absoluteTime[j]);
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id[j] + '/fields/2.json?results=' + 8000, function(data) {
      for (let i = 0; i < data.feeds.length; i++) {
        allData[j][1].push(data.feeds[i].field2);
      }
    });
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id[j] + '/fields/3.json?results=' + 8000, function(data) {
      for (let i = 0; i < data.feeds.length; i++) {
        allData[j][2].push(data.feeds[i].field3);
      }
    });
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id[j] + '/fields/4.json?results=' + 8000, function(data) {
      for (let i = 0; i < data.feeds.length; i++) {
        allData[j][3].push(data.feeds[i].field4);
      }
    });
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id[j] + '/fields/5.json?results=' + 8000, function(data) {
      for (let i = 0; i < data.feeds.length; i++) {
        allData[j][4].push(data.feeds[i].field5);
      }
    });
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id[j] + '/fields/6.json?results=' + 8000, function(data) {
      for (let i = 0; i < data.feeds.length; i++) {
        allData[j][5].push(data.feeds[i].field6);
      }
    });
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id[j] + '/fields/7.json?results=' + 8000, function(data) {
      for (let i = 0; i < data.feeds.length; i++) {
        allData[j][6].push(data.feeds[i].field7);
      }
    });
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id[j] + '/fields/8.json?results=' + 8000, function(data) {
      for (let i = 0; i < data.feeds.length; i++) {
        allData[j][7].push(data.feeds[i].field8);
      }
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }
}
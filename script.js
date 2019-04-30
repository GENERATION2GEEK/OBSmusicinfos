

const WebSocket = require('ws');
const fs = require('fs');
const request = require('request');



const wss = new WebSocket.Server({ port: 8974 });

var musictitle = "";
var musicartist = "";
var musicstate;
var musicalbum = "";
var musiccover = "";
var musicduration;
var musicposition;
var connected = false


var displayartistandalbum = true // Afficher l'artiste et l'album dans le même fichier (ex : Slimane - Solune)

var towrite // Ne pas toucher

// Send "Version:0.4.0.0" to be reconised by the extension
wss.on('connection', function connection(ws) {
  ws.send('Version:0.4.0.0');
  connected = true
  console.log("Extension connectée")


  ws.on('message', function incoming(data) {
	ws.send(data)
	
   var content = data.split(":");
   if (content[0].includes("TITLE")) {
   	musictitle = content[1];
   	console.log("Titre de la musique : " + musictitle)
   }
   if (content[0].includes("ARTIST")) {
   	musicartist = content[1];
   	console.log("Artiste de la musique : " + musicartist)
   }
   if (content[0].includes("ALBUM")) {
    musicalbum = content[1];
    console.log("Album : " + musicalbum)
   }
   if (content[0].includes("DURATION")) {
    musicduration = content[1] + ":" + content[2];
    console.log("Durée : " + musicduration)
   }
   if (content[0].includes("POSITION")) {
    musicposition = content[1] + ":" + content[2];
    // console.log("Position : " + musicposition)
   }
   if (content[0].includes("ALBUM")) {
    musicalbum = content[1];
    console.log("Album : " + musicalbum)
   }
   if (content[0].includes("STATE")) {
    musicstate = content[1];
    if (musicstate == 1) { console.log("La musique est en cours de lecture") } else { console.log("La musique est sur pause") }
    
   }


setTimeout(function() {
if (connected) {
	fs.writeFile("Files/musictitle.txt", musictitle, function(err) {});
  if (displayartistandalbum) {
  	if (musicalbum == musicartist || musicalbum == musictitle) {
  		towrite = musicartist
  	}
  	else {
      towrite = musicartist + " - " + musicalbum
  	}
      fs.writeFile("Files/musicartist.txt", towrite, function(err) {});
      fs.writeFile("Files/musicalbum.txt", musicalbum, function(err) {});
  }
  else {
    fs.writeFile("Files/musicartist.txt", musicartist, function(err) {}); 
    fs.writeFile("Files/musicalbum.txt", musicalbum, function(err) {});
  }
	
  fs.writeFile("Files/musicduration.txt", musicduration, function(err) {});
  fs.writeFile("Files/musicposition.txt", musicposition, function(err) {}); 
	
  }
}, 100);

});

ws.on('close', function incoming(data) {
	connected = false;
	console.log("Extension déconnectée")

});

});



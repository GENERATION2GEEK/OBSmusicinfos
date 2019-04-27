# OBS Music Infos
OBS Music Infos est un petit script en NodeJS pour afficher les informations d'une musique à partir de toutes les plateformes gérées par l'extension Chrome [WebNowPlaying Companion](https://github.com/tjhrulz/WebNowPlaying-BrowserExtension)

[Lien Chrome WebStore](https://chrome.google.com/webstore/detail/webnowplaying-companion/jfakgfcdgpghbbefmdfjkbdlibjgnbli)

L'extension est compatible FireFox mais elle ne fonctionne pas avec mon script, vous devez obligatoirement utiliser Chrome.
Pour comprendre, regardez ma vidéo sur YouTube

![](https://i.ibb.co/y0BYrVr/wnp.jpg "Sites pris en charge par l'extension")

# Installation

1. Pour commencer, télécharger et installez [NodeJS](https://nodejs.org/en/download/)
2. Créez un dossier à la racine de votre disque dur, appelez le "OBSmusic" (c'est mieux car j'utilise ce nom tout au long du tuto) dans C:\
3. Dans ce dossier, créez en un autre, appelez le "Files", c'est ici que seront stockés les fichiers txt pour OBS
4. Ouvrez un invité de commande (pas en tant qu'administrateur) et tapez sans les guillemets "cd C:\OBSmusic"
5. Tapez "npm install ws" (pour installer la librairie du WebSocket)
6. Tapez "npm install request" (pour installer la librairie request pour télécharger la cover)
6. Téléchargez les fichiers tous les fichiers du github
7. Lancez le "start.bat" (Vous pouvez créer un raccourci sur le bureau bien entendu) et une musique sur Chrome

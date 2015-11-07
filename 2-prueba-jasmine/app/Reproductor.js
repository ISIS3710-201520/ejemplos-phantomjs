/* app/Reproductor.js */

function Reproductor() {
}

Reproductor.prototype.play = function(song) {
  this.cancionActual = song;
  this.estaSonando = true;
};

Reproductor.prototype.pause = function() {
  this.estaSonando = false;
};

Reproductor.prototype.resume = function() {
  if (this.estaSonando) {
    throw new Error("la canción ya está sonando");
  }
  this.estaSonando = true;
};

Reproductor.prototype.marcarFavorito = function() {
  this.cancionActual.marcarFavorito(true);
};
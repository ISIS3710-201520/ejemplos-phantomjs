/* spec/ReproductorSpec.js */

describe("Reproductor", function() {

  var reproductor;
  var cancion;

  beforeEach(function() {
    reproductor = new Reproductor();
    cancion = new Cancion();
  });

  it("debe ser capaz de tocar una cancion", function() {
    reproductor.play(cancion);
    expect(reproductor.cancionActual).toEqual(cancion);

    // custom matcher
    expect(reproductor).toBePlaying(cancion);
  });

  describe("cuando la canción ha sido pausada", function() {
    
    beforeEach(function() {
      reproductor.play(cancion);
      reproductor.pause();
    });

    it("debe indicar que la canción está pausada", function() {
      expect(reproductor.estaSonando).toBeFalsy();

      // uso de 'not' con un custom matcher
      expect(reproductor).not.toBePlaying(cancion);
    });

    it("debe ser posible continuar", function() {
      reproductor.resume();
      expect(reproductor.estaSonando).toBeTruthy();
      expect(reproductor.cancionActual).toEqual(cancion);
    });
  });

  // uso de spies para interceptar invocaciones a métodos
  it("premite marcar una canción como favorita", function() {
    spyOn(cancion, 'marcarFavorito');

    reproductor.play(cancion);
    reproductor.marcarFavorito();

    expect(cancion.marcarFavorito).toHaveBeenCalledWith(true);
  });

  // uso de excepciones
  describe("#resume", function() {
    it("debe lanzar excepción cuando la canción está sonando", function() {
      reproductor.play(cancion);

      expect(function() {
        reproductor.resume();
      }).toThrowError("la canción ya está sonando");
    });
  });
});


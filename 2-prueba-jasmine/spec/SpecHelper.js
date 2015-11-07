/* spec/specHelper */

// agrega unos "custom matchers" a Jasmine
beforeEach(function () {
    
  jasmine.addMatchers({
      
    // permite usar expect(..).toBePlaying(...)
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var reproductor = actual;

          return {
            pass: reproductor.cancionActual === expected && reproductor.estaSonando
          }
        }
      };
    }
  });
  
});

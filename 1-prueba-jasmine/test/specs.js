/* specs.js */

describe("Pruebas de la página", function() {

    it("debe cambiar de color luego de hacer click", function() {
        // emula un clic sobre el botón
        $('#cambiar').click();
        // revisa que el color no siga siendo #000000
        expect($('#contenido').css('color')).not.toEqual('#000000');
    });
   
   
    it("debe cambiar el color a #FFFFFF", function() {
        // emula un clic sobre el botón
        $('#cambiar').click();
        // combinando las funciones "runs" y "waitsFor" de jasmine, 
        // es posible hacer un ciclo hasta que el div cambia de 
        // color a #FFFFFF
        waitsFor(function() {
            // rgb(255, 255, 255) es equivalente a #FFFFFF
            return $('#contenido').css('color') == 'rgb(255, 255, 255)';
        }, "Nunca cambió de color a #FFFFFF", 2000);

        runs(function() {
           expect($('#contenido').css('color')).toEqual('rgb(255, 255, 255)');
        });
    });   
    
});
/* app.js */

// cambia el color luego de un segundo
function cambiarColor() {
    console.log("cambiando el color");
    setTimeout( function() { 
        $('#contenido').css('color', '#FFFFFF');
        console.log("color cambiado");
    }, 1000);
}

// al hacer clic en 'Cambiar' se ejecuta cambiarColor()
$('#cambiar').live('click', function(){
    cambiarColor();
});
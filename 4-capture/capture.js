/* capture.js */

// crea un browser
var page = require('webpage').create();

// abre una página web
page.open('http://github.com/', function() {
    
    // cuando esta lista, se captura la pantalla
    page.render('github.png');
    phantom.exit();
})
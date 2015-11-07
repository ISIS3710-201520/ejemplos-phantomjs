/* capture.js */

// crea un browser
var page = require('webpage').create();

// define el tamaño del browser
page.viewportSize = { width: 1024, height: 768 };

// define la porción de la página a capturar
page.clipRect = { top: 0, left: 0, width: 1024, height: 768 }

// abre una página web
page.open('http://github.com/', function() {
    
    // cuando esta lista, se captura la pantalla
    page.render('github-clip.png');
    phantom.exit();
})
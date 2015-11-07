/* runtest.js */ 

// crea un browser
var page = require('webpage').create(); 

// define el nombre del archivo a cargar
var fs = require('fs'); 
var indexfile = 'file:///' + fs.workingDirectory + '/app/index.html'; 

// carga el index.html
page.open(indexfile, function(status) { 
    
    // no cargó la página ?
    if (status !== 'success') { 
        console.log('Error cargando la página ' + index); 
    
    // cargó sin problema ?
    } else { 
        
        window.setTimeout(function() { 
            // una vez cargada la página, se pueden inyectar librerías
            // de javascript.

            // inyecta jasmine y la ejecución en consola
            page.injectJs('test/jasmine.js'); 
            page.injectJs('test/console-runner.js'); 

            // inyecta las pruebas
            page.injectJs('test/specs.js'); 

            // inicializa la consola y ejecuta las pruebas de jasmine
            page.evaluate(function(){ 
                jasmine.getEnv().addReporter(new jasmine.ConsoleReporter()); 
                jasmine.getEnv().execute(); 
            }); 
        }, 200); 
    } 
}); 

// manejo de los mensajes en consola
page.onConsoleMessage = function(msg) { 
    // terminaron las pruebas ?
    if(msg === "ConsoleReporter finished") { 
        // para evitar una serie de alertas, 
        //   https://github.com/ariya/phantomjs/issues/12697
        // se cierra la página primero
        if (page) page.close();
        // y luego se termina la ejecución de phantomjs
        setTimeout(function(){ phantom.exit(code); }, 0);
    } 
    // las páginas funcionan en un "sandbox", así que para que los
    // mensajes aparezcan en pantalla, deben enviarse a la consola
    return console.log(msg); 
};
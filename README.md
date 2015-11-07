# PhantomJS para ejecutar pruebas Jasmine

Proyecto con ejemplos del uso de PhantomJS

## ¿Qué es PhantomJS?

[PhantomJS](http://phantomjs.org/) es un browser que no usa la interfaz de usuario (headless browser) 
que puede ser controlado usando Javascript. El sistema es muy usado para ejecutar pruebas funcionales
usando frameworks como Jasmine, QUnit, y Mocha, entre otros. 

Usando PhantomJS, un programa Javascript puede:
* Realizar pruebas funcionales en un navegador "real"
* Capturar la pantalla del navegador y generar imágenes con el resultado
* Accessar y manipular páginas web (p.ej. para extraer información)
* Monitorear el acceso a la red (p.ej. para realizar análisis de rendimiento)

## Instalación

Para instalar PhantomJS, es posible usar `npm`:

```bash
sudo npm install -g phantomjs
```

Para revisar el funcionamiento, es posible ejecutar el programa 

```bash
phantomjs --version
```

## Ejecución 

Usando PhantomJS es posible crear programas Javascript que carguen páginas web, manipulen su contenido,
ejecuten funciones adicionales y capturen el contenido de la pantalla. Estos programas se deben
ejecutar usando el comando `phantomjs`. 

```bash
phantomjs <prueba.js>
```

Por ejemplo, para ejecutar un programa `holamundo.js` el comando es el siguiente:

```bash
phantomjs holamundo.js
```

## Ejemplos

Este proyecto incluye una serie de ejemplos:
* `holamundo.js` : Hola Mundo !
* `1-prueba-jasmine/runtests.js` : Inyecta pruebas Jasmine sobre una página HTML.
* `2-prueba-jasmine/jasmine-run.js` : Ejecuta pruebas Jasmine (sin inyección)
* `3-grunt-jasmine` : Ejecuta pruebas Jasmine usando Grunt
* `4-capture/capture.js`: Captura de pantalla
* `4-capture/capture-clip.js`: Captura una porción de la pantalla

## Enlaces

Información adicional puede verse en:
* [Primeros pasos](http://phantomjs.org/quick-start.html) en el sitio de PhantomJS
* [Ejemplos](https://github.com/ariya/phantomjs/tree/master/examples) en el Github de PhantomJS
  * [run-jasmine.js](https://github.com/ariya/phantomjs/blob/master/examples/run-jasmine.js), ejecuta pruebas de jasmine.
  * [netlog.js](https://github.com/ariya/phantomjs/blob/master/examples/netlog.js), genera un log de las comunicaciones
  * [rasterize.js](https://github.com/ariya/phantomjs/blob/master/examples/rasterize.js), ofrece varias opciones paa captura de pantallas.
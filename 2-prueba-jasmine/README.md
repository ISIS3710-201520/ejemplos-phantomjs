# Pruebas con PhantomJS + Jasmine

El Github de PhantmoJS incluye varios ejemplos que pueden ser útiles para probar
aplicaciones con especificaciones (pruebas) realizadas con Jasmine.

## Ejecución

Cuando se usa `jasmine-node`, normalmente el proyecto es organizado en varias carpetas: `/app`
que contiene la aplicación y `/spec` que contiene las pruebas. Es posible usar `phantomjs` para
ejecutar esas pruebas sin necesidad de inyectar las pruebas.

Para ejecutar las pruebas, es necesario correr el comando:

```
phantomjs spec/run-jasmine.js spec/SpecRunner.html
```

## Modificación

Si se desea usar este programa para probar sus propias aplicaciones:
* debe copiar el archivo `spec/run-jasmine.js` al proyecto
* debe modificar la página `SpecRunner.html` para incluir la aplicación y las pruebas correspondientes.

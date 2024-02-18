// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función resta', function() {
  operaciones.resta.should.be.a.Function();
  should.equal(operaciones.resta(7,4), 3);
  should.equal(operaciones.resta(1,3), -2);
	should.equal(operaciones.resta(1,3), -2);
});
it('comprobar funcion multiply', function(){
  operaciones.multiply.should.be.a.Function();
	should.equal(operaciones.multiply(2,8), 16);
});





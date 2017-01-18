function Rectangulo(tamanyoInicial) {
  this.ancho=tamanyoInicial.ancho;
  this.alto=tamanyoInicial.alto;
   
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}
 
function ControladorRectangulo($scope, rectangulo) {
    $scope.area=rectangulo.getArea();
}

angular
    .module('app',[])
    .value('tamanyoInicial', {
        ancho:2,
        alto:3
    })
    .factory('rectangulo', function(tamanyoInicial) {
        var rectangulo = new Rectangulo(tamanyoInicial);

        return rectangulo;
    })
    .controller('ControladorRectangulo', ControladorRectangulo);

// Idealmente, deberíamos hacer:
/*
 factory('rectangulo', ['tamanyoInicial', function(tamanyoInicial) {
    var rectangulo = new Rectangulo(tamanyoInicial);

    return rectangulo;
}])
*/

// controller('ControladorRectangulo', ['$scope', 'rectangulo', ControladorRectangulo])
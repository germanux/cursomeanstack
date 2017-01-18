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
    .service('rectangulo', Rectangulo)
    .controller('ControladorRectangulo', ControladorRectangulo);

// Idealmente, deberíamos hacer:
// service('rectangulo', ['tamanyoInicial', Rectangulo])
// controller('ControladorRectangulo', ['$scope', 'rectangulo', ControladorRectangulo])
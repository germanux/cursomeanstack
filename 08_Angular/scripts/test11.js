function MiControlador($scope, miConstante, area_circulo) {
    $scope.valor = miConstante;
    $scope.area_circulo = area_circulo(10);
}

angular
    .module('app', [])
    .factory('miConstante', function() {
        return 'Hola Mundo';
    })
    .factory('area_circulo', function() {
        return function(r) {
            return 3.1416*r*r;
        }
    })
    .controller('MiControlador', MiControlador);

function MiControlador($scope, miConstante, mat) {
    $scope.valor = miConstante;
    $scope.area_circulo = mat.area_circulo(10);
}

angular
    .module('app', [])
    .constant('miConstante', 'Hola Mundo')
    .constant('mat', {
        area_circulo: function(r) {
            return 3.1416*r*r;
        }
    })
    .controller('MiControlador', MiControlador);

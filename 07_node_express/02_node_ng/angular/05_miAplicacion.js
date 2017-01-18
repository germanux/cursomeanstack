function ControladorSimple($scope, $rootScope) {
    $rootScope.misClientes = [
        { nombre: 'Fran', ciudad: 'Vietmam/Cadiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Angel', ciudad: 'Madrid' },
        { nombre: 'Julio', ciudad: 'Madrid' },
        { nombre: 'Pedro', ciudad: 'Madrid' }
    ];
    $scope.addCliente = function() {
        $scope.misClientes.push({
            nombre: $scope.nombreCliente,
            ciudad: $scope.ciudadCliente
        });
    }
    $rootScope.nombreCliente = "AAAAAAAAAA";
}
var moduloAplicacion = angular.module("miAplicacion", []);

moduloAplicacion.controller("ControladorMuySimple", ControladorSimple);
/*
function ControladorAnimales($scope, $rootScope) {
    $scope.misAnimales = [
        { nombre: 'Gato', familia: 'Vietmam/Cadiz' },
        { nombre: 'Perro', familia: 'Madrid' }
    ];
    $rootScope.globalB = "BBBBBBBBBBBB";
}*/

moduloAplicacion.controller("UnControlDeAnimales", ControladorAnimales);
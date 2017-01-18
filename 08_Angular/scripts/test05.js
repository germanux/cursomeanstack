function SimpleController($scope) {
    $scope.customers = [
        {name: 'Jorge Arévalo', city: 'Madrid'},
        {name: 'Elena Nieto del Bosque', city: 'Toledo'},
        {name: 'Javier Ucto', city: 'Murcia'},
        {name: 'Jose Villanas', city: 'Córdoba'},
        {name: 'Marta Burete', city: 'Gijón'}
    ];
}
            
angular
    .module('app', [])
    .controller('SimpleController', SimpleController);
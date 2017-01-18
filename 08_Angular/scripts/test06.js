function SimpleController($scope) {
    $scope.customers = [
        {name: 'Jorge Arévalo', city: 'Madrid'},
        {name: 'Elena Nieto del Bosque', city: 'Toledo'},
        {name: 'Javier Ucto', city: 'Murcia'},
        {name: 'Jose Villanas', city: 'Córdoba'},
        {name: 'Marta Burete', city: 'Gijón'}
    ];
    
    $scope.addCustomer = function () {
        $scope.customers.push({ name: $scope.inputData.name, city: $scope.inputData.city })
    }

}
            
angular
    .module('app', [])
    .controller('SimpleController', SimpleController);
function RoutingController($scope) {
    $scope.customers = [
        {name: 'Jorge Arévalo', city: 'Madrid'},
        {name: 'Elena Nieto del Bosque', city: 'Toledo'},
        {name: 'Javier Ucto', city: 'Murcia'},
        {name: 'Jose Villanas', city: 'Córdoba'},
        {name: 'Marta Burete', city: 'Gijón'}
    ];
    
    $scope.addCustomer = function () {
        $scope.customers.push({ name: $scope.inputData.name, city: $scope.inputData.city })
        
        // Clean input data
        $scope.inputData = null;
    }

}

function RoutingConfig($routeProvider) {
    $routeProvider
        .when('/add-client',
              {
                controller: 'RoutingController',
                templateUrl: 'partials/test07_partial02.html'
              })
        .when('/list-clients',
             {
                controller: 'RoutingController',
                templateUrl: 'partials/test07_partial01.html'
             })
        .otherwise({redirectTo: '/list-clients'});
}
            
// From AngularJS 1.2, routing has been moved to an external module and needs to be declared as dependency to be used
angular
    .module('app', ['ngRoute'])
    .config(RoutingConfig)
    .controller('RoutingController', RoutingController);
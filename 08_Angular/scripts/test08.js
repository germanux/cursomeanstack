/**
 * We could move this to a different module, and declare the dependency in the main module. Something like this:
 
 angular.module('customers', [$http])
 .factory('CustomerFactory', function() {
    // CustomerFactory function code here..
    // We could use $http if we need it
 });
 
 angular.module('app', ['ngRoute', 'customers'])
 // ... you know what if follows. See below
 **/
function CustomerFactory() {
    var factory = {};
    
    var customers = [
        {name: 'Jorge Arévalo', city: 'Madrid'},
        {name: 'Elena Nieto del Bosque', city: 'Toledo'},
        {name: 'Javier Ucto', city: 'Murcia'},
        {name: 'Jose Villanas', city: 'Córdoba'},
        {name: 'Marta Burete', city: 'Gijón'}
    ];
    
    factory.getCustomers = function() {
        // Can use $http here to get real data via AJAX
        // This will imply playing with promises
        return customers;
    };
    
    return factory;
}


function RoutingController($scope, CustomerFactory) {
    $scope.customers = CustomerFactory.getCustomers();
    
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
            
angular
    .module('app', ['ngRoute'])
    .config(RoutingConfig)
    .factory('CustomerFactory', CustomerFactory)
    .controller('RoutingController', RoutingController);
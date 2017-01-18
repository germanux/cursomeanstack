function PizzaService($http) {
    
    this.pizza_of_the_day = "";

    this.fetch_pizza_of_the_day = function() {
        //... http request to get the pizza of the day
        this.pizza_of_the_day = "pizza de pepperoni";
    }
    
    this.get_pizza_of_the_day = function() {
        this.fetch_pizza_of_the_day();
        return this.pizza_of_the_day;
    }
}

function ControladorPizza($scope, $timeout, pizzaService) {    
    $timeout(function() {
        $scope.pizza = pizzaService.get_pizza_of_the_day();
    }, 3000);    
}

var app=angular.module("app",[]);

app.service("pizzaService",['$http', PizzaService]);

app.controller("ControladorPizza",['$scope', '$timeout', 'pizzaService', ControladorPizza]);



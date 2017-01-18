var app = angular.module('app', []);

app.provider('pizza', function() {
    
    this.proveedor = "";

    this.$get = function() {
        var proveedor = this.proveedor;
        
        // We could personalize the pizza flavour based on the provider
        return {
            getPizza: function(ing) {
                return "pizza de " + ing + " servida por " + proveedor;
            }
        }
    };
    
    this.setProveedor = function(name) {
        this.proveedor = name;
    }

});

// For simplification. We could get the name of the provider using another service
app.constant('proveedor', "pizzaphone");

app.config(function(pizzaProvider, proveedor) {
    pizzaProvider.setProveedor(proveedor);
})

app.controller('ControladorPizza', function($scope, pizza) {
    $scope.ingrediente = "queso";
    $scope.pizza = pizza.getPizza($scope.ingrediente);
})

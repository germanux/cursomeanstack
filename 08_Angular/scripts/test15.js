var app=angular.module("app",[]);

app.value("pizza","pizza de mozarella");

app.controller("ControladorPizza",["$scope","pizza",function($scope,pizza) {
  $scope.pizza=pizza;
}]);



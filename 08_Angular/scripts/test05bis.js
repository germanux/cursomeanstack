var app = angular.module("app", []);
   
app.controller("PruebaController", function($scope) {
  $scope.nombre="Carlos";
  $scope.showNombre=true;
   
  $scope.modelo={
    apellido:"Perez",
    showApellido:true 
  }
  
});
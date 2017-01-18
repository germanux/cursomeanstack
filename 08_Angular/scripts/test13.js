var app=angular.module("app",[]);

app.value("algoritmo","SHA-1");

app.factory("hash",['algoritmo',function(algoritmo) {
  var hashFunction;
  
  if (algoritmo==="MD5") {
    hashFunction=CryptoJS.MD5;
  } else  if (algoritmo==="SHA-1") {
    hashFunction=CryptoJS.SHA1;
  } else  if (algoritmo==="SHA-2-256") {
    hashFunction=CryptoJS.SHA256;
  } else  if (algoritmo==="SHA-2-512") {
    hashFunction=CryptoJS.SHA512;
  } else {
    throw Error("El tipo de algoritmo no es válido:"+algoritmo);
  }
  
  var hash=function(message) {
    var objHashResult=hashFunction(message);
    
    var strHashResult=objHashResult.toString(CryptoJS.enc.Base64);
    
    return strHashResult;
  }
  
  return hash;
  
}]);


app.controller("ControladorBase64",["$scope","hash",function($scope,hash) {
  $scope.password="s3cret";
  $scope.getHash=function() {
    var hashResult=hash($scope.password);
    return hashResult;
  }
}]);
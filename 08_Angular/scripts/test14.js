var app=angular.module("app",[]);

app.constant("algoritmo","SHA-1");


function HashProvider() {
  var _algoritmo="";
  
  this.setAlgoritmo=function(algoritmo) {
    _algoritmo=algoritmo;
  };
  
  this.$get=function() {
    var hashFunction;
  
    if (_algoritmo==="MD5") {
      hashFunction=CryptoJS.MD5;
    } else  if (_algoritmo==="SHA-1") {
      hashFunction=CryptoJS.SHA1;
    } else  if (_algoritmo==="SHA-2-256") {
      hashFunction=CryptoJS.SHA256;
    } else  if (_algoritmo==="SHA-2-512") {
      hashFunction=CryptoJS.SHA512;
    } else {
      throw Error("El tipo de algoritmo no es válido:"+_algoritmo);
    }
  
    var hash=function(message) {
      var objHashResult=hashFunction(message);
      
      var strHashResult=objHashResult.toString(CryptoJS.enc.Base64);
    
      return strHashResult;
    }
  
    return hash;
  }
}

app.provider("hash",HashProvider);

// The word 'Provider' is automatically added after provider name for configuration
app.config(["hashProvider","algoritmo",function(hashProvider,algoritmo) {
  hashProvider.setAlgoritmo(algoritmo);
}]);

app.controller("ControladorBase64",["$scope","hash",function($scope,hash) {
  $scope.password="s3cret";
  $scope.getHash=function(message) {
    var hashResult=hash(message);
    return hashResult;
  }
}]);



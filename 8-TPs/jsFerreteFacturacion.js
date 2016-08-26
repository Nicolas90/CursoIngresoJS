var app = angular.module('ferreteFacturacion', []);

app.controller('controladorFacturacion',function($scope){
	$scope.test="hola angular";
	$scope.datos={};
	$scope.datos.precioUno="Ingrese Precio";
	$scope.datos.precioDos="Ingrese Precio";
	$scope.datos.precioTres="Ingrese Precio";

	$scope.Sumar=function(){
  		alert(parseInt($scope.datos.precioUno)+parseInt($scope.datos.precioDos)+parseInt($scope.datos.precioTres));


 	}

 	$scope.Promedio=function(){
  		alert((parseInt($scope.datos.precioUno)+parseInt($scope.datos.precioDos)+parseInt($scope.datos.precioTres))/3);


 	}


 	$scope.PrecioFinal=function(){
		alert((parseInt($scope.datos.precioUno)+parseInt($scope.datos.precioDos)+parseInt($scope.datos.precioTres))*1.21);  	


 	}
});
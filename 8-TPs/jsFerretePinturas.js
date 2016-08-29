/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var app = angular.module('ferretePinturas', []);

app.controller('controladorPinturas',function($scope){
	$scope.datos={};
	$scope.datos.Temperatura="Ingrese Temparatura";





	$scope.FahrenheitCentigrados=function(){
		var temp = parseInt($scope.datos.Temperatura);
		var result = (temp-32)/1.8;

  		alert(temp + " Fahrenheit son " + result + " Centígrados");
 	}

 	$scope.CentigradosFahrenheit=function(){
 		var temp = parseInt($scope.datos.Temperatura);
		var result = (temp*1.8)+32;

  		alert(temp + " Centígrados son " + result + " Fahrenheit");
 	}
});

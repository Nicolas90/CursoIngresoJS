/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var app = angular.module('adivinaElNumero1', []);

app.controller('controladorAdivinaElNumero1',function($scope){
	$scope.datos={};
	$scope.datos.NumeroIngresado="Ingrese número";
	$scope.datos.Intentos="intentos";
	
	var numeroSecreto = 0;



	$scope.comenzar=function(){

		$scope.datos.Intentos = 0;
  		numeroSecreto = Math.floor((Math.random() * 100) + 1);

  		//alert(numeroSecreto);
 	}

 	$scope.verificar=function(){
  		
 		++$scope.datos.Intentos;
 		var num = parseInt($scope.datos.NumeroIngresado);

 		if ( num > numeroSecreto ) 
 		{
 			alert("se pasó…");
 		}
 		else if ( num < numeroSecreto ) 
 		{
 			alert("falta…");
 		}
 		else
 		{

 			alert("Usted es un ganador!!! y en solo " + $scope.datos.Intentos + " intentos");
 		}
 	}
});
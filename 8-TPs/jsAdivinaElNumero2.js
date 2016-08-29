/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/
var app = angular.module('adivinaElNumero2', []);

app.controller('controladorAdivinaElNumero2',function($scope){
	$scope.datos={};
	$scope.datos.NumeroIngresado="Ingrese número";
	$scope.datos.Intentos="intentos";
	
	var numeroSecreto = 0;



	$scope.comenzar=function(){

		$scope.datos.Intentos = 0;
  		numeroSecreto = Math.floor((Math.random() * 100) + 1);

  		alert(numeroSecreto);
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
 			if ($scope.datos.Intentos==1) { alert("usted es un Psíquico"); }
 			else if ($scope.datos.Intentos==2) { alert("excelente percepción"); }
 			else if ($scope.datos.Intentos==3) { alert("Esto es suerte"); }
 			else if ($scope.datos.Intentos==4) { alert("Excelente técnica"); }
 			else if ($scope.datos.Intentos==5) { alert("usted está en la media"); }
 			else if (($scope.datos.Intentos>=6) && ($scope.datos.Intentos<10)) { alert("falta técnica"); }
 			else if ($scope.datos.Intentos>=10) { alert("afortunado en el amor!!"); }
 			

 			//alert("Usted es un ganador!!! y en solo " + $scope.datos.Intentos + " intentos");
 		}
 	}
});
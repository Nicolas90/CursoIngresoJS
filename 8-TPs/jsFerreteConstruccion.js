/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var app = angular.module('ferreteConstruccion', []);

app.controller('controladorConstruccion',function($scope){
	$scope.datos={};
	$scope.datos.LargoTerreno="Largo del terreno";
	$scope.datos.AnchoTerreno="Ancho del terreno";
	$scope.datos.RadioTerreno="Radio del terreno";

	$scope.Rectangulo=function(){
  		alert("Alambre necesario: "+(parseInt($scope.datos.LargoTerreno)*2+parseInt($scope.datos.AnchoTerreno)*2)*3 + " metros");


 	}

 	$scope.Circulo=function(){
  		alert("Alambre necesario: "+3.14*parseInt($scope.datos.RadioTerreno)*parseInt($scope.datos.RadioTerreno)*3 + " metros");


 	}


 	$scope.Materiales=function(){
 		var temp = parseInt($scope.datos.LargoTerreno)*parseInt($scope.datos.AnchoTerreno)
		alert("Bolsas de cemento: "+temp*2 +"\nBolsas de cal: " +temp*3);  	


 	}
});
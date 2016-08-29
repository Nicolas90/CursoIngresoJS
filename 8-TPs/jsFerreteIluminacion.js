/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

var app = angular.module('ferreteIluminacion',[]);

app.controller('controladorIluminacion',function($scope){
	$scope.datos={};
	$scope.datos.CantidadLamparas="Cantidad de lámparas";
	$scope.datos.PrecioDescuento="Precio con descuento";
	var sel = document.getElementById("Marca");


	$scope.CalcularPrecio=function(){
		var temp = parseInt($scope.datos.CantidadLamparas);
		var result = 35;

		//alert(sel.options[sel.selectedIndex].value);

		if (temp>=6) 
		{
			result=result*temp*0.5;
		}
		else if (temp==5)
		{
			if (sel.options[sel.selectedIndex].value == "ArgentinaLuz") 
			{
				result=result*temp*0.6;
			}
			else
			{
				result=result*temp*0.7;
			}
		}
		else if (temp==4)
		{
			if ((sel.options[sel.selectedIndex].value == "ArgentinaLuz")  || (sel.options[sel.selectedIndex].value == "FelipeLamparas"))
			{
				result=result*temp*0.75;
			}
			else
			{
				result=result*temp*0.8;
			}
		}
		else if (temp==3)
		{
			if (sel.options[sel.selectedIndex].value == "ArgentinaLuz") 
			{
				result=result*temp*0.85;
			}
			else if (sel.options[sel.selectedIndex].value == "FelipeLamparas")
			{
				result=result*temp*0.9;
			}
			else
			{
				result=result*temp*0.95;
			}
		}
		else
		{
			result=result*temp;
		}

		if (result>=120) 
		{
			var impuesto = result*0.1;
			alert("Usted pago "+impuesto+" de IIBB.");
			$scope.datos.PrecioDescuento=result+impuesto;
		}
		else
		{
			$scope.datos.PrecioDescuento=result;
		}
 	}
});

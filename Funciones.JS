

function operacion() {
	var numeroa= document.getElementById('cajaNumeroa').value;
	var numerob= document.getElementById('cajaNumerob').value;
	var numeroc= document.getElementById('cajaNumeroc').value;

	var resultado1 = 0;
var resultado2 = 0;
	numeroa=parseInt(numeroa);
	numerob=parseInt(numerob);
	numeroc=parseInt(numeroc);

	resultado1= parseInt(resultado1);
	resultado1= numerob+ [[(numerob*numerob) - (4*numeroa*numeroc)]/(2*numeroa)];
    resultado2= numerob- [[(numerob*numerob) - (4*numeroa*numeroc)]/(2*numeroa)];
	resultado1 = document.getElementById('cajaX1').value= resultado1;
	resultado2 = document.getElementById('cajaX2').value= resultado2;
	return false;
}





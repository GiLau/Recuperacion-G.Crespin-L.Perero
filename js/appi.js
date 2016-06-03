alert("Hola, Bienvenidos a nuestra Informativa de Buques");


var buque1=
 {
 	nombre:"dijaymar",
 	tipoCarga: "autos",
	bandera: "Estados Unidos",
	capitan:"Fabian Magallanes",
	compNav:"Los pitufos",
	tipo: "panamá",
};
var buque2=
 {
 	nombre:"guayatuna",
 	tipoCarga: "atun",
	bandera: "Panama",
	capitan:"Hugo Martinez",
	compNav:"Marnisam",
	tipo: "post-panamá",
};
var buque3=
 {
 	nombre:"marquez",
 	tipoCarga: "banano",
	bandera: "Mexico",
	capitan:"David Mideros",
	compNav:"Copec",
	tipo: "panamá",
};
var buque4=
 {
 	nombre:"marimar",
 	tipoCarga: "frutas",
	bandera: "Italia",
	capitan:"Luis Calle",
	compNav:"Marval",
	tipo: "panamá",
};
var buque5=
 {
 	nombre:"bamar",
 	tipoCarga: "flores",
	bandera: "Estados Unidos",
	capitan:"Sergio Demera",
	compNav:"Kenrick",
	tipo: "post-panamá",
};
var buque =[];
buque.push(buque1);buque.push(buque2);buque.push(buque3);buque.push(buque4);buque.push(buque5);

/*****funcion con la cual podemos recorrer el arreglo de buque e imprimir****/
function imprimirLista (lista)
{
	var listHTML = '<ul>';
	for (var i=0; i < lista.length; i ++)
	{
		listHTML += '<li>' + lista[i].nombre + '<br>' + lista[i].tipoCarga + '<br>'+lista[i].bandera+ '<br>'+lista[i].capitan+ '<br>'+lista[i].compNav+ '<br>'+lista[i].tipo+ '</li><br>';
	}
	listHTML += '</ul>';
	return listHTML;
}

var infBuques = "<h3> Los buques que arriban a este puerto son: </h3>" +imprimirLista(buque);
		var outputDiv = document.getElementById("output");
		outputDiv.innerHTML=infBuques;

/***** para que el menu se pueda ver en un dispositivo de manera desplegable*/
var $select = $("<select></select>");
$("#menu").append($select);

//recorrer el menu con la funcion each
$("#menu a").each(function()
{
	var $anchor = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$("<option></option>");
	//obtener cada valor de la opcion del atributo href
	$option.val($anchor.attr("href"));
	//obtener el texto de cada opcion
	$option.text($anchor.text());
	//agregar option al select
	$select.append($option);

	//obtener si el link en la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});

$select.change(function()
	{
		window.location=$select.val();
	});

/*$(".button").append("<button>Buscar</button>");
$(".button").click(function()
	{
		var opcion=$(".infor").select();
		if (opcion == "nombre")
		{
			document.write("gina");
		}
	});*/

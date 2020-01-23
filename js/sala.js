var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
	var x=$(".default");
	var p=$(".puerta");
	var v=$(".ventana");
	var l=$(".luz");
	var t=$(".tele");
	p.click(activarPuerta);
	v.click(activarVentana);
	l.click(activarLuz);
	t.click(activarTele);

	function activarPuerta()
	{
		var x=$(".default");
		var y=$(".puerta-cerrada");
		var pa=$(".puerta-abierta");
		var positivo=$(".positivo");
		var negativo=$(".negativo");
		x.hide();
		y.show();
		positivo.text("Abrir");
		negativo.text("Cerrar");

		positivo.click(abrirPuerta);
		negativo.click(cerrarPuerta);

		function abrirPuerta(){
			y.hide();
			pa.show();
		}

		function cerrarPuerta()
		{
			pa.hide();
			y.show();
		}
	}

	function activarTele()
	{
		var x=$(".default");
		var y=$(".tele-apagada");
		var pa=$(".tele-prendida");
		var positivo=$(".positivo");
		var negativo=$(".negativo");
		x.hide();
		y.show();
		positivo.text("Abrir");
		negativo.text("Cerrar");

		positivo.click(prenderTele);
		negativo.click(apagarTele);

		function prenderTele(){
			y.hide();
			pa.show();
		}

		function apagarTele()
		{
			pa.hide();
			y.show();
		}
	}
}

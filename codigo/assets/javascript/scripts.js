var div;
var div2;

$(document).ready(function(){

	$('#btn_ingresar').on('click', function(){
		var num = $('#numero').val();
		var color = $('#colores').val();
		for (var i = 0; i < num; i++) {
			div = $('<div>');
			div.addClass("mostrar").css('background-color' , color);
			div2 = $('<div>');
			div2.addClass("contenedor");
			(div2).append(div);
			$('.global').append(div2);
		};
	});

	$('#btn_borrar').on('click', function(){
		$('.contenedor').remove()
	})

});


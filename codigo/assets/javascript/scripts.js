var $div;
var $div2;
var $global = $('.global');
var $numero = $('#numero');
var $colores = $('#colores');

$(document).ready(function(){

	$('#btn_ingresar').on('click', function(){
		var num = $numero.val();
		var color = $colores.val();
		for (var i = 0; i < num; i++) {
			$div = $('<div>');
			$div.addClass("mostrar").css('background-color' , color);
			$div2 = $('<div class="contenedor">');
			($div2).append($div);
			$global.append($div2);
		};
	});

	$('#btn_borrar').on('click', function(){
		$('.contenedor').remove()
	})

});
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
	selector: 'app-tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

	public title = "tienda online";
		
	constructor() { }

	ngOnInit() {

		$('#textoJquery').hide();
		
		$('#buttonJquery').click( function(){
			$('#textoJquery').slideToggle();
		});

		//$("#caja").dotdotdot({});
	}


	/** Recibimos todo lo que ingresa, tecla por tecla

	@params event (html): De lo insertado en el formulario tiny
	*/
	textEditorTiny(event){

		console.log("event", event);
	}





}

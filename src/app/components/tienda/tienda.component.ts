import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

import { traerDeAfuera } from '../../moduloanimations/animation';


@Component({
	selector: 'app-tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css'],

	animations: [
		trigger('marcartrigger',[
			state('inactivo', style({
				border: '5px solid #ccc'
			})),
			state('activo', style({
				border: '5px solid yellow',
				background: 'red',
				borderRadius:'50px' // de border-radius cambiamos
			})),
			transition('inactivo => activo',  animate('2s linear')),
			transition('activo => inactivo',  animate('2s linear'))			
		]),
		
		trigger('myAwesomeAnimation', [
			state('small', style({
				transform: 'scale(1)',
				borderRadius:'15px' // de border-radius cambiamos
			})),
			state('large', style({
				transform: 'scale(1.5)',
				background: 'white',
				borderRadius:'15px' // de border-radius cambiamos
			})),
			transition(
				'small <=> large', 
				animate('1000ms ease-in',  keyframes([
					style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
					style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
					style({opacity: 1, transform: 'translateY(10%)',     offset: 1.0})
				]))
			),
		]),

		traerDeAfuera

	]
})
export class TiendaComponent implements OnInit {

	public title = "tienda online";

	// para animaciones
	public estadoinicial;

	state: string = 'small';

	animateMe() {
		this.state = (this.state === 'small' ? 'large' : 'small');
	}

	constructor() {
		this.estadoinicial = "inactivo";
	}

	ngOnInit() {

		$('#textoJquery').hide();
		
		$('#buttonJquery').click( function(){
			$('#textoJquery').slideToggle();
		});

		//$("#caja").dotdotdot({});
	}

	cambiarEstado(valor){
		if(valor== 'inactivo') this.estadoinicial = 'activo'
		else this.estadoinicial = 'inactivo'
	}



	/** Recibimos todo lo que ingresa, tecla por tecla

	@params event (html): De lo insertado en el formulario tiny
	*/
	textEditorTiny(event){

		console.log("event", event);
	}


}

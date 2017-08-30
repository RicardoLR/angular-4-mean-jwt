import { Component, OnInit } from '@angular/core';

/** en versiones anteriores se carga distinto 

en 4.  <mi-etiquera [@FadeIn]
*/
import { fundido } from '../../moduloanimations/animation';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	animations: [fundido]
})
export class HomeComponent implements OnInit {

	title = 'Bienvenidos';

	constructor() { 
	}

	ngOnInit() {
		console.log("home.component cargando...");
	}

}

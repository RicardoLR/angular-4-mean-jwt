import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'main-email',
	template: `
		<div class="div-main-email">
			<mostrar-email></mostrar-email>
			<guardar-email></guardar-email>
		</div>
	`,
	styleUrls: ['./guardar-email.component.css']

})
export class MainEmailComponent implements OnInit {

	title = "main email";
		
	constructor() { }

	ngOnInit() {

	}



}

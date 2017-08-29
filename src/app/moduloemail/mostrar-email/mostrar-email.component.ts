import { Component, DoCheck, OnInit } from '@angular/core';



@Component({
	selector: 'mostrar-email',
	template: `
		<div *ngIf="emailContacto">
				<h2>
						{{title}}: {{emailContacto}}
				</h2>
				<button type="button" class="btn btn-danger" (click)="borrarEmail()">
					Eliminar
				</button>
		</div>
		`
})
export class MostrarEmailComponent implements DoCheck, OnInit {

	title = "Mi correo es";
	emailContacto :string;

	constructor() { }

	ngOnInit() {
	}


	ngDoCheck(){
		console.log("Propiedad DoCheck ejecutandose");

		console.log("Get Localstorage ", localStorage.getItem('emailContacto')); 
		this.emailContacto = localStorage.getItem('emailContacto');
	}

	borrarEmail(){
		localStorage.removeItem('emailContacto');
		// vaciar todo mi localstorage
		// localStorage.clear();
	}

}


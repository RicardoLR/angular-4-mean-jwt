import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	title = 'contactos';
	emailContacto :string;

	constructor() { }

	ngOnInit() {
	}

	guardarEmail(){
		
		localStorage.setItem('emailContacto', this.emailContacto);

	}

}

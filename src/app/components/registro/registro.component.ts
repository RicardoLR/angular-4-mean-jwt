import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	public title : string;
	public user: User;

	constructor(private _route: ActivatedRoute, private _router: Router) {
		this.title = 'Registro';
		this.user = new User('','','','','','ROLE_USER');
	}

	ngOnInit() {
	}

	onSubmit(){
			
	}

}

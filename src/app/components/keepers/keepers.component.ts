

import { Component, DoCheck, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


import { User  } from '../../models/user';
import { UserService  } from '../../services/user.service';
import { GlobalService  } from '../../services/global.service';


@Component({
	selector: 'app-keepers',
	templateUrl: './keepers.component.html',
	styleUrls: ['./keepers.component.css'],
	providers: [UserService]
})
export class KeepersComponent implements OnInit {
	
	public title:string = 'Listar';

	public keepers:User[];
	public busqueda;
	public url:string;

	constructor(
		private _route: ActivatedRoute, 
		private _router: Router,
		
		private _UserService : UserService
	) {
		this.title = 'keepers';
		this.url = GlobalService.url;
	}


	ngOnInit(){
		this._getAnimals();
	}

	_getAnimals(){
		this._UserService.getListKeeper().subscribe(
			response =>{
				if(!response.keepers) this._router.navigate(['/']);

				this.keepers = response.keepers
			},
			error =>{
				
			}
		);		
	}

}

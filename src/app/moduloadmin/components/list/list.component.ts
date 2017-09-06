import { Component, DoCheck, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


import { Animal  } from '../../../models/animal';
import { AnimalService  } from '../../../services/animal.service';
import { GlobalService  } from '../../../services/global.service';


@Component({
	selector: 'list-main',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
	providers: [AnimalService]

})
export class ListComponent{
	
	public title:string = 'Listar';

	public animales:Animal[];

	constructor(
		private _route: ActivatedRoute, 
		private _router: Router,
		
		private _animalService : AnimalService
	) {
		this.title = 'Entrar';

	}


	ngOnInit(){
		this._animalService.getListAnimal().subscribe(
			response =>{
				if(!response.animals) this._router.navigate(['/']);

				this.animales = response.animals
			},
			error =>{
				
			}
		);
	}

}

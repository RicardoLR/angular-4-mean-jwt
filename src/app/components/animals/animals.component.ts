
import { Component, DoCheck, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


import { Animal  } from '../../models/animal';
import { AnimalService  } from '../../services/animal.service';
import { GlobalService  } from '../../services/global.service';


@Component({
	selector: 'app-animals',
	templateUrl: './animals.component.html',
	styleUrls: ['./animals.component.css'],
	providers: [AnimalService]
})
export class AnimalsComponent implements OnInit {
	
	public title:string = 'Listar';

	public animales:Animal[];
	public busqueda;
	public url:string;

	constructor(
		private _route: ActivatedRoute, 
		private _router: Router,
		
		private _animalService : AnimalService
	) {
		this.title = 'Animales';
		this.url = GlobalService.url;
	}


	ngOnInit(){
		this._getAnimals();
	}

	_getAnimals(){
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

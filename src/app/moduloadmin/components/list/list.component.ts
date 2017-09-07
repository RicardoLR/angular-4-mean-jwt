import { Component, DoCheck, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


import { Animal  } from '../../../models/animal';
import { AnimalService  } from '../../../services/animal.service';
import { GlobalService  } from '../../../services/global.service';


import {entradaizq} from '../../animation-menu-izq'


@Component({
	selector: 'list-main',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
	providers: [AnimalService],
	animations: [entradaizq]

})
export class ListComponent{
	
	public title:string = 'Listar';

	public animales:Animal[];
	public busqueda;


	constructor(
		private _route: ActivatedRoute, 
		private _router: Router,
		
		private _animalService : AnimalService
	) {
		this.title = 'Listado de animales';

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


	_deleteAnimal(id){
		

		this._animalService.deleteAnimal(id).subscribe(
			response => {
				if(!response.animal) alert("problema en servidor");

				this._getAnimals();
			},
			error=>{
				alert("Error en servidor");
			}
		)
	}

}

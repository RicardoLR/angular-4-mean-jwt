import { Component, DoCheck, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


import { Animal  } from '../../models/animal';
import { AnimalService  } from '../../services/animal.service';
import { GlobalService  } from '../../services/global.service';


@Component({
	selector: 'app-animal-details',
	templateUrl: './animal-details.component.html',
	styleUrls: ['./animal-details.component.css'],
	providers: [AnimalService]
})
export class AnimalDetailsComponent implements OnInit {

	public animal:Animal;
	public url:string;

	public urlimage:string;

	constructor(
		private _route: ActivatedRoute, 
		private _router: Router,
		
		private _animalService : AnimalService
	) {

		this.animal = new Animal('','','',null, new Date(),'','');

		this.url = GlobalService.url;
	}
	
	ngOnInit() {

		this._route.params.forEach((params: Params) =>{
			let id = params['id'];
					
			this._animalService.getAnimalById(id).subscribe(
				response =>{

					console.log("response", response);
					//if(!response.animal) this._router.navigate(['/']);

					this.animal = response.animal;
					this.urlimage = this.url+'/animal/image/'+this.animal.image;
				},
				error =>{
					this._router.navigate(['/home']);	
				}
			)
		})
	}

}

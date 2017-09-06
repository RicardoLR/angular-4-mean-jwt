import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable  } from 'rxjs/Observable';

import { GlobalService  } from './global.service';
import { UserstorageService  } from './userstorage.service';

import {Animal} from '../models/animal';


@Injectable()
export class AnimalService {

	public url:string;

	constructor(private _http: Http, private _userstorageService: UserstorageService,) {
			this.url = GlobalService.url;
	}

	addAnimal(animal:Animal){
		let headers = new Headers({
			'Content-Type':'application/json',
			'Authorization': this._userstorageService.getLocal('token')
		});

		return this._http.post(this.url+"/animal", animal, {headers: headers}).map( res => res.json());
	}

	getListAnimal(){
		let headers = new Headers({
			'Content-Type':'application/json'
		});
		let options = new RequestOptions({headers:headers});

		return this._http.get(this.url+"/animales", options).map( res => res.json());
	}

	getAnimalById(id:string){
		return this._http.get(this.url+"/animal/"+id).map( res => res.json());
	}


	editAnimal(animal:Animal){
		let headers = new Headers({
			'Content-Type':'application/json',
			'Authorization': this._userstorageService.getLocal('token')
		});

		return this._http.put(this.url+"/animal/"+animal._id, animal, {headers: headers}).map( res => res.json());
	}

}

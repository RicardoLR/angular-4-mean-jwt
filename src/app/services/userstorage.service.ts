import { Injectable } from '@angular/core';

@Injectable()
export class UserstorageService {

	constructor() { }

	saveLocal(nombre, entidad){
		localStorage.setItem( nombre, JSON.stringify(entidad));
	}

	getLocal(nombre){
		return localStorage.getItem(nombre);
	}

	deleteLocal(nombre){
		localStorage.removeItem(nombre);
	}

}

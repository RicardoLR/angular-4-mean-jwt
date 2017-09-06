import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/** ================================= 
	lo que yo necesito aparte
=================================== */
import { Router, ActivatedRoute, Params } from '@angular/router';


import { UserstorageService  } from '../services/userstorage.service';


@Injectable()
export class AdminGuard implements CanActivate {
	
	constructor(
		private _router: Router,
		private _userLocalService: UserstorageService
	){ }

	canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		let identity = JSON.parse(this._userLocalService.getLocal('identity') );

		if(identity && identity.rol == 'ROLE_ADMIN'){
			return true;
		}else{
			this._router.navigate(['/home']);
			return false;
		}


	}

}

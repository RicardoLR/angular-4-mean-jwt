import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GlobalService  } from './services/global.service';

import { UserService  } from './services/user.service';
import { UserstorageService  } from './services/userstorage.service';


import { User } from './models/user';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [UserService, UserstorageService]
})
export class AppComponent {

	public title:string;;
	public identity:string;;

	public url:string;
	public user: User;

	constructor(
		private _route: ActivatedRoute, private _router: Router,
		private _userService: UserService,
		private _userstorageService: UserstorageService,
	){
		this.title = 'Angular 4 con Node JS';
	    this.url = GlobalService.url;
	    this.user = JSON.parse( this._userstorageService.getLocal("identity") );
	}

	ngOnInit(){
		this.identity = JSON.parse( this._userstorageService.getLocal("identity") );
	}

	ngDoCheck(){
		this.identity = JSON.parse( this._userstorageService.getLocal("identity") );
	}

	logout(){
		this._userstorageService.deleteLocal("identity");
		this._router.navigate(['/']);
	}

}

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

	public title:string;
	public identity;

	public url:string;
	public user: User;
	public url_image_user:string;

	constructor(
		private _route: ActivatedRoute, private _router: Router,
		private _userService: UserService,
		private _userstorageService: UserstorageService,
	){
		this.title = 'Angular 4 con Node JS';
		this.url = GlobalService.url;
		this.identity = JSON.parse( this._userstorageService.getLocal("identity") );
		this.user = JSON.parse( this._userstorageService.getLocal("identity") );

	}

	ngOnInit(){
		this.identity = JSON.parse( this._userstorageService.getLocal("identity") );
	}

	ngDoCheck(){

		if(this._userstorageService.getLocal("identity") ){
			this.identity = JSON.parse( this._userstorageService.getLocal("identity") );

			if(this.identity.image)
				this.url_image_user = this.url+'/usuario/image/'+this.identity.image;
		}

	}

	logout(){
		this.identity= this._userstorageService.deleteLocal("identity");
		this._router.navigate(['/']);
	}

}

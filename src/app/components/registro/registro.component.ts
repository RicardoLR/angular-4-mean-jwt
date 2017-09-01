import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';

// mis servicios
import { GlobalService  } from '../../services/global.service';
import { UserService  } from '../../services/user.service';


@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css'],
	providers:  [UserService]
})
export class RegistroComponent implements OnInit {

	public title : string;
	public user: User;
	public status: string;

	constructor(
		private _route: ActivatedRoute, private _router: Router,
		private _userService : UserService
	) {
		this.title = 'Registro';
		this.user = new User('','','','','','','ROLE_USER');
	}

	ngOnInit() {
	}


	onSubmit(){
		this._userService.register(this.user).subscribe(
			response => {

				if(response.usuario && response.usuario._id){
					this.status = "success";

					// vaciamos si fue correcto, porque ya se guardo en servidor
					this.user = new User('','','','','','','ROLE_USER');
				}else{
					this.status = "false";
				}

			},
			err => {

			}
		)

	}

}

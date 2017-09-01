import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';


// mis servicios
import { GlobalService  } from '../../services/global.service';
import { UserService  } from '../../services/user.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers:  [UserService]
})
export class LoginComponent implements OnInit {

	public title : string;
	public user: User;
	public status: string;

	/** =====================================
		obtenemos token 
	====================================== */
	public identity: string;
	public token: string;

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

		this._userService.signup(this.user).subscribe(
			response => {

				/** =====================================
					obtenemos usuario 
				====================================== */
				this.identity = response.usuario;

				if( !this.identity ){
					
					alert("el usuario no se ha logeado correctamente");
				}else{

					/** si fue correcta obtenermos token */
					this._userService.signup(this.user, 'true').subscribe(
						response => {

							this.token = response.token;
							if( !this.token.length <= 0 )
								alert("Token no generado");
							else
								this.status = 'success';

						},
						err => { }
					);

				}

			},
			err => { 
				var erroMessage = <any> err;
				if(erroMessage){
 					var body = JSON.parse(err._body);
					this.status = "false";
				}
			}
		)

	}

}

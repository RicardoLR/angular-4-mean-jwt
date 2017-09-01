import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable  } from 'rxjs/Observable';

import { GlobalService  } from './global.service';


@Injectable()
export class UserService {

  public url:string;

  constructor(private _http: Http) {
      this.url = GlobalService.url;
  }

  register(user_to_register){
    //let params = JSON.stringify(user_to_register);
    let headers = new Headers({'Content-Type':'application/json'});

    //console.log("params", params);

    return this._http.post(this.url+"/usuario", user_to_register, headers).map( res => res.json());
  }

  /**
  @params user_to_login: obj json, gettoken = null por default sino es mandado
  */
  signup(user_to_login, gettoken = null){
      
     if( gettoken != null){
       user_to_login.gettoken = gettoken;
     }

    //let params = JSON.stringify(user_to_register);
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url+"/usuario/login", user_to_login, headers).map( res => res.json());
  }


}

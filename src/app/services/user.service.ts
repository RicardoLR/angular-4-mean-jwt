import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable  } from 'rxjs/Observable';

import { GlobalService  } from './global.service';

import { UserstorageService  } from './userstorage.service';


@Injectable()
export class UserService {

  public url:string;

  constructor(private _http: Http, private _userstorageService: UserstorageService,) {
      this.url = GlobalService.url;
  }

  register(user_to_register){
    //let params = JSON.stringify(user_to_register);
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url+"/usuario", user_to_register, {headers: headers}).map( res => res.json());
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

    return this._http.post(this.url+"/usuario/login", user_to_login, {headers: headers}).map( res => res.json());
  }


  update(user_to_updated){

    var headers = new Headers();

    headers.append('Authorization', this._userstorageService.getLocal('token') );
    headers.append('Content-Type', 'application/json');

    return this._http.put(this.url+"/usuario/"+user_to_updated._id, user_to_updated, {headers: headers})
      .map( res => res.json());
  }

  getListKeeper(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let options = new RequestOptions({headers:headers});

    return this._http.get(this.url+"/keepers", options).map( res => res.json());
  }


}

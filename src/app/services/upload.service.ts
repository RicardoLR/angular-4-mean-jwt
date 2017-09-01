import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable  } from 'rxjs/Observable';

import { GlobalService  } from './global.service';

import { UserstorageService  } from './userstorage.service';


@Injectable()
export class UploadService {

  public url:string;

  constructor(private _http: Http, private _userstorageService: UserstorageService,) {
      this.url = GlobalService.url;
  }

  makeFileRequest(url:string, params:Array<string>, files:Array<File>, token:string, name:string){
    //let params = JSON.stringify(user_to_register);
    let headers = new Headers({'Content-Type':'application/json'});

    return new Promise( (resolve, reject)=>{
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      // añadimos las imagenes que nos manden
      for(var i=0; i<files.length; i++){
        formData.append(name, files[i], files[i].name);
      }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }
        }
      }

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', this._userstorageService.getLocal('token') );
      xhr.send(formData);
    })

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
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.put(this.url+"/usuario/image/"+user_to_updated._id, user_to_updated, {headers: headers}).map( res => res.json());
  }



}

import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';


// mis servicios
import { GlobalService  } from '../../services/global.service';
import { UserService  } from '../../services/user.service';
import { UploadService  } from '../../services/upload.service';

import { UserstorageService  } from '../../services/userstorage.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers:  [UserService, UserstorageService, UploadService]
})
export class UserEditComponent implements OnInit {

  public title : string;
	public user: User;

	public identity;
	public token: string;

  public status:string;
  public url: string;
  public urlImageUser: string;

  constructor(
    private _route: ActivatedRoute, private _router: Router,
    private _userService : UserService,
    private _userstorageService : UserstorageService,
    private _userUploadService : UploadService
  ) {
    this.title = "Editar Datos";
    this.token = JSON.parse( this._userstorageService.getLocal("token") );
    this.user = JSON.parse( this._userstorageService.getLocal("identity") );

    this.url = GlobalService.url;
  }

  ngOnInit() {
    

    if(this._userstorageService.getLocal("identity") ){

      this.identity = JSON.parse( this._userstorageService.getLocal("identity")  );

        if(this.identity.image)
          this.urlImageUser = this.url+'/usuario/image/'+this.identity.image;
    }

  }

  onSubmit(){
    this.urlImageUser = null;

    this._userService.update(this.user).subscribe(
      response => {
        if(!response.usuario){
          console.log("response", response);
          this.status = "error";
        }else{
          
          this._userstorageService.saveLocal("identity", this.user );
          this.status = "success";

          let urlEdit = GlobalService.url+'/usuario/image/'+this.identity._id;

          this._userUploadService.makeFileRequest(
            urlEdit,
            [],
            this.filesToUpload,
            this._userstorageService.getLocal("token"),
            'image'
          ).then( (result:any)=>{

            this.user.image = result.image;

            this._userstorageService.saveLocal("identity", this.user );
            this.urlImageUser = this.url + '/usuario/image/' + this.user.image;
          });
        }
      },
      err =>{
        var erroMessage = <any> err;
        if(erroMessage){
          var body = JSON.parse(err._body);
          this.status = "false";
        }
      }
    );
  }

  public filesToUpload: Array<File>;
  /** MEtodo para capturar lo que guarden los inputs */
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }

}

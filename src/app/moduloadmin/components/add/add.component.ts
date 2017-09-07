import { Component, DoCheck, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


import { Animal  } from '../../../models/animal';
import { AnimalService  } from '../../../services/animal.service';
import { GlobalService  } from '../../../services/global.service';
import { UploadService  } from '../../../services/upload.service';
import { UserstorageService  } from '../../../services/userstorage.service';


import {entradaizq} from '../../animation-menu-izq'

@Component({
	selector: 'add-main',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css'],
	providers: [AnimalService, UploadService, UserstorageService],
	animations: [entradaizq]
})
export class AddComponent{
	
	public title:string;
	public animal:Animal;

	public url:string;
	public status:string;

	constructor(
		private _route: ActivatedRoute, 
		private _router: Router,
		
		private _animalService : AnimalService,
		private _userStorageService : UserstorageService,
		private _uploadService : UploadService
	) {
		this.title = 'Crear';
		this.animal = new Animal('','','',null,  new Date(),'','');

		this.url = GlobalService.url;
	}


	ngOnInit(){
	}

	onSubmit(){

		console.log("animal", this.animal);

		this._animalService.addAnimal(this.animal).subscribe(
			response =>{
				if(!response.animal){
					this.status = "error";
				}else{
					this.status = "success";
					this.animal = response.animal;


					/**  cargar imagen de animal en servicio */
					if(!this.filesToUpload){
						this._router.navigate(['/admin-panel/listado']);
					
					}else{

						this._uploadService.makeFileRequest(
	            GlobalService.url+'/animal/image/'+this.animal._id,
	            [],
	            this.filesToUpload,
	            this._userStorageService.getLocal('token'),
	            'image'

	          ).then( (result:any)=>{
	            this.animal.image = result.image;
	            
							this._router.navigate(['/admin-panel/listado']);
	          });

					}
				}
			},
			error =>{
				let errorMessage = <any>error;
				if(errorMessage!=null){
					this.status = "error";
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

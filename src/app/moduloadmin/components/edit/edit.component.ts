import { Component, DoCheck, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


import { Animal  } from '../../../models/animal';
import { AnimalService  } from '../../../services/animal.service';
import { GlobalService  } from '../../../services/global.service';
import { UploadService  } from '../../../services/upload.service';
import { UserstorageService  } from '../../../services/userstorage.service';

import {entradaizq} from '../../animation-menu-izq'



// usamos el templado de add
@Component({
	selector: 'edit-main',
	templateUrl: '../add/add.component.html',
	styleUrls: ['./edit.component.css'],
	providers: [AnimalService, UploadService, UserstorageService],
	animations: [entradaizq]
})
export class EditComponent{
	
	public title:string;
	public animal:Animal;

	public url:string;
	public status:string;
	public urlimage: string;

	public is_edit;

	constructor(
		private _route: ActivatedRoute, 
		private _router: Router,
		
		private _animalService : AnimalService,
		private _userStorageService : UserstorageService,
		private _uploadService : UploadService
	) {
		this.animal = new Animal('','','',null, new Date(),'','');
		this.title = 'Editar';
		this.is_edit = true;
		this.url = GlobalService.url;
	}

	ngOnInit(){

		this._route.params.forEach((params: Params) =>{
			let id = params['id'];
					
			this._animalService.getAnimalById(id).subscribe(
				response =>{

					if(!response.animal) this._router.navigate(['/']);

					this.animal = response.animal;
					this.urlimage = this.url+'/animal/image/'+this.animal.image;

					console.log("this.urlimage", this.urlimage);
				},
				error =>{
					this._router.navigate(['/home']);	
				}
			)
		})
	}


	onSubmit(){

		console.log("this.animal", this.animal);

		this._animalService.editAnimal(this.animal).subscribe(
			response =>{
				if(!response.animal){
					this.status = "error";
				}else{
					this.status = "success";
					this.animal = response.animal;


					/**  cargar imagen de animal en servicio */
					if(!this.filesToUpload){
						this._router.navigate(['/animal', this.animal._id]);
					
					}else{

						this._uploadService.makeFileRequest(
							GlobalService.url+'/animal/image/'+this.animal._id,
							[],
							this.filesToUpload,
							this._userStorageService.getLocal('token'),
							'image'

						).then( (result:any)=>{
							this.animal.image = result.image;
							
							this._router.navigate(['/animal', this.animal._id]);
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

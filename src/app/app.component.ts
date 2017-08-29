import { Component, DoCheck, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'Angular 4 con Node JS';
  emailContacto:string;


  ngOnInit(){
  	this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck(){
  	console.log("Propiedad DoCheck ejecutandose");

  	console.log("Get Localstorage ", localStorage.getItem('emailContacto')); 
  	this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail(){
  	localStorage.removeItem('emailContacto');

  	// vaciar todo mi localstorage
  	// localStorage.clear();
  }
}

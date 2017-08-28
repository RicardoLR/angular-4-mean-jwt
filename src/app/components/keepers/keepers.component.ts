import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.css']
})
export class KeepersComponent implements OnInit {

	title = "Cuidadores";

  constructor() { }

  ngOnInit() {
  	console.log("keepers.component cargando...");
  }

}

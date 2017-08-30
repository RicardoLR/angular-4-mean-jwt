import { Component, DoCheck, OnInit } from '@angular/core';


@Component({
  selector: 'list-main',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  
  title:string = 'Listar';
  numbers = [1,2,3,4];

  ngOnInit(){
  }

}

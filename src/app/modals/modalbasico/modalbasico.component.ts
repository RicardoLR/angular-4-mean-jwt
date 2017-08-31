import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalbasico',
  templateUrl: './modalbasico.component.html',
  styleUrls: ['./modalbasico.component.css']
})
export class ModalbasicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  disparaModal(){

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementById("close");

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

  }

}

import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  myTitle = "Prueba de Angular";
  myDescription = "Esta es una prueba de angular para cambiar este texto e imagenes";
  url = "../../../assets/img/";
  images: Object[] = [
    {name: "WoW", imagelink: `${this.url}wow.jpg`},
    {name: "TLOZ", imagelink: `${this.url}tloz.jpg`},
    {name: "Rocket League", imagelink: `${this.url}rl.jpg`},
    {name: "Age of Empires", imagelink: `${this.url}aoe.jpg`}
  ];
  selectedImage = this.images[0]["imagelink"];


  constructor() { }

  ngAfterViewInit(){
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }

  ngOnInit(): void {
  }

}

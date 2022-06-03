import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  precioBasico = 50;
  precioPro = 75
  precioEmpresas= 99;

  
 cambiarPrecio(){
    this.precioBasico = this.precioBasico + 3;
    this.precioPro = this.precioPro + 3;
    this.precioEmpresas = this.precioEmpresas + 3;
  }

}

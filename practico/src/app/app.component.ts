import {Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


export type producto = {
  name: string ,
  price: number,

};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
 
})

export class AppComponent {
  title = 'practico';
  nombreBtn = 'Ocultar Tabla'



  productos : producto[] = [
    { name: 'Jugo saldan 1L ', price: 200},
    { name: 'Fideos Marolio', price: 100},
    { name: 'Pure de tomate', price: 150},
    { name: 'Coca Cola 2L', price: 500},
    { name: 'Café 500gr', price: 1000},
    { name: 'Carbon',  price: 700},
    { name: 'Agua Mineral 1L',  price: 400},
    { name: 'Jabon ',  price: 332},
    { name: 'Papas Fritas',  price: 600},
    { name: 'Flan', price: 295},
  ];

 constructor(private modalService: NgbModal) {

 }

 public open(modal: any): void {

   this.modalService.open(modal);

 }

 mostrarTabla(){
  return this.nombreBtn !== 'Mostar Tabla';
 }

 cambiarNombreBtn(nombre:string){
  nombre === 'Ocultar Tabla' ? this.nombreBtn = "Mostar Tabla" : this.nombreBtn = "Ocultar Tabla"

 }
}
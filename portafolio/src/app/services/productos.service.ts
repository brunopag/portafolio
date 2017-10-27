import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;

  constructor( public http:Http ) {
    this.cargarProductos();
  }

  public cargarProductos(){
    this.http.get("https://portafolio-dabc8.firebaseio.com/productos_idx.json")
      .subscribe(data => {
        console.log(data.json());
        this.productos = data.json();
        this.cargando = false
      })
  }

}

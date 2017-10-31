import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrados:any[] = [];
  cargando:boolean = true;

  constructor( public http:Http ) {
    this.cargarProductos();
  }

  public cargarProductos(){
    this.cargando = true;
    // se devuelve una promesa, para que despues en buscar productos, se haga el filtrado luego de que se haya ejecutado la carga
    // eso se hace en el metodo buscarProducto a traves de then y se hace porque sino hacia el filtrado antes que se carguen los productos y falla
    let promesa = new Promise((resolve, reject) =>{
      this.http.get("https://portafolio-dabc8.firebaseio.com/productos_idx.json")
        .subscribe(data => {
          this.productos = data.json();
          this.cargando = false;
          resolve();
        });
    });
    return promesa;
  }

  getProducto( id:string ){
    // Devuelve un observable al cual luego por ejemplo el item del producto se subscribe.
    return this.http.get("https://portafolio-dabc8.firebaseio.com/productos/" + id + ".json");
  }

  buscarProducto(termino:string){
    console.log(termino);

    if(this.productos.length === 0){
      this.cargarProductos().then(() => {
        // termino la carga. El then se usa para eso, se ejecuta el codigo cuando la promesa que devuelve el metodo termina.
        this.filtrarProductos(termino);
      })
    } else{
      this.filtrarProductos(termino);
  }
}

  filtrarProductos(termino:string){
    this.productos_filtrados = [];

    // Poner todo en LowerCase porque javascript es key sensitive.
    termino = termino.toLowerCase();

    // Recorre todo el arreglo de productos y los va poniendo dentro de otro arreglo de productos filtrados.
    this.productos.forEach(prod =>{
      if(prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >=0 ){
        console.log('entro');
        this.productos_filtrados.push(prod);
      }

    })
    console.log(this.productos_filtrados);
  }

}

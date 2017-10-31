import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {

  producto:any;
  prod_id:any;

  constructor( private route:ActivatedRoute,
               private _productosService:ProductosService) {
    route.params.subscribe(parametros => {
      this.prod_id = parametros['id'];
      _productosService.getProducto(parametros['id'])
        .subscribe(prod => {
          this.producto = prod.json();
          console.log(this.producto);
        });
    })
  }

}

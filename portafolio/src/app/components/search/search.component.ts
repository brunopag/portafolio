import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor(private route:ActivatedRoute,
              private _ps:ProductosService) {
    // se obtiene el parametro termino de busqueda y se llama a la funcion
    route.params.subscribe(parametros => {
      console.log(parametros['termino']);
      _ps.buscarProducto(parametros['termino']);
    })
  }

}

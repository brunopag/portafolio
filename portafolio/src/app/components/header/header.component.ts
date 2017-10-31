import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public _is:InformacionService,
              public router:Router) {
              }

  buscarProducto( termino:string ){
    // Metodo que se dispara cuando el usuario aprieta enter en la busqueda, se redirige al componente search que hace la
    // busqueda y muestra un resutado
    this.router.navigate(['/search', termino]);
  }

}

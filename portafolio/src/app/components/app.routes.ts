import { RouterModule, Routes } from '@angular/router';
// Importar todos los componentes a los cuales se le van a declarar rutas
import { AboutComponent, PortafolioComponent, PortafolioItemComponent, SearchComponent } from './index.paginas';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portafolio-item/:id', component: PortafolioItemComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);

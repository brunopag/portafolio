import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, PortafolioComponent, PortafolioItemComponent } from './index.paginas';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portafolio-item', component: PortafolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);

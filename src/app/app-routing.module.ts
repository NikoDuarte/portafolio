
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoyComponent } from './pages/soy/soy.component';
import { XpComponent } from './pages/xp/xp.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: 'Inicio', component: SoyComponent
  },
  {
    path: 'Mi-experiencia', component: XpComponent
  },
  {
    path: 'Contacto', component: ContactoComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'Inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

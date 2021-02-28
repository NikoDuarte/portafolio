//Imports Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

//Components
import { PagesComponent } from './pages.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SoyComponent } from './soy/soy.component';
import { XpComponent } from './xp/xp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PagesComponent, 
    ContactoComponent,
    SoyComponent, 
    XpComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    NgOptionHighlightModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class PagesModule { }

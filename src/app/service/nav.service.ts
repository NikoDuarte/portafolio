import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public nav: any[] = [
    {
      titulo: 'Inicio',
      url: 'Inicio'
    },
    {
      titulo: 'Mi experiencia',
      url: 'Mi-experiencia'
    },
    {
      titulo: 'Contacto',
      url: 'Contacto'
    }
  ]

  constructor() { }
}

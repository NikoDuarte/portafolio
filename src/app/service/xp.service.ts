import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XpService {

  public xp: any[] = [
    {
      title: 'CSS',
      img: '../../../assets/img/css.svg',
      xp: 'Trabajo en proyectos personales con css hace 1 año'
    },
    {
      title: 'JS',
      img: '../../../assets/img/js.svg',
      xp: 'Trabajo en proyectos personales con js hace 6 meses'
    },
    {
      title: 'Arduino',
      img: '../../../assets/img/arduino.svg',
      xp: 'Trabajo en proyectos personales con css hace 6 meses'
    },
    {
      title: 'Angular',
      img: '../../../assets/img/angular.svg',
      xp: 'Trabajo en proyectos personales con css hace 2 meses'
    },
    {
      title: 'Photoshop',
      img: '../../../assets/img/photoshop.svg',
      xp: 'llevo realizando logos y banners personalizados con PhotoShop hace 4 años'
    }
  ]

  constructor() { }
}

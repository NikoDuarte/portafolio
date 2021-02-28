import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { enviarContacto } from '../interface/enviar.interface';

import { Contacto } from '../models/contacto.models';


const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  public pais: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  getPaises(){
    return this.http.get('https://restcountries.eu/rest/v2/all')
          .pipe(
            map(
              (pais: {}) => { 
                
                return pais
                
              }
            )
          )
  }

  enviarContacto(data : Contacto){
    
    const api_url = `${base_url}/contacto`
        return this,this.http.post<enviarContacto>(api_url, data)
    
  }
}

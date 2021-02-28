import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { ContactoService } from '../../api/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [
  ]
})
export class ContactoComponent implements OnInit {

  public pais: any[] =[]

  public contactoForm!: FormGroup

  public FormSubmitted = false;

  constructor(
    private contactoService : ContactoService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.cargarPaises()

    this.contactoForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telefono: [0],
      pais: ['', Validators.required],
      comentario: ['']
    })
  }

  cargarPaises(){
    this.contactoService.getPaises().subscribe(
      (resp: any) => {
        this.pais = resp
      }
    )
  }

  campoNoValido(campo: string): boolean{
    
    if ( this.contactoForm.get(campo)?.invalid && this.FormSubmitted ) {
        return true;
    }else{
      return false;
    }

  }


  enviarContacto(){
    
    this.FormSubmitted = true

    this.contactoService.enviarContacto(this.contactoForm.value).subscribe(
      (resp) => Swal.fire(
        'Se envio correctamente', 
        'Me estare comunicando contigo para darte respuesta al contacto que me realizaste',
        'success'
      ), (err) => Swal.fire(
        'Ups..',
        'Parece que algo ocurrio al enviar el formulario',
        'error'
      )
    )
  }
}

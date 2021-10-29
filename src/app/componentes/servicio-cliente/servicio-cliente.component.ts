import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-servicio-cliente',
  templateUrl: './servicio-cliente.component.html',
  styleUrls: ['./servicio-cliente.component.scss']
})


export class ServicioClienteComponent implements OnInit {

  formulario:FormGroup;
  mensajeFinal:boolean=false;

  constructor(public Form:FormBuilder) {
    this.formulario=Form.group({
      "Nombre": ["", [Validators.required, Validators.maxLength(15)]],
      "Telefono": ["", [Validators.required]],
      "Email": ["", [Validators.required, Validators.email]],
      "dirigidoA": ["", [Validators.required]],
      "Mensaje": ["", [Validators.required, Validators.maxLength(200)]] 
    })
   }

  ngOnInit(): void {
  }

  validacion(){
    alert('Los datos han sido recibidos');

    window.location.reload();
  }

}

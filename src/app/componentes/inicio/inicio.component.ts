import { Component, OnInit } from '@angular/core';
import {noticias} from '../../interfaces/noticias';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  listaNoticias=noticias.filter(noticia => !noticia.destacada);

  listaNoticiasDestacadas = noticias.filter(noticia => noticia.destacada);

  constructor() { }

  ngOnInit(): void {
  }

}

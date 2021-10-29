import { Component, OnInit } from '@angular/core';
import {noticias, Noticias}  from '../../interfaces/noticias';
import {categorias, CategoriaNoticias} from '../../interfaces/categoria-noticias';
import {ActivatedRoute, Route} from '@angular/router'

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {

  listaDeNoticias = noticias;

  listaDeCategorias = categorias;

  categoria:any;
  noticia:any;
  id:number = 0;
  constructor(private ruta:ActivatedRoute) {

    this.ruta.params.subscribe(datos => {
      this.id = datos["id"];
    })

   }

  ngOnInit(): void {
    
    this.noticia = this.listaDeNoticias.find(objeto=>objeto.id == this.id);

    this.categoria = this.listaDeCategorias.find(objeto => objeto.id == this.noticia.idCategoria);

    console.log(this.categoria);
  }

}

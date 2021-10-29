import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {DetalleNoticiaComponent} from './componentes/detalle-noticia/detalle-noticia.component';
import {ServicioClienteComponent} from './componentes/servicio-cliente/servicio-cliente.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"detalleNoticia/:nombreNoticia/:id", component:DetalleNoticiaComponent},
  {path:"ServicioAlCliente", component:ServicioClienteComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

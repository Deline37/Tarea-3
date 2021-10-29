import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ServicioClienteComponent } from './componentes/servicio-cliente/servicio-cliente.component';
import { DetalleNoticiaComponent } from './componentes/detalle-noticia/detalle-noticia.component';

import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ServicioClienteComponent,
    DetalleNoticiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

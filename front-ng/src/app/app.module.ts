import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';

import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { provideRouter, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([]),
    FormsModule,
    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLink, RouterLinkActive,
    HttpClientModule,
    // Aquí importas los componentes standalone
  ],
  exports:[  
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

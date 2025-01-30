import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:false

})
export class AppComponent {
  title = 'frontend';
}



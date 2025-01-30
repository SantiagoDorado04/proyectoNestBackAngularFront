import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.scss',
  standalone: false
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  listaVacia = undefined;

  constructor(
    private productoService: ProductoService,
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  borrar(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sip',
      cancelButtonText: 'Nops'
    }).then((result) => {
      if (result.value) {
        this.productoService.delete(id).subscribe(res => this.cargarProductos());
        Swal.fire(
          'OK',
          'Producto eliminado',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Producto a salvo',
          'error'
        );
      }
    });

  }

}

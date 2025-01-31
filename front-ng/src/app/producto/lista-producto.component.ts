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
export class ListaProductoComponent {
  productos: any[] = [];
  totalItems: number = 0;
  page: number = 1;
  lastPage: number = 1;
  limit: number = 10;
  listaVacia: boolean = false;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos(): void {
    this.productoService.lista(this.page, this.limit).subscribe(
      (data) => {
        // console.log('Datos recibidos en Angular:', data);

        this.totalItems = data.total;  // Total of products
        this.productos = data.productos; // Products of the actual page, no se como sea en ingles xdxd

        // number of pages of the back
        this.lastPage = Math.ceil(this.totalItems / this.limit);

        this.listaVacia = this.productos.length === 0;
      },
      (err) => {
        console.error('Error en la petición:', err);
        this.listaVacia = true;
      }
    );
  }


  siguiente(): void {
    if (this.page < this.lastPage) {
      this.page++;
      this.cargarProductos();  // this charge the products of the next page, modifique the number of page to show the products
    }
  }

  anterior(): void {
    if (this.page > 1) {
      this.page--;
      this.cargarProductos();  // this charge the products of the previous page, modifique the number of page to show the products
    }
  }

  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.lastPage) {
      this.page = pagina;
      this.cargarProductos();  // charge the products of the new page
    }
  }

  // Esta función calcula el rango de páginas que se deben mostrar.
  getPaginaRango(): number[] {
    const rango = 5; // Número de páginas a mostrar
    const inicio = Math.max(1, this.page - Math.floor(rango / 2));
    const fin = Math.min(this.lastPage, inicio + rango - 1);
    return Array.from({ length: fin - inicio + 1 }, (_, i) => inicio + i);
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

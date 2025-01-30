import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.scss',
  standalone: false
})
export class NuevoProductoComponent {
  nombre = '';
  precio: number = 0;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() : void {

  }

  onCreate() : void {
    const producto = new Producto(this.nombre, this.precio);
    this.productoService.save(producto).subscribe(
      data => {
        
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Producto Creado"
        });



        this.router.navigate(['/']);
      },
      err => {

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: `Error: ${err.error.message}` 
        });


      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}

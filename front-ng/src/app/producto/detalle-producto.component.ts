import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss',
  standalone: false
})
export class DetalleProductoComponent implements OnInit{

  producto: Producto = 
   {
      "nombre" : "",
      "precio" : 0,
    }
  ;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detail(id).subscribe(
      data => {
        this.producto = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}

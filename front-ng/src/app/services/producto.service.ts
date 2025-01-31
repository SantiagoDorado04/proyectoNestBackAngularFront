import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = environment.productoUrl;

  constructor(private httpClient: HttpClient) { }

  public lista(page: number = 1, limit: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())      // this convert the params into string to send it to the backend
      .set('limit', limit.toString());

    return this.httpClient.get<any>(`${this.productoURL}`, { params });  // get call to backend with the params
  }
  

  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.productoURL}${id}`);
  }

  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(`${this.productoURL}`, producto);
  }

  public update(id: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(`${this.productoURL}${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.productoURL}${id}`);
  }
}


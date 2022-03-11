import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './products/product.object';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpRequest: HttpClient) {}
  getProducts(): Observable<any> {
    return this.httpRequest.get(
      'https://61cda2a97067f600179c5b5d.mockapi.io/products'
    );
  }
  addProduct(product: Product): Observable<any> {
    return this.httpRequest.post(
      'https://61cda2a97067f600179c5b5d.mockapi.io/products',
      product
    );
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.httpRequest.put(
      'https://61cda2a97067f600179c5b5d.mockapi.io/products/' + id,
      product
    );
  }
}

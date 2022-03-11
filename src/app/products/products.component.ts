import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ProductsService } from '../products.service';
import { Product } from './product.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  product: Product[] = [];

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.product = data;
    });
  }

  editProduct(id: number) {
    this.router.navigateByUrl('/products/edit/' + id);
  }
  removeProduct(id: number) {
    this.product = this.product.filter((product) => product.id != id);
  }
}

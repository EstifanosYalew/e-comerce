import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from '../products/product.object';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  products = PRODUCTS;
  id: number;
  constructor(private router: Router) {
    this.id = 0;
  }

  ngOnInit(): void {}
  addingProduct() {
    this.router.navigateByUrl('products/add');
  }
  addProduct(product: any) {
    this.id = this.products.length + 1;
    let newProduct = {
      id: this.id,
      name: product.name,
      avatar: product.avatar,
      price: product.price,
      description: product.description,
    };
    this.products.push(newProduct);
    this.router.navigateByUrl('products');
  }
}

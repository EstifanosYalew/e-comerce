import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMERS } from './customer.object';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customer = CUSTOMERS;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  editCustomer(id: number) {
    this.router.navigateByUrl('/customers/edit/' + id);
  }
  addingCustomer() {
    this.router.navigateByUrl('customers/add');
  }
  removeCustomer(id: number) {
    this.customer = this.customer.filter((customer) => customer.id != id);
  }
}

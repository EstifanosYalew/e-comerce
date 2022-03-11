import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMERS } from '../customers/customer.object';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customers = CUSTOMERS;
  id: number;
  constructor(private router: Router) {
    this.id = 0;
  }

  ngOnInit(): void {}

  addCustomer(customer: any) {
    this.id = this.customers.length + 1;
    let newCustomer = {
      photo: customer.imageUrl,
      id: this.id,
      name: customer.name,
      age: customer.age,
      gender: customer.gender,
      phoneNumber: customer.phoneNumber,
      address: customer.address,
    };
    this.customers.push(newCustomer);
    this.router.navigateByUrl('customers');
  }
}

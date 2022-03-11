import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CUSTOMERS } from '../customers/customer.object';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  customers = CUSTOMERS;
  selectedCustomer = new Customer();
  newCustomer = new Customer();
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      for (let customer of this.customers) {
        if (customer.id == param['id']) {
          this.selectedCustomer = customer;
        }
      }
    });
  }
  updateCustomer() {
    this.selectedCustomer.name = this.newCustomer.name;
    this.selectedCustomer.address = this.newCustomer.address;
    this.newCustomer = new Customer();
    this.router.navigateByUrl('customers');
  }
}

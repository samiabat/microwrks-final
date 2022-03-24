import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }

  loggedIn(){
    return this.service.loggedIn();
  }

}

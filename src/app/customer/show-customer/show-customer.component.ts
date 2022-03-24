import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/customer.service';


@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {


  customerList$!:Observable<any[]>;
  jobList$!:Observable<any[]>;
  proposalList$!:Observable<any[]>;


  // map here I will come back here
  customerListMap:Map<Number, String> = new Map();

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.customerList$ = this.service.getCustomer();
    this.jobList$ = this.service.getJob();
    this.proposalList$ = this.service.getProposal();
  }

  modalAdd() {
    this.customer = {
      id:0,
      username:null,
      password:null,
      email:null,
      job:null,
      proposal:null
    }
    this.modelTitle = "Add Customer";
    this.activateAddEditCustomerComponent = true;
  }

// add variables
modelTitle: string = "";
activateAddEditCustomerComponent: boolean = false;
customer:any;
}

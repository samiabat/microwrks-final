import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data!: any;
  username!: string;
  check = false;

  constructor(private sharedService:CustomerService) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser(){
    return this.sharedService.getProfile().subscribe((response) =>{
      this.sharedService.getCustomerByUsername(response["user"]).subscribe((res)=>{
        this.check = true;
        this.data = res;
      })
    })
  }

}

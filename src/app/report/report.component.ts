import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ShowJobComponent } from '../job/show-job/show-job.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  form:any = FormGroup;
  job = ShowJobComponent.getId();
  id = this.job.id;
  poster = this.job.customer
  check = false;
  userId!:Number|String;


  constructor(private sharedService:CustomerService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getInfo();
  }


  getInfo() {
    this.sharedService.getCustomerByUsername(this.poster).subscribe((response)=>{
      this.userId = response.id;
        this.form = this.fb.group({
          jobPoster:[this.userId],
          job:[this.id],
        })
        this.check = true;
    })
  }

  reportSubmit(data:any){
    this.sharedService.report(this.form.getRawValue())
      .subscribe((res)=>{
        alert(res);
      });
  }
}

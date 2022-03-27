import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { ShowJobComponent } from '../show-job/show-job.component';

@Component({
  selector: 'app-add-edit-job',
  templateUrl: './add-edit-job.component.html',
  styleUrls: ['./add-edit-job.component.css']
})
export class AddEditJobComponent implements OnInit {

  form:any = FormGroup;
  job:any;
  user!:any;
  isEdit = false;
  id = ShowJobComponent.getId();

  constructor(private fb:FormBuilder, private router:Router, private sharedService:CustomerService) { }


  ngOnInit(): void {
    this.getCurrentUser()
    if (this.id !=undefined) {
      this.isEdit = true;
    }
    if (!this.isEdit) {
      this.form = this.fb.group({
        title:["", Validators.required],
        customer:[this.user, Validators.required],
        description:["", Validators.required],
        status:["", Validators.required],
        salary:["", Validators.required],
      }
    )
  }
  else{
    this.job = this.id;
    this.form = this.fb.group({
        title:[this.job.title, Validators.required],
        customer:[this.job.customer, Validators.required],
        description:[this.job.description, Validators.required],
        status:[this.job.status, Validators.required],
        salary:[this.job.salary, Validators.required],
      })
    }
  }


  jobSubmit(data:any){
    this.sharedService.addJob(this.form.getRawValue())
      .subscribe((res)=>{
        this.form.reset();
        this.router.navigate(['/jobs'])
        alert(res);
      });
  }

  jobEdit(){
    this.sharedService.updateJob(this.job.id, this.form.getRawValue())
      .subscribe((res)=>{
        this.form.reset();
        this.router.navigate(['/jobs'])
        alert(res);
      });
  }

  getCurrentUser(){
    return this.sharedService.getProfile().subscribe((response)=>{
      this.user = response["user"];
    })
  }

}

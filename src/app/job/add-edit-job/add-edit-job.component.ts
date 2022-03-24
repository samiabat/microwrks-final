import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Jobid } from '../show-job/show-job.component';

@Component({
  selector: 'app-add-edit-job',
  templateUrl: './add-edit-job.component.html',
  styleUrls: ['./add-edit-job.component.css']
})
export class AddEditJobComponent implements OnInit {

  form:any = FormGroup;
  user:any;
  isEdit:boolean = false;

  constructor(private fb:FormBuilder, private router:Router, private sharedService:CustomerService) { }


  ngOnInit(): void {
    console.log(Jobid.id);
    this.getCurrentUser();
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

}
  }

  jobSubmit(data:any){
    console.log(this.form);
    this.sharedService.addJob(this.form.getRawValue())
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

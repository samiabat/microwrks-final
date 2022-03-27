import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';
import { ShowJobComponent } from 'src/app/job/show-job/show-job.component';

@Component({
  selector: 'app-add-edit-proposal',
  templateUrl: './add-edit-proposal.component.html',
  styleUrls: ['./add-edit-proposal.component.css']
})
export class AddEditProposalComponent implements OnInit {

  form:any = FormGroup;
  user!:any;
  isEdit = false;
  job = ShowJobComponent.getId();
  id = this.job.id;

  constructor(private fb:FormBuilder, private router:Router, private sharedService:CustomerService) { }

  ngOnInit(): void {
    console.log(this.job.id)
    this.getCurrentUser()
      this.form = this.fb.group({
        jobApplyer:[this.user, Validators.required],
        proposal:["", Validators.required],
        job:[this.id, Validators.required],
      }
    )
  }

  proposalSubmit(data:any){
    this.sharedService.addProposal(this.form.getRawValue())
      .subscribe((res)=>{
        this.form.reset();
        alert(res);
      });
  }
  getCurrentUser(){
    return this.sharedService.getProfile().subscribe((response)=>{
      this.user = response["user"];
    })
  }


}

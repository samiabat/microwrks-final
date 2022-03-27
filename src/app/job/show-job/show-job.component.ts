import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrls: ['./show-job.component.css']
})
export class ShowJobComponent implements OnInit {
  jobFilter:string="";


  user:any;
  oldJoblist:any;
  jobList:any;

  jobDeta!:any;
  newJob:any;
  static temp:any;
  static jobId:any;

  constructor(private service:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getAllJobList();
    this.refreshJobList();
    }

  deleteJob(id: any) {
    if(confirm('Are you sure you want to delete this?')){
      this.service.deleteJob(id).subscribe((response)=>{
        this.refreshJobList();
        alert(response);
      })
    }
  }


  getCurrentUser(){
    return this.service.getProfile().subscribe((response)=>{
      this.user = response["user"];
    })
  }

  refreshJobList(){
    this.service.getJob().subscribe(data =>{
      this.jobDeta = data;
      this.oldJoblist = data;
    })
  }

  filterJob(){
    this.jobDeta = this.oldJoblist.filter( (e:any) => {
      return e.title.toString().trim().toLowerCase().includes(this.jobFilter);
    })
  }


  getAllJobList(){
    this.service.getJob().subscribe((job) => {
      this.jobDeta = job;
    })
  }



  setId(newId:any){
    ShowJobComponent.temp = newId;
    ShowJobComponent.getId()
  }
  static getId(){
    return this.temp;
  }
}



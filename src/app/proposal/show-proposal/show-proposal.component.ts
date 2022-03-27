import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { ShowJobComponent } from 'src/app/job/show-job/show-job.component';

@Component({
  selector: 'app-show-proposal',
  templateUrl: './show-proposal.component.html',
  styleUrls: ['./show-proposal.component.css']
})
export class ShowProposalComponent implements OnInit {

  job = ShowJobComponent.getId();
  proposalList:any;
  check = false;
  user:any;

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    if (this.job!==undefined) {
      this.user = this.job.customer;
    }
    this.getProposal()
  }

  getProposal(){
    this.service.getProposal().subscribe((data)=>{
      this.proposalList = data;
      this.check = true;
    })
  }
}

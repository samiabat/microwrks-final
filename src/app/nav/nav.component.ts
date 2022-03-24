import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user:any;

  constructor(private service:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  logout():void{
    this.service.logout()
    this.router.navigate(['login'])
  }

  loggedIn(){
    return this.service.loggedIn();
  }

  getCurrentUser(){
    return this.service.getProfile().subscribe((response) =>{
      this.user = response["user"];
    })
  }
}

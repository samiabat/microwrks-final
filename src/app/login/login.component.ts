import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private sharedService:CustomerService) { }


  ngOnInit(): void {
    this.login = this.fb.group({
      username:[" ", Validators.required],
      password:[" ", Validators.required]
    })
  }



  loginSubmit(login:FormGroup) {
    this.sharedService.login(this.login.value)
      .subscribe((res:any)=>{
        if (res['access']){
          localStorage.setItem('token', res['access']);
          this.router.navigate(["home"]);
        }
      }
      );
  }


  goToSignup(){
    this.router.navigate(['register']);
  }
}

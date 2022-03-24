import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any = FormGroup;
  user:any = [];
  constructor(private fb:FormBuilder, private router:Router, private sharedService:CustomerService) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      name:["", Validators.required],
      email:["", Validators.compose([Validators.required, Validators.email])],
      username:["", Validators.required],
      password:["", Validators.required],
      repeatPassword:[" ", Validators.required]
    })

  }

  submitRegister(data:any){
    if(data.password===data.repeatPassword){
    this.sharedService.addCustomer(data)
      .subscribe(res=>this.router.navigate(['login'])
     );
    }
    else{
      console.log("password not mach");
    }
  }

  gotToLogin(){
    this.router.navigate(['login']);
  }

}

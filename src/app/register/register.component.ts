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
      name:["", [Validators.required, Validators.minLength(4)]],
      email:["", Validators.compose([Validators.required, Validators.email])],
      username:["", [Validators.required, Validators.minLength(4)]],
      password:["", [Validators.required, Validators.minLength(4)]],
      repeatPassword:["", [Validators.required, Validators.minLength(4)]]
    })

  }

  submitRegister(data:any){
    if(data.password===data.repeatPassword){
    this.sharedService.addCustomer(data)
      .subscribe((res)=>{
        if (res!=="The User Name Already Exist!"){
        this.router.navigate(['login'])
      }
      else{
        alert(res);
      }
      }
     )
    }
    else{
      console.log("password not mach");
    }
  }

  gotToLogin(){
    this.router.navigate(['login']);
  }

  getClass(form:any, fieldname:any):string{
    let classList="form-control ";

    if (form.get(fieldname).invalid && form.get(fieldname).touched){
     classList += "is-invalid"
    } else{
     classList += "is-valid"
    }

    return classList;
    }

}

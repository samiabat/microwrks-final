import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { JobComponent } from './job/job.component';
import { ShowJobComponent } from './job/show-job/show-job.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuaredGuard } from './auth-guared.guard';
import { AddEditJobComponent } from './job/add-edit-job/add-edit-job.component';
import { ProposalComponent } from './proposal/proposal.component';


const routes: Routes = [{path: 'login', component: LoginComponent}, {path: 'register', component: RegisterComponent},
{path: 'home', component: CustomerComponent}, {path:"proposals", component:ProposalComponent}, {path: 'customer', component: ShowCustomerComponent}, {path: 'job', component: ShowJobComponent},
{path: 'jobs', component: JobComponent , canActivate:[AuthGuaredGuard]}, {path:'createJob', component:AddEditJobComponent, canActivate:[AuthGuaredGuard]}, {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ReactiveFormsModule]
})
export class AppRoutingModule { }

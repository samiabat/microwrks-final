import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { JobComponent } from './job/job.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { AddEditCustomerComponent } from './customer/add-edit-customer/add-edit-customer.component';
import { ShowJobComponent } from './job/show-job/show-job.component';
import { AddEditJobComponent } from './job/add-edit-job/add-edit-job.component';
import { ShowProposalComponent } from './proposal/show-proposal/show-proposal.component';
import { AddEditProposalComponent } from './proposal/add-edit-proposal/add-edit-proposal.component';

import { CustomerService } from './customer.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatCommonModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { IntercepterService } from './intercepter.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    JobComponent,
    ProposalComponent,
    ShowCustomerComponent,
    AddEditCustomerComponent,
    ShowJobComponent,
    AddEditJobComponent,
    ShowProposalComponent,
    AddEditProposalComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatCommonModule,
    MatInputModule,
  ],
  providers: [ CustomerService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: IntercepterService,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly ApiUrl  = "http://localhost:8000";

  constructor(private http:HttpClient) {}

  login(data:any){
    return this.http.post(this.ApiUrl + "/api/login/", data);
  }

  getProfile():Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/profile/`)
  }

  getCustomer():Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/customers/`)
  }

  getCustomerByUsername(username:string):Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/customers/${username}/`)
  }

  addCustomer(data:any){
    return this.http.post(this.ApiUrl + `/customers/`, data);
  }

  updateCustomer(id:Number|String, data:any){
    return this.http.put(this.ApiUrl + `/customers/${id}/`, data);
  }

  deleteCustomer(id:Number|String){
    return this.http.delete(this.ApiUrl + `/customers/${id}/`);
  }
  getJob():Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/jobs/`);
  }

  getJobbyId(id:any):Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/jobs/${id}/`)
  }

  addJob(data:any){
    return this.http.post(this.ApiUrl + `/jobs/`, data);
  }

  updateJob(id:Number|String, data:any){
    return this.http.put(this.ApiUrl + `/jobs/${id}/`, data);
  }

  deleteJob(id:any){
    return this.http.delete(this.ApiUrl + `/jobs/` + id);
  }


  getProposal():Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/proposals/`);
  }

  getProposalByJob(job:any):Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/proposals/${job}/`)
  }

  getProposalById(id:any):Observable<any> {
    return this.http.get<any>(this.ApiUrl + `/proposals/${id}/`)
  }
  addProposal(data:any){
    return this.http.post(this.ApiUrl + `/proposals/`, data);
  }

  updateProposal(id:Number|String, data:any){
    return this.http.put(this.ApiUrl + `/proposals/${id}/`, data);
  }

  deleteProposal(id:Number|String){
    return this.http.delete(this.ApiUrl + `/proposals/${id}/`);
  }
  loggedIn(){
  return !!localStorage.getItem('token');
  }

  getToken(){
  return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }
}

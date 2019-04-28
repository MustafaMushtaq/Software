import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from "@angular/router";
@Injectable()
export class CustomerService {

  stream: any = {};

  constructor(private http: HttpClient, private router: Router) {
  }
  
  createCustomer(customer:any){
    return new Promise((resolve, reject) => {
      this.http.post('web/customers/create-customer', customer).subscribe((res: any) => {
       resolve(res);
     }, (error: any) => {
       console.log(error)
       reject(error.error);
     });
   });
  }
  getSingleCustomer(customerId:any) {
    let url = `web/customers/get-single-customer/${customerId}`
    return this.http.get(url);
  }

  deleteCustomerById(customerId : any){
    let url = `web/customers/delete-customer/${customerId}`
    return this.http.delete(url);
  }
  getCustomers(){
    let url = `web/customers/get-customers`;
    return  this.http.get(url)
}
}
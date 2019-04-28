import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from "@angular/router";
@Injectable()
export class TransactionService {

  stream: any = {};

  constructor(private http: HttpClient, private router: Router) {
  }
  
  createTransaction(transaction:any){
    return new Promise((resolve, reject) => {
      this.http.post('web/transactions/create-transaction', transaction).subscribe((res: any) => {
       resolve(res);
     }, (error: any) => {
       console.log(error)
       reject(error.error);
     });
   });
  }

  getFilterTransactions(date:any){
    let url = `web/transactions/get-transactions?search=${date}`
    return this.http.get(url);
  }
  deleteCustomerById(customerId : any){
    let url = `web/customers/delete-customer/${customerId}`
    return this.http.delete(url);
  }
}
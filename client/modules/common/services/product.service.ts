import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from "@angular/router";
@Injectable()
export class ProductService {

  product: any = {};

  constructor(private http: HttpClient, private router: Router) {
  }
  
  createProduct(product:any){
    return new Promise((resolve, reject) => {
      this.http.post('web/products/create-product', product).subscribe((res: any) => {
       resolve(res);
     }, (error: any) => {
       console.log(error)
       reject(error.error);
     });
   });
  }
 
  getProducts(){
      let url = `web/products/get-products`;
      return  this.http.get(url)
  }
  getProductCustomers(product:any){
    let url = `web/products/get-products?search=${product}`;
    return  this.http.get(url)
}
}
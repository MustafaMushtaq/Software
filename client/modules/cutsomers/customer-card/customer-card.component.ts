import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../../common/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'customer-card-app',
  templateUrl: './customer-card.html',
  styleUrls: ['./customer-card.scss']
})
export class CustomerCardComponent implements OnInit { 
  constructor(private customerService: CustomerService,private route: ActivatedRoute, private router: Router){

  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.customerId = params['id'];
      console.log("this.streamId",  this.customerId)
   });
    this.getCustomer()
  }
  
  customer:any={
    fullName:'',
    email:'',
    phoneNumber:'',
    address:'',
    createdAt:'',
    totalPurchases:'0',
    _id:'',
  };
title:any="Customer Card";
sub:any="";
customerId:any="";
totalPurchases : any="0"
getCustomer(){
  this.customerService.getSingleCustomer(this.customerId).subscribe((res:any)=>{
    this.customer = res.body.customer;
    this.customer.createdAt = moment(this.customer.createdAt).format('L');
    if(this.customer.products){
      this.customer.products.forEach((element:any) => {
        this.totalPurchases += parseInt(element.price)
      });
      this.customer.totalPurchases = this.totalPurchases
    }
    else{
      this.customer.totalPurchases = this.totalPurchases
    }
  })
}
}

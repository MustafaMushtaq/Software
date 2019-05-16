import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../../common/services/customer.service';


@Component({
  selector: 'create-customer-app',
  templateUrl: './create-customer.html',
  styleUrls: ['./create-customer.scss']
})
export class CreateCustomerComponent implements OnInit { 
  constructor( private route: ActivatedRoute, private router: Router, private customerService : CustomerService){

  }
  title : any = "Add/Remove Customer";
  customer:any={
    fullName:'',
    phoneNumber:'',
    email:'',
    gender:'',
    address:''
  }
  customerId:any="";
  customerRes:any="";
  statusMessage:any="";
  alert:any="";
  ngOnInit() {
  }
  createCustomer(){
    this.customerService.createCustomer(this.customer).then((res: any) => {
     this.customerRes = res.body.customer
     this.router.navigate(['/menu-list'])
     
    }).catch((error) => {
      console.log("Error: ", error)
    })
  }
  
  deleteCustomer() {
    var txt;
    if (confirm("Delete customer?")) {
      this.customerService.deleteCustomerById(this.customerId).subscribe((res: any) => {
        this.statusMessage = res.status.message
        this.customerId="";
      }, (error)=>{
        this.statusMessage = "Something went wrong. Customer ID may be wrong."
      })
    } else {
      txt = "You pressed Cancel!";
    }
  
  }
}

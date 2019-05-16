import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../../common/services/customer.service';


@Component({
  selector: 'filter-customers-app',
  templateUrl: './filter-customers.html',
  styleUrls: ['./filter-customers.scss']
})
export class FilterCustomersComponent implements OnInit { 
  constructor( private route: ActivatedRoute, private router: Router, private customerService : CustomerService){

  }
  title : any = "Search/Filter Customers"

  customer:any={
    fullName:'',
    phoneNumber:'',
    email:'',
    gender:'',
    address:''
  }
  customers:any=[]
  customerId:any=""
  ngOnInit() {
  }
  createCustomer(){
    this.router.navigate(['/menu-list'])
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe((res: any) => {
      this.customers = res.body.customers;
    }, (error)=>{
    })
  }
  deleteCustomer(){
    this.router.navigate(['/menu-list'])
  }
}

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'filter-customers-app',
  templateUrl: './filter-customers.html',
  styleUrls: ['./filter-customers.scss']
})
export class FilterCustomersComponent implements OnInit { 
  constructor( private route: ActivatedRoute, private router: Router){

  }
  title : any = "Search/Filter Customers"

  customer:any={
    fullName:'',
    phoneNumber:'',
    email:'',
    gender:'',
    address:''
  }
  customerId:any=""
  ngOnInit() {
  }
  createCustomer(){
    this.router.navigate(['/menu-list'])
  }
  
  deleteCustomer(){
    this.router.navigate(['/menu-list'])
  }
}

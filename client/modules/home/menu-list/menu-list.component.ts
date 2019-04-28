import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'menu-list-app',
  templateUrl: './menu-list.html',
  styleUrls: ['./menu-list.scss']
})
export class MenuListComponent implements OnInit { 
  constructor(private route: ActivatedRoute, private router: Router){

  }
  title : any = "Customer Relation Management";
  alert : any = ""
  menu:any=[
    {
      menuName:"Add/Remove Customer",
      link: '/create-customer'
    },
    {
      menuName:"Add Transaction",
      link: '/create-transaction'
    },
    {
      menuName:"Email Customers",
      link: '/send-email'
    },  
    {
      menuName:"Search/Filters Customers",
      link: '/filter-customers'
    },
    {
      menuName:"View Transaction History",
      link: '/filter-transactions'
    },
    {
      menuName:"Classifier",
      link: '/classifier'
    },
    {
      menuName:"Customer Feedback",
      link: '/customer-feedback'
    },
    {
      menuName:"Product-wise listings",
      link: '/product-wise-listing'
    }
  ]
  ngOnInit() {
  }
  navigateTo(link:any){
    if(link == '/classifier'){
      this.alert = window.alert('Classifier is under Construction')
    }
    this.router.navigate([link])
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from "../../common/services/user.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-guide-app',
  templateUrl: './user-guide.html',
  styleUrls: ['./user-guide.scss']
})
export class UserGuideComponent implements OnInit {
    constructor(private userService: UserService, private router: Router){

    }
    title:any="User Guide";
    userGuide:any=[{
      name:"Create User",
      description:"Click here to create a new user",
      link:'/create-user'
    },
    {
      name:"Add Product",
      description:"Click here to create a new product",
      link:'/create-product'
    },
    {
      name:"Delete Customer",
      description:"Click here to delete a customer",
      link:'/create-customer'
    },
    {
      name:"Add Transaction",
      description:"Click here to create a new transaction",
      link:'/create-transaction'
    }
  ]
  isAdmin:boolean=true

    ngOnInit() {
      this.userService.getMe().then((res:any)=>{
        console.log("res",res)
        if(res.body.user.role != "admin"){
          this.isAdmin = false
      this.userGuide[0].name ="Create Customer";
      this.userGuide[0].description="Click here to create a new customer";
      this.userGuide[0].link="/create-customer";
      
        }
      })
    }
 
}
import { Component, OnInit } from '@angular/core';
import { UserService } from "../../common/services/user.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'customer-feedback-app',
  templateUrl: './customer-feedback.html',
  styleUrls: ['./customer-feedback.scss']
})
export class CustomerFeedbackComponent implements OnInit {
    constructor(private userService: UserService, private router: Router){

    }
    title:any="Customer Feedback";
    feedback:any=[{
      name:"Customer Name",
      description:"FEEDBACK",
    },
    {
      name:"Customer Name",
      description:"FEEDBACK",
    },
    {
      name:"Customer Name",
      description:"FEEDBACK",
    },
    {
      name:"Customer Name",
      description:"FEEDBACK",
    }
  ]
  isAdmin:boolean=true

    ngOnInit() {
 
    }
 
}
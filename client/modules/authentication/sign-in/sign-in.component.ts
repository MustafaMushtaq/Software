import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../common/services/user.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sign-in-app',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss']
})
export class SignInComponent implements OnInit {
    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){

    }
    title:any=""
    user:any={
      email:"",
      password:"",
      role:""
    }
    sub:any="";
    statusMessage : any =""
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.user.role = params['role'];
        if(this.user.role=="admin")
        this.user.role = "administrator"
        this.title =  this.user.role.charAt(0).toUpperCase() + this.user.role.slice(1) +" "+ "Authentication";
     });
    }
    
    signIn(){
      this.userService.signIn(this.user).then((res)=>{
          console.log("Sign In: ",res)
          if(this.user.role != "admin"){
          this.router.navigate(['/menu-list'])
          }
      }).catch((error)=>{
        console.log("Error: ", error);
        this.statusMessage = error.status.message
      })
    }
}
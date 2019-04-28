import { Component, OnInit } from '@angular/core';
import { UserService } from "../../common/services/user.service";
@Component({
  selector: 'create-user-app',
  templateUrl: './create-user.html',
  styleUrls: ['./create-user.scss']
})
export class CreateUserComponent implements OnInit {
    constructor(private userService: UserService){

    }
    title:any="Create User";

    user:any={
      email:"",
      password:"",
      fullName:"",
      phoneNumber: "",
      joiningDate:""
    }
    ngOnInit() {

    }
    signUp(){
      this.userService.createUser(this.user).then((res)=>{
          console.log("Sign Up: ",res)
      }).catch((error)=>{
        console.log("Error: ", error)
      })
    }
}
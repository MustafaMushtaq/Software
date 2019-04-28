import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../common/services/user.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  @Input() title: any="";
  
  constructor( private userService:UserService) { }
logOut(){
  this.userService.logout();
}
}

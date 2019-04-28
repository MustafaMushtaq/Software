import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../common/services/user.service";

@Component({
  selector: 'app-email',
  templateUrl: './email.html',
  styleUrls: ['./email.scss']
})
export class EmailComponent {
  title: any="Send E-Mail";
  
  constructor( private userService:UserService) { }

}

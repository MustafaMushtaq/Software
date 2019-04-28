import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../common/services/user.service";

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.html',
  styleUrls: ['./header-footer.scss']
})
export class HeaderFooterComponent {
  @Input() title: any = "";

  constructor(private userService: UserService) { }
  logOut() {
    this.userService.logout();
  }
}

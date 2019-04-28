import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../common/services/user.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'home-menu-app',
  templateUrl: './home-menu.html',
  styleUrls: ['./home-menu.scss']
})
export class HomeMenuComponent implements OnInit {
  constructor(private user: UserService, private route: ActivatedRoute, private router: Router) {

  }
  isAdmin: boolean = true;
  alert:any=""
  ngOnInit() {
    this.user.getMe().then((res: any) => {
      console.log("res", res)
      if (res.body.user.role != "admin") {
        this.isAdmin = false
          this.router.navigate(['/menu-list'])

      }
    })
  }
  underConstruction(value: any){
    this.alert = window.alert(value+' is under Construction')
  }
  logOut() {
    this.user.logout();
  }
}

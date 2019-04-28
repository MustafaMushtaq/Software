import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'main-screen-app',
  templateUrl: './main-screen.html',
  styleUrls: ['./main-screen.scss']
})
export class MainScreenComponent implements OnInit {
    constructor(){

    }
    role:any={
      admin:"admin",
      user:"user"
    }
    ngOnInit() {
    }
   
}
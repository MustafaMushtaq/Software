import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class UserService {

  user: any = {};

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
  }

  getMe(){
    return new Promise ((resolve, reject)=>{
      if(Object.keys(this.user).length != 0){
        resolve ({body: {user: this.user}})
      }
      else {
        this.http.get('web/users/me', {}).subscribe((res:any)=>{
          Object.assign(this.user, res.body.user)
          resolve(res)
        }, (error: any)=>{
          reject (error.error)
        })
      }
    })
  }

  signIn(user:any){
    return new Promise((resolve, reject) => {
         this.http.post('web/users/sign-in', user).subscribe((res: any) => {
         this.cookieService.set( 'token',  res.body.token, 15 );
         if(res.body.user.role=='admin'){
          this.router.navigate(['/home-menu'])
        }
        else{
          this.router.navigate(['/home-menu'])
        }
          resolve(res);
        }, (error: any) => {
          console.log(error)
          reject(error.error);
        });
      });
  }

  logout(){
    this.user ={}
    this.cookieService.deleteAll();
    this.router.navigate(['main-screen'])
  }
  createUser(user:any){
    return new Promise((resolve, reject) => {
      this.http.post('web/users/create-user', user).subscribe((res: any) => {
        resolve(res);
        this.router.navigate(['/home-menu'])
      }, (error: any) => {
        console.log(error)
        reject(error.error);
      });
    });
  }

}
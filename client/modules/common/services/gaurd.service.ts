import { CookieService } from 'ngx-cookie-service';
import {Injectable} from '@angular/core';
import { UserService } from './user.service';
import {Router , CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class GaurdService implements CanActivate {
    constructor(private router:Router, private userService:UserService, private cookieService:CookieService){}

    canActivate(): boolean | Observable <boolean> | Promise<boolean>
    {
        if(!this.cookieService.get('token')){
            this.router.navigate(['/main-screen']);
            return false;
        }
        return new Promise ((resolve, reject)=>{
            this.userService.getMe().then((res:any)=>{
                if (res.body.user){
                    resolve(true)
                }
                else{
                    this.router.navigate(['/main-screen'])
                    resolve(false)
                }
            }).catch((err)=>{
                this.router.navigate(['/main-screen'])
                reject(false)
            })
        })
    }
}
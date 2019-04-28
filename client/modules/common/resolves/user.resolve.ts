import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { UserService } from './../services/user.service';

@Injectable()
export class UserResolver  implements Resolve <any>{
    constructor (private userService: UserService, private router: Router){}

    resolve(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>{
        return new Promise ((resolve, reject)=>{
            this.userService.getMe().then((res:any)=>{
                resolve(res.body.user)
            }).catch((error)=>{
                this.router.navigate(['/main-screen'])
                reject(error)
            })
        })
    }
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home.component";
import { HomeMenuComponent } from "./home-menu/home-menu.component";
import { MenuListComponent } from "./menu-list/menu-list.component";
import { GaurdService } from './../common/services/gaurd.service';
import { UserResolver } from './../common/resolves/user.resolve';
const routes: Routes = [
  {
    path: '',
    canActivate: [GaurdService],
    resolve:{
      user: UserResolver
    },
    component: HomeComponent,
    
    children: [
      {
        path: 'home-menu',
        component: HomeMenuComponent,
      },
      {
        path: 'menu-list',
        component: MenuListComponent,
      }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class homeRoutesModule {
}

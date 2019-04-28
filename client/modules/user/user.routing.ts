import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { GaurdService } from './../common/services/gaurd.service';
import { UserResolver } from './../common/resolves/user.resolve';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { EmailComponent } from './email-user/email.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [GaurdService],
    resolve:{
      user: UserResolver
    },
    component: UserComponent,
    children: [
      {
        path: 'create-user',
        component: CreateUserComponent,
      },
      {
        path: 'user-guide',
        component: UserGuideComponent,
      },
      {
        path: 'send-email',
        component: EmailComponent,
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

export class userRoutesModule {
}

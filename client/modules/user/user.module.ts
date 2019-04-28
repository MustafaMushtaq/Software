import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userRoutesModule } from './user.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { EmailComponent } from './email-user/email.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserComponent,
    CreateUserComponent,
    UserGuideComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    userRoutesModule,
    SharedModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  // schemas: [ NO_ERRORS_SCHEMA ]

})
export class UserModule { }

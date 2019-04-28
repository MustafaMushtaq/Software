import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authenticationRoutesModule } from './authentication.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationComponent } from './authentication.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderFooterComponent } from '../header-footer/header-footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    authenticationRoutesModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  // schemas: [ NO_ERRORS_SCHEMA ]

})
export class AuthenticationModule { }

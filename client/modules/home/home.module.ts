import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRoutesModule } from './home.routing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from "./home.component";
import { HomeMenuComponent } from "./home-menu/home-menu.component";
import { MenuListComponent } from "./menu-list/menu-list.component";
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderFooterComponent } from '../header-footer/header-footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeMenuComponent,
    MenuListComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    homeRoutesModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  // schemas: [ NO_ERRORS_SCHEMA ]

})
export class HomeModule { }

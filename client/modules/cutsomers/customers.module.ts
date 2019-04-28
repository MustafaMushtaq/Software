import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customersRoutingModule } from './customers.routing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersComponent } from "./customers.component";
import { CreateCustomerComponent } from "./create-customer/create-cutomer.component";
import { FilterCustomersComponent } from "./filter-customers/filter-customers.component";
import { CustomerCardComponent } from "./customer-card/customer-card.component";
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerFeedbackComponent } from "./customer-feedback/customer-feedback.component";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CreateCustomerComponent,
    FilterCustomersComponent,
    CustomerCardComponent,
    CustomerFeedbackComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    customersRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  // schemas: [ NO_ERRORS_SCHEMA ]

})
export class CustomersModule { }

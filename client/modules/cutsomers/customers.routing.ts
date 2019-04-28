import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from "./customers.component";
import { CreateCustomerComponent } from "./create-customer/create-cutomer.component";
import { FilterCustomersComponent } from "./filter-customers/filter-customers.component";
import { CustomerCardComponent } from "./customer-card/customer-card.component";
import { CustomerFeedbackComponent } from "./customer-feedback/customer-feedback.component";
import { GaurdService } from './../common/services/gaurd.service';
import { UserResolver } from './../common/resolves/user.resolve';
const routes: Routes = [
  {
    path: '',
    canActivate: [GaurdService],
    resolve:{
      user: UserResolver
    },
    component: CustomersComponent,
    
    children: [
      {
        path: 'create-customer',
        component: CreateCustomerComponent,
      },
      {
        path: 'filter-customers',
        component: FilterCustomersComponent,
      },
      {
        path: 'customer-card/:id',
        component: CustomerCardComponent,
      },
      {
        path: 'customer-feedback',
        component: CustomerFeedbackComponent,
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

export class customersRoutingModule {
}

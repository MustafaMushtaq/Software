import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transactionRoutingModule } from './transactions.routing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionComponent } from "./transactions.component";
import { CreateTransactionComponent } from "./create-transaction/create-transaction.component";
import { FilterTransactionsComponent } from "./filter-transactions/filter-transactions.component";
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TransactionComponent,
    CreateTransactionComponent,
    FilterTransactionsComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule,
    transactionRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  // schemas: [ NO_ERRORS_SCHEMA ]

})
export class TransactionModule { }

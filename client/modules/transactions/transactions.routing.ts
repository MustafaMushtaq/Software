import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from "./transactions.component";
import { CreateTransactionComponent } from "./create-transaction/create-transaction.component";
import { FilterTransactionsComponent } from "./filter-transactions/filter-transactions.component";
import { GaurdService } from './../common/services/gaurd.service';
import { UserResolver } from './../common/resolves/user.resolve';
const routes: Routes = [
  {
    path: '',
    canActivate: [GaurdService],
    resolve:{
      user: UserResolver
    },
    component: TransactionComponent,
    
    children: [
      {
        path: 'create-transaction',
        component: CreateTransactionComponent,
      },
      {
        path: 'filter-transactions',
        component: FilterTransactionsComponent,
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

export class transactionRoutingModule {
}

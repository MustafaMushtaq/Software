import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from './../../common/services/transaction.service';


@Component({
  selector: 'filter-transactions-app',
  templateUrl: './filter-transactions.html',
  styleUrls: ['./filter-transactions.scss']
})
export class FilterTransactionsComponent implements OnInit { 
  constructor( private route: ActivatedRoute, private router: Router, private transactionService: TransactionService){

  }
  title : any = "View Transaction History"

    date:any=''
    transactions:any=''
  
  ngOnInit() {
  }
  getFilterTransactions(){
    this.transactionService.getFilterTransactions(this.date).subscribe((res:any)=>{
      this.transactions = res.body.transactions
      console.log("asdasd", res.body.transactions)
    })
}
  
  deleteCustomer(){
    this.router.navigate(['/menu-list'])
  }
}

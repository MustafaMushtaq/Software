import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from './../../common/services/transaction.service';
import { ProductService } from './../../common/services/product.service';
import { CustomerService } from './../../common/services/customer.service';

@Component({
  selector: 'create-transaction-app',
  templateUrl: './create-transaction.html',
  styleUrls: ['./create-transaction.scss']
})
export class CreateTransactionComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private transactionService: TransactionService, private customerService: CustomerService, private productService: ProductService) {

  }

  transaction: any = {
    customer: '',
    bill: '0',
    salesPerson: '',
    joiningDate: '',
    comments: ''
  }
  customerId: any = "";
  title: any = "Add Transaction"
  products: any = "";
  customers: any = "";
  ngOnInit() {
    this.getProducts();
    this.getCustomers();
  }

  createTransaction() {
    this.transactionService.createTransaction(this.transaction).then((res: any) => {
      this.router.navigate(['/menu-list'])
    }).catch((error) => {
      console.log("Error: ", error)
    })
  }
  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res.body.products
    })
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe((res: any) => {
      this.customers = res.body.customers
    })
  }
  setBill(id:any){
  
    console.log("dasad", id)
    this.transaction.bill = this.products.forEach((element: any) => {
      if(element._id == id){
        this.transaction.bill = element.price
    console.log("dasad", this.transaction.bill)

      }
    });
  }
}

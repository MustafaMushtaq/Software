import { Component,OnInit } from '@angular/core';
import { ProductService } from './../../common/services/product.service';


@Component({
  selector: 'list-products-app',
  templateUrl: './list-products.html',
  styleUrls: ['./list-products.scss']
})
export class ListProductsComponent implements OnInit { 
  constructor(private productService: ProductService){

  }
  product:any=""
  title: any ="Product-wise Listings";
  products:any=[{
    customers:[]
  }]
  ngOnInit() {
  }
  getProductCustomers(){
      this.productService.getProductCustomers(this.product).subscribe((res:any)=>{
        this.products = res.body.products
      })
  }
}

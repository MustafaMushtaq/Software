import { Component,OnInit } from '@angular/core';
import { ProductService } from './../../common/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'add-product-app',
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.scss']
})
export class AddProductComponent implements OnInit { 
  constructor(private productService: ProductService,private route: ActivatedRoute, private router: Router){

  }
  ngOnInit() {
  }
  product:any={
    name:'',
    date:'',
    price:'',
    comments:'',
  };
title:any="Add Product"
  createProduct(){
    this.productService.createProduct(this.product).then((res: any) => {
     this.router.navigate(['/menu-list'])
     
    }).catch((error) => {
      console.log("Error: ", error)
    })
  }
}

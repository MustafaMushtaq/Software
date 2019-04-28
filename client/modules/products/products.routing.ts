import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./products.component";
import { ListProductsComponent } from "./list-products/list-products.component";
import { AddProductComponent } from "./add-product/add-product.component";
const routes: Routes = [
  {
    path: '',
 
    component: ProductsComponent,
    
    children: [
      {
        path: 'product-wise-listing',
        component: ListProductsComponent,
      },
      {
        path: 'create-product',
        component: AddProductComponent,
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

export class productsRoutesModule {
}

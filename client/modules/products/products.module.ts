import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productsRoutesModule } from './products.routing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from "./products.component";
import { ListProductsComponent } from "./list-products/list-products.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ListProductsComponent,
    AddProductComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    productsRoutesModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  // schemas: [ NO_ERRORS_SCHEMA ]

})
export class ProductsModule { }

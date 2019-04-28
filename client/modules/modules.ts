import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';

import { AppRoutingModule } from './routing.module';
import { AuthenticationModule }  from './authentication/authentication.module';
import { UserModule }  from './user/user.module';
import { ProductsModule }  from './products/products.module'
import { HomeModule }  from './home/home.module'
import { CustomersModule }  from './cutsomers/customers.module';
import { TransactionModule }  from './transactions/transactions.module';

import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './common/http-interceptor/http.interceptor';

import { UserService } from './common/services/user.service';
import { CustomerService } from './common/services/customer.service';
import { GaurdService } from './common/services/gaurd.service';
import { ProductService } from './common/services/product.service';
import { TransactionService } from './common/services/transaction.service';

import { UserResolver } from './common/resolves/user.resolve';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    CommonModule,
    ProductsModule,
    HomeModule,
    UserModule,
    CustomersModule,
    TransactionModule,
    HttpClientModule
  ],
  declarations: [
    WelcomeComponent,
    StyleGuideComponent,
    MainScreenComponent,
  ],
  providers: [ 
    CookieService,
    UserService,
    GaurdService,
    CustomerService,
    ProductService,
    TransactionService,
    UserResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
   ],
  bootstrap: [ WelcomeComponent ]
})
export class AppModule { }

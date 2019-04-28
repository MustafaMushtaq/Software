import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFooterComponent } from './../header-footer/header-footer.component';
import { FooterComponent } from './../footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderFooterComponent,FooterComponent],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule.forRoot()
  ],
  exports: [HeaderFooterComponent,FooterComponent]
})
export class SharedModule { }

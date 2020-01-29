import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { MypipePipe } from './mypipe.pipe';
@NgModule({
  declarations: [PageComponent, ContactUsComponent, MypipePipe],
  imports: [
    CommonModule,
    StaticpagesRoutingModule, ReactiveFormsModule
  ]
})
export class StaticpagesModule { }

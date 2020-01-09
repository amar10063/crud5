import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {  ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [PageComponent, ContactUsComponent],
  imports: [
    CommonModule,
    StaticpagesRoutingModule, ReactiveFormsModule
  ]
})
export class StaticpagesModule { }

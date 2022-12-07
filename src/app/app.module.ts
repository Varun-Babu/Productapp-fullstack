import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewPrdouctsComponent } from './view-prdoucts/view-prdoucts.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute : Routes = [
  {
    path:"",
    component:AddProductsComponent
  },
  {
    path:"view",
    component:ViewPrdouctsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    ViewPrdouctsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

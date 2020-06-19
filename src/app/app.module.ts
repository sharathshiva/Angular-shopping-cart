import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {CartProductComponent} from './components/cart-product/cart-product.component';
import {ProductComponent} from './components/product/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports:      [ BrowserModule, FormsModule,MatIconModule],
  declarations: [ AppComponent,HeaderComponent,CartProductComponent,ProductComponent,ProductListComponent,ShoppingCartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

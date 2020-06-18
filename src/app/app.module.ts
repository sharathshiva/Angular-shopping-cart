import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {CartProductComponent} from './components/cart-product/cart-product.component';
import {ProductComponent} from './components/product/product.component';import {ProductListComponent} from './components/product-list/product-list.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,HeaderComponent,CartProductComponent,ProductComponent,ProductListComponent,ShoppingCartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

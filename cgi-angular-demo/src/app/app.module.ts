import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ProductComponent } from './components/products/product/product.component';
import {MatIconModule} from "@angular/material/icon";

const components = [

  AppComponent,
  HeaderComponent,
  HomeComponent,
  ProductComponent,
  ProductsComponent
];

const modules = [
  AppRoutingModule,
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule
];

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
]

@NgModule({
  declarations: [
    ...components

  ],
  // exports: [
  //   ...materialModules
  // ],
  imports: [
    ...materialModules,
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

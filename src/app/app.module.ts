import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetGenderPipe } from './pipes/get-gender/get-gender.pipe';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { BasketState } from '../shared/states/basket.state';
import { HeaderComponent } from './components/header/header.component';
import { BasketComponent } from './components/basket/basket.component';
import { ClientAccountComponent } from './components/client-account/client-account.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    GetGenderPipe,
    SearchBarComponent,
    HeaderComponent,
    BasketComponent,
    ClientAccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([BasketState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

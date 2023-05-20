import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,

    TopBarComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  carrito: CarritoComprasComponent = new CarritoComprasComponent();
 }

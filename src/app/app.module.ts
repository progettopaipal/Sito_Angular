import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TestaComponent } from './testa/testa.component';
import { ContenutoComponent } from './contenuto/contenuto.component';
import { PiedeComponent } from './piede/piede.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { Contenuto2Component } from './contenuto2/contenuto2.component';
import { BarraComponent } from './barra/barra.component';
import { ContVideoComponent } from './cont-video/cont-video.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TestaComponent,
    ContenutoComponent,
    PiedeComponent,
    PrimoComponent,
    SecondoComponent,
    Contenuto2Component,
    BarraComponent,
    ContVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

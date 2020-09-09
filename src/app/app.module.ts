import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeachBarComponent } from './seach-bar/seach-bar.component';
import { FilmPlaceholdComponent } from './film-placehold/film-placehold.component';
import { HttpClientModule } from '@angular/common/http';
import { ListfilmsComponent } from './listfilms/listfilms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeachBarComponent,
    FilmPlaceholdComponent,
    ListfilmsComponent
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

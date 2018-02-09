import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoffeeBrowserComponent } from './coffee-browser/coffee-browser.component';
import { CockpitComponent } from './coffee-browser/cockpit/cockpit.component';
import { CoffeeSearchComponent } from './coffee-browser/cockpit/coffee-search/coffee-search.component';
import { CoffeeFilterComponent } from './coffee-browser/cockpit/coffee-filter/coffee-filter.component';
import { CoffeesComponent } from './coffee-browser/coffees/coffees.component';
import { CoffeeComponent } from './coffee-browser/coffees/coffee/coffee.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoffeeBrowserComponent,
    CockpitComponent,
    CoffeeSearchComponent,
    CoffeeFilterComponent,
    CoffeesComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

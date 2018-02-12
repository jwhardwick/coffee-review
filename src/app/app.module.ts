import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoffeeBrowserComponent } from './coffee-browser/coffee-browser.component';
import { CockpitComponent } from './coffee-browser/cockpit/cockpit.component';
import { CoffeeSearchComponent } from './coffee-browser/cockpit/coffee-search/coffee-search.component';
import { CoffeeFilterComponent } from './coffee-browser/cockpit/coffee-filter/coffee-filter.component';
import { CoffeesComponent } from './coffee-browser/coffees/coffees.component';
import { CoffeeComponent } from './coffee-browser/coffees/coffee/coffee.component';
import { RoasterBrowserComponent } from './roaster-browser/roaster-browser.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { RoasterDetailComponent } from './roaster-detail/roaster-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AccountNavComponent } from './header/account-nav/account-nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyCoffeesComponent } from './my-coffees/my-coffees.component';
import { ApiService } from './api.service';

const appRoutes: Routes = [
  { path: 'coffee-browser', component: CoffeeBrowserComponent },
  { path: 'roaster-browser', component: RoasterBrowserComponent },
  { path: 'coffee-detail/:coffeeId', component: CoffeeDetailComponent },
  { path: 'roaster-detail/:roasterId', component: RoasterDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'my-coffees/:userId', component: MyCoffeesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoffeeBrowserComponent,
    CockpitComponent,
    CoffeeSearchComponent,
    CoffeeFilterComponent,
    CoffeesComponent,
    CoffeeComponent,
    RoasterBrowserComponent,
    CoffeeDetailComponent,
    RoasterDetailComponent,
    AboutComponent,
    HomeComponent,
    AccountNavComponent,
    LoginComponent,
    RegisterComponent,
    MyCoffeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // Debugging
    )
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

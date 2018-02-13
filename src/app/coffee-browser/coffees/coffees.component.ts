import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../api.service';
import { Http } from '@angular/http';
import { Roaster } from './../../shared/roaster.model';
import { CoffeeModel } from './../../shared/coffee.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit, OnDestroy {

  coffeeListSub: Subscription;
  coffeeList: CoffeeModel[];

  constructor(private _apiService: ApiService,
              private _route: ActivatedRoute) {
                // this._route.params.subscribe( () => this.getCoffees());
              }


  ngOnInit() {
    this.getCoffees();
  }

  getCoffees() {
    this.coffeeListSub = this._apiService.getCoffees().subscribe(
      res => {
        this.coffeeList = res.map(item => {
          return new CoffeeModel(
            item.coffeeId,
            item.roasterId,
            item.coffeeName,
            item.origin,
            item.imageURL,
            item.websiteURL,
            item.details
          );
        });
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    console.log('coffees destroyed');
    if (this.coffeeListSub) {
      this.coffeeListSub.unsubscribe();
    }
  }


}

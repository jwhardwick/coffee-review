import { ApiService } from './../../api.service';
import { Http } from '@angular/http';
import { Roaster } from './../../shared/roaster.model';
import { Coffee } from './../../shared/coffee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

  public coffees;

  constructor(private _apiService: ApiService) {}


  ngOnInit() {
    this.getCoffees();
  }

  update() {
    this.getCoffees();
  }

  getCoffees() {
    this._apiService.getCoffees().subscribe(
      data => { this.coffees = data; },
      err => console.error(err),
      () => console.log(this.coffees)
    );
  }


}

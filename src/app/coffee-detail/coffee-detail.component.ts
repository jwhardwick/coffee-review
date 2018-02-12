import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

  params: Params;
  coffee;

  constructor(private route: ActivatedRoute, private _apiService: ApiService) {
    this.route.params.subscribe( params => this.params = params );
  }

  ngOnInit() {
    this.getCoffeeDetail();
  }

  update() {
    this.getCoffeeDetail();
  }

  getCoffeeDetail() {
    this._apiService.getCoffeeDetail(this.params).subscribe(
      data => { this.coffee = data; },
      err => console.error(err),
      () => console.log(this.coffee)
    );
  }

}

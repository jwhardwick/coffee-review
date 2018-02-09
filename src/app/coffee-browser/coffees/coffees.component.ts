import { Roaster } from './../../shared/roaster.model';
import { Coffee } from './../../shared/coffee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

  roasterMarketLane = new Roaster('Market Lane', 'Australia', 'Victoria', 'Melbourne', null, null);
  coffee: Coffee[] = [
    new Coffee('Kiungu', this.roasterMarketLane, 'Kenya', null, 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/k/i/kiungu_bag_image_small_1.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/kiungu'),
    new Coffee('La Liberdade', this.roasterMarketLane, 'Brazil', null, 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/l/a/la_liberdade_bag_image_small.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/la-liberdade')
  ];

  constructor() { }

  ngOnInit() {
  }

}

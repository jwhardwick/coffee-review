import { Roaster } from './../../shared/roaster.model';
import { Coffee } from './../../shared/coffee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

  roasterMarketLane = new Roaster('Market Lane', 'Australia', 'Victoria', 'Melbourne', 'https://marketlane.com.au/skin/frontend/rwd/sm/images/logo.png', 'https://marketlane.com.au/');
  roasterTobysEstate = new Roaster('Toby\'s Estate', 'Australia', 'New South Whales', 'Sydney', 'https://www.tobysestate.com.au', 'https://res-3.cloudinary.com/scentre-group-au/image/fetch/c_pad,f_auto,q_auto/http://res.cloudinary.com/scentre-group-au/image/upload/m6jplwixj6p7ropplv86.png'); 
  coffees: Coffee[] = [
    new Coffee('Kiungu', this.roasterMarketLane, 'Kenya', 'Vibrant with grilled pineapple, berries & cooking spices.', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/k/i/kiungu_bag_image_small_1.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/kiungu'),
    new Coffee('Minani Anastase', this.roasterMarketLane, 'Rwanda', 'Juicy and sweet with raisin, orange and brown sugar.', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/m/i/minani_anastase_bag_image_small.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/minani-anastase'),
    new Coffee('La Liberdade', this.roasterMarketLane, 'Brazil', 'Heavy bodied, with dark chocolate and stone fruit.', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/l/a/la_liberdade_bag_image_small.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/la-liberdade'),
    new Coffee('Kenya Kamwangi AA', this.roasterTobysEstate, 'Kenya', 'Tomato, orange candy, redcurrant', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/specialrelease_kenya_kamwangiaa_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/kenya-kamwangi-aa.html'),
    new Coffee('Ethiopia Mesina', this.roasterTobysEstate, 'Ethiopia', 'Blueberry, guava, passionfruit', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/specialrelease_ethiopia_mesina_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/ethiopia-mesina.html'),
    new Coffee('Myanmar A Lel Chaung Village', this.roasterTobysEstate, 'Myanmar', 'Blackberry, cherry, paprika', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/i/singleorigin_myanmar_alelchaungvillage_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/myanmar-a-lel-chaung-village.html'),
    new Coffee('Kiungu', this.roasterMarketLane, 'Kenya', 'Vibrant with grilled pineapple, berries & cooking spices.', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/k/i/kiungu_bag_image_small_1.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/kiungu'),
    new Coffee('Minani Anastase', this.roasterMarketLane, 'Rwanda', 'Juicy and sweet with raisin, orange and brown sugar.', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/m/i/minani_anastase_bag_image_small.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/minani-anastase'),
    new Coffee('La Liberdade', this.roasterMarketLane, 'Brazil', 'Heavy bodied, with dark chocolate and stone fruit.', 'https://marketlane.com.au/media/catalog/product/cache/1/thumbnail/421x522/9df78eab33525d08d6e5fb8d27136e95/l/a/la_liberdade_bag_image_small.jpg', 'https://marketlane.com.au/coffee/filtered-coffee/la-liberdade'),
    new Coffee('Kenya Kamwangi AA', this.roasterTobysEstate, 'Kenya', 'Tomato, orange candy, redcurrant', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/specialrelease_kenya_kamwangiaa_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/kenya-kamwangi-aa.html'),
    new Coffee('Ethiopia Mesina', this.roasterTobysEstate, 'Ethiopia', 'Blueberry, guava, passionfruit', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/specialrelease_ethiopia_mesina_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/ethiopia-mesina.html'),
    new Coffee('Myanmar A Lel Chaung Village', this.roasterTobysEstate, 'Myanmar', 'Blackberry, cherry, paprika', 'https://www.tobysestate.com.au/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/i/singleorigin_myanmar_alelchaungvillage_filter.jpg', 'https://www.tobysestate.com.au/store/coffee/filter-roast-single-origins/myanmar-a-lel-chaung-village.html')
  ];

  constructor() { }

  ngOnInit() {
  }

}

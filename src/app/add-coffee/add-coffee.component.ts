import { CoffeeModel } from './../shared/coffee.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-coffee',
  templateUrl: './add-coffee.component.html',
  styleUrls: ['./add-coffee.component.scss']
})
export class AddCoffeeComponent implements OnInit {

  @ViewChild('coffeeNameInput') coffeeNameInput: ElementRef;
  @ViewChild('roasterIdInput') roasterIdInput: ElementRef;
  @ViewChild('originInput') originInput: ElementRef;
  @ViewChild('detailsInput') detailsInput: ElementRef;
  @ViewChild('imageURLInput') imageURLInput: ElementRef;
  @ViewChild('websiteURLInput') websiteURLInput: ElementRef;


  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  addCoffee() {
    const coffeeName = this.coffeeNameInput.nativeElement.value;
    const roasterId = this.roasterIdInput.nativeElement.value;
    const details = this.detailsInput.nativeElement.value;
    const origin = this.originInput.nativeElement.value;
    const imageURL = this.imageURLInput.nativeElement.value;
    const websiteURL = this.websiteURLInput.nativeElement.value;

    const coffee = new CoffeeModel(null, roasterId, coffeeName, origin, imageURL, websiteURL, details);
    console.log(coffee);
    this._apiService.postCoffee(coffee).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

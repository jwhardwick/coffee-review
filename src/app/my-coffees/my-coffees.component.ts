import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-coffees',
  templateUrl: './my-coffees.component.html',
  styleUrls: ['./my-coffees.component.css']
})
export class MyCoffeesComponent implements OnInit {

  params: Params;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.params = params );
  }

  ngOnInit() {
  }

}

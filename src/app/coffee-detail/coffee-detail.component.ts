import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

  params: Params;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.params = params );
  }

  ngOnInit() {
  }

}

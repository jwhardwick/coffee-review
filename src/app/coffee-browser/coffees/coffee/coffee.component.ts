import { CoffeeModel } from './../../../shared/coffee.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  @Input() coffee: CoffeeModel;

  constructor() { }

  ngOnInit() {
  }

}

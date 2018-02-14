import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-roaster-detail',
  templateUrl: './roaster-detail.component.html',
  styleUrls: ['./roaster-detail.component.scss']
})
export class RoasterDetailComponent implements OnInit {

  params: Params;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.params = params );
  }

  ngOnInit() {
  }

}

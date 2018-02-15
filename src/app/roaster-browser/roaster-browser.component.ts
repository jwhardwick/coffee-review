import { RoasterModel } from './../shared/roaster.model';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roaster-browser',
  templateUrl: './roaster-browser.component.html',
  styleUrls: ['./roaster-browser.component.scss']
})
export class RoasterBrowserComponent implements OnInit {

  roasterListSub: Subscription;
  roasterList: RoasterModel[];

  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute) {
      // this._route.params.subscribe( () => this.getCoffees());
    }

  ngOnInit() {
    this.getAdminRoasters();
  }

  getAdminRoasters() {
    this.roasterListSub = this._apiService.getAdminRoasters().subscribe(
      res => {
        this.roasterList = res.map(item => {
          return new RoasterModel(
            item.roasterId,
            item.roasterName,
            item.country,
            item.region,
            item.city,
            item.imageURL,
            item.websiteURL,
            item.details
          );
        });
      },
      err => console.error(err)
    );
  }

}

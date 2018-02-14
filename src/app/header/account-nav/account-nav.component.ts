import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account-nav',
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.scss']
})
export class AccountNavComponent implements OnInit {

  loggedIn = false;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  handleClick() {
    console.log(this.auth);
  }

}

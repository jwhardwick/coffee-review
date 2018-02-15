import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private auth: AuthService) {
    console.log('app.component ngOnInit');
    auth.handleAuth();
  }
}

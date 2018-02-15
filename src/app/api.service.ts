import { CoffeeModel } from './shared/coffee.model';
import { RoasterModel } from './shared/roaster.model';
import { AuthService } from './auth/auth.service';
import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

    apiURL = 'http://localhost:3000/api';

    constructor(
        private http: HttpClient,
        private auth: AuthService) { }

    private get _authHeader(): string {
        return `Bearer ${localStorage.getItem('id_token')}`;
    }



    // Uses http.get() to load data from a single API endpoint
    getCoffees() {
        return this.http.get<[{
            coffeeId: number,
            roasterId: number,
            coffeeName: string,
            origin: string,
            imageURL: string,
            websiteURL: string,
            details: string
        }]>(this.apiURL + '/coffees');
    }

    getCoffeeDetail(params: Params) {
        return this.http.get(this.apiURL + '/coffees/' + params.coffeeId);
    }

    getAdminRoasters() {
        return this.http.get<[{
            roasterId: number,
            roasterName: string,
            country: string,
            region: string,
            city: string,
            imageURL: string,
            websiteURL: string,
            details: string
        }]>(this.apiURL + `/roasters/admin`, {
                headers: new HttpHeaders().set('Authorization', this._authHeader)
            });
    }

    postCoffee(coffee: CoffeeModel) {
        return this.http
            .post(this.apiURL + `/coffees/new`, coffee, {
                headers: new HttpHeaders().set('Authorization', this._authHeader)
            });
    }
}

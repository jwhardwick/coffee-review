import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

    apiURL = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getCoffees() {
        return this.http.get(this.apiURL + '/coffees');
    }

    getCoffeeDetail(params: Params) {
        return this.http.get(this.apiURL + '/coffees/' + params.coffeeId);
    }
}

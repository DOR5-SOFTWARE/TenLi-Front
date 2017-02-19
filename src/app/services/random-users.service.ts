import { Injectable } from '@angular/core';

import { RandomUser } from './../models/random-user/random-user.model';
import { Gender } from '../models/random-user/properties/gender.model';

import { Headers, Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RandomUsersService {

  private serviceUrl = '/api/v1/RandomUsers/';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getRandomUser(gender: Gender): Promise<RandomUser> {

    var method = "GetRandomUser";

    let params: URLSearchParams = new URLSearchParams();
    params.set('gender', Gender[gender]);

    return this.http.get(this.serviceUrl + method, { search: params })
      .toPromise()
      .then(response => response.json() as RandomUser)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


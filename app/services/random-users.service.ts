import { RandomUser } from './../models/random-user/random-user.model';
import { Gender } from '../models/random-user/properties/gender.model';

import { Injectable } from '@angular/core';
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

  // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes()
  //     .then(heroes => heroes.find(hero => hero.id === id));
  // };

  // update(hero: Hero): Promise<Hero> {
  //   const url = `${this.heroesUrl}/${hero.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(hero), { headers: this.headers })
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }

  // create(name: string): Promise<Hero> {
  //   return this.http
  //     .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  // delete(id: number): Promise<void> {
  //   let url = `${this.heroesUrl}/${id}`;
  //   return this.http.delete(url, { headers: this.headers })
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

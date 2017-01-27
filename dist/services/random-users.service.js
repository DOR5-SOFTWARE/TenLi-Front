"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var gender_model_1 = require('../models/random-user/properties/gender.model');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var RandomUsersService = (function () {
    function RandomUsersService(http) {
        this.http = http;
        this.serviceUrl = '/api/v1/RandomUsers/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    RandomUsersService.prototype.getRandomUser = function (gender) {
        var method = "GetRandomUser";
        var params = new http_1.URLSearchParams();
        params.set('gender', gender_model_1.Gender[gender]);
        return this.http.get(this.serviceUrl + method, { search: params })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
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
    RandomUsersService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    RandomUsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RandomUsersService);
    return RandomUsersService;
}());
exports.RandomUsersService = RandomUsersService;
//# sourceMappingURL=random-users.service.js.map
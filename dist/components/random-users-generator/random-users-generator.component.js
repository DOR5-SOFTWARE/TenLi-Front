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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var random_users_service_1 = require('../../services/random-users.service');
var random_user_model_1 = require('../../models/random-user/random-user.model');
var RandomUsersGeneratorComponent = (function () {
    function RandomUsersGeneratorComponent(randomUsersService, route) {
        this.randomUsersService = randomUsersService;
        this.route = route;
    }
    ;
    RandomUsersGeneratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.randomUsersService.getRandomUser()
                .then(function (randomUser) { return _this.randomUser = randomUser; });
        });
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', random_user_model_1.RandomUser)
    ], RandomUsersGeneratorComponent.prototype, "randomUser", void 0);
    RandomUsersGeneratorComponent = __decorate([
        core_1.Component({
            selector: 'random-users-generator',
            templateUrl: 'app/components/random-users-generator/random-users-generator.component.html',
            styleUrls: ['app/styles/random-users-generator/random-users-generator.css']
        }), 
        __metadata('design:paramtypes', [random_users_service_1.RandomUsersService, router_1.ActivatedRoute])
    ], RandomUsersGeneratorComponent);
    return RandomUsersGeneratorComponent;
}());
exports.RandomUsersGeneratorComponent = RandomUsersGeneratorComponent;
//# sourceMappingURL=random-users-generator.component.js.map
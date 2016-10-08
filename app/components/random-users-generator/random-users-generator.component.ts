import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RandomUsersService } from '../../services/random-users.service';

import { RandomUser } from '../../models/random-user/random-user.model';

@Component({
  selector: 'random-users-generator',
  templateUrl: 'app/components/random-users-generator/random-users-generator.component.html',
  styleUrls: ['app/styles/random-users-generator/random-users-generator.css']
})

export class RandomUsersGeneratorComponent implements OnInit {
  @Input()
  randomUser : RandomUser;

  constructor(
    private randomUsersService: RandomUsersService,
    private route: ActivatedRoute) {
  };

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.randomUsersService.getRandomUser()
        .then(randomUser => this.randomUser = randomUser);
    });
  };

}

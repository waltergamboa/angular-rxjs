import { Component } from '@angular/core';
import {faker} from "@faker-js/faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rxjs';

  users = new Array(100).fill(null).map(() => {
    return {
      id: faker.unique,
      avatar: faker.image.image(),
      gender: faker.name.gender(),
      name: faker.name.fullName(),
      height: faker.random.numeric(),
      weight: faker.random.numeric()
    };
  });


}

import { Component } from '@angular/core';

@Component({
  selector: 'lingaro-root',
  template: ` 
      <ul>
          <li [routerLink]="'shopping-list'">shopping list</li>
          <li [routerLink]="'user'">user</li>
      </ul>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'lingaro';
}

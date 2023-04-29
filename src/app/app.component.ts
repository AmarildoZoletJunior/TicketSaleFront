import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-message></app-message>
  <router-outlet></router-outlet>`
})
export class AppComponent {
}

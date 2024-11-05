import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angularss
      Learn more about Angularss
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

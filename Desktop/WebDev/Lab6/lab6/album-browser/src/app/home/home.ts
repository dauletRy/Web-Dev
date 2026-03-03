import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <h2>Welcome to Album Browser</h2>
    <p>Browse albums and explore photos.</p>
    <a routerLink="/albums">Browse Albums →</a>
  `
})
export class HomeComponent {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Angular Router</h1>
    <nav>
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
    <a routerLink="/superheroes" routerLinkActive="active">Heroes</a>
    <a routerLink="/admin" routerLinkActive="active">Admin</a>
    <a routerLink="/login" routerLinkActive="active">Login</a>
    <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
    <button (click)="show()">show center</button>
    </nav>
    <ngx-lazy-view *ngIf="showCenter" lookupKey="center">
      <div>before loaded =================</div>
    </ngx-lazy-view>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {
  showCenter = false;

  show() {
    console.log("show=============");
    this.showCenter = true;
  }
}

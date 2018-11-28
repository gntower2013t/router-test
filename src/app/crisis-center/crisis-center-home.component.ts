import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { printUrl } from './my-child/my-child.component';

@Component({
  template: `
    <p>Welcome to the Crisis Center</p>
  `
})
export class CrisisCenterHomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
    // printUrl('home', this.route);
  }
}


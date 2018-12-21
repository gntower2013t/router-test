import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { printUrl } from './my-child/my-child.component';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <button (click)="goto()">p goto</button> &nbsp;
    <a [routerLink]="['/routePath']" routerLinkActive="router-link-active" >p link</a>

    <app-my-child prefix='center'></app-my-child>

    <router-outlet></router-outlet>
  `
})
export class CrisisCenterComponent {

  constructor(private router:Router, private route:ActivatedRoute) {
    console.log('center: ' + route.component);

    //segments array is empty!
    printUrl('center: ', this.route)
    console.log('center url: ' + router.url);


    //null, param is bound to detail, not parent
    route.paramMap.subscribe(p=>console.log('center: get id on parent: ' + p.get('id')))
  }

  goto() {
    this.router.navigate(['.'], { relativeTo: this.route })
  }

 }

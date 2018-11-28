import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { CrisisService }        from './crisis.service';

import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisListComponent }       from './crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { Router } from '@angular/router';
import { MyChildComponent } from './my-child/my-child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent,
    MyChildComponent
  ],
  providers: [
    CrisisService
  ]
})
export class CrisisCenterModule {

  constructor(private router:Router) {
    // console.log('Child Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

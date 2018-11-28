import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export function printUrl(msg: String, route: ActivatedRoute) {
  route.url.subscribe(url => {
    const str = url.map(u => u.path + ' -- '+ JSON.stringify(u.parameters)).join(',');
    console.log(msg +' url segs: ' + str);
  })
}

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit {

  @Input()
  prefix:string;

  constructor(private router: Router, private route: ActivatedRoute) {
    //Crisis cernter: the container attached to route config
    console.log('my child: ' + route.component);

    // printUrl('my child', this.route);

    //entire url
    console.log('url: ' + router.url);

    //prefix is undefined!!
    route.paramMap.subscribe(p => console.log(`my id: ` + this.prefix + '---' + p.get('id')))
  }

  goto() {
    // "." "./" is same, to "/crsis-center"
    this.router.navigate(['./'], { relativeTo: this.route })
  }

  ngOnInit() {
    //can get param same as parent
    this.route.paramMap.subscribe(p => console.log(`my ${this.prefix} id: ` + p.get('id')))
  }

}

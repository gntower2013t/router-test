import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export function printUrl(msg: String, route: ActivatedRoute) {
  route.url.subscribe(url => {
    const str = url.map(u => `[path:${u.path} / params: ${JSON.stringify(u.parameters)}]`).join(',');
    console.log(msg +' url segs: ' + str);
  })

  route.queryParams.subscribe(q => console.log(`query param: ${JSON.stringify(q)}`));
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
    //Crisis center: the container attached to route config
    console.log('my child: ' + route.component);

    printUrl('my child', this.route);

    //entire url
    console.log('my child url: ' + router.url);

    //prefix is undefined!! @input not set??
    route.paramMap.subscribe(p => console.log(
      `child from ${this.prefix} pid: ${p.get('id')}`
      ))
  }

  goto() {
    // "." "./" is same, to "/crisis-center"
    // if detail, to "/"crisis-center/3"
    // query param is lost
    this.router.navigate(['./'], { relativeTo: this.route, queryParams: { aa:['xx', 'yy']} })
  }

  ngOnInit() {
    //can get param same as parent
    this.route.paramMap.subscribe(
      p => console.log(
        `on-init child from ${this.prefix} pid: ${p.get('id')}`
      )
    )
  }

}

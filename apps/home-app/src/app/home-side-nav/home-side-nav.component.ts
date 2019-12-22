import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'home-side-nav',
  templateUrl: './home-side-nav.component.html',
  styleUrls: ['./home-side-nav.component.css']
})
export class HomeSideNavComponent implements OnInit {
  protected navOptions: string[][];
  protected routerParam: Params;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => this.routerParam = params);
  }

  ngOnInit() {}
}

import {Component} from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { GlobalPolicy } from './global-policy-cmp';
import { CustomPolicy } from './custom-policy-cmp';

@Component({
  template: `
    <ul class="nav nav-tabs">
        <li role="presentation"><a [routerLink]="['GlobalPolicy']">Global Policy</a></li>
        <li role="presentation"><a [routerLink]="['CustomPolicy']">Custom Policy</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
  {path: '/',    name: 'GlobalPolicy',   component: GlobalPolicy, useAsDefault: true},
  {path: '/custom',    name: 'CustomPolicy',   component: CustomPolicy}
])
export class Policy {
}

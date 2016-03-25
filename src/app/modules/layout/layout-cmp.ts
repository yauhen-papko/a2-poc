import { Component } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { Dashboard } from '../dashboard/dashboard-cmp';
import { Policy } from '../policy/policy-cmp';

@Component({
  template:  `
    <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul class="nav sidebar-nav">
                <li class="sidebar-brand"><a href="#">Infoblox</a></li>
                <li><a [routerLink]="['Dashboard']"><span class="glyphicon glyphicon-stats" 
                        aria-hidden="true"></span> Dashboard</a></li>
                <li><a [routerLink]="['Policy']"><span class="glyphicon glyphicon-th-large" 
                        aria-hidden="true"></span> Policy</a></li>
            </ul>
        </div>
        <div id="page-content-wrapper">
            <div class="page-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <router-outlet></router-outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
  {path: '/', name: 'Dashboard', component: Dashboard, useAsDefault: true},
  {path: '/policy/...', name: 'Policy', component: Policy}
])
export class Layout { }

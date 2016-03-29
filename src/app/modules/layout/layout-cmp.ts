import { Component } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { Dashboard } from '../dashboard/dashboard-cmp';
import { Policy } from '../policy/policy-cmp';

@Component({
  template:  `
    <div id="wrapper">
        <div id="sidebar-wrapper">
            <h3 class="ib-brand"><a href="www.infoblox.com">Infoblox</a></h3>
            <ul class="nav sidebar-nav">

                <li><a [routerLink]="['Dashboard']"><span class="glyphicon glyphicon-stats"
                        aria-hidden="true"></span> Dashboard</a></li>
                <li><a [routerLink]="['Policy']"><span class="glyphicon glyphicon-th-large"
                        aria-hidden="true"></span> Policy</a></li>
            </ul>
        </div>
        <div id="page-content-wrapper">
            <div class="page-content">
                <div class="container-fluid">
                    <div class="row top-bar">
                      <div class="pull-right">
                        <div class="notification-sign pull-left"><span class="glyphicon glyphicon-bell"></span> </div>
                        <div class="user-info pull-left"><span>John Doe</span></div>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 content-area">
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
  {path: '/policy', name: 'Policy', component: Policy}
])
export class Layout { }

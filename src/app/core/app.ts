import { Component } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { Layout } from '../modules/layout/layout-cmp';
import { Login } from '../modules/login/login-cmp';

@RouteConfig([
])

@Component({
  directives: [
    RouterLink,
    RouterOutlet
  ],
  selector: 'app',
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Login, useAsDefault: true },
  { path: '/app/...',  name: 'App',  component: Layout },
  { path: '/login',  name: 'Login',  component: Login }
])
export class App {}

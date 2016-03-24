import { Component } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { Home } from '../modules/home/home-cmp';
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
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/login',  name: 'Login',  component: Login }
])
export class App {}

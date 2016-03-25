import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';

@Component({
  template: `
    <div class="col-md-4 col-md-offset-4">
        <h1>Welcome to Infoblox</h1>
        <form role="form" (submit)="login($event, username.value, password.value)">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" #username class="form-control" id="username" 
                    placeholder="Username" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" #password class="form-control" id="password" 
                    placeholder="Password" required>
        </div>
        <button type="submit" class="btn btn-default">Sign in</button>
            
        </form>
    </div>
  `,
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ]
})
export class Login {
  constructor(public router: Router) {
  }

  login(event, username, password) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/app');
  }
}

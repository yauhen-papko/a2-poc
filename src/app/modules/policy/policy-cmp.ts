import {Component} from 'angular2/core';
import { GlobalPolicy } from './global-policy-cmp';
import { CustomPolicy } from './custom-policy-cmp';

@Component({
  template: `
    <h4>Policy Configuration</h4>
    <global-policy></global-policy>
    <custom-policy></custom-policy>


  `,
  directives: [CustomPolicy, GlobalPolicy]
})
export class Policy {
}

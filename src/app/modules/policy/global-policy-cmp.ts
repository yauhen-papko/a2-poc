import {Component} from 'angular2/core';

@Component({
  selector: 'global-policy',
  template: `
        <form class="form-inline">
            <div class="form-group">
                <label for="policyAction"  class="control-label">Global Threat Policy</label>
                <select class="form-control" id="policyAction" [(ngModel)]="policy.action">
                    <option>Monitor</option>
                    <option>Passthru</option>
                    <option>Block</option>
                    <option>Substitute</option>
                </select>
            </div>
            <div class="form-group" *ngIf="policy.action=='Substitute'">
                <input type="text" class="form-control" id="substitute"
                        placeholder="Substitute" [(ngModel)]="policy.substitute">
            </div>
        </form>
  `
})
export class GlobalPolicy {
  policy: GlobalPolicyData;

  constructor() {
    this.policy = {
      action: 'Monitor'
    }
  }
}

interface GlobalPolicyData {
  action: string;
  substitute?: string;
}

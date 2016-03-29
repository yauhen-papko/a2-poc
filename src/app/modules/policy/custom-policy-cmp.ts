import {Component} from 'angular2/core';

@Component({
    selector: 'custom-policy',
    template: `
  <div class="col-md-12">
    <div class="btn-group pull-right" role="group" aria-label="...">
        <button type="button" class="btn btn-default glyphicon glyphicon-plus"
                (click)="showModal()"></button>
        <button type="button" class="btn btn-default glyphicon glyphicon-arrow-up"
                (click)="movePolicyUp()"></button>
        <button type="button" class="btn btn-default glyphicon glyphicon-arrow-down"
                (click)="movePolicyDown()"></button>
    </div>
    <div class="clearfix"></div>
    <table class="table table-striped ">
        <thead>
            <tr class="ib-table-head">
                <th>Domain</th>
                <th>Source IP / Client</th>
                <th>Action</th>
                <th>Substitute</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="#policy of policies; #i = index" [class.info]="selectedPolicyIndex==i"
                    (click)="selectPolicy(i)">
                <td>{{policy.domain}}</td>
                <td>{{policy.source}}</td>
                <td>{{policy.action}}</td>
                <td>{{policy.substitute}}</td>
                <td><button type="button" class="btn btn-default btn-sm glyphicon glyphicon-trash"
                         (click)="deletePolicy(i)"></button></td>
            </tr>
        </tbody>
    </table>
  </div>

  <div id="myModal" class="modal" [class.modal-visible]="isModalVisible" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" (click)="hideModal()">&times;</button>
            <h4 class="modal-title">Add Policy</h4>
        </div>
        <div class="modal-body">
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="domain"  class="col-sm-4 control-label">Domain</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="domain"
                                placeholder="Domain" [(ngModel)]="editPolicy.domain">
                    </div>
                </div>
                <div class="form-group">
                    <label for="source"  class="col-sm-4 control-label">Source IP/Client</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="source"
                                placeholder="Source IP/Client" [(ngModel)]="editPolicy.source">
                    </div>
                </div>
                <div class="form-group">
                    <label for="action"  class="col-sm-4 control-label">Action</label>
                    <div class="col-sm-8">
                        <select class="form-control" id="action" [(ngModel)]="editPolicy.action">
                            <option>Deny</option>
                            <option>Allow</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="substitute"  class="col-sm-4 control-label">Substitute</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="substitute"
                                placeholder="Substitute" [(ngModel)]="editPolicy.substitute">
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left"
                    (click)="hideModal()">Cancel</button>
            <button type="button" class="btn btn-primary pull-right"
                    (click)="savePolicy()">Save</button>
        </div>
        </div>

    </div>
  </div>
  `
})
export class CustomPolicy {
    policies: Policy[];
    isModalVisible: boolean;
    editPolicy: Policy;
    selectedPolicyIndex: number;

    constructor() {
        this.isModalVisible = false;
        this.selectedPolicyIndex = -1;
        this.resetEditPolicy();
        this.policies = [
            {
                source: 'user-SunnyvaleLocation',
                action: 'Deny'
            },
            {
                domain: 'www.facebook.com',
                action: 'Deny'
            },
            {
                domain: 'www.myspace.com',
                action: 'Substitute',
                substitute: 'www.yourcompony.com'
            }
        ];
    }

    resetEditPolicy() {
        this.editPolicy = {
            action: 'Deny'
        };
    }

    showModal() {
        this.resetEditPolicy();
        this.isModalVisible = true;
    }

    hideModal() {
        this.isModalVisible = false;
    }

    savePolicy() {
        this.hideModal();

        this.policies = [
            ...this.policies,
            this.editPolicy
        ];
    }

    deletePolicy(index: number) {
        this.policies = [
            ...this.policies.slice(0, index),
            ...this.policies.slice(index + 1)
        ];
        this.selectedPolicyIndex = -1;
    }
    selectPolicy(index: number) {
        this.selectedPolicyIndex = index;
    }
    movePolicyDown() {
        if (this.selectedPolicyIndex > -1 && this.selectedPolicyIndex < this.policies.length - 1) {
            let downPolicyIndex = this.selectedPolicyIndex;
            let upPolicyIndex = this.selectedPolicyIndex + 1;
            this.selectedPolicyIndex++;
            this.exchangePolicies(downPolicyIndex, upPolicyIndex);
        }
    }
    movePolicyUp() {
        if (this.selectedPolicyIndex > -1 && this.selectedPolicyIndex > 0) {
            let downPolicyIndex = this.selectedPolicyIndex - 1;
            let upPolicyIndex = this.selectedPolicyIndex;
            this.selectedPolicyIndex--;
            this.exchangePolicies(downPolicyIndex, upPolicyIndex);
        }
    }
    exchangePolicies(downPolicyIndex: number, upPolicyIndex: number) {
        this.policies = [
            ...this.policies.slice(0, downPolicyIndex),
            this.policies[upPolicyIndex],
            this.policies[downPolicyIndex],
            ...this.policies.slice(upPolicyIndex + 1)
        ];
    }
}

interface Policy {
    domain?: string;
    source?: string;
    action: string;
    substitute?: string;
}

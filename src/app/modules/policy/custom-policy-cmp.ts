import {Component} from 'angular2/core';
import {MODAL_DIRECTIVES} from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    directives: [MODAL_DIRECTIVES],
    selector: 'custom-policy',
    template: require('./custom-template.html'),
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

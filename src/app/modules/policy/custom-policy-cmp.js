"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var CustomPolicy = (function () {
    function CustomPolicy() {
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
    CustomPolicy.prototype.resetEditPolicy = function () {
        this.editPolicy = {
            action: 'Deny'
        };
    };
    CustomPolicy.prototype.showModal = function () {
        this.resetEditPolicy();
        this.isModalVisible = true;
    };
    CustomPolicy.prototype.hideModal = function () {
        this.isModalVisible = false;
    };
    CustomPolicy.prototype.savePolicy = function () {
        this.hideModal();
        this.policies = this.policies.concat([
            this.editPolicy
        ]);
    };
    CustomPolicy.prototype.deletePolicy = function (index) {
        this.policies = this.policies.slice(0, index).concat(this.policies.slice(index + 1));
        this.selectedPolicyIndex = -1;
    };
    CustomPolicy.prototype.selectPolicy = function (index) {
        this.selectedPolicyIndex = index;
    };
    CustomPolicy.prototype.movePolicyDown = function () {
        if (this.selectedPolicyIndex > -1 && this.selectedPolicyIndex < this.policies.length - 1) {
            var downPolicyIndex = this.selectedPolicyIndex;
            var upPolicyIndex = this.selectedPolicyIndex + 1;
            this.selectedPolicyIndex++;
            this.exchangePolicies(downPolicyIndex, upPolicyIndex);
        }
    };
    CustomPolicy.prototype.movePolicyUp = function () {
        if (this.selectedPolicyIndex > -1 && this.selectedPolicyIndex > 0) {
            var downPolicyIndex = this.selectedPolicyIndex - 1;
            var upPolicyIndex = this.selectedPolicyIndex;
            this.selectedPolicyIndex--;
            this.exchangePolicies(downPolicyIndex, upPolicyIndex);
        }
    };
    CustomPolicy.prototype.exchangePolicies = function (downPolicyIndex, upPolicyIndex) {
        this.policies = this.policies.slice(0, downPolicyIndex).concat([
            this.policies[upPolicyIndex],
            this.policies[downPolicyIndex]
        ], this.policies.slice(upPolicyIndex + 1));
    };
    CustomPolicy = __decorate([
        core_1.Component({
            selector: 'custom-policy',
            template: "\n  <div class=\"col-md-12\">\n    <div class=\"btn-group pull-right\" role=\"group\" aria-label=\"...\">\n        <button type=\"button\" class=\"btn btn-default glyphicon glyphicon-plus\"\n                (click)=\"showModal()\"></button>\n        <button type=\"button\" class=\"btn btn-default glyphicon glyphicon-arrow-up\"\n                (click)=\"movePolicyUp()\"></button>\n        <button type=\"button\" class=\"btn btn-default glyphicon glyphicon-arrow-down\"\n                (click)=\"movePolicyDown()\"></button>\n    </div>\n    <div class=\"clearfix\"></div>\n    <table class=\"table table-striped \">\n        <thead>\n            <tr class=\"ib-table-head\">\n                <th>Domain</th>\n                <th>Source IP / Client</th>\n                <th>Action</th>\n                <th>Substitute</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#policy of policies; #i = index\" [class.info]=\"selectedPolicyIndex==i\"\n                    (click)=\"selectPolicy(i)\">\n                <td>{{policy.domain}}</td>\n                <td>{{policy.source}}</td>\n                <td>{{policy.action}}</td>\n                <td>{{policy.substitute}}</td>\n                <td><button type=\"button\" class=\"btn btn-default btn-sm glyphicon glyphicon-trash\"\n                         (click)=\"deletePolicy(i)\"></button></td>\n            </tr>\n        </tbody>\n    </table>\n  </div>\n\n  <div id=\"myModal\" class=\"modal\" [class.modal-visible]=\"isModalVisible\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" (click)=\"hideModal()\">&times;</button>\n            <h4 class=\"modal-title\">Add Policy</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label for=\"domain\"  class=\"col-sm-4 control-label\">Domain</label>\n                    <div class=\"col-sm-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"domain\"\n                                placeholder=\"Domain\" [(ngModel)]=\"editPolicy.domain\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"source\"  class=\"col-sm-4 control-label\">Source IP/Client</label>\n                    <div class=\"col-sm-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"source\"\n                                placeholder=\"Source IP/Client\" [(ngModel)]=\"editPolicy.source\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"action\"  class=\"col-sm-4 control-label\">Action</label>\n                    <div class=\"col-sm-8\">\n                        <select class=\"form-control\" id=\"action\" [(ngModel)]=\"editPolicy.action\">\n                            <option>Deny</option>\n                            <option>Allow</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"substitute\"  class=\"col-sm-4 control-label\">Substitute</label>\n                    <div class=\"col-sm-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"substitute\"\n                                placeholder=\"Substitute\" [(ngModel)]=\"editPolicy.substitute\">\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-left\"\n                    (click)=\"hideModal()\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary pull-right\"\n                    (click)=\"savePolicy()\">Save</button>\n        </div>\n        </div>\n\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CustomPolicy);
    return CustomPolicy;
}());
exports.CustomPolicy = CustomPolicy;
//# sourceMappingURL=custom-policy-cmp.js.map
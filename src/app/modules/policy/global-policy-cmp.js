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
var GlobalPolicy = (function () {
    function GlobalPolicy() {
        this.policy = {
            action: 'Monitor'
        };
    }
    GlobalPolicy = __decorate([
        core_1.Component({
            selector: 'global-policy',
            template: "\n        <form class=\"form-inline\">\n            <div class=\"form-group\">\n                <label for=\"policyAction\"  class=\"control-label\">Global Threat Policy</label>\n                <select class=\"form-control\" id=\"policyAction\" [(ngModel)]=\"policy.action\">\n                    <option>Monitor</option>\n                    <option>Passthru</option>\n                    <option>Block</option>\n                    <option>Substitute</option>\n                </select>\n            </div>\n            <div class=\"form-group\" *ngIf=\"policy.action=='Substitute'\">\n                <input type=\"text\" class=\"form-control\" id=\"substitute\"\n                        placeholder=\"Substitute\" [(ngModel)]=\"policy.substitute\">\n            </div>\n        </form>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], GlobalPolicy);
    return GlobalPolicy;
}());
exports.GlobalPolicy = GlobalPolicy;
//# sourceMappingURL=global-policy-cmp.js.map
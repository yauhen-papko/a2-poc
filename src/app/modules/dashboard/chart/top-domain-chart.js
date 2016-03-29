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
var TopDomainChart = (function () {
    function TopDomainChart() {
    }
    TopDomainChart = __decorate([
        core_1.Component({
            selector: 'top-domain-chart',
            properties: ['data'],
            template: "\n\n      <table class=\"table table-striped \">\n        <thead>\n            <tr>\n                <th>Domain</th>\n                <th>Count</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#item of data; #i = index\">\n                <td>{{item.domain}}</td>\n                <td>{{item.count}}</td>\n            </tr>\n        </tbody>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TopDomainChart);
    return TopDomainChart;
}());
exports.TopDomainChart = TopDomainChart;
//# sourceMappingURL=top-domain-chart.js.map
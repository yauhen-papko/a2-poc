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
var router_1 = require('angular2/router');
var dashboard_cmp_1 = require('../dashboard/dashboard-cmp');
var policy_cmp_1 = require('../policy/policy-cmp');
var Layout = (function () {
    function Layout() {
    }
    Layout = __decorate([
        core_1.Component({
            template: "\n    <div id=\"wrapper\">\n        <div id=\"sidebar-wrapper\">\n            <h3 class=\"ib-brand\"><a href=\"www.infoblox.com\">Infoblox</a></h3>\n            <ul class=\"nav sidebar-nav\">\n\n                <li><a [routerLink]=\"['Dashboard']\"><span class=\"glyphicon glyphicon-stats\"\n                        aria-hidden=\"true\"></span> Dashboard</a></li>\n                <li><a [routerLink]=\"['Policy']\"><span class=\"glyphicon glyphicon-th-large\"\n                        aria-hidden=\"true\"></span> Policy</a></li>\n            </ul>\n        </div>\n        <div id=\"page-content-wrapper\">\n            <div class=\"page-content\">\n                <div class=\"container-fluid\">\n                    <div class=\"row top-bar\">\n                      <div class=\"pull-right\">\n                        <div class=\"notification-sign pull-left\"><span class=\"glyphicon glyphicon-bell\"></span> </div>\n                        <div class=\"user-info pull-left\"><span>John Doe</span></div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 content-area\">\n                            <router-outlet></router-outlet>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  ",
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Dashboard', component: dashboard_cmp_1.Dashboard, useAsDefault: true },
            { path: '/policy', name: 'Policy', component: policy_cmp_1.Policy }
        ]), 
        __metadata('design:paramtypes', [])
    ], Layout);
    return Layout;
}());
exports.Layout = Layout;
//# sourceMappingURL=layout-cmp.js.map
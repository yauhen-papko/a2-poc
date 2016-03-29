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
var qps_chart_1 = require('./chart/qps-chart');
var top_client_chart_1 = require('./chart/top-client-chart');
var top_domain_chart_1 = require('./chart/top-domain-chart');
var Dashboard = (function () {
    function Dashboard() {
    }
    Dashboard.prototype.genQpsData = function () {
        var count = 100;
        var millis = new Date().getTime() - 1000 * count;
        var data = [];
        var startVal = 100;
        for (var i = 0; i < count; i++) {
            millis += i * 1000;
            startVal += Math.floor(Math.random() * 10) - 4;
            data.push({
                time: new Date(millis),
                value: startVal
            });
        }
        return data;
    };
    Dashboard.prototype.getTopClientsData = function () {
        var data = [];
        var count = 20;
        for (var i = 0; i < count; i++) {
            data.push({
                client: "user_" + i,
                hits: 10 + Math.floor(Math.random() * 50)
            });
        }
        return data;
    };
    Dashboard.prototype.getTopDomainsData = function () {
        var data = [];
        var count = 5;
        for (var i = 0; i < count; i++) {
            data.push({
                domain: "www.domain" + i + ".com",
                count: 10 + Math.floor(Math.random() * 50)
            });
        }
        return data;
    };
    Dashboard = __decorate([
        core_1.Component({
            template: "\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">QPS Line Chart</div>\n        <div class=\"panel-body\">\n          <qps-chart [data]=\"genQpsData()\"></qps-chart>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Top Blocked Domains</div>\n        <div class=\"panel-body\">\n          <top-domain-chart [data]=\"getTopDomainsData()\"></top-domain-chart>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Top Clients</div>\n        <div class=\"panel-body\">\n          <top-client-chart [data]=\"getTopClientsData()\"></top-client-chart>\n        </div>\n      </div>\n    </div>\n  ",
            directives: [top_domain_chart_1.TopDomainChart, qps_chart_1.QpsChart, top_client_chart_1.TopClientChart]
        }), 
        __metadata('design:paramtypes', [])
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard-cmp.js.map
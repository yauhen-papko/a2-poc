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
var d3 = require('d3');
var QpsChart = (function () {
    function QpsChart(elementRef) {
        this.elementRef = elementRef;
    }
    QpsChart.prototype.ngOnInit = function () {
        var data = this.data;
        var t = data[0].time.getTime();
        var el = this.elementRef.nativeElement;
        var parentWidth = el.parentElement.offsetWidth;
        var parentHeight = 250;
        var margin = { top: 20, right: 40, bottom: 20, left: 40 };
        var width = parentWidth - margin.left - margin.right;
        var height = parentHeight - margin.top - margin.bottom;
        var x = d3.time.scale()
            .domain([t, data[data.length - 1].time.getTime()])
            .range([0, width]);
        var y = d3.scale.linear()
            .domain([0, d3.max(data, function (d) { return d.value; })])
            .range([height, 0]);
        var xAxis = d3.svg.axis()
            .scale(x)
            .ticks(5)
            .tickFormat(d3.time.format('%H:%M'))
            .orient("bottom");
        var yAxis = d3.svg.axis()
            .scale(y)
            .ticks(4)
            .orient("left");
        var line = d3.svg.line()
            .x(function (d) { return x(new Date(d.time.getTime())); })
            .y(function (d) { return y(d.value); })
            .interpolate("linear");
        var svg = d3.select(el).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
        svg.selectAll('.axis line, .axis path')
            .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '2px' });
        var path = svg.append("g")
            .append("path")
            .datum(data)
            .attr("d", line)
            .attr("stroke", "red")
            .attr("stroke-width", 1)
            .attr("fill", "none");
        var avPath = svg.append("g")
            .append("path")
            .datum([data[0], data[data.length - 1]])
            .attr("d", line)
            .attr("stroke", "#D8D2D2")
            .attr("stroke-width", 1)
            .attr("fill", "none");
    };
    QpsChart = __decorate([
        core_1.Directive({
            selector: 'qps-chart',
            properties: ['data'],
            providers: [core_1.ElementRef],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], QpsChart);
    return QpsChart;
}());
exports.QpsChart = QpsChart;
//# sourceMappingURL=qps-chart.js.map
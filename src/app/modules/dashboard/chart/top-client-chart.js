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
var TopClientChart = (function () {
    function TopClientChart(elementRef) {
        this.elementRef = elementRef;
    }
    TopClientChart.prototype.ngOnInit = function () {
        var data = this.data;
        var el = this.elementRef.nativeElement;
        var parentWidth = el.parentElement.offsetWidth;
        var parentHeight = 250;
        var margin = { top: 20, right: 40, bottom: 50, left: 40 };
        var width = parentWidth - margin.left - margin.right;
        var height = parentHeight - margin.top - margin.bottom;
        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1)
            .domain(data.map(function (d) { return d.client; }));
        var y = d3.scale.linear()
            .range([height, 0])
            .domain([0, d3.max(data, function (d) { return d.hits; })]);
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10);
        var svg = d3.select(el).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(45)")
            .style("text-anchor", "start");
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Hits");
        svg.selectAll('.axis line, .axis path')
            .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '2px' });
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.client); })
            .attr("width", x.rangeBand())
            .attr("y", function (d) { return y(d.hits); })
            .attr("height", function (d) { return height - y(d.hits); });
        svg.selectAll('.bar')
            .style({ 'fill': '#337ab7' });
    };
    TopClientChart = __decorate([
        core_1.Directive({
            selector: 'top-client-chart',
            properties: ['data'],
            providers: [core_1.ElementRef]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TopClientChart);
    return TopClientChart;
}());
exports.TopClientChart = TopClientChart;
//# sourceMappingURL=top-client-chart.js.map
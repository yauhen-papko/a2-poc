import {Directive, Attribute, ElementRef, Inject, OnInit} from 'angular2/core';
import * as d3 from 'd3';

@Directive({
  selector: 'qps-chart',
  properties: [ 'data' ],
  providers: [ ElementRef ],
})
export class QpsChart implements OnInit {
  data: any;

  constructor(
    private elementRef: ElementRef) {

  }

  ngOnInit() {
    let data: Array<QpsChartData> = this.data;
    let t = data[0].time.getTime();


    let el:any = this.elementRef.nativeElement;
    let parentWidth = el.parentElement.offsetWidth;
    let parentHeight = 250;
    let margin = { top: 20, right: 40, bottom: 20, left: 40 };
    let width = parentWidth - margin.left - margin.right;
    let height = parentHeight - margin.top - margin.bottom;

    let x = d3.time.scale()
        .domain([t, data[data.length-1].time.getTime()])
        .range([0, width]);

    let y = d3.scale.linear()
        .domain([0, d3.max(data, d => d.value)])
        .range([height, 0]);

    let xAxis = d3.svg.axis()
        .scale(x)
        .ticks(5)
        .tickFormat(d3.time.format('%H:%M'))
        .orient("bottom");

    let yAxis = d3.svg.axis()
        .scale(y)
        .ticks(4)
        .orient("left");

    let line = d3.svg.line<QpsChartData>()
        .x((d: QpsChartData) => x(new Date(d.time.getTime())))
        .y((d: QpsChartData) => y(d.value))
        .interpolate("linear");

    let svg = d3.select(el).append("svg")
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
        .call(yAxis)

    svg.selectAll('.axis line, .axis path')
         .style({'stroke': 'Black', 'fill': 'none', 'stroke-width': '2px'});

    let path = svg.append("g")
        .append("path")
        .datum(data)
        .attr("d", line)
        .attr("stroke", "red")
        .attr("stroke-width", 1)
        .attr("fill", "none");

    let avPath = svg.append("g")
        .append("path")
        .datum([data[0], data[data.length-1]])
        .attr("d", line)
        .attr("stroke", "#D8D2D2")
        .attr("stroke-width", 1)
        .attr("fill", "none");
  }



}

export interface QpsChartData {
  time: Date;
  value: number;
}

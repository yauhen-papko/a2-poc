import {Directive, Attribute, ElementRef, Inject, OnInit} from 'angular2/core';
import * as d3 from 'd3';

@Directive({
  selector: 'top-client-chart',
  properties: [ 'data' ],
  providers: [ ElementRef ]
})
export class TopClientChart implements OnInit {
  data: Array<ClientChartData>;

  constructor(
    private elementRef: ElementRef) {

  }

  ngOnInit() {
    let data:Array<ClientChartData> = this.data;
    let el:any = this.elementRef.nativeElement;
    let parentWidth = el.parentElement.offsetWidth;
    let parentHeight = 250;
    let margin = { top: 20, right: 40, bottom: 50, left: 40 };
    let width = parentWidth - margin.left - margin.right;
    let height = parentHeight - margin.top - margin.bottom;

    let x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1)
        .domain(data.map((d: ClientChartData) => d.client));

    let y = d3.scale.linear()
        .range([height, 0])
        .domain([0, d3.max(data, (d: ClientChartData) => d.hits )]);

    let xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    let yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    let svg = d3.select(el).append("svg")
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
         .style({'stroke': 'Black', 'fill': 'none', 'stroke-width': '2px'});

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d: ClientChartData) => x(d.client))
        .attr("width", x.rangeBand())
        .attr("y", (d: ClientChartData) => y(d.hits))
        .attr("height", (d: ClientChartData) => height - y(d.hits));

    svg.selectAll('.bar')
          .style({'fill': '#337ab7'});
  }

}

export interface ClientChartData {
  client: string;
  hits: number;
}

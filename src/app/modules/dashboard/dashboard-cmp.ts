import { Component } from 'angular2/core';
import { QpsChart, QpsChartData } from './chart/qps-chart';
import { TopClientChart, ClientChartData } from './chart/top-client-chart';
import { TopDomainChart, DomainChartData } from './chart/top-domain-chart';

@Component({
  template: `
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">QPS Line Chart</div>
        <div class="panel-body">
          <qps-chart [data]="genQpsData()"></qps-chart>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">Top Blocked Domains</div>
        <div class="panel-body">
          <top-domain-chart [data]="getTopDomainsData()"></top-domain-chart>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">Top Clients</div>
        <div class="panel-body">
          <top-client-chart [data]="getTopClientsData()"></top-client-chart>
        </div>
      </div>
    </div>
  `,
  directives: [TopDomainChart, QpsChart, TopClientChart]
})
export class Dashboard {

  constructor() {
  }

  genQpsData(): Array<QpsChartData> {
    let count = 100;
    let millis = new Date().getTime() - 1000*count;
    let data:QpsChartData[] = [];
    let startVal = 100;
    for(let i = 0; i < count; i++) {
      millis += i*1000;
      startVal += Math.floor(Math.random()*10)-4;
      data.push({
        time: new Date(millis),
        value: startVal
      });
    }

    return data;
  }

  getTopClientsData(): Array<ClientChartData> {
    let data: ClientChartData[] = [];
    let count = 20;

    for(let i = 0; i < count; i++) {
      data.push({
        client: `user_${i}`,
        hits: 10+Math.floor(Math.random()*50)
      });
    }

    return data;
  }

  getTopDomainsData(): Array<DomainChartData> {
    let data: DomainChartData[] = [];
    let count = 5;

    for(let i = 0; i < count; i++) {
      data.push({
        domain: `www.domain${i}.com`,
        count: 10+Math.floor(Math.random()*50)
      });
    }

    return data;
  }
}

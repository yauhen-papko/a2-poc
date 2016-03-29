import {Component} from 'angular2/core';

@Component({
    selector: 'top-domain-chart',
    properties: [ 'data' ],
    template: `

      <table class="table table-striped ">
        <thead>
            <tr>
                <th>Domain</th>
                <th>Count</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="#item of data; #i = index">
                <td>{{item.domain}}</td>
                <td>{{item.count}}</td>
            </tr>
        </tbody>
    </table>
  `
})
export class TopDomainChart {
    data: Array<DomainChartData>;
}

export interface DomainChartData {
    domain: string;
    count: number;
}

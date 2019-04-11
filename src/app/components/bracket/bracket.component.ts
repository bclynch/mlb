import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent implements OnInit, OnChanges {
  @Input() data;

  alArray = [];
  nlArray = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(e) {
    console.log(e);
    if (e.data.currentValue) this.processData(e.data.currentValue);
  }

  processData(data) {
    // remove tie breaker round
    data.shift();

    console.log(data);
    const alObject = {};
    const nlObject = {};

    data.forEach((round) => {
      alObject[round.name] = [];
      nlObject[round.name] = [];
      round.series.forEach((series) => {
        // if indexof has AL we know its an AL series
        if (series.series.id.indexOf('AL') !== -1) {
          // hacking this array of data. We need spacers for the wc series
          // would make this cleaner ultimately
          if (series.series.id === 'ALWC') {
            alObject[round.name].push({});
            alObject[round.name].push({});
            alObject[round.name].push(series);
            alObject[round.name].push({});
          } else {
            alObject[round.name].push(series);
          }
        } else {
          if (series.series.id === 'NLWC') {
            nlObject[round.name].push({});
            nlObject[round.name].push({});
            nlObject[round.name].push(series);
            nlObject[round.name].push({});
          } else {
            nlObject[round.name].push(series);
          }
        }
      });
    });
    this.alArray = Object.keys(alObject).map((series) => ({ name: series, sort: alObject[series].sort, series: alObject[series] })).sort((a, b) => a.sort - b.sort);
    this.nlArray = Object.keys(nlObject).map((series) => ({ name: series, sort: nlObject[series].sort, series: nlObject[series] })).sort((a, b) => a.sort - b.sort);
    // console.log(this.alArray);
    // console.log(this.nlArray);
  }
}

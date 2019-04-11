import { Component } from '@angular/core';
import { APIService } from 'src/services/api.service';

import * as moment from 'moment';

// id the type of series
const roundType = {
  W: {
    name: 'World Series',
    sort: 4
  },
  R: {
    name: 'Tiebreaker',
    sort: 0
  },
  F: {
    name: 'Wildcard',
    sort: 1
  },
  D: {
    name: 'Division',
    sort: 2
  },
  L: {
    name: 'League',
    sort: 3
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  byDateArr = [];
  bySeriesArr = [];

  scheduleType: 'date' | 'round' = 'date';

  constructor(
    private apiService: APIService
  ) {
    this.apiService.fetchPlayoffData().subscribe(
      (data) => {
        console.log(data);
        this.processData(data);
      }
    );
  }

  processData(data) {
    const seriesObj = {};
    const dateObj = {};

    // we need to create an array of games to render for both by date and by series
    // data is coming in by series already so is grouped up already
    // the world series is the first element and we will move it to the bottom
    data.series.forEach((series) => {
      const seriesType = roundType[series.series.gameType].name;

      if (!seriesObj[seriesType]) seriesObj[seriesType] = { series: [], sort: roundType[series.series.gameType].sort };
      seriesObj[seriesType].series.push(series);

      // need to parse through to data by date
      series.games.forEach((game) => {
        const date = game.gameDate.split('T')[0];
        if (!dateObj[date]) dateObj[date] = { games: [] };
        dateObj[date].games.push(game);
      });
    });

    // create an arr of date sorted chronologically
    this.byDateArr = Object.keys(dateObj).map((date) => ({ date, dateLabel: moment(date).format('dddd, MMM Do'), games: dateObj[date].games })).sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
    // console.log('BYDATEARR', this.byDateArr);

    // create an arr from series obj that is sorted by our predetermined sort order
    this.bySeriesArr = Object.keys(seriesObj).map((series) => ({ name: series, sort: seriesObj[series].sort, series: seriesObj[series].series })).sort((a, b) => a.sort - b.sort);
    // console.log('BYSERIESARR: ', this.bySeriesArr);
  }

  toggleType(e) {
    this.scheduleType = e.value;
  }
}

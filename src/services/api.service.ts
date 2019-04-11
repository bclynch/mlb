import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {

  constructor(
    private http: Http
  ) {

  }

  fetchPlayoffData() {
    return this.http.get(`http://statsapi.mlb.com/api/v1/schedule/postseason/series?sportId=1&season=2018&hydrate=te
      am,broadcasts(all),seriesStatus(useOverride=true),decisions,person,probablePitcher,linescore(matchup)`
    )
      .pipe(map(
        (response) => {
          const data = response.json();
          return data;
        }
      )
      ).pipe(catchError(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
    ));
  }
}

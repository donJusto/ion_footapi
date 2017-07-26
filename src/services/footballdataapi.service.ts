import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//Services

import { FootballDataApi } from '../models/footballdataapi-global.models';
@Injectable()
export class FootballdataApiService{

    private baseUrl : string = ' http://api.football-data.org/v1/';

    constructor(private http: Http) {

    }
    public getCompetitions(): Promise<FootballDataApi> {
    // http://api.football-data.org/v1/competitions/?season=2015
        const url = `${this.baseUrl}competitions/?season=2016`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as FootballDataApi)
        .catch(error => console.log('You get an error' + error))
        }
        
    }

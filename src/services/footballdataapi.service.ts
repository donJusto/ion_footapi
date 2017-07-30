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
    private season : string='2016';
    private competitions : string = 'competitions/?';
    private idTeam : number=66;
    private team : string = 'teams' ;
    constructor(private http: Http) {
        
    }
    public getCompetitions(): Promise<FootballDataApi[]> {
    // http://api.football-data.org/v1/competitions/?season=2015
        const url = `${this.baseUrl}${this.competitions}${this.competitions}${this.competitions}`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as FootballDataApi[])
        .catch(error => console.log('You get an error' + error))
        }
        
    public getTeams() : Promise<FootballDataApi[]>{
      //http://api.football-data.org/v1/competitions/398/teams 
      const url = `${this.baseUrl}competitions/${this.idTeam}/${this.team}`;
      return this.http.get(url)
        .toPromise()
        .then(response=> response.json() as FootballDataApi[])
        .catch(error => console.log('You get an error' + error))
    }

    public getPlayers() : Promise<FootballDataApi[]>{
      //http://api.football-data.org/v1/teams/66/players 
      const url = `${this.baseUrl}${this.team}/${this.idTeam}/players`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as FootballDataApi[])
        .catch(error => console.log('You get an error' + error))
    }

        public getListTeams() {
            //http://api.football-data.org/v1/competitions/398/teams
        }

    public getTables() : Promise<FootballDataApi[]> {
        //http://api.football-data.org/v1/competitions/398/leagueTable
        const url = `${this.baseUrl}competitions/${this.idTeam}/${this.team}/leagueTable`;
         return this.http.get(url)
        .toPromise()
        .then(response => response.json() as FootballDataApi[])
        .catch(error => console.log('You get an error' + error))

    }
    
}

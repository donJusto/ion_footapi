import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//models
import { FootballDataApi }                      from '../models/footballdataapi-global.models';
import { FootballDataApiLeagueTable }           from '../models/footballdataapi-leaguetable.models';

@Injectable()
export class FootballdataApiService{

    private baseUrl : string = ' http://api.football-data.org/v1/';
    private season : string='season=2017';
    private competitions : string = 'competitions/';
    private idTeam : number=398;
    private team : string = 'teams' ;
    private teamApi: FootballDataApi;

    constructor(private http: Http) {
        
    }
    public getCompetitions(): Promise<FootballDataApi[]> {
    // http://api.football-data.org/v1/competitions/?season=2015
        const url = `${this.baseUrl}${this.competitions}?${this.season}`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as FootballDataApi[])
        .catch(error => console.log('You get an error' + error))
        }
        
    public getTeams() : Promise<FootballDataApi[]>{
      //http://api.football-data.org/v1/competitions/398/teams 
      //http://api.football-data.org/v1/teams/66
      const url = `http://api.football-data.org/v1/teams/66`;
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

        public getListFixtureH2H() {
        //http://api.football-data.org/v1/fixtures/149461
        const url = `${this.baseUrl}/149461`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as FootballDataApi[])
        .catch(error => console.log('You get an error' + error))
    }
        

    public getTables() : Promise<FootballDataApiLeagueTable> {
        // ${this.baseUrl}${this.competitions}${this.idTeam}/leagueTable
        const url = `http://api.football-data.org/v1/competitions/398/leagueTable`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as FootballDataApiLeagueTable)
        .catch(error => console.log('You get an error' + error))

    }
    
}

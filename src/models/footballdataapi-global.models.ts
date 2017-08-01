import { FootballDataApiTeams } from '../models/footballdataapi-teams.models';
import { FootballDataApiPlayers } from '../models/footballdataapi-players.models';
// import { FootballDataApiTables } from '../models/footballdataapi-tables.models';
import { FootballDataApiStanding } from '../models/footballdataapi-table.standing.models';

export class FootballDataApi {
    id: number;
    caption: string;
    league: string;
    year: string;
    currentMatchday: number;
    numberOfMatchdays:number;
    numberOfTeams: number;
    numberOfGames: number;
    lastUpdated: string;
    count : Number;
    teams : FootballDataApiTeams[];
    players: FootballDataApiPlayers[];
    // tables : FootballDataApiTables;

    standing : FootballDataApiStanding[];
    leagueCaption: String;
    matchday: number;
    name : string;
    code: string;
    squadMarketValue: string;
    crestUrl: string;

}
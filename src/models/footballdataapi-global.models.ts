import { FootballDataApiTeams } from '../models/footballdataapi-teams.models';
import { FootballDataApiTables } from '../models/footballdataapi-table.models';
import { FootballDataApiPlayers } from '../models/footballdataapi-players.models';


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
    leagueCaption: string;
    matchday: number;
    standing: string;
    tables:  FootballDataApiTables;
    teams : FootballDataApiTeams;
    players: FootballDataApiPlayers;
}
import { FootballDataApiStanding }              from '../models/footballdataapi-table.standing.models';

export class FootballDataApiLeagueTable {

    standing : FootballDataApiStanding[];
    leagueCaption: String;
    matchday: number;
    //Il faudra créer le model correspondant à la propriété _links s'il faut l'utiliser

}
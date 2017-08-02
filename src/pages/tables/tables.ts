import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FootballdataApiService }               from '../../services/footballdataapi.service';
import { FootballDataApiLeagueTable }           from '../../models/footballdataapi-leaguetable.models';


@Component({
  selector: 'page-tables',
  templateUrl: 'tables.html',
})

export class TablesPage {

  response: FootballDataApiLeagueTable = new FootballDataApiLeagueTable();

  constructor(public navCtrl: NavController, public navParams: NavParams, private footballdataApiService: FootballdataApiService) {

    //Récupérer tables
    this.footballdataApiService.getTables()
      .then(footballFetched => {
        this.response = footballFetched;
        console.log(this.response);
        console.log("Les standing")
        console.log(this.response.standing);
      }); 
  }
 
}
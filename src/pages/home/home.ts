import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Services import

import { FootballDataApi } from '../../models/footballdataapi-global.models';
import { FootballdataApiService } from '../../services/footballdataapi.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   football: FootballDataApi = new FootballDataApi() ;

  constructor(public navCtrl: NavController, private footballdataApiService: FootballdataApiService) {
    this.footballdataApiService.getCompetitions()
    .then(footballFetched => {
      this.football = footballFetched;
      console.log(this.football);
      })
  }

}

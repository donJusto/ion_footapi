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
  //  football: FootballDataApi = new FootballDataApi() ;
   response: FootballDataApi[];

  constructor(public navCtrl: NavController, private footballdataApiService: FootballdataApiService) {

    //Récupérer compétitions
    this.footballdataApiService.getTables()
    .then(footballFetched => {
      this.response = footballFetched;
      console.log(this.response);
      // console.log(this.response[0].players);

    
  // //Récupérer équipes
  // this.footballdataApiService.getTeams()
  //   .then(footballFetched => {
  //     this.response = footballFetched;
  //     console.log(this.response);
  //     console.log(this.response[0].teams.idTeam);
    });
    
  
  }


}

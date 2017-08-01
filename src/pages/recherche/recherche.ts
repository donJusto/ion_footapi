import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Services import

import { FootballDataApi } from '../../models/footballdataapi-global.models';
import { FootballdataApiService } from '../../services/footballdataapi.service';




@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
export class RecherchePage {


  football: FootballDataApi = new FootballDataApi() ;
  response: FootballDataApi[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private footballdataApiService: FootballdataApiService) {
  //Récupérer compétitions
    this.footballdataApiService.getCompetitions()
      .then(footballFetched => {
      this.response = footballFetched;
      console.log(this.response);
  
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecherchePage');
  }

}

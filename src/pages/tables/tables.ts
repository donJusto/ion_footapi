import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//Services import

import { FootballDataApi } from '../../models/footballdataapi-global.models';
import { FootballdataApiService } from '../../services/footballdataapi.service';

@Component({
  selector: 'page-tables',
  templateUrl: 'tables.html',
})
export class TablesPage {

  football: FootballDataApi = new FootballDataApi() ;
  response: FootballDataApi[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private footballdataApiService: FootballdataApiService) {

    //Récupérer tables
    this.footballdataApiService.getTables()
      .then(footballFetched => {
      this.response = footballFetched;
      console.log(this.response);
      console.log(this.response[2].standing[3].points);
   
    });
    

}
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TablesPage');
   }



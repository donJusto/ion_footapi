import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//Services import

import { FootballDataApi } from '../../models/footballdataapi-global.models';
import { FootballdataApiService } from '../../services/footballdataapi.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  football: FootballDataApi = new FootballDataApi() ;
  response: FootballDataApi[];

  public event = {
    month: '1990-02-19',
  }

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private footballdataApiService: FootballdataApiService) {


      //Récupérer compétitions
    this.footballdataApiService.getTeams()
      .then(footballFetched => {
      this.response = footballFetched;
      console.log(this.response);
      // console.log(this.response[1].name);

  
    });
    

}

  }


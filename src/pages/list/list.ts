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
  //   // If we navigated to this page, we will have an item available as a nav param
  //   this.selectedItem = navParams.get('item');

  //   // Let's populate this page with some filler content for funzies
  //   this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
  //   'american-football', 'boat', 'bluetooth', 'build'];

  //   this.items = [];
  //   for (let i = 1; i < 11; i++) {
  //     this.items.push({
  //       title: 'Item ' + i,
  //       note: 'This is item #' + i,
  //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //     });
  //   }
  // }

  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(ListPage, {
  //     item: item
  //   });

      //Récupérer compétitions
    this.footballdataApiService.getTeams()
      .then(footballFetched => {
      this.response = footballFetched;
      console.log(this.response);
      console.log(this.response[1].count);

  
    });
    

}

  }


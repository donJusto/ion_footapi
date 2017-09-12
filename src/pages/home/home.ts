import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TablesPage } from '../../pages/tables/tables';
import { RecherchePage } from '../../pages/recherche/recherche';


//Services import

import { FootballDataApi } from '../../models/footballdataapi-global.models';
import { FootballdataApiService } from '../../services/footballdataapi.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    response: FootballDataApi;

  constructor(public navCtrl: NavController, private footballdataApiService: FootballdataApiService) {

//  //Récupérer compétitions
//     this.footballdataApiService.getTables()
//       .then(footballFetched => {
//       this.response = footballFetched;
//       console.log(this.response.standing);
//       // console.log(this.response[1].name);

  
//     });
    

}
private showTables(){
  this.navCtrl.push(TablesPage);
   }

private showRecherche(){
  this.navCtrl.push(RecherchePage);
   }

}

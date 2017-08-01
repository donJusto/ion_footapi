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

  constructor(public navCtrl: NavController, private footballdataApiService: FootballdataApiService) {

    //Récupérer compétitions

}
private showTables(){
  this.navCtrl.push(TablesPage);
   }

private showRecherche(){
  this.navCtrl.push(RecherchePage);
   }

}

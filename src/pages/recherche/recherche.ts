import { Component,ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//Services import

import { FootballDataApi } from '../../models/footballdataapi-global.models';
import { FootballdataApiService } from '../../services/footballdataapi.service';




@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
export class RecherchePage {

  defaultSearch: string = 'test';
  customPlaceholder: number = 2;
  defaultCancel: string = '';

  football: FootballDataApi = new FootballDataApi() ;
  response: FootballDataApi[];
  searchQuery: string = '';
  competSearch: string[];


  constructor(public navCtrl: NavController,private changeDetectorRef: ChangeDetectorRef, public navParams: NavParams, private footballdataApiService: FootballdataApiService) {
  //Récupérer compétitions
    this.footballdataApiService.getCompetitions()
      .then(footballFetched => {
      this.response = footballFetched;
      console.log(this.response);
  
    });


    this.initializeSearch();
}


initializeSearch() {
    this.competSearch = [
      'Amsterdam',
      'Bogota',
       ];
  }

   getResult(ev: any) {
    // Reset items back to all of the items
    this.initializeSearch();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.competSearch = this.competSearch.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RecherchePage');
  }

  onClearSearchbar(ev: any) {
    console.log('ionClear', ev);
  }

  onCancelSearchbar(ev: any) {
    console.log('ionCancel', ev);
  }

  triggerInput(ev: any) {
    console.log('ionInput', ev);
  }

  changedInput(ev: any) {
    console.log('ionChange', ev);
  }

  inputBlurred(ev: any) {
    console.log('ionBlur', ev);
  }

  inputFocused(ev: any) {
    console.log('ionFocus', ev);
  }

  ngAfterViewInit() {
    this.customPlaceholder = 33;
    this.defaultCancel = 'after view';
    this.changeDetectorRef.detectChanges();
  }

  changeValue() {
    this.defaultSearch = 'changed';
  }

}

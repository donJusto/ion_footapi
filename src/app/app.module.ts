import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TablesPage } from '../pages/tables/tables';
import { RecherchePage } from '../pages/recherche/recherche';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";


//Services

import {FootballdataApiService} from '../../src/services/footballdataapi.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TablesPage,
    RecherchePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TablesPage,
    RecherchePage
  ],
  providers: [
    FootballdataApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import localeItExtra from '@angular/common/locales/extra/it';

import { CategoryService } from './services/category.service';

registerLocaleData(localeIt, 'it-IT', localeItExtra);

import { HomePageModule } from './pages/home/home.module';
import { TutorialPageModule } from './pages/tutorial/tutorial.module';
import { MenuPageModule } from './pages/menu/menu.module';
import { CategoryPageModule } from './pages/category/category.page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    HomePageModule,
    TutorialPageModule,
    MenuPageModule,
    CategoryPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

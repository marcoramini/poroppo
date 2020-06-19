import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

import User from './models/User';
import { HomePage } from './pages/home/home.page';
import { TutorialPage } from './pages/tutorial/tutorial.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  rootPage: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      Storage.get({key: "user"}).then((data: any) => {
        console.log(data);
        if(data.value){
          User.set(JSON.parse(data.value));
          //User.tutorialSeen? this.router.navigate(['home']): this.router.navigate(['tutorial']);
          User.tutorialSeen? this.rootPage = HomePage: this.rootPage = TutorialPage;
        }else{
          this.router.navigate(['tutorial']);
        }
      }).catch((error:any) => {
        this.router.navigate(['tutorial']);
      })
    });
  }
}

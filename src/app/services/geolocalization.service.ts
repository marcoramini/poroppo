import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocalizationService {

  platforms: string[];

  constructor(platform: Platform) { 
    this.platforms = platform.platforms();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates;
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
    })
  }

  getPlatforms(){
    return this.platforms
  }
}

/// <reference types="@types/googlemaps" />
import { Component, AfterViewInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { GeolocalizationService } from '../../services/geolocalization.service';
import User from '../../models/User';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})

export class MapComponent implements AfterViewInit {
  @ViewChild('map_container', {static:false}) map_container: any;
  @Output() geoLocalized = new EventEmitter<boolean>();
  options: google.maps.MapOptions = {
    center: {lat:0, lng:0},
    zoom:1,
    mapTypeControl: false,
    styles: [
      {
        featureType: 'poi',
        stylers: [{visibility: 'off'}]
      },
    ],
    zoomControl: false,
    streetViewControl:false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    fullscreenControl:false,
  }
  map: google.maps.Map
  constructor(
    private geoService: GeolocalizationService,
    private alertController: AlertController) { }

  ngAfterViewInit() {
    this.map =new google.maps.Map(this.map_container.nativeElement, this.options);
    this.geoService.getCurrentPosition().then(data => {
      console.log(data);
      this.map.setCenter({lat:data.coords.latitude,lng:data.coords.longitude})
      this.map.setZoom(15);
      console.log("User geoLocal", User.geolocal);
      this.geoLocalized.emit(true);
      let userGeoLocalLatLng = new google.maps.LatLng({lat: User.geolocal.lat, lng:User.geolocal.lng})
      if(User.geolocal){
        let distance = google.maps.geometry.spherical.computeDistanceBetween(userGeoLocalLatLng,this.map.getCenter())
        console.log(distance);
        if(distance > 50){
          console.log("distanza superiore ai 50 metri");
          this.presentAlertDistance(data)
        }
      }else{
        User.geolocal = {lat: User.geolocal.lat, lng:User.geolocal.lng};
        User.save();  
        //this.geoLocalized.emit(true);
      }
    })
  }
  async presentAlertDistance(data){
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'La tua posizione è cambiata!<br> Vuoi cercare i negozi da questa posizione?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            User.geolocal = {lat:data.coords.latitude,lng:data.coords.longitude};
            User.save();
            this.geoLocalized.emit(true);
          }
        }
      ]
    });

    await alert.present();
  }
}

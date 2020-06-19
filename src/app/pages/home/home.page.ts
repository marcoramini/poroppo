import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MapComponent } from '../../components/map/map.component';
import User from '../../models/User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild('map', {static: false}) map: MapComponent;
  selectedCat: string = '';
  title: string = '';
  showMap: boolean = false;
  showMessageBox: boolean = false;
  showSegment: boolean = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  sendMessage(message){
    console.log(User.get(), message);
  }
  segmentChanged(e){
    console.log(e)
  }
  async onGeoLocalized(e){
    console.log(User);
  }

  onCatSelect(e){
    this.router.navigate(['home',{id:e.id, name: e.name, childs: e.childs}])
    //this.selectedCat = e.id
    //this.navCtr.navigateForward('home/' + e.id)
  }

  ngOnInit(){ 
    this.activatedRoute.params.subscribe((params) => {
      console.log('Params: ', params);
      if(params.childs == []){
        //this.showMap = true;
        this.showMessageBox = true;
        this.showSegment = true;
      }
      this.selectedCat = params.id
      this.title = params.name? params.name: 'Cosa ti serve oggi?'
      console.log(this.selectedCat)
    });
  }

}

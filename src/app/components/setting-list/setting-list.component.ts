import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.scss'],
})
export class SettingListComponent implements OnInit {
  @Output() expand = new EventEmitter<any>()
  @Output() redirect = new EventEmitter<any>()
  pageList: any[];
  pageSteck: any[] = [];
  rootPage: any = {
    name: 'Impostazioni',
    path: ''
  }
  pages: any[] = [
    {
      name: 'Account',
      path: 'account'
    },
    {
      name: 'Il tuo negozio',
      path: 'your-store'
    }
  ]
  constructor() { }
  getChilds(e, page){
    if(page.path != ""){
      this.redirect.emit(page);
    }else{
      this.expand.emit(this.pages)
      this.pageList = this.pages;
      this.pageSteck.push(this.rootPage)
    }
  }
  goBack(){
    console.log("goBack")
    if(this.pageSteck.length > 0){
      this.pageList = [this.rootPage]
      this.pageSteck = []
    }
  }
  ngOnInit() {
    this.pageList = [this.rootPage]
  }

}

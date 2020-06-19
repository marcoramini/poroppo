import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { SettingListComponent } from '../../components/setting-list/setting-list.component';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild('catList', {static: false}) catList: CategoryListComponent;
  @ViewChild('settingList', {static: false}) settingList: SettingListComponent;
  selectedCat: string = '';
  title: string = '';
  currentCategory: any;
  showCategoriesButton: boolean = true;
  showSettingsButton: boolean = true;

  show = false;
  //showBackButton: boolean = false;

  pages = [
    {
      path: 'more',
      name: 'Altro'
    }
  ]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menu: MenuController) { }

    showBackButton = () => {
      if(!this.catList || !this.settingList){
        return false
      }else{
        if(this.catList.categoryStack.length > 0 || this.settingList.pageSteck.length > 0){
          return true;
        }else{
          return false;
        }
      }
    }
    onRedirect(e){
      if(e){
        this.menu.close()
        this.router.navigate(['settings/' + e.path])
      }
    }

    onCatSelect(e){
      this.currentCategory = e;
      if(e.name){
        this.title = e.name;
        this.selectedCat = e.id;
        this.showSettingsButton = false;
      }else{
        this.title = "Menu";
        this.showSettingsButton = true;
      }
      //this.catList.cat = e.id;
    }
    onSettingClick(e){
      console.log("onSettingClick", e)
      this.title = "Impostazioni"
      this.showCategoriesButton = false;     
    }
    goBack(){
      console.log(this.catList.categoryStack.length, this.settingList.pageSteck.length)
      if(this.catList.categoryStack.length > 0){
        this.catList.goBack()
      }
      if(this.settingList.pageSteck.length > 0){
        this.settingList.goBack()
        this.showCategoriesButton = true;
        this.title = "Menu"
      }
    }
    onEndSubs(e){
      if(e){
        this.menu.close()
        this.router.navigate(['category',{id:e.id, name: e.name, childs: e.childs}])
      } 
    }
    goTo(page){
      console.log(page)
      this.router.navigate([page])
    }
    ngOnInit(){ 
      this.activatedRoute.params.subscribe((params) => {
        //console.log('Params: ', params);
        if(params.childs == []){
          console.log("FINE")
        }
        this.selectedCat = params.id
        this.title = params.name? params.name: 'Menu'
        //console.log(this.selectedCat)
      });
    }

}

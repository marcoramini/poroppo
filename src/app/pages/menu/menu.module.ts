import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { CategoryListModule } from '../../components/category-list/category-list.component.module';
import { SettingListModule } from '../../components/setting-list/setting-list.component.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    CategoryListModule,
    SettingListModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}

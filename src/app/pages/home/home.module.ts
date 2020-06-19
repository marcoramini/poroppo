import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { MapComponentModule } from '../../components/map/map.component.module';
import { CategoryListModule } from '../../components/category-list/category-list.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MapComponentModule,
    CategoryListModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

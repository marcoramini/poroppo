import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverCategoryPageRoutingModule } from './popover-category-routing.module';

import { PopoverCategoryPage } from './popover-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverCategoryPageRoutingModule
  ],
  declarations: [PopoverCategoryPage]
})
export class PopoverCategoryPageModule {}

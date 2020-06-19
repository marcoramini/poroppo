import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CategoryListComponent } from './category-list.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [CategoryListComponent],
  exports: [CategoryListComponent]
})
export class CategoryListModule {}
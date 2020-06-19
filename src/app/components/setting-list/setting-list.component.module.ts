import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SettingListComponent } from './setting-list.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [SettingListComponent],
  exports: [SettingListComponent]
})
export class SettingListModule {}
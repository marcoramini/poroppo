import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MapComponent } from './map.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapComponentModule {}
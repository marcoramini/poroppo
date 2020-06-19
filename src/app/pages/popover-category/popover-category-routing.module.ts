import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverCategoryPage } from './popover-category.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverCategoryPageRoutingModule {}

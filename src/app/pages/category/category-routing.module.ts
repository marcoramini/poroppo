import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryPage } from './category.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryPage,
  },
  {
    path: 'popover-category',
    loadChildren: () => import('../popover-category/popover-category.module').then( m => m.PopoverCategoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}

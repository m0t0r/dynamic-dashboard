import { NgModule } from '@angular/core';
import { ItemsListPageComponent } from './items-list-page/items-list-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './items-list.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ItemsListPageComponent],
  declarations: [ItemsListPageComponent]
})
export class ItemsListModule { }

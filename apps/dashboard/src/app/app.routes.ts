import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard/list'
  },
  {
    path: 'dashboard',
    children: [
      {
        path: 'list',
        loadChildren: './items/list/items-list.module#ItemsListModule'
      }
    ]
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  }
];

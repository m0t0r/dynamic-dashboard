import { NgModule } from '@angular/core';

import { SettingsPageComponent } from './settings-page/settings-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './settings.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [SettingsPageComponent],
  declarations: [SettingsPageComponent]
})
export class SettingsModule { }

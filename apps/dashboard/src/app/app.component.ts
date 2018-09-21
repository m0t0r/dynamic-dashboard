import { Component } from '@angular/core';

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuLinks = [
    { label: 'Home', icon: 'home', href: '/dashboard/list' },
    { label: 'Settings', icon: 'settings', href: '/settings' }
  ]
}

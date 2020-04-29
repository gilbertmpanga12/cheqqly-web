import { Component } from '@angular/core';
declare const window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    window.Intercom("boot", {
      app_id: "iws8kxie"
    });
  }
  getDepth(val) {
    return val.activatedRouteData['state'];
  }

}

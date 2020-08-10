import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  debugMenuActive: boolean = false;
  title = 'tutoring-manager';

  toggleDebugMenu(): void {
    this.debugMenuActive = !this.debugMenuActive;
  }


}

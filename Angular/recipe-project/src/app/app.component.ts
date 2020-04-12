import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  show: boolean;
  
  onToggleFired(toggle: boolean) {
    this.show = toggle;
  }

}

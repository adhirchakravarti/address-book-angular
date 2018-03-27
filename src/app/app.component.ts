import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @Output() searchTerm = new EventEmitter<string>();

  passOnSearchTerm(event) {
    console.log(event);
  }
}

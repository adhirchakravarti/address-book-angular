import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  @Output() sendModalClose = new EventEmitter<boolean>;

  onCancel(event) {
    this.sendModalClose.emit(false);
  }
}

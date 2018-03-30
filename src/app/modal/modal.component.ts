import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalShowService } from '../modal-show.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() importedContact;
  @Input() modalShow;
  // @Input() backDropShow;
  @Output() sendModalClose = new EventEmitter<boolean>();

  closeModalHandler(event) {
    console.log(event);
    this.sendModalClose.emit(false);
  }

}

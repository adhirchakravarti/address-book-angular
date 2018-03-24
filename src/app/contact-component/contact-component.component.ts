import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {

  @Input() contact;
  @Input() index;
  @Output() contactToRemove = new EventEmitter<{name: string, phone: string, email: string}>();
  modalShow = false;
  backDropShow = false;

  deleteContact(event) {
    // console.log(this.index);
    this.contactToRemove.emit(this.contact);
  }

  showModalHandler(event) {
    // this.backDropShow = true;
    this.modalShow = true;
  }

  closeModalHandler(negativeFeedback) {
    // this.backDropShow = false;
    this.modalShow = negativeFeedback;
  }

}

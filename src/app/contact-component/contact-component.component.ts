import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { ModalShowService } from '../modal-show.service';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {

  @Input() contact;
  @Input() index;
  // @Output() contactToRemove = new EventEmitter<{name: string, phone: string, email: string}>(); Deprecated, using Services.
  modalShow = false;
  modalToShow: ModalShowService;

  contactServObj: ContactDataService;

  constructor(contactServObj: ContactDataService) {
    this.contactServObj = contactServObj;

  }

  deleteContact(event) {
    // console.log(this.index);
    // this.contactToRemove.emit(this.contact);
    this.contactServObj.deleteContactHandler(this.contact, this.index);
  }

  showModalHandler(event) {
    // this.backDropShow = true;
    this.modalShow = true;
    // this.modalToShow.showModalHandler();
  }

  closeModalHandler(negativeFeedback) {
    // this.backDropShow = false;
    this.modalShow = negativeFeedback;
  }

}

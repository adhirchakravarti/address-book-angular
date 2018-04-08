import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { ModalShowService } from '../modal-show.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {

  @Input() contact;
  @Input() index;
  wasClicked = false;
  selectedContact;
  // @Output() contactToRemove = new EventEmitter<{name: string, phone: string, email: string}>(); Deprecated, using Services
  modalServObj: ModalShowService;
  modalShow = false;
  contactServObj: ContactDataService;
  // modalShow = this.modalServObj.getModalStatus();

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

  onSelected() {
    console.log(`contact ${this.contact.name} clicked!`);
    this.wasClicked = this.wasClicked ? false : true;
    console.log(this.wasClicked);
    if (this.wasClicked) {
      this.selectedContact = this.contact;
    } else if (!this.wasClicked) {
      this.selectedContact = null;
    }
    this.contactServObj.contactSelected.emit(this.contact);
    this.contactServObj.selectedContactVisible.emit(this.wasClicked);
  }

}

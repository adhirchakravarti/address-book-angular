import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { ModalShowService } from '../modal-show.service';
import { Contact } from '../contact.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponent implements OnChanges {

  @Input() contact;
  @Input() index;
  wasClicked = false;
  selectedContact;

  modalServObj: ModalShowService; // not yet implemented - service for the modal
  modalShow = false;
  contactServObj: ContactDataService;
  // modalShow = this.modalServObj.getModalStatus();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // this.contact = changes.contact.currentValue;
    this.index = changes.index.currentValue;
  }

  constructor(contactServObj: ContactDataService, private router: Router, private route: ActivatedRoute) {
    this.contactServObj = contactServObj;
  }

  deleteContact(event) {
    // console.log(this.index);
    // this.contactToRemove.emit(this.contact);
    this.contactServObj.deleteContactHandler(this.contact, this.index);
  }

  showModalHandler(event) {
    // this.backDropShow = true;
    // this.modalShow = true;
    this.router.navigate(['/contactList', this.index, 'edit']);
    // this.modalToShow.showModalHandler();
  }

  closeModalHandler(negativeFeedback) {
    // this.backDropShow = false;
    this.modalShow = negativeFeedback;
  }

  onSelected() {
    // console.log(`contact ${this.contact.name} clicked!`);
    this.wasClicked = this.wasClicked ? false : true;
    // console.log(this.wasClicked);
    if (this.wasClicked) {
      this.selectedContact = this.contact;
    } else if (!this.wasClicked) {
      this.selectedContact = null;
    }
    this.contactServObj.contactSelected.emit(this.contact);
    this.contactServObj.selectedContactVisible.emit(this.wasClicked);
  }

}

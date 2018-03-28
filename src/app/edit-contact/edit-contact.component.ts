import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ContactDataService } from '../ContactData.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @Output() sendModalClose = new EventEmitter<boolean>();
  @Input() contact;
  index: number;
  editedContact = {name: '', phone: '', email: ''};

  contactServObj: ContactDataService;

  constructor(contactServObj: ContactDataService) {
    this.contactServObj = contactServObj;
  }
  ngOnInit() {
    // this.contactList = this.contactServObj.getContacts();
  }

  onCancel(event) {
    this.sendModalClose.emit(false);
  }

  onSave(event) {
    const index = this.contactServObj.findContactIndex(this.contact);
    // this.contactServObj.editContactHandler(index);
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm.value);
    this.editedContact.name = submittedForm.value.name;
    this.editedContact.phone = submittedForm.value.phone;
    this.editedContact.email = submittedForm.value.email;
    console.log(this.editedContact);
    this.index = this.contactServObj.findContactIndex(this.contact);
    this.contactServObj.editContactHandler(this.index, this.editedContact);
  }
}

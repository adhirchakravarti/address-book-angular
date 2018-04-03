import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
import { ModalShowService } from '../modal-show.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @Output() sendModalClose = new EventEmitter<boolean>();
  @Input() contact;
  index: number;
  name = '';
  phone = '';
  email = '';

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

  // onSave(event) {
  //   this.index = this.contactServObj.findContactIndex(this.contact);
  //   // this.contactServObj.editContactHandler(index);
  //   const contactToSave = {name: this.name, phone: this.phone, email: this.email};
  //   console.log(contactToSave);
  //   this.contactServObj.editContactHandler(contactToSave, this.index);
  // }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    // console.log(submittedForm.value);
    const contactToSave = {name: submittedForm.value.name, phone: submittedForm.value.phone, email: submittedForm.value.email};
    console.log(contactToSave);
    this.index = this.contactServObj.findContactIndex(this.contact);
    this.contactServObj.editContactHandler(contactToSave, this.index);
  }
}

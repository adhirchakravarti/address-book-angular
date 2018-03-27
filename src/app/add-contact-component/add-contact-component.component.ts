import { Component, OnInit, Input, Output } from '@angular/core';
import { ContactDataService } from '../ContactData.service';

@Component({
  selector: 'app-add-contact-component',
  templateUrl: './add-contact-component.component.html',
  styleUrls: ['./add-contact-component.component.css']
})
export class AddContactComponentComponent {

  name = '';
  phone = '';
  email = '';
  newContact = {name: '', phone: '', email: ''};

  contactServObj: ContactDataService;

  constructor(contactServObj: ContactDataService) {
    this.contactServObj = contactServObj;
  }

  onAddContact(event) {
    if (this.name !== '' && this.phone !== '' && this.email !== '') {
      this.newContact.name = this.name;
      this.newContact.phone = this.phone;
      this.newContact.email = this.email;
    }
    console.log(this.newContact);
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    if (submittedForm.value.name !== '' && submittedForm.value.phone !== '' && submittedForm.value.email !== '') {
      this.contactServObj.addContactHandler(submittedForm.value.name, submittedForm.value.phone, submittedForm.value.email);
      this.name = '';
      this.phone = '';
      this.email = '';
    }
  }

}

import { Component, OnInit, Input, Output } from '@angular/core';

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

  onAddContact(event) {
    if (this.name !== '' && this.phone !== '' && this.email !== '') {
      this.newContact.name = this.name;
      this.newContact.phone = this.phone;
      this.newContact.email = this.email;
    }
    console.log(this.newContact);
  }

}

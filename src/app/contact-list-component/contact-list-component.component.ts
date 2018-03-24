import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list-component.component.html',
  styleUrls: ['./contact-list-component.component.css']
})
export class ContactListComponentComponent {

  // contactList: Array[];
  contactList = [
    {name: 'Adhir', phone: '777164488', email: 'adhir@protonmail.com'},
    {name: 'John', phone: '787345345', email: 'jdoe@gmail.com'},
    {name: 'Jack', phone: '977123123', email: 'jsmith@yahoo.co.uk'}
  ];

  onAddContact(newContact) {
    if (newContact.name !== '' && newContact.phone !== '' && newContact.email !== '') {
      this.contactList.push(newContact);
    }
  }

  deleteContactHandler(contact, index) {
    console.log(index); // passed from child component (contact) so as to use the index to change the contactList array
    const findContact = this.contactList.findIndex((el, i) => {
      return contact.name === el.name;
    });
    console.log(findContact);
    this.contactList.splice(findContact, 1);
  }

}

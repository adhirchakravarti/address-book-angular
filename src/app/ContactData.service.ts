import { EventEmitter } from '@angular/core';
import { Contact } from './contact.model';

export class ContactDataService {
  private contactList: Contact[] = [];
  public searchQuery: string; // deprecated
  queryString = new EventEmitter<string>();
  contactSelected = new EventEmitter<object>();
  selectedContactVisible = new EventEmitter<boolean>();

  // Deprecated
  // getSearchQuery() {
  //   if (this.searchQuery === '') {
  //     return;
  //   } else {
  //     return this.searchQuery;
  //   }
  // }

  getContacts = () => {
    return this.contactList;
  }

  sortContactHandler = (value) => {
    // contacts.sort(compareValues('phone', 'asc'))
    console.log(value);
    const field = value === 'default' ? null : value;
    if (this.contactList.length > 1 && field !== null) {
      const tempContactList: Contact[] = this.contactList.slice();
      tempContactList.sort(this.compareValues(field, 'asc'));
      console.log(tempContactList);
      this.contactList = tempContactList;
    }
  }

  compareValues = (key, order= 'asc') => {
    return function(a, b) {
        if (!a.hasOwnProperty(key) ||
          !b.hasOwnProperty(key)) {
          return 0;
        }
        const varA = (typeof a[key] === 'string') ?
          a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
          b[key].toUpperCase() : b[key];
        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          (order === 'desc') ?
          (comparison * -1) : comparison
        );
    };
  }

  // findExistingContact(el, i){
  //   let field = '';
  //   if (name === el.name) {
  //     field = 'name';
  //   } else if (phone === el.phone) {
  //     field = 'phone';
  //   } else if (email === el.email) {
  //     field = 'email';
  //   }
  // }

  addContactHandler = (sentContact: Contact) => {
    // if (newContact.name !== '' && newContact.phone !== '' && newContact.email !== '') {
    //   this.contactList.push(newContact);
    // }
    let field = '';
    const findExistingContact = this.contactList.findIndex((el, i) => {
      // return (name === el.name) || (phone === el.phone) || (email === el.email);
      if (sentContact.name === el.name) {
        field = 'name';
        return true;
      } else if (sentContact.phone === el.phone) {
        field = 'phone';
        return true;
      } else if (sentContact.email === el.email) {
        field = 'email';
        return true;
      }
      return false;
    });
    console.log(findExistingContact);
    if (findExistingContact === -1) {
      const newContact: Contact = sentContact;
      this.contactList.push(newContact);
    } else {
      alert(`Contact with field ${field} already exists!`);
    }
  }

  deleteContactHandler = (contact, index) => {
    console.log(index); // passed from child component (contact) so as to use the index to change the contactList array
    this.contactList.splice(index, 1);
  }

  editContactHandler = (contact, index) => {
    console.log(contact);
    this.contactList.splice(index, 1, contact);
    console.log(this.contactList);
  }

  findContactIndex = (contact) => {
    const findContact = this.contactList.findIndex((el, i) => {
      return contact.name === el.name;
    });
    console.log(findContact);
    return findContact;
  }
}

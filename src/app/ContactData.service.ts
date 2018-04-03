export class ContactDataService {
  private contactList = [];
  public searchQuery: string;

  getSearchQuery() {
    if (this.searchQuery === '') {
      return;
    } else {
      return this.searchQuery;
    }
  }

  getContacts(queryObj = '') {
    if (queryObj === '') {
      return this.contactList;
    } else {
      const foundContacts = [];
    const results = [];
    this.contactList.forEach((el, index) => {
      const myRe = new RegExp(queryObj, 'gi');
      if ((el.name.search(myRe) !== -1) || (el.phone.search(myRe) !== -1) || (el.email.search(myRe) !== -1)) {
        results.push(el.name.match(myRe));
        foundContacts.push(el);
      }
    });
    console.log(results);
    console.log('FoundContacts: ', foundContacts);
    return foundContacts;
    }
  }

  sortContactHandler = (value) => {
    // contacts.sort(compareValues('phone', 'asc'))
    console.log(value);
    const field = value === 'default' ? null : value;
    if (this.contactList.length > 1 && field !== null) {
      this.contactList.sort(this.compareValues(field, 'asc'));
      console.log(this.contactList);
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


  addContactHandler(name, phone, email) {
    // if (newContact.name !== '' && newContact.phone !== '' && newContact.email !== '') {
    //   this.contactList.push(newContact);
    // }
    const findExistingContact = this.contactList.findIndex((el, i) => {
      return (name === el.name) || (phone === el.phone) || (email === el.email);
    });
    console.log(findExistingContact);
    if (findExistingContact === -1) {
      const newContact = {name: name, phone: phone, email: email};
      this.contactList.push(newContact);
    } else {
      alert('Contact already exists!');
    }
  }

  deleteContactHandler(contact, index) {
    console.log(index); // passed from child component (contact) so as to use the index to change the contactList array
    this.contactList.splice(index, 1);
  }

  editContactHandler(contact, index) {
    this.contactList.splice(index, 1, contact);
  }

  findContactIndex(contact) {
    const findContact = this.contactList.findIndex((el, i) => {
      return contact.name === el.name;
    });
    console.log(findContact);
    return findContact;
  }
}

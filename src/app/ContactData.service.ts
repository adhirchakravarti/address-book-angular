export class ContactDataService {
  private contactList = [
    {name: 'Adhir', phone: '777164488', email: 'adhir@protonmail.com'},
    {name: 'John', phone: '787345345', email: 'jdoe@gmail.com'},
    {name: 'Jack', phone: '977123123', email: 'jsmith@yahoo.co.uk'}
  ];

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

  displayedContacts(queryObj) {
    console.log('Query object: ', queryObj);
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
    const findContact = this.contactList.findIndex((el, i) => {
      return contact.name === el.name;
    });
    console.log(findContact);
    this.contactList.splice(findContact, 1);
  }
}

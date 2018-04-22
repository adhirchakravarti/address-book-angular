import { Component, OnInit, Input, Output,
   OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { ContactDataService } from '../ContactData.service';
// import { FilterPipe } from '../../../src/pipes';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list-component.component.html',
  styleUrls: ['./contact-list-component.component.css']
})
export class ContactListComponent implements DoCheck, OnInit {

    contactList: Contact[] = [];
    searchQuery: string; // alternate subscribed data from contactDataService
    // queryString: string; // from contactDataService
    oldContactList: Contact[] = [];

  contactServObj: ContactDataService;


  constructor(contactServObj: ContactDataService) {
    this.contactServObj = contactServObj;

    // this.searchableList = ['name', 'phone', 'email'];
  }

  // Only used to detect changes to input properties
  // ngOnChanges(changes: SimpleChanges) {
  //   // this.queryString = this.contactServObj.searchQuery;
  //   console.log('ngOnChanges called!');
  //   console.log(changes);
  //   for (const key of Object.keys(changes)) {
  //       console.log(`${key} changed.Current: ${changes[key].currentValue}.Previous: ${changes[key].previousValue}`);
  //     }
  // }

  ngOnInit() {
    this.contactList = this.contactServObj.getContacts();
    // console.log('ngOnInit called!');
    this.contactServObj.queryString.subscribe((query: string) => {
      this.searchQuery = query;
    });
    this.oldContactList = this.contactList;
    // this.contactList = this.contactServObj.contactListChanged.subscribe(
    //   (contacts: Contact[]) => {
    //     this.contactList = contacts;
    //   }
    // );
  }

  passedOnSearchTerm(event) {
    console.log(event);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
    // console.log('old', this.oldContactList);
    // console.log('new', this.contactList);
    this.contactList = this.contactServObj.getContacts();
    // find a different way to check existing contact list with new contact list
    // for (let i = 0; i < this.contactList.length; i++) {
    //   if (this.contactList[i].name !== this.oldContactList[i].name ||
    //       this.contactList[i].phone !== this.oldContactList[i].phone ||
    //       this.contactList[i].email !== this.oldContactList[i].email ) {
    //         this.contactList = this.contactServObj.getContacts();
    //   }
    // }
  }

  // ngAfterContentInit() {
  //   // console.log('ngAfterContentInit called!');
  // }

  // ngAfterContentChecked() {
  //   // console.log('ngAfterContentChecked called!');
  // }

  // ngAfterViewInit() {
  //   // console.log('ngAfterViewInit called!');
  // }
  // ngAfterViewChecked() {
  //   // console.log('ngAfterViewChecked called!');
  // }

  // Deprecated in favor of Services.
  // deleteContactHandler(contact, index) {
  //   console.log(index); // passed from child component (contact) so as to use the index to change the contactList array
  //   const findContact = this.contactList.findIndex((el, i) => {
  //     return contact.name === el.name;
  //   });
  //   console.log(findContact);
  //   this.contactList.splice(findContact, 1);
  // }

}

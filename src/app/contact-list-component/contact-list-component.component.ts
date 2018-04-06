import { Component, OnInit, Input, Output,
   OnChanges, DoCheck, AfterContentChecked,
   AfterContentInit, AfterViewInit,
   AfterViewChecked,
   SimpleChanges} from '@angular/core';
import { ContactDataService } from '../ContactData.service';
// import { FilterPipe } from '../../../src/pipes';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list-component.component.html',
  styleUrls: ['./contact-list-component.component.css']
})
export class ContactListComponentComponent implements OnInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked {

    contactList = [];
    searchQuery: string; // alternate subscribed data from contactDataService
    // queryString: string; // from contactDataService

  // contactList is now managed in the ContactData Service.
  // contactList = [
  //   {name: 'Adhir', phone: '777164488', email: 'adhir@protonmail.com'},
  //   {name: 'John', phone: '787345345', email: 'jdoe@gmail.com'},
  //   {name: 'Jack', phone: '977123123', email: 'jsmith@yahoo.co.uk'}
  // ];

  contactServObj: ContactDataService;


  constructor(contactServObj: ContactDataService) {
    this.contactServObj = contactServObj;

    // this.searchableList = ['name', 'phone', 'email'];
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.queryString = this.contactServObj.searchQuery;
    console.log('ngOnChanges called!');
    for (const key of Object.keys(changes)) {
        console.log(`${key} changed.Current: ${changes[key].currentValue}.Previous: ${changes[key].previousValue}`);
      }
  }

  ngOnInit() {
    this.contactList = this.contactServObj.getContacts();
    // console.log('ngOnInit called!');
    this.contactServObj.queryString.subscribe((query: string) => {
      this.searchQuery = query;
    });
  }

  passedOnSearchTerm(event) {
    console.log(event);
  }

  ngDoCheck() {
    // console.log('ngDoCheck called!');
    // this.queryString = this.contactServObj.getSearchQuery();
    // console.log(this.queryString);
    // console.log(this.searchQuery);
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked called!');
  }
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

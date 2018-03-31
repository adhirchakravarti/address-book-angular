import { Component, OnInit, Input, Output,
   OnChanges, DoCheck, AfterContentChecked,
   AfterContentInit, AfterViewInit,
   AfterViewChecked } from '@angular/core';
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
    @Input() searchQuery; // from app component
    queryString: string; // from contactDataService
    // queryString = this.searchQuery;
    // searchableList = [];
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

  ngOnInit() {
    this.contactList = this.contactServObj.getContacts();
    // console.log('ngOnInit called!');
  }

  passedOnSearchTerm(event) {
    console.log(event);
  }

  ngOnChanges() {
    // this.queryString = this.contactServObj.searchQuery;
    // console.log('ngOnChanges called!');
  }

  ngDoCheck() {
    // console.log('ngDoCheck called!');
    // console.log(this.searchQuery);
    this.queryString = this.contactServObj.getSearchQuery();
    // console.log(this.queryString);
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
